---
title: Minimizing query costs
description: Practical tips for minimizing the cost of querying the HTTP Archive dataset
---

The HTTP Archive dataset is large and complex, and it's easy to write queries that are slow and expensive. All BigQuery users have a free quota of 1 TB per month. To stretch your free quota as far as possible, you'll want to minimize the amount of data that your queries scan. This guide provides some practical tips for minimizing the cost of querying the HTTP Archive dataset.

## Use clustered tables

Table | Partitioned by | Clustered by
--- | --- | ---
`httparchive.crawl.pages` | `date` | `client`<br>`is_root_page`<br>`rank`<br>`page`
`httparchive.crawl.requests` | `date` | `client`<br>`is_root_page`<br>`is_main_document`<br>`type`

For example, the `httparchive.crawl.pages` table is [partitioned](https://cloud.google.com/bigquery/docs/partitioned-tables) by `date` and [clustered](https://cloud.google.com/bigquery/docs/clustered-tables) by the `client`, `is_root_page`, `rank` and `page` columns, which means that queries that filter on these columns will be much faster and cheaper than queries that don't.

:::caution
BigQuery [doesn't guarantee](https://cloud.google.com/bigquery/docs/clustered-tables#clustered_table_pricing:~:text=BigQuery%20might%20not%20be%20able%20to%20accurately%20estimate%20the%20bytes%20to%20be%20processed) accuracy of estimations for 'Bytes processed' when querying clustered tables ([Issue Link](https://issuetracker.google.com/issues/176795805)). The actual data volume may be smaller than the amount provided in the estimate.
:::

Legacy tables like `httparchive.pages.2023_05_01_desktop`, however, do not take advantage of these optimizations and always incur the full cost of scanning the entire table.

:::tip
Filter by the top 1k websites. This is the smallest rank bucket and will result in the smallest amount of data being scanned.

```sql
SELECT
  page
FROM
  `httparchive.crawl.pages`
WHERE
  date = '2023-05-01' AND
  client = 'desktop' AND
  rank = 1000
```

:::

## Use `TABLESAMPLE`

The `TABLESAMPLE` clause allows you to sample a table without scanning the entire table. This is useful for getting a rough idea of the data in a table before running a more expensive query.

For example, without `TABLESAMPLE`:

```sql
SELECT
  custom_metrics.other.avg_dom_depth
FROM
  `httparchive.crawl.pages`
WHERE
  date = '2023-05-01' AND
  client = 'desktop'
```

This query will process 6.56 TB when run.

However, the same query with `TABLESAMPLE` at 0.01% is much cheaper:

```sql
SELECT
  custom_metrics.other.avg_dom_depth
FROM
  `httparchive.crawl.pages` TABLESAMPLE SYSTEM (0.01 PERCENT)
WHERE
  date = '2023-05-01' AND
  client = 'desktop'
```

This query will only process 680.01 MB when run.

The 0.01% of rows that are sampled are chosen randomly, so the results of the query will be different each time it's run.

:::danger
Don't rely on the `LIMIT` clause to reduce the amount of data scanned. `LIMIT` is applied after the query is run, so the entire table will still be scanned.

For example, this query still processes 6.56 TB:

```sql
SELECT
  custom_metrics.other.avg_dom_depth
FROM
  `httparchive.crawl.pages`
WHERE
  date = '2023-05-01' AND
  client = 'desktop'
LIMIT
  1
```

:::

## Use the `sample_data` dataset

The `sample_data` dataset contains 10k subsets of the full pages and requests tables. These tables are useful for testing queries before running them on the full dataset, without the risk of incurring a large query cost.

Table names correspond to their full-size counterparts of the form `[table]_1k` for `crawl.pages` and `crawl.requests` tables. For example, to query the summary data for the subset of 10k pages, you would use the `httparchive.sample_data.pages_10k` table.

## Use table previews

BigQuery allows you to preview entire rows of a table without incurring a query cost. This is useful for getting a rough idea of the data in a table before running a more expensive query.

![Preview tab on BigQuery](./bq-preview.webp)

To access the preview, click on a table name from the workspace explorer and select the **Preview** tab.

Note that generating the preview may be slow for these tables as they include large payloads. Also note that the text values are truncated by default, so you will need to expand the field to get the full value.
