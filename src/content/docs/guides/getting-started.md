---
title: Getting started
description: Using HTTP Archive on BigQuery for the first time
---

Guides lead a user through a specific task they want to accomplish, often with a sequence of steps.
Writing a good guide requires thinking about what your users are trying to do.

## Example query

```sql
SELECT
  COUNT(0) AS pages
FROM
  `httparchive.all.pages`
WHERE
  date = '2023-06-01' AND
  client = 'desktop' AND
  is_root_page
```

## Further reading

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework
