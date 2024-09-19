---
title: Request summary struct
description: Reference docs for the request summary struct
---

_Appears in: [`requests` table](/reference/tables/requests/#summary)_\
_As: `summary`_

JSON-encoded summarization of request data.

Here's an example of the decoded object:

```json
{
    "time": 260,
    "_cdn_provider": "Edgecast",
    "_gzip_save": 0,
    "method": "GET",
    "reqHeadersSize": 683,
    "reqBodySize": null,
    "reqCookieLen": 0,
    "status": 200,
    "respHttpVersion": "HTTP/2",
    "redirectUrl": null,
    "respHeadersSize": 376,
    "respBodySize": 648,
    "respSize": 648,
    "mimeType": "text/html",
    "ext": "",
    "type": "html",
    "format": "",
    "respCookieLen": 0,
    "expAge": 604800,
}
```

## Schema

### `requestid`

The unique identifier for the request.

### `pageid`

The unique identifier for the page associated with the request.

### `crawlid`

The crawl identifier.

### `startedDateTime`

The start date and time of the request in Unix timestamp format.

### `time`

The total time taken for the request in milliseconds.

### `_cdn_provider`

The Content Delivery Network provider.

### `_gzip_save`

Bytes saved due to gzip compression.

### `method`

The HTTP method used for the request (e.g., "GET", "POST").

### `url`

The URL of the requested resource.

### `urlShort`

A shortened version of the URL.

### `reqHeadersSize`

The size of the request headers in bytes.

### `reqBodySize`

The size of the request body in bytes.

### `reqOtherHeaders`

Additional headers sent with the request.

### `reqCookieLen`

The length of the request cookies.

### `status`

The HTTP status code of the response.

### `respHttpVersion`

The HTTP version used in the response.

### `redirectUrl`

The URL to which the request was redirected.

### `respHeadersSize`

The size of the response headers in bytes.

### `respBodySize`

The size of the response body in bytes.

### `respSize`

The total size of the response in bytes.

### `mimeType`

The MIME type of the response.

### `ext`

The file extension of the requested resource.

### `type`

The type of the requested resource (e.g., "audio", "image").

### `format`

The format of the resource.

### `respOtherHeaders`

Additional headers received in the response.

### `respCookieLen`

The length of the response cookies.

### `expAge`

The age of the cached response in seconds.

### `req_accept`

The value of the `Accept` header sent with the request.

### `req_accept_encoding`

The value of the `Accept-Encoding` header sent with the request.

### `req_accept_language`

The value of the `Accept-Language` header sent with the request.

### `req_if_modified_since`

The value of the `If-Modified-Since` header sent with the request.

### `req_if_none_match`

The value of the `If-None-Match` header sent with the request.

### `req_referer`

The value of the `Referer` header sent with the request.

### `req_user_agent`

The value of the `User-Agent` header sent with the request.

### `resp_age`

The `Age` header value in the response.

### `resp_cache_control`

The `Cache-Control` header value in the response.

### `resp_date`

The `Date` header value in the response.

### `resp_etag`

The `ETag` header value in the response.

### `resp_last_modified`

The `Last-Modified` header value in the response.

### `resp_server`

The `Server` header value in the response.

### `resp_vary`

The `Vary` header value in the response.

### `resp_content_length`

The `Content-Length` header value in the response.

### `resp_content_type`

The `Content-Type` header value in the response.

### `firstReq`

Boolean indicating if this is the first request of the page.

### `firstHtml`

Boolean indicating if this is the first HTML request of the page.
