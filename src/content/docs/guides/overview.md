---
title: HTTP Archive - Guided Tour
description: HTTP Archive data analysis in BigQuery
---

The HTTP Archive contains a tremendous amount of information that can be used to understand the evolution of the web. And since the raw data is available in Google BigQuery, you can start digging into it with a minimal amount of setup!

If you are new to BigQuery, then the [Getting Started guide](./gettingstarted_bigquery.md) will walk you through the basic setup. That guide ends with a sample query that explores MIME types from the `summary_pages` tables. In this guide, we'll explore more of the tables and build additional queries that you can learn from. The easiest way to get started is by following along, testing some of the queries and learning from them. If you need any help then there is plenty of support available from the community at [https://discuss.httparchive.org](https://discuss.httparchive.org).

**Prerequisites:**

- This guide assumes that you've completed the setup from the [Getting Started guide](./gettingstarted_bigquery.md).
- You would be safe processing extremely-large tables contained in this dataset if you follow the [minimizing query costs guide](/guides/minimizing-costs/).
- It also assumes some familiarity with SQL. All of the examples provided will be using [Standard SQL](https://cloud.google.com/bigquery/docs/reference/standard-sql/).

Migration Guides:
- If you are looking to adapt older HTTP Archive queries, written in [Legacy SQL](https://cloud.google.com/bigquery/docs/reference/legacy-sql), then you may find this [migration guide](https://cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql) helpful.*
- If you've been working with the deprecated dataset `pages` or `requests`, there is a guide on [migrating your queries to the `all` dataset](/guides/migrating-to-all-dataset/).