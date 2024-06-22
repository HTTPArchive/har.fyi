---
title: Migrate queries to `all` dataset
description: Assisting with query migration to the new dataset
---


## pages.YYYY_MM_DD_* to all.pages

### Schema difference

all.pages columns | pages.YYYY_MM_DD_* columns | Column difference description
---|---|---
date | not available |
client | in _TABLE_SUFFIX | column format is easier and enables table partitioning
page | url |
is_root_page | not available |
root_page | not available |
rank | not available |
wptid | |
payload | |
summary | |
custom_metrics | payload |
lighthouse | |
features | |
technologies | |
metadata | |

### Query difference

```diff lang="sql"
SELECT
 -- Test environment: desktop or mobile
-  _TABLE_SUFFIX AS client,
+  client,
 -- The URL of the page being tested
-  url,
+  page,
 -- JSON with the results of the custom metrics
-  JSON_QUERY(payload, '$._privacy') AS custom_metrics
+  JSON_QUERY(custom_metrics, '$.privacy') AS custom_metrics
-FROM `httparchive.pages.2022_06_01_*`
+FROM `httparchive.all.pages`
 -- Filtering by partition column required
+WHERE
+  date = '2022-06-01'
 -- Filtering by clustering columns client, is_root_page, rank are optional, help to reduce costs

 -- This boolean parameter filters for only root pages on the origin
+  AND is_root_page
```

## summary_pages to all.pages

```diff
SELECT
-  numDomains,
+  CAST(JSON_VALUE(summary, '$.numDomains') AS INT64) AS numDomains,
  COUNT(0) pages,
-  ROUND(AVG(reqTotal),2) avg_requests
+  ROUND(AVG(CAST(JSON_VALUE(summary, '$.reqTotal') AS INT64)),2) as avg_requests
FROM
-  `httparchive.summary_pages.2024_06_01_desktop`
+  `httparchive.all.pages`
+WHERE
+  date = '2024-06-01'
+  AND client = 'desktop'
 -- This boolean parameter filters for only root pages on the origin
+  AND is_root_page
GROUP BY
  numDomains
HAVING
  pages > 1000
ORDER BY
  numDomains ASC
```

## summary_requests to all.requests

```diff
SELECT
-  ROUND(respBodySize/(1024*100))*100 responseSize100KB,
+  ROUND(CAST(JSON_VALUE(summary, '$.respBodySize') AS INT64)/(1024*100))*100 responseSize100KB,
  COUNT(0) requests
FROM
-  `httparchive.summary_requests.2018_09_01_desktop`
+  `httparchive.all.requests`
+WHERE
+  date = '2024-06-01'
+  AND client = 'desktop'
 -- This boolean parameter filters for only root pages on the origin
+  AND is_root_page
GROUP BY
  responseSize100KB
HAVING
  responseSize100KB > 0
ORDER BY
  responseSize100KB ASC
```

## requests to all.requests

```diff

```

## almanac.requests to all.requests

```diff
SELECT
 -- Response headers
-  LOWER(JSON_VALUE(response_header, '$.name')) AS header_name,
+  LOWER(response_header.name) AS header_name,
-  JSON_VALUE(response_header, '$.value') AS header_value
+  response_headers.value AS header_value
FROM
-  `httparchive.almanac.requests`
+  `httparchive.all.requests`
-UNNEST(JSON_QUERY_ARRAY(response_headers)) response_header
+UNNEST(response_headers) response_header
WHERE
  date = '2022-06-01'
 -- This boolean parameter filters for only root pages on the origin
+  AND is_root_page
 -- Filtering the main document requests
-  AND firstHtml
+  AND is_main_document

```
