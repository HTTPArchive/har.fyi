---
title: Request payload struct
description: Reference docs for the request payload struct
---

_Appears in: [`requests` table](/reference/tables/requests/)_\
_As: `payload`_

JSON-encoded WebPageTest result data for a request.

Here's an example of the decoded object:

```json
{
    "pageref": "page_1_0_1",
    "_run": 1,
    "_cached": 0,
    "startedDateTime": "2024-07-12T12:44:30.448119",
    "time": 1080,
    "request": {
        "method": "GET",
        "url": "https://www.example.com/",
        "headersSize": 705,
        "bodySize": -1,
        "cookies": [],
        "headers": [
            {
                "name": "accept",
                "value": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"
            }
        ],
        "httpVersion": "HTTP/2",
        "queryString": []
    },
    "response": {
        "status": 200,
        "statusText": "",
        "headersSize": 354,
        "bodySize": 648,
        "headers": [
            {
                "name": "age",
                "value": "297291"
            }
        ],
        "httpVersion": "HTTP/2",
        "content": {
            "size": 648,
            "mimeType": "text/html"
        },
        "cookies": []
    },
    "cache": {},
    "timings": {
        "blocked": 172,
        "dns": 182,
        "connect": 539,
        "ssl": 363,
        "send": 0,
        "wait": 186,
        "receive": 1
    },
    "_type": 3,
    "_id": "091B5FD213B68B9F34A44A6D463C118C",
    "_request_id": "091B5FD213B68B9F34A44A6D463C118C",
    "_ip_addr": "93.184.215.14",
    "_full_url": "https://www.example.com/",
    "_is_secure": 1,
    "_method": "GET",
    "_host": "www.example.com",
    "_url": "/",
    "_raw_id": "091B5FD213B68B9F34A44A6D463C118C",
    "_frame_id": "1D859F37F34AE0AAA923D0A54914BBEB",
    "_documentURL": "https://www.example.com/",
    "_responseCode": 200,
    "_request_type": "Document",
    "_load_ms": 187,
    "_ttfb_ms": 186,
    "_load_start": 723,
    "_load_start_float": 723.000078,
    "_bytesIn": 648,
    "_objectSize": 648,
    "_objectSizeUncompressed": 1256,
    "_chunks": [
        {
            "ts": 909,
            "bytes": 648,
            "inflated": 1256
        }
    ],
    "_expires": "Fri, 19 Jul 2024 12:44:31 GMT",
    "_cacheControl": "max-age=604800",
    "_contentType": "text/html",
    "_contentEncoding": "gzip",
    "_socket": 91,
    "_protocol": "HTTP/2",
    "_dns_start": 1,
    "_dns_end": 183,
    "_connect_start": 183,
    "_connect_end": 359,
    "_ssl_start": 359,
    "_ssl_end": 722,
    "_securityDetails": {
        "protocol": "TLS 1.3",
        "keyExchange": "",
        "keyExchangeGroup": "P-256",
        "cipher": "AES_256_GCM",
        "certificateId": 0,
        "subjectName": "www.example.org",
        "sanList": [
            "www.example.org"
        ],
        "issuer": "DigiCert Global G2 TLS RSA SHA256 2020 CA1",
        "validFrom": 1706572800,
        "validTo": 1740873599,
        "signedCertificateTimestampList": [
            {
                "status": "Verified",
                "origin": "Embedded in certificate",
                "logDescription": "Google 'Argon2025h1' log",
                "logId": "4E75A3275C9A10C3385B6CD4DF3F52EB1DF0E08E1B8D69C0B1FA64B1629A39DF",
                "timestamp": 1706642570340,
                "hashAlgorithm": "SHA-256",
                "signatureAlgorithm": "ECDSA",
                "signatureData": "3043021F40510A0C4F6C1055C61716676E9AF0909EF373F5259EB09AFE7A1AC55CC8C00220382931B128E472484D344F9E8C93E261BC70BAD68C4BE172151D11C594BA4D53"
            }
        ],
        "certificateTransparencyCompliance": "compliant",
        "serverSignatureAlgorithm": 2052,
        "encryptedClientHello": false
    },
    "_initiator": "",
    "_initiator_line": "",
    "_initiator_column": "",
    "_initiator_type": "script",
    "_priority": "Highest",
    "_initial_priority": "Highest",
    "_server_rtt": null,
    "_headers": {
        "request": [
            ":authority: www.example.com",
            ":method: GET",
            ":path: /",
            ":scheme: https",
            "accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-encoding: gzip, deflate, br, zstd",
            "accept-language: en-US,en;q=0.9",
            "priority: u=0, i",
            "sec-ch-ua: \" Not A;Brand\";v=\"99\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
            "sec-ch-ua-mobile: ?1",
            "sec-ch-ua-platform: \"Android\"",
            "sec-fetch-dest: document",
            "sec-fetch-mode: navigate",
            "sec-fetch-site: cross-site",
            "upgrade-insecure-requests: 1",
            "user-agent: Mozilla/5.0 (Linux; Android 8.1.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36 PTST/240709.152506"
        ],
        "response": [
            "age: 297291",
            "cache-control: max-age=604800",
            "content-encoding: gzip",
            "content-length: 648",
            "content-type: text/html; charset=UTF-8",
            "date: Fri, 12 Jul 2024 12:44:31 GMT",
            "etag: \"3147526947+gzip\"",
            "expires: Fri, 19 Jul 2024 12:44:31 GMT",
            "last-modified: Thu, 17 Oct 2019 07:18:26 GMT",
            "server: ECAcc (lac/55D2)",
            "vary: Accept-Encoding",
            "x-cache: HIT",
            ":status: 200"
        ]
    },
    "_bytesOut": 2209,
    "_score_cache": -1,
    "_score_cdn": 100,
    "_score_gzip": 100,
    "_score_cookies": -1,
    "_score_keep-alive": 100,
    "_score_minify": -1,
    "_score_combine": -1,
    "_score_compress": -1,
    "_score_etags": -1,
    "_dns_ms": 182,
    "_connect_ms": 176,
    "_ssl_ms": 363,
    "_gzip_total": 648,
    "_gzip_save": 0,
    "_minify_total": null,
    "_minify_save": null,
    "_image_total": null,
    "_image_save": null,
    "_cache_time": null,
    "_cdn_provider": "Edgecast",
    "_server_count": null,
    "_created": 11,
    "_dns_info": {
        "secure": false,
        "transactions_needed": [
            {
                "dns_query_type": "A"
            },
            {
                "dns_query_type": "HTTPS"
            }
        ],
        "results": {
            "aliases": [
                "www.example.com"
            ],
            "canonical_names": [
                "www.example.com"
            ],
            "endpoint_metadatas": [],
            "expiration": "13365194235802105",
            "host_ports": [],
            "hostname_results": [],
            "ip_endpoints": [
                {
                    "endpoint_address": "93.184.215.14",
                    "endpoint_port": 0
                }
            ],
            "text_records": []
        }
    },
    "_socket_group": "https://www.example.com <https://example.com same_site>",
    "_http2_stream_id": 1,
    "_http2_stream_dependency": 0,
    "_http2_stream_weight": 256,
    "_http2_stream_exclusive": 1,
    "_http2_server_settings": {
        "SETTINGS_MAX_HEADER_LIST_SIZE": 16384,
        "SETTINGS_MAX_FRAME_SIZE": 16384,
        "SETTINGS_INITIAL_WINDOW_SIZE": 1048576,
        "SETTINGS_MAX_CONCURRENT_STREAMS": 100,
        "SETTINGS_HEADER_TABLE_SIZE": 4096,
        "SETTINGS_DEPRECATE_HTTP2_PRIORITIES": 0,
        "SETTINGS_ENABLE_PUSH": 0
    },
    "_tls_version": "TLS 1.3",
    "_tls_resumed": "False",
    "_tls_next_proto": "h2",
    "_tls_cipher_suite": 4866,
    "_netlog_id": 78,
    "_certificates": [
        "-----BEGIN CERTIFICATE-----\nMIIHbjCCBlagAwIBAgIQB1vO8waJyK3fE+Ua9K/hhzANBgkqhkiG9w0BAQsFADBZ\nMQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMTMwMQYDVQQDEypE\naWdpQ2VydCBHbG9iYWwgRzIgVExTIFJTQSBTSEEyNTYgMjAyMCBDQTEwHhcNMjQw\nMTMwMDAwMDAwWhcNMjUwMzAxMjM1OTU5WjCBljELMAkGA1UEBhMCVVMxEzARBgNV\nBAgTCkNhbGlmb3JuaWExFDASBgNVBAcTC0xvcyBBbmdlbGVzMUIwQAYDVQQKDDlJ\nbnRlcm5ldMKgQ29ycG9yYXRpb27CoGZvcsKgQXNzaWduZWTCoE5hbWVzwqBhbmTC\noE51bWJlcnMxGDAWBgNVBAMTD3d3dy5leGFtcGxlLm9yZzCCASIwDQYJKoZIhvcN\nAQEBBQADggEPADCCAQoCggEBAIaFD7sO+cpf2fXgCjIsM9mqDgcpqC8IrXi9wga/\n9y0rpqcnPVOmTMNLsid3INbBVEm4CNr5cKlh9rJJnWlX2vttJDRyLkfwBD+dsVvi\nvGYxWTLmqX6/1LDUZPVrynv/cltemtg/1Aay88jcj2ZaRoRmqBgVeacIzgU8+zmJ\n7236TnFSe7fkoKSclsBhPaQKcE3Djs1uszJs8sdECQTdoFX9I6UgeLKFXtg7rRf/\nhcW5dI0zubhXbrW8aWXbCzySVZn0c7RkJMpnTCiZzNxnPXnHFpwr5quqqjVyN/aB\nKkjoP04Zmr+eRqoyk/+lslq0sS8eaYSSHbC5ja/yMWyVhvMCAwEAAaOCA/IwggPu\nMB8GA1UdIwQYMBaAFHSFgMBmx9833s+9KTeqAx2+7c0XMB0GA1UdDgQWBBRM/tAS\nTS4hz2v68vK4TEkCHTGRijCBgQYDVR0RBHoweIIPd3d3LmV4YW1wbGUub3Jnggtl\neGFtcGxlLm5ldIILZXhhbXBsZS5lZHWCC2V4YW1wbGUuY29tggtleGFtcGxlLm9y\nZ4IPd3d3LmV4YW1wbGUuY29tgg93d3cuZXhhbXBsZS5lZHWCD3d3dy5leGFtcGxl\nLm5ldDA+BgNVHSAENzA1MDMGBmeBDAECAjApMCcGCCsGAQUFBwIBFhtodHRwOi8v\nd3d3LmRpZ2ljZXJ0LmNvbS9DUFMwDgYDVR0PAQH/BAQDAgWgMB0GA1UdJQQWMBQG\nCCsGAQUFBwMBBggrBgEFBQcDAjCBnwYDVR0fBIGXMIGUMEigRqBEhkJodHRwOi8v\nY3JsMy5kaWdpY2VydC5jb20vRGlnaUNlcnRHbG9iYWxHMlRMU1JTQVNIQTI1NjIw\nMjBDQTEtMS5jcmwwSKBGoESGQmh0dHA6Ly9jcmw0LmRpZ2ljZXJ0LmNvbS9EaWdp\nQ2VydEdsb2JhbEcyVExTUlNBU0hBMjU2MjAyMENBMS0xLmNybDCBhwYIKwYBBQUH\nAQEEezB5MCQGCCsGAQUFBzABhhhodHRwOi8vb2NzcC5kaWdpY2VydC5jb20wUQYI\nKwYBBQUHMAKGRWh0dHA6Ly9jYWNlcnRzLmRpZ2ljZXJ0LmNvbS9EaWdpQ2VydEds\nb2JhbEcyVExTUlNBU0hBMjU2MjAyMENBMS0xLmNydDAMBgNVHRMBAf8EAjAAMIIB\nfQYKKwYBBAHWeQIEAgSCAW0EggFpAWcAdABOdaMnXJoQwzhbbNTfP1LrHfDgjhuN\nacCx+mSxYpo53wAAAY1b0vxkAAAEAwBFMEMCH0BRCgxPbBBVxhcWZ26a8JCe83P1\nJZ6wmv56GsVcyMACIDgpMbEo5HJITTRPnoyT4mG8cLrWjEvhchUdEcWUuk1TAHYA\nfVkeEuF4KnscYWd8Xv340IdcFKBOlZ65Ay/ZDowuebgAAAGNW9L8MAAABAMARzBF\nAiBdv5Z3pZFbfgoM3tGpCTM3ZxBMQsxBRSdTS6d8d2NAcwIhALLoCT9mTMN9OyFz\nIBV5MkXVLyuTf2OAzAOa7d8x2H6XAHcA5tIxY0B3jMEQQQbXcbnOwdJA9paEhvu6\nhzId/R43jlAAAAGNW9L8XwAABAMASDBGAiEA4Koh/VizdQU1tjZ2E2VGgWSXXkwn\nQmiYhmAeKcVLHeACIQD7JIGFsdGol7kss2pe4lYrCgPVc+iGZkuqnj26hqhr0TAN\nBgkqhkiG9w0BAQsFAAOCAQEABOFuAj4N4yNG9OOWNQWTNSICC4Rd4nOG1HRP/Bsn\nrz7KrcPORtb6D+Jx+Q0amhO31QhIvVBYs14gY4Ypyj7MzHgm4VmPXcqLvEkxb2G9\nQv9hYuEiNSQmm1fr5QAN/0AzbEbCM3cImLJ69kP5bUjfv/76KB57is8tYf9sh5ik\nLGKauxCM/zRIcGa3bXLDafk5S2g5Vr2hs230d/NGW1wZrE+zdGuMxfGJzJP+DAFv\niBfcQnFg4+1zMEKcqS87oniOyG+60RMM0MdejBD7AS43m9us96Gsun/4kufLQUTI\nFfnzxLutUV++3seshgefQOy5C/ayi8y1VTNmujPCxPCi6Q==\n-----END CERTIFICATE-----\n"
    ],
    "_server_port": "443",
    "_final_base_page": true,
    "_is_base_page": true,
    "_load_end": 910,
    "_ttfb_start": 723,
    "_ttfb_end": 909,
    "_download_start": 909,
    "_download_end": 910,
    "_download_ms": 1,
    "_all_start": 1,
    "_all_end": 910,
    "_all_ms": 908,
    "_index": 0,
    "_number": 1,
    "_body_file": "001-091B5FD213B68B9F34A44A6D463C118C-body.txt"
}
```

