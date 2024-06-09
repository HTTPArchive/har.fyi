---
title: Migrate queries to `all` dataset
description: Assisting with query migration to the new dataset
---


## pages.YYYY_MM_DD_* to all.pages

### Schema difference

| all.pages columns | pages.YYYY_MM_DD_* columns | Column difference description |
|---|---|---|
date | not available
client | in _TABLE_SUFFIX | column format is easier and enables table partitioning
page | url
is_root_page | not available
root_page | not available
rank | not available
wptid 
payload	
summary	
custom_metrics | payload
lighthouse 
features
technologies
metadata


### Query difference

### SELECT


```diff
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

## requests to all.requests



## almanac.requests to all.requests

```diff
SELECT

 -- Response headers
-  LOWER(JSON_VALUE(response_header, '$.name')) AS header_name,
-  JSON_VALUE(response_header, '$.value') AS header_value
+  LOWER(response_header.name) AS header_name,
+  response_headers.value AS header_value

FROM
-  `httparchive.almanac.requests`
+  `httparchive.all.requests`

-UNNEST(JSON_QUERY_ARRAY(response_headers)) response_header
+UNNEST(response_headers) response_header

WHERE
  date = '2022-06-01'

 -- Filtering the main document requests
-  AND firstHtml
+  AND is_main_document

```
