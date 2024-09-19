---
title: Page summary struct
description: Reference docs for the page summary struct
---

_Appears in: [`pages` table](/reference/tables/pages/)_\
_As: `summary`_

JSON-encoded summarization of the page-level data.

Here's an example of the decoded object:

```json
{
    "metadata": "{\"rank\": 500000, \"page_id\": 24036445, \"tested_url\": \"https://www.example.com/\", \"layout\": \"Desktop\", \"crawl_depth\": 0, \"link_depth\": 0, \"root_page_id\": 24036445, \"root_page_url\": \"https://www.example.com/\", \"root_page_test_id\": \"240709_Dx1UR_EB6N1\"}",
    "TTFB": 236,
    "renderStart": 400,
    "fullyLoaded": 338,
    "visualComplete": 400,
    "onLoad": 325,
    "gzipTotal": 648,
    "gzipSavings": 0,
    "numDomElements": 12,
    "onContentLoaded": 254,
    "cdn": "Edgecast",
    "SpeedIndex": 400,
    "_connections": 1,
    "reqTotal": 2,
    "bytesTotal": 1296,
    "reqJS": 0,
    "bytesJS": 0,
    "reqImg": 1,
    "bytesImg": 648,
    "reqJson": 0,
    "bytesJson": 0,
    "reqCss": 0,
    "bytesCss": 0,
    "reqHtml": 1,
    "bytesHtml": 648,
    "reqFont": 0,
    "bytesFont": 0,
    "reqOther": 0,
    "bytesOther": 0,
    "reqAudio": 0,
    "bytesAudio": 0,
    "reqVideo": 0,
    "bytesVideo": 0,
    "reqText": 0,
    "bytesText": 0,
    "reqXml": 0,
    "bytesXml": 0,
    "reqGif": 0,
    "bytesGif": 0,
    "reqJpg": 0,
    "bytesJpg": 0,
    "reqPng": 0,
    "bytesPng": 0,
    "reqWebp": 0,
    "bytesWebp": 0,
    "reqSvg": 0,
    "bytesSvg": 0,
    "reqFlash": 0,
    "bytesFlash": 0,
    "numDomains": 1,
    "maxageNull": 0,
    "maxage0": 0,
    "maxage1": 0,
    "maxage30": 2,
    "maxage365": 0,
    "maxageMore": 0,
    "bytesHtmlDoc": 648,
    "numRedirects": 0,
    "numErrors": 1,
    "numGlibs": 0,
    "numHttps": 2,
    "numCompressed": 2,
    "maxDomainReqs": 1
}
```

## Schema

### `metadata`

Additional metadata about the page. Object is similar to the [`metadata`](/reference/blobs/page-metadata/) field in the `pages` table.

- #### `metadata.rank`

  The rank magnitude of the origin, which is a measure of relative popularity.

- #### `metadata.page_id`

  A unique identifier for the page.

- #### `metadata.tested_url`

  The actual URL of the page that was intended to be tested.

- #### `metadata.layout`

  Whether the page was tested in a desktop or mobile environment. Values are `"Desktop"` or `"Mobile"`.

- #### `metadata.crawl_depth`

  Levels of depth from the root page. HTTP Archive is currently configured to crawl one level into a website, so this value will always be `0` or `1`.

- #### `metadata.link_depth`

  At a given crawl depth, this value represents the index in the list of pages being tested. Currently, HTTP Archive only crawls one page per level, so this value is always `0`.

- #### `metadata.root_page_id`

  ID of the root page. At crawl depth `0` this is the same as the `page_id` field.

- #### `metadata.root_page_url`

  URL of the root page.

- #### `metadata.root_page_test_id`

  WebPageTest ID of the root page.

- #### `metadata.retry_count`

  The number of retries.

- #### `metadata.parent_page_id`

  ID of the parent page.

- #### `metadata.parent_page_url`

  URL of the parent page.

- #### `metadata.parent_page_test_id`

  WebPageTest ID of the parent page.

- #### `metadata.visited`

  A list of URLs visited during the crawl.

### `pageid`

The unique identifier for the page (same as `page_id` in metadata).

### `createDate`

The creation date of the record in Unix timestamp format.

### `startedDateTime`

The start date and time of the test in Unix timestamp format.

### `archive`

The archive category (e.g., "All").

### `label`

A label for the test date.