## Schema

Field | Type | Description
-- | -- | --
pageref | string | Reference to the page containing this request.
_run | int | The run number of the test.
_cached | int | Indicates if the request was cached (0 or 1).
startedDateTime | string | Start time of the request.
time | int | Total time taken for the request in milliseconds.
request | object | Details of the request.
response | object | Details of the response.
cache | object | Cache details (empty in this example).
timings | object | Timing details of various stages of the request.
_type | int | Type identifier for the request.
_id | string | Unique identifier for the request.
_request_id | string | Identifier for the original request.
_ip_addr | string | IP address of the requested server.
_full_url | string | Full URL of the request.
_is_secure | int | Indicates if the request is secure (0 or 1).
_method | string | HTTP method used for the request.
_host | string | Host of the request.
_url | string | URL path of the request.
_raw_id | string | Raw ID for the request.
_frame_id | string | Frame ID where the request was made.
_documentURL | string | Document URL of the request.
_responseCode | int | HTTP response code.
_request_type | string | Type of the request (e.g., Document).
_load_ms | int | Load time in milliseconds.
_ttfb_ms | int | Time to first byte in milliseconds.
_load_start | int | Start time of load in milliseconds.
_load_start_float | float | Precise start time of load.
_bytesIn | int | Number of bytes received.
_objectSize | int | Size of the object received.
_objectSizeUncompressed | int | Uncompressed size of the object received.
_chunks | array | Array of chunks received.
_expires | string | Expiry date of the request.
_cacheControl | string | Cache control header value.
_contentType | string | Content type of the response.
_contentEncoding | string | Content encoding of the response.
_socket | int | Socket used for the request.
_protocol | string | Protocol used for the request.
_dns_start | int | DNS start time.
_dns_end | int | DNS end time.
_connect_start | int | Connection start time.
_connect_end | int | Connection end time.
_ssl_start | int | SSL handshake start time.
_ssl_end | int | SSL handshake end time.
_securityDetails | object | Security details of the request.
_initiator | string | Initiator of the request.
_initiator_line | string | Line number of the initiator.
_initiator_column | string | Column number of the initiator.
_initiator_type | string | Type of initiator (e.g., script).
_priority | string | Priority of the request.
_initial_priority | string | Initial priority of the request.
_server_rtt | int | Server round-trip time.
_headers | object | Headers for the request and response.
_bytesOut | int | Number of bytes sent.
_score_cache | int | Cache score.
_score_cdn | int | CDN score.
_score_gzip | int | Gzip compression score.
_score_cookies | int | Cookies score.
_score_keep-alive | int | Keep-alive score.
_score_minify | int | Minification score.
_score_combine | int | Combine score.
_score_compress | int | Compression score.
_score_etags | int | ETags score.
_dns_ms | int | DNS lookup time in milliseconds.
_connect_ms | int | Connection time in milliseconds.
_ssl_ms | int | SSL handshake time in milliseconds.
_gzip_total | int | Total size of the gzip-compressed content.
_gzip_save | int | Size saved due to gzip compression.
_minify_total | int | Total size of minified content.
_minify_save | int | Size saved due to minification.
_image_total | int | Total size of images.
_image_save | int | Size saved due to image optimization.
_cache_time | int | Cache time.
_cdn_provider | string | CDN provider used.
_server_count | int | Number of servers used.
_created | int | Creation time of the request.
_dns_info | object | DNS information.
_socket_group | string | Socket group.
_http2_stream_id | int | HTTP/2 stream ID.
_http2_stream_dependency | int | HTTP/2 stream dependency.
_http2_stream_weight | int | HTTP/2 stream weight.
_http2_stream_exclusive | int | HTTP/2 stream exclusivity.
_http2_server_settings | object | HTTP/2 server settings.
_tls_version | string | TLS version used.
_tls_resumed | string | Indicates if the TLS session was resumed.
_tls_next_proto | string | Next protocol used.
_tls_cipher_suite | int | Cipher suite used.
_netlog_id | int | Netlog ID.
_certificates | array | Certificates used.
_server_port | string | Server port.
_final_base_page | int | Indicates if the request is the final base page.
_is_base_page | int | Indicates if the request is the base page.
_load_end | int | Load end time.
_ttfb_start | int | Time to first byte start time.
_ttfb_end | int | Time to first byte end time.
_download_start | int | Download start time.
_download_end | int | Download end time.
_download_ms | int | Download time in milliseconds.
_all_start | int | Start time of all operations.
_all_end | int | End time of all operations.
_all_ms | int | Total time taken for all operations.
_index | int | Index of the request.
_number | int | Number of the request.
_body_file | string | File containing the body of the request.
