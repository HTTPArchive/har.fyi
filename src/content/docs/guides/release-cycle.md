---
title: The HTTP Archive release cycle
description: Learn about the process of testing millions of web pages each month
---

The HTTP Archive dataset is updated each month with data from millions of web pages. This guide explores the end-to-end release cycle from sourcing URLs to publishing results to BigQuery.

_TODO: Add a diagram_

## Sourcing URLs

The pages HTTP Archive tests are ultimately sourced from the [Chrome UX Report](https://developer.chrome.com/docs/crux/) (CrUX) dataset. CrUX is a public dataset that contains anonymized, aggregated metrics about real-world Chrome users' experiences on popular destinations on the web. HTTP Archive takes the _origins_ in the public CrUX dataset and classifies them as either desktop and mobile. Origins are segmented by desktop or mobile depending on the [`form_factor`](https://developer.chrome.com/docs/crux/methodology/#form-factor-dimension) dimension in the CrUX schema, which corresponds to the actual device type real visitors used to access the website.

CrUX also includes origins without any distinct form factor data. HTTP Archive classifies these origins as _both_ desktop and mobile.

## Running the crawl

Previously, HTTP Archive would start testing each web page (the crawl) on the first of the month. Now, to be in closer alignment with the upstream CrUX dataset, HTTP Archive starts testing pages as soon as the CrUX dataset is available on the second Tuesday of each month. Crawl dates are always rounded down to the first of the month, regardless of which day they actually started. For example, the June 2023 crawl kicks off on the 13th of the month, but the dataset would be accessible on BigQuery under the date `2023-06-01`.

:::note
As of [May 2023](https://httparchive.org/reports/state-of-the-web?start=2023_04_01&end=2023_05_01&view=list#numUrls) there are 16.6 million mobile pages and 12.8 million desktop pages. It takes 1–2 weeks to test all of these pages, so the crawl is usually complete by the end of the month.
:::

## Publishing the raw data

As each page's test results are completed, the raw data is saved to a public Google Cloud Storage bucket. Once the crawl is complete, the data is processed and published to BigQuery. The BigQuery dataset is available to the public for analysis.

There isn't currently a way to be notified when a new crawl is available to query.

## Generating reports

The reports on the HTTP Archive website are automatically generated as soon as the BigQuery data is available.

Auxilliary reports like the [Core Web Vitals Technology Report](https://cwvtech.report/) are generated manually soon after the data becomes available.