### `crawlid`

The crawl identifier.

### `url`

The URL of the tested page.

### `urlhash`

A hash value of the URL.

### `urlShort`

A shortened version of the URL.

### `TTFB`

Time to First Byte in milliseconds.

### `renderStart`

The time when rendering started in milliseconds.

### `fullyLoaded`

The time when the page was fully loaded in milliseconds.

### `visualComplete`

The time when visual loading was complete in milliseconds.

### `onLoad`

The time when the onLoad event was triggered in milliseconds.

### `gzipTotal`

Total size of compressed data in bytes.

### `gzipSavings`

Bytes saved due to gzip compression.

### `numDomElements`

The number of DOM elements.

### `onContentLoaded`

The time when the DOMContentLoaded event was triggered in milliseconds.

### `cdn`

The Content Delivery Network used.

### `SpeedIndex`

The Speed Index score.

### `PageSpeed`

The PageSpeed score.

### `_connections`

The number of connections made.

### `_adult_site`

Boolean indicating if the site is an adult site.

### `avg_dom_depth`

Average DOM depth.

### `doctype`

The document type.

### `document_height`

The height of the document.

### `document_width`

The width of the document.

### `localstorage_size`

The size of local storage used.

### `sessionstorage_size`

The size of session storage used.

### `meta_viewport`

The meta viewport tag content.

### `num_iframes`

The number of iframes.

### `num_scripts`

The number of script tags.

### `num_scripts_sync`

The number of synchronous scripts.

### `num_scripts_async`

The number of asynchronous scripts.

### `usertiming`

User timing data.

### `reqTotal`

Total number of requests made.

### `bytesTotal`

Total bytes transferred.

### `reqJS`

Number of JavaScript requests.

### `bytesJS`

Bytes transferred for JavaScript.

### `reqImg`

Number of image requests.

### `bytesImg`

Bytes transferred for images.

### `reqJson`

Number of JSON requests.

### `bytesJson`

Bytes transferred for JSON.

### `reqCss`

Number of CSS requests.

### `bytesCss`

Bytes transferred for CSS.

### `reqHtml`

Number of HTML requests.

### `bytesHtml`

Bytes transferred for HTML.

### `reqFont`

Number of font requests.

### `bytesFont`

Bytes transferred for fonts.

### `reqOther`

Number of other types of requests.

### `bytesOther`

Bytes transferred for other types of requests.

### `reqAudio`

Number of audio requests.

### `bytesAudio`

Bytes transferred for audio.

### `reqVideo`

Number of video requests.

### `bytesVideo`

Bytes transferred for video.

### `reqText`

Number of text requests.

### `bytesText`

Bytes transferred for text.

### `reqXml`

Number of XML requests.

### `bytesXml`

Bytes transferred for XML.

### `reqGif`

Number of GIF requests.

### `bytesGif`

Bytes transferred for GIFs.

### `reqJpg`

Number of JPG requests.

### `bytesJpg`

Bytes transferred for JPGs.

### `reqPng`

Number of PNG requests.

### `bytesPng`

Bytes transferred for PNGs.

### `reqWebp`

Number of WebP requests.

### `bytesWebp`

Bytes transferred for WebP.

### `reqSvg`

Number of SVG requests.

### `bytesSvg`

Bytes transferred for SVG.

### `reqFlash`

Number of Flash requests.

### `bytesFlash`

Bytes transferred for Flash.

### `numDomains`

Number of unique domains.

### `maxageNull`

Number of resources with no max-age set.

### `maxage0`

Number of resources with max-age 0.

### `maxage1`

Number of resources with max-age 1 day.

### `maxage30`

Number of resources with max-age 30 days.

### `maxage365`

Number of resources with max-age 365 days.

### `maxageMore`

Number of resources with max-age more than 365 days.

### `bytesHtmlDoc`

Bytes transferred for the HTML document.

### `numRedirects`

Number of redirects.

### `numErrors`

Number of errors.

### `numGlibs`

Number of GLib issues.

### `numHttps`

Number of HTTPS requests.

### `numCompressed`

Number of compressed requests.

### `maxDomainReqs`

Maximum number of requests to a single domain.

### `wptid`

WebPageTest ID.

### `wptrun`

WebPageTest run number.

### `rank`

The rank magnitude of the origin, which is a measure of relative popularity.
