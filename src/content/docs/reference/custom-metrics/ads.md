---
title: Ads custom metric
description: Reference docs for the feature struct
---

_Appears in: [`custom_metrics` struct](/reference/structs/custom-metrics/)_\
_As: [`ads`](/reference/structs/custom-metrics/#ads)_

## Schema

| Field name                                       | Type          | Description                                                                                  |
| ------------------------------------------------ | ------------- | -------------------------------------------------------------------------------------------- |
| `ads`                                            | object        | Contains information about the ads.txt file.                                                 |
| `ads.present`                                    | boolean       | Indicates if the ads.txt file is present.                                                    |
| `ads.status`                                     | integer       | HTTP status code of the ads.txt file response.                                               |
| `ads.redirected`                                 | boolean       | Indicates if the ads.txt file request was redirected.                                        |
| `ads.redirected_to`                              | string        | URL to which the ads.txt resource was redirected.                                            |
| `ads.account_count`                              | integer       | Number of advertising accounts listed in the ads.txt file.                                   |
| `ads.account_types`                              | object        | Types of accounts (direct or reseller) listed in the ads.txt file.                           |
| `ads.account_types.direct`                       | object        | Information about direct advertising accounts.                                               |
| `ads.account_types.direct.domains`               | array<string> | List of domains with direct advertising accounts.                                            |
| `ads.account_types.direct.account_count`         | integer       | Number of direct advertising accounts.                                                       |
| `ads.account_types.direct.domain_count`          | integer       | Number of unique domains with direct advertising accounts.                                   |
| `ads.account_types.reseller`                     | object        | Information about reseller advertising accounts.                                             |
| `ads.account_types.reseller.domains`             | array<string> | List of domains with reseller advertising accounts.                                          |
| `ads.account_types.reseller.account_count`       | integer       | Number of reseller advertising accounts.                                                     |
| `ads.account_types.reseller.domain_count`        | integer       | Number of unique domains with reseller advertising accounts.                                 |
| `ads.line_count`                                 | integer       | Total number of lines in the ads.txt file.                                                   |
| `ads.variables`                                  | array<string> | List of variables found in the ads.txt file.                                                 |
| `ads.variable_count`                             | integer       | Number of variables found in the ads.txt file.                                               |
| `app_ads`                                        | object        | Contains information about the app-ads.txt file.                                             |
| `app_ads.present`                                | boolean       | Indicates if the app-ads.txt file is present.                                                |
| `app_ads.status`                                 | integer       | HTTP status code of the app-ads.txt file response.                                           |
| `app_ads.redirected`                             | boolean       | Indicates if the app-ads.txt file request was redirected.                                    |
| `app_ads.redirected_to`                          | string        | URL to which the app-ads.txt resource was redirected.                                        |
| `app_ads.account_count`                          | integer       | Number of advertising accounts listed in the app-ads.txt file.                               |
| `app_ads.account_types`                          | object        | Types of accounts (direct or reseller) listed in the app-ads.txt file.                       |
| `app_ads.account_types.direct`                   | object        | Information about direct advertising accounts.                                               |
| `app_ads.account_types.direct.domains`           | array<string> | List of domains with direct advertising accounts.                                            |
| `app_ads.account_types.direct.account_count`     | integer       | Number of direct advertising accounts.                                                       |
| `app_ads.account_types.direct.domain_count`      | integer       | Number of unique domains with direct advertising accounts.                                   |
| `app_ads.account_types.reseller`                 | object        | Information about reseller advertising accounts.                                             |
| `app_ads.account_types.reseller.domains`         | array<string> | List of domains with reseller advertising accounts.                                          |
| `app_ads.account_types.reseller.account_count`   | integer       | Number of reseller advertising accounts.                                                     |
| `app_ads.account_types.reseller.domain_count`    | integer       | Number of unique domains with reseller advertising accounts.                                 |
| `app_ads.line_count`                             | integer       | Total number of lines in the app-ads.txt file.                                               |
| `app_ads.variables`                              | array<string> | List of variables found in the app-ads.txt file.                                             |
| `app_ads.variable_count`                         | integer       | Number of variables found in the app-ads.txt file.                                           |
| `sellers`                                        | object        | Contains information about the sellers.json file.                                            |
| `sellers.present`                                | boolean       | Indicates if the sellers.json file is present.                                               |
| `sellers.status`                                 | integer       | HTTP status code of the sellers.json file response.                                          |
| `sellers.redirected`                             | boolean       | Indicates if the sellers.json file request was redirected.                                   |
| `sellers.redirected_to`                          | string        | URL to which the sellers.json resource was redirected.                                       |
| `sellers.seller_count`                           | integer       | Number of sellers listed in the sellers.json file.                                           |
| `sellers.seller_types`                           | object        | Types of sellers (publisher, intermediary, both) listed in the sellers.json file.            |
| `sellers.seller_types.publisher`                 | object        | Information about publisher sellers.                                                         |
| `sellers.seller_types.publisher.domains`         | array<string> | List of domains associated with publisher sellers.                                           |
| `sellers.seller_types.publisher.seller_count`    | integer       | Number of publisher sellers.                                                                 |
| `sellers.seller_types.publisher.domain_count`    | integer       | Number of unique domains associated with publisher sellers.                                  |
| `sellers.seller_types.intermediary`              | object        | Information about intermediary sellers.                                                      |
| `sellers.seller_types.intermediary.domains`      | array<string> | List of domains associated with intermediary sellers.                                        |
| `sellers.seller_types.intermediary.seller_count` | integer       | Number of intermediary sellers.                                                              |
| `sellers.seller_types.intermediary.domain_count` | integer       | Number of unique domains associated with intermediary sellers.                               |
| `sellers.seller_types.both`                      | object        | Information about sellers who are both publishers and intermediaries.                        |
| `sellers.seller_types.both.domains`              | array<string> | List of domains associated with sellers who are both publishers and intermediaries.          |
| `sellers.seller_types.both.seller_count`         | integer       | Number of sellers who are both publishers and intermediaries.                                |
| `sellers.seller_types.both.domain_count`         | integer       | Number of unique domains associated with sellers who are both publishers and intermediaries. |
| `sellers.passthrough_count`                      | integer       | Number of passthrough sellers listed in the sellers.json file.                               |
| `sellers.confidential_count`                     | integer       | Number of confidential sellers listed in the sellers.json file.                              |

Here's an example of the decoded object from `https://www.amazon.com/` page crawl:

```json
{
    "ads": {
        "present": true,
        "status": 200,
        "redirected": false,
        "account_count": 1,
        "account_types": {
            "direct": {
                "domains": [
                    "placeholder.example.com"
                ],
                "account_count": 1,
                "domain_count": 1
            },
            "reseller": {
                "domains": [],
                "account_count": 0,
                "domain_count": 0
            }
        },
        "line_count": 10,
        "variables": [],
        "variable_count": 0
    },
    "app_ads": {
        "present": true,
        "status": 200,
        "redirected": false,
        "account_count": 1,
        "account_types": {
            "direct": {
                "domains": [
                    "placeholder.example.com"
                ],
                "account_count": 1,
                "domain_count": 1
            },
            "reseller": {
                "domains": [],
                "account_count": 0,
                "domain_count": 0
            }
        },
        "line_count": 10,
        "variables": [],
        "variable_count": 0
    },
    "sellers": {
        "present": true,
        "redirected": true,
        "status": 200,
        "seller_count": 2732,
        "seller_types": {
            "publisher": {
                "domains": [
                    "cumuli.com",
                    "realself.com",
                    "trendscatchers.io",
                    ...
                ],
                "seller_count": 2199,
                "domain_count": 1923
            },
            "intermediary": {
                "domains": [
                    "bidsxchange.com",
                    "vuukle.com",
                    "vdo.ai",
                    ...
                ],
                "seller_count": 232,
                "domain_count": 172
            },
            "both": {
                "domains": [
                    "gourmetads.com",
                    "freestar.com",
                    "shinez.io",
                    ...
                ],
                "seller_count": 148,
                "domain_count": 134
            }
        },
        "passthrough_count": 0,
        "confidential_count": 2
    }
}
```
