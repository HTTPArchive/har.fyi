---
title: Getting started accessing the HTTP Archive with BigQuery
description: Using HTTP Archive on BigQuery for the first time
---

The [HTTP Archive](https://httparchive.org) is an open source project that tracks how the web is built. Historical data is provided to show how the web is constantly evolving, and the project is frequently used for research by the web community, scholars and industry leaders. If you are interested in digging into the HTTP Archive and are not sure where to start, then this guide should help you get started quickly.

There are over 1 million pages tracked on desktop and emulated mobile in the most recent HTTP Archive data, and the historical data goes back to 2010. While the HTTP Archive website makes a lot of information available via [curated reports](https://httparchive.org/reports), analyzing the raw data is a powerful way of answering your questions about the web.

All of the data collected by the HTTP Archive is available via [Google BigQuery](https://cloud.google.com/bigquery/). This makes analyzing the data easy because all of the storage and indexing is taken care of for you. And with the processing power behind BigQuery, even some of the most complex queries runs in seconds.

This document is an update to [Ilya Grigorik's 2013 introduction](https://www.igvita.com/2013/06/20/http-archive-bigquery-web-performance-answers/), and walks you through everything you need to get started accessing BigQuery and analyzing the data.

## Setting up BigQuery to Access the HTTP Archive

In order to access the HTTP Archive via BigQuery, you'll need a Google account. To document this process for new visitors, this example uses a new Google account that has never logged into any Google Cloud services.

1. Navigate to the [Google Cloud Projects Page](https://console.cloud.google.com/start) and log in with your Google account if prompted. If this is your first time accessing Google Cloud, you may be prompted to accept the terms of service. Once you are logged in, you'll see a page like this:

    ![Google Cloud Welcome](./google-cloud-welcome.png)

2. Click **Select a project** and then **New Project**. This takes you to a New Project page.

    ![Google Cloud select project](./google-cloud-select-project.png)

3. Give your project a name and then click the **Create** button.

    ![Create a Project](./google-cloud-create-new-project.png)

4. Optional: Enable Billing by clicking on the Billing menu item and adding your billing information.

    :::note
    BigQuery has a [free tier](https://cloud.google.com/bigquery/pricing#free-tier) that you can use to get started without enabling billing. At the time of this writing, the free tier allows 10GB of storage and 1TB of data processing per month. Google also provides a [$300 credit for new accounts](https://cloud.google.com/free/docs/frequently-asked-questions#free-trial).
    :::

5. Navigate to the [BigQuery console](https://console.cloud.google.com/bigquery) where you should see your project, with no data.

6. In order to add the HTTP Archive tables to your project, click on the **+ Add** button on top of the Explorer sidebar and choose the **Star a project by name** option from the side menu.

7. Type in `httparchive` (case-sensitive) and click **STAR**.

8. You should now see the HTTP Archive data set pinned:

    ![BigQuery HTTPArchive pinned](./bigquery-httparchive-dataset-pinned.png)

9. Let's run a quick sample query to confirm access is all working. Navigate to the `all` dataset and select the `pages` table:

    ![BigQuery summary_pages tables](./bigquery-summary_pages.png)

10. Click on the **QUERY** button and select **In a new tab**:

    ![BigQuery Query in a new tab](./bigquery-query-in-a-new-tab.png)

11. Change the query to take a small sample of the table (e.g. `SELECT *`), click the `RUN` button and you should see the results of your query.

    :::danger
    The size of the tables you query are important because BigQuery is billed based on the number of processed data. There is 1TB of processed data included in the free tier, so running a full scan query on one of the larger tables can easily eat up your quota. This is where it becomes important to design queries that process only the data you wish to explore.

    HTTP Archive collecting metadata from millions of websites each month, an the dataset is _extremely large_—multiple petabytes.

    See the guide on [minimizing query costs](/guides/minimizing-costs/) to learn more.

    Also, take a moment setting up [cost controls](https://cloud.google.com/bigquery/docs/custom-quotas) to be informed of the costs inqurred throughout the month.
    :::

    ```sql
    SELECT *
    FROM `httparchive.all.pages` TABLESAMPLE SYSTEM (0.00001 PERCENT)
    WHERE date = "2024-05-01"
    ```

    ![BigQuery run a sample query](./bigquery-run-sample-query.png)

In the next section, we explore the structure of these tables so you can start digging in!

## Understanding how the tables are structured

So, now you have access! But what do you have access to?

The table below outlines what some of the different tables include. You'll find page views and HTTP requests. There are also JSON encoded HAR files for pages, requests, lighthouse reports and even response bodies!

Table | Monthly Size | Monthly Rows | History Since
--|--|--|--
summary_pages.* | ~16 GB | Desktop: ~13M, Mobile: ~16 M | Desktop: Nov 2010, Mobile: May 2011
summary_requests.* | ~1.9 TB | Desktop: ~1.3B, Mobile: ~1.5B | Desktop: Nov 2010, Mobile: May 2011
pages.* | ~3.1 TB | Desktop: ~13 M, Mobile: ~16 M | Jan 2016
requests.* | ~12.5 TB | Desktop: ~1.3 B, Mobile: ~1.5 B | Jan 2016
response_bodies.* | ~48 TB | Desktop: ~647 M, Mobile: ~780 M | Jan 2016
all.pages | ~42 TB | Desktop: ~24M, Mobile: ~30M | Mar 2022
all.requests | ~231 TB | Desktop: ~2.4B, Mobile: ~2.7B | Mar 2022
lighthouse.* | ~200 GB | Desktop: 12M, Mobile: ~16M | June 2017

:::note
If table names are mentioned as a wildcard, then the table names all follow the format `yyyy_mm_dd_desktop` and `yyyy_mm_dd_mobile`.
Size and row are rounded counts as of May 2024.
:::

In order to understand what each of these tables contain, you can click on the table name and view the details. For example, if you expand the `all` dataset and click on the `pages` table you can see the schema. Clicking **Details** tells you some information about the table, such as its size and the number of rows. Clicking **Preview** shows an example of some data from the table.

![Table Preview](./exploring_summary_pages_tables.png)

Some of the types of tables you'll find useful when getting started are described below.

### HAR Tables

The HTTP Archive stores detailed information about each page load in [HAR (HTTP Archive) files](https://en.wikipedia.org/wiki/.har). Each HAR file is JSON formatted and contains detailed performance data about a web page. The [specification for this format](https://w3c.github.io/web-performance/specs/HAR/Overview.html) is produced by the Web Performance Working Group of the W3C. The HTTP Archive splits each HAR file into multiple BigQuery tables, which are described below.

* [`httparchive.all.pages`](/reference/tables/pages/):

  * HAR extract for each page url.
  * This table is very large (~938TB as of Jun 2024).

* [`httparchive.all.requests`](/reference/tables/requests/):

  * HAR extract for each resource.
  * This table is very large (4.97PB as of Jun 2024)

* `httparchive.response_bodies.YYYY_MM_DD_CLIENT`:

  * Tables are **OUTDATED**, please use the [`response_body` column](/reference/tables/requests/#response_body) instead.
  * HAR extract containing response bodies for each request.
  * Table contains a document url, resource url and a JSON-encoded HAR extract containing the first 2MB of each response body.
  * Payloads are truncated at 2MB, and there is a column to indicate whether the payload was truncated.
  * These tables are extremely large (2.5TB as of Aug 2018).

* `httparchive.lighthouse.YYYY_MM_DD_CLIENT`:

  * Tables are **OUTDATED**, please use the [`lighthouse` column](/reference/tables/pages/#lighthouse) instead.
  * Results from a [Lighthouse](https://developers.google.com/web/tools/lighthouse/) audit of a page.
  * Table contains a url, and a JSON-encoded copy of the lighthouse report.
  * Lighthouse was intially only run on mobile, but as of May 2021 also runs as part of the desktop crawl.
  * These tables are very large (2.3 TB for Mobile only as of May 2021)

* `httparchive.pages.YYYY_MM_DD_CLIENT`:

  * Tables are **OUTDATED**, please use the [`httparchive.all.pages` tables](/reference/tables/requests/) instead.
  * HAR extract for each page url.
  * Table contains a url and a JSON-encoded HAR file for the document.
  * These tables are large (~13GB as of Aug 2018).

* `httparchive.requests.YYYY_MM_DD_CLIENT`:

  * Tables are **OUTDATED**, please use the [`httparchive.all.requests` tables](/reference/tables/requests/) instead.
  * HAR extract for each resource.
  * Table contains a document url, resource url and a JSON-encoded HAR extract for each resource.
  * These tables are very large (810GB as of Jun 2024)

### Summary Tables

* `httparchive.summary_pages.YYYY_MM_DD_CLIENT`:

  * Tables are **OUTDATED**, please use the [`summary` column](/reference/tables/pages/#summary) instead.
  * Each row contains details about a single page including timings, # of requests, types of requests and sizes.
  * Information about the page load such # of domains, redirects, errors, https requests, CDN, etc.
  * Summary of different caching parameters.
  * Each page URL is associated with a "pageid".

* `httparchive.summary_requests.YYYY_MM_DD_CLIENT`:

  * Tables are **OUTDATED**, please use the [`summary` column](/reference/tables/requests/#summary) instead.
  * Every single object loaded by all of the pages.
  * Each object has a requestid and a pageid.  The pageid can be used to JOIN the corresponding summary_pages table.
  * Information about the object, and how it was loaded.
  * Contains some response headers for each object.

### Other Tables

* [`httparchive.blink_features.usage`](https://console.cloud.google.com/bigquery?ws=!1m5!1m4!4m3!1shttparchive!2sblink_features!3susage):

  * Summary information about the [Blink features](https://chromestatus.com/roadmap) detected on each page.
  * Table contains the num_urls, the pct_urls and sample urls for each feature.
  * This data is also available in the HAR of the `pages` table but is extracted into the `blink_features` tables for easy lookup.
  * This table is 944 MB as of May 2024.

* `httparchive.technologies.YYYY_MM_DD_CLIENT`:

  * Tables are **OUTDATED**, please use the [`technologies` column](/reference/tables/pages/#technologies) instead.
  * Information about the technologies detected on each page (using [Wappalyser rules](https://github.com/HTTPArchive/wappalyzer)).
  * Table contains a url and a list of names and categories for technologies detected on the page.
  * This data is also available in the HAR of the `pages` table but is extracted into the `technologies` table for easy lookup.
  * These tables are small (15 GB as of May 2024).

* `httparchive.blink_features.features`:

  * Tables are **OUTDATED**, please use the [`features` column](/reference/tables/pages/#features) instead.
  * Information about the [Blink features](https://chromestatus.com/roadmap) detected on each page. See also the summary `blink_features.usage` table below.
  * Table contains a url and Blink feature names detected on the page.
  * This data is also available in the HAR of the `pages` table but is extracted into the `blink_features` tables for easy lookup.
  * This table is ~300GB per single platform as of May 2024.

## Some Example Queries to Get Started Exploring the Data

The [HTTP Archive Discuss section](https://discuss.httparchive.org/) has lots of useful examples and discussion on how to analyze this data.

Now that you are all set up, let's run some queries! Most HTTP Archive users start off examining the summary tables, so we'll start there as well. Below is a simple aggregate query that tells you how many URLs are contained in the latest HTTP Archive data.

```sql
SELECT
  COUNT(0) total_pages
FROM
  `httparchive.all.pages`
WHERE
  date = "2024-06-01"
  AND client = "desktop"
  AND is_root_page
```

![Simple Aggregate Query](./simple_agg_query_example.png)

Perhaps you want to JOIN the pages and requests tables together, and see how many page URLs and request URLs are in this data set.

```sql
SELECT
  COUNT(DISTINCT pages.page) total_pages,
  COUNT(0) total_requests
FROM
  `httparchive.all.pages` pages
INNER JOIN
  `httparchive.all.requests`requests
ON
  pages.page = requests.page
WHERE
  pages.date = "2024-06-01"
  AND requests.date = "2024-06-01"
  AND pages.client = "desktop"
  AND requests.client = "desktop"
  AND pages.is_root_page
  AND requests.is_root_page
```

When we look at the results of this, you can see how much data was processed during this query. Writing efficient queries limits the number of bytes processed - which is helpful since that's how BigQuery is billed.

:::note
There is [1TB free per month](https://cloud.google.com/bigquery/pricing#on_demand_pricing).
:::

![Simple JOIN Example](./simple_join_example.png)

If you look closely, you'll notice that this particular query could actually be written without the JOIN. For example, we can count `distinct page` from the `requests` table instead of JOINing the `pages` table. If you run this query, you'll notice that the results are the same as the previous query, and the processed bytes are a bit less.

```sql
SELECT
  COUNT(DISTINCT page) total_pages,
  COUNT(0) total_requests
FROM
  `httparchive.all.requests`
WHERE
  date = "2024-06-01"
  AND client = "desktop"
  AND is_root_page
```

Next let's summarize all of the HTTP requests by a type, and the number of pages that contain at least one request of that type. In the example below, you can see that I added `type` to the SELECT clause, added a GROUP clause and sorted the results by types that have the most requests.

```sql
SELECT
  type,
  COUNT(DISTINCT page) total_pages,
  COUNT(0) total_requests
FROM
  `httparchive.all.requests`
WHERE
  date = "2024-06-01"
  AND client = "desktop"
  AND is_root_page
GROUP BY
  type
ORDER BY
  total_requests DESC
```

Now things are starting to get interesting.

![Simple JOIN Example](./type_summary_example_query.png)

So let's try to learn something from this basic example. We know from the first example that there are 12.7 million URLs in the latest HTTP Archive dataset. Let's calculate the percent of pages that have each mimeType. To do this, we'll divide the number of pages by the total pages (using our first query as a subquery). Then we'll use a `ROUND()` function to trim the result to 2 decimal points.

```sql
WITH requests AS (
  SELECT
    type,
    page,
    COUNT(0) OVER () AS requests_total,
    COUNT(DISTINCT page) OVER () AS pages_total,
  FROM `httparchive.all.requests`
  WHERE
    date = "2024-06-01"
    AND client = "desktop"
    AND is_root_page
)

SELECT
  type,
  COUNT(DISTINCT page) AS pages_total,
  ANY_VALUE(requests_total) AS requests_total,
  ROUND(COUNT(DISTINCT page) / ANY_VALUE(pages_total), 2) AS pages_percent
FROM requests
GROUP BY
  type
ORDER BY
  requests_total DESC
```

When analyzing the results from this, you can see the % of websites that use different Content-Types for their JavaScript, you can see that 93% of sites have at least one PNG image, 89% have at least 1 GIF, 48% use JSON, and 3% of sites have MP4 videos on their homepage, etc.

![Simple JOIN Example](./type_summary_example_query2.png)

To explore more interactive examples, read the [Guided Tour](./guided-tour.md).

If you want to explore deeper you have everything you need - infrastructure, documentation, community. Enjoy exploring this data and feel free to share your results and ask questions on the [HTTP Archive Discuss section](https://discuss.httparchive.org/).
