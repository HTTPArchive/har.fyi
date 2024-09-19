---
title: Privacy custom metric
description: Reference docs for the feature struct
---

_Appears in: [`custom_metrics` struct](/reference/structs/custom-metrics/)_\
_As: [`privacy`](/reference/structs/custom-metrics/#privacy)_

## Schema

| Field name                                   | Type          | Description                                                                                                                                                                                    |
| -------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `privacy_wording_links`                      | array<object> | Links related to privacy policy.                                                                                                                                                               |
| `privacy_wording_links[i].text`              | string        | Title of the link.                                                                                                                                                                             |
| `iab_tcf_v1`                                 | object        | IAB TCF v1 settings.                                                                                                                                                                           |
| `iab_tcf_v1.present`                         | boolean       | Presence of IAB TCF v1.                                                                                                                                                                        |
| `iab_tcf_v1.data`                            | object        | TCF v1 vendor consents. [VendorConsents](https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/CMP%20JS%20API%20v1.1%20Final.md#vendorconsents-) |
| `iab_tcf_v1.compliant_setup`                 | boolean       | Verifies compliance of TCF v1 vendor consents.                                                                                                                                                 |
| `iab_tcf_v2`                                 | object        | IAB TCF v2 settings.                                                                                                                                                                           |
| `iab_tcf_v2.present`                         | boolean       | Presence of IAB TCF v2.                                                                                                                                                                        |
| `iab_tcf_v2.data`                            | object        | TCF v2 vendor consents. [TCData](https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/TCFv2/IAB%20Tech%20Lab%20-%20CMP%20API%20v2.md#tcdata)    |
| `iab_tcf_v2.compliant_setup`                 | boolean       | Verifies compliance of TCF v2 vendor consents.                                                                                                                                                 |
| `iab_usp`                                    | object        | Shows the presence of IAB U.S. Privacy String.                                                                                                                                                 |
| `iab_usp.present`                            | boolean       | Shows the presence of IAB U.S. Privacy String.                                                                                                                                                 |
| `iab_usp.privacy_string`                     | string        | IAB U.S. Privacy String.                                                                                                                                                                       |
| `navigator_doNotTrack`                       | boolean       | Indicates whether the browser's "Do Not Track" setting is enabled.                                                                                                                             |
| `navigator_globalPrivacyControl`             | boolean       | Indicates whether the browser's Global Privacy Control setting is enabled.                                                                                                                     |
| `document_permissionsPolicy`                 | boolean       | Indicates the presence of the Permissions Policy.                                                                                                                                              |
| `document_featurePolicy`                     | boolean       | Indicates the presence of the Feature Policy.                                                                                                                                                  |
| `referrerPolicy`                             | object        | Specifies the referrer policy for the entire document and individual requests.                                                                                                                 |
| `referrerPolicy.entire_document_policy`      | string        | Referrer policy for the entire document.                                                                                                                                                       |
| `referrerPolicy.individual_requests`         | string        | Referrer policy for individual requests.                                                                                                                                                       |
| `referrerPolicy.link_relations`              | string        | Referrer policy for link relations.                                                                                                                                                            |
| `media_devices`                              | object        | Tracks the usage of media device APIs like `enumerateDevices` and `getUserMedia`.                                                                                                              |
| `media_devices["API_NAME"]`                  | boolean       | Indicates usage of a particular API.                                                                                                                                                           |
| `geolocation`                                | object        | Tracks the usage of geolocation APIs like `getCurrentPosition` and `watchPosition`.                                                                                                            |
| `geolocation["API_NAME"]`                    | boolean       | Indicates usage of a particular API.                                                                                                                                                           |
| `fingerprinting`                             | object        | Tracks potential fingerprinting attempts by counting API calls and listing likely fingerprinting scripts.                                                                                      |
| `fingerprinting.counts`                      | object        | Counts of fingerprinting-related API calls.                                                                                                                                                    |
| `fingerprinting.counts["API_NAME"]`          | integer       | Counts of fingerprinting-related API calls.                                                                                                                                                    |
| `fingerprinting.likelyFingerprintingScripts` | array<string> | List of likely fingerprinting script URLs.                                                                                                                                                     |
| `request_hostnames_with_cname`               | object        | Lists hostnames with their corresponding CNAME records.                                                                                                                                        |
| `request_hostnames_with_cname.["HOSTNAME"]`  | array<string> | CNAME records for a given hostname.                                                                                                                                                            |
| `ccpa_link`                                  | object        | California Consumer Privacy Act (CCPA) compliance.                                                                                                                                             |
| `ccpa_link.hasCCPALink`                      | boolean       | Presence of a CCPA link.                                                                                                                                                                       |
| `ccpa_link.CCPALinkPhrases`                  | array<string> | Related CCPA link phrases.                                                                                                                                                                     |

Here's an example of the decoded object from `https://www.google.com/` page crawl:

```json
{
    "privacy_wording_links": [
        {
            "text": "Privacy"
        }
    ],
    "iab_tcf_v1": {
        "present": false,
        "data": null,
        "compliant_setup": null
    },
    "iab_tcf_v2": {
        "present": false,
        "data": null,
        "compliant_setup": null
    },
    "iab_usp": {
        "present": false,
        "privacy_string": null
    },
    "navigator_doNotTrack": false,
    "navigator_globalPrivacyControl": false,
    "document_permissionsPolicy": false,
    "document_featurePolicy": false,
    "referrerPolicy": {
        "entire_document_policy": "origin",
        "individual_requests": null,
        "link_relations": null
    },
    "media_devices": {
        "navigator_mediaDevices_enumerateDevices": false,
        "navigator_mediaDevices_getUserMedia": true,
        "navigator_mediaDevices_getDisplayMedia": false
    },
    "geolocation": {
        "navigator_geolocation_getCurrentPosition": false,
        "navigator_geolocation_watchPosition": false
    },
    "fingerprinting": {
        "counts": {
            "prefers-contrast": 4,
            "forced-colors": 15,
            "devicememory": 1,
            "hardwareconcurrency": 2,
            "localstorage": 5,
            "screen.width": 7,
            "screen.height": 5,
            "sessionstorage": 1,
            "gettimezoneoffset": 5,
            "maxtouchpoints": 5,
            "ontouchstart": 5,
            "navigator.vendor": 1,
            "getchanneldata": 4,
            "navigator.platform": 1
        },
        "likelyFingerprintingScripts": [
            "https://www.google.com/",
            "https://www.gstatic.com/og/_/js/k=og.qtm.en_US.ftxzKLuybBw.2019.O/rt=j/m=qabr,q_d,qcwid,qapid,qald,q_dg/exm=qaaw,qadd,qaid,qein,qhaw,qhba,qhbr,qhch,qhga,qhid,qhin/d=1/ed=1/rs=AA2YrTsOEv0aSAP39vut5xzjLXfdU4aRbQ",
            ...
        ]
    },
    "request_hostnames_with_cname": {
        "ogs.google.com": [
            "www3.l.google.com"
        ],
        "apis.google.com": [
            "plus.l.google.com"
        ]
    },
    "ccpa_link": {
        "hasCCPALink": false,
        "CCPALinkPhrases": []
    }
}
```
