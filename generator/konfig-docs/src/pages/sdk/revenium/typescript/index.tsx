import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function ReveniumTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="revenium-typescript-sdk"
      metaDescription={`In an era where APIs are pivotal across industries and solutions, Revenium (formerly HyperCurrent) accelerates digital product delivery, revenue generation, and ROI. With "zero code" installation, compatibility with major API management platforms, advanced monetization capabilities, flexible go-to-market tools, and next-gen observability, Revenium is the ideal solution for businesses seeking to turn ideas into income.
What is Revenium? Revenium is a pioneering and indispensable element in the periodic table of digital revenue generation. As a catalyst, it seamlessly exposes APIs and enterprise data assets to bridge the components of digital products to actualize revenue and drive ROI.
`}
      company="Revenium"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/revenium/logo.png"
      companyKebabCase="revenium"
      clientNameCamelCase="revenium"
      homepage="www.revenium.io/"
      lastUpdated={new Date("2024-03-25T20:51:20.847Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/revenium/favicon.png"
      contactUrl="https://revenium.io"
      contactEmail="info@revenium.io"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/revenium/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["api_monetization","data","monetization"]}
      methods={[
  {
    "url": "/users/{id}",
    "method": "deleteUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Delete a User",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The user id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{id}",
    "method": "getUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Retrieve a user",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The user id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A view of a user"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{id}",
    "method": "updateUserOperation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Update a user",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The user id",
        "example": "ID"
      },
      {
        "name": "username",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "gabe"
      },
      {
        "name": "emailAddress",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "gabe@revenium.io"
      },
      {
        "name": "isActive",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "organizationIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "B0NV05",
          "LA6m0o",
          "bAyD0L"
        ]
      },
      {
        "name": "administeredOrganizationIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "B0NV05",
          "LA6m0o",
          "bAyD0L"
        ]
      },
      {
        "name": "administeredTenantIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "B0NV05",
          "LA6m0o",
          "bAyD0L"
        ]
      },
      {
        "name": "roles",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "ROLE_ADMIN",
          "ROLE_API_CONSUMER"
        ]
      },
      {
        "name": "personas",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "CIO",
          "COO"
        ]
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A view of a user"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{id}/deactivate",
    "method": "deactivateUserOperation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Deactivate a user",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{id}/activate",
    "method": "activateUserOperation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Activate a user",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/traffic-anomalies/rules",
    "method": "createRule",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Traffic Anomalies",
    "typeScriptTag": "trafficAnomalies",
    "description": "Create a traffic anomaly rule",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "test"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "sAd12df"
      },
      {
        "name": "anomalyType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LATENCY_RATE_GATEWAY"
      },
      {
        "name": "anomalyCategory",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSET"
      },
      {
        "name": "thresholdValue",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 100
      },
      {
        "name": "thresholdCount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 10
      },
      {
        "name": "timeWindow",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "timeWindowUnit",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MINUTES"
      },
      {
        "name": "userIds",
        "schema": "array",
        "required": true,
        "description": "",
        "example": "[3kTMd,Dk12sc]"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/traffic-anomalies/rules",
    "method": "updateRule",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Traffic Anomalies",
    "typeScriptTag": "trafficAnomalies",
    "description": "Update a traffic anomaly rule",
    "parameters": [
      {
        "name": "ruleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "sAd12df"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "sAd12df"
      },
      {
        "name": "anomalyType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LATENCY_RATE_GATEWAY"
      },
      {
        "name": "anomalyCategory",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSET"
      },
      {
        "name": "thresholdValue",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 100
      },
      {
        "name": "thresholdCount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 10
      },
      {
        "name": "timeWindow",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "timeWindowUnit",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MINUTES"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/tiers/{id}",
    "method": "deleteTierOperation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tiers",
    "typeScriptTag": "tiers",
    "description": "Delete a tier",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The tier id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/tiers/{id}",
    "method": "getTier",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tiers",
    "typeScriptTag": "tiers",
    "description": "Get a tier",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The tier id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of Plan tiers"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/tiers/{id}",
    "method": "updateTier",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tiers",
    "typeScriptTag": "tiers",
    "description": "Update a tier",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The tier id",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "NsYmyL"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "NsYmyL"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "sBcTTs3"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "documentation"
      },
      {
        "name": "upTo",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1343234
      },
      {
        "name": "unitAmount",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 1343234
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of Plan tiers"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenants/{id}",
    "method": "deleteTenant",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tenants",
    "typeScriptTag": "tenants",
    "description": "Delete a tenant",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The tenant id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenants/{id}",
    "method": "getTenantById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tenants",
    "typeScriptTag": "tenants",
    "description": "Retrieve a tenant",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The tenant id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A view of a tenant"
      },
      {
        "statusCode": "404",
        "description": "A view of a tenant"
      }
    ]
  },
  {
    "url": "/tenants/{id}",
    "method": "updateTenantById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tenants",
    "typeScriptTag": "tenants",
    "description": "Update a tenant",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The tenant id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "aviation.aircraft"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AcmeSoft"
      },
      {
        "name": "profile",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MONETIZATION"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A view of a tenant"
      },
      {
        "statusCode": "404",
        "description": "A view of a tenant"
      }
    ]
  },
  {
    "url": "/subscription-notification",
    "method": "createSubscriberNotification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscription Notifications",
    "typeScriptTag": "subscriptionNotifications",
    "description": "Create an subscriber notification",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTmd"
      },
      {
        "name": "affectedProductLicenseOwner",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ALLPLOWNERS"
      },
      {
        "name": "subject",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "This is a test"
      },
      {
        "name": "productIds",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "selectedOwners",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/subscription-notification",
    "method": "updateSubscriberNotification",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Subscription Notifications",
    "typeScriptTag": "subscriptionNotifications",
    "description": "Update a subscriber notification",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "aSm1Fsv"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTmd"
      },
      {
        "name": "affectedProductLicenseOwner",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ALLPLOWNERS"
      },
      {
        "name": "subject",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "This is a test"
      },
      {
        "name": "selectedOwners",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "productIds",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/stored-filters/{filterId}",
    "method": "deleteFilterById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Stored filters",
    "typeScriptTag": "storedFilters",
    "description": "Delete an stored filter",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "Id of asset's organization",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "filterId",
        "schema": "string",
        "required": true,
        "description": "The stored filter id",
        "example": "FILTERID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/stored-filters/{filterId}",
    "method": "getFilterById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stored filters",
    "typeScriptTag": "storedFilters",
    "description": "Get an stored filter",
    "parameters": [
      {
        "name": "filterId",
        "schema": "string",
        "required": true,
        "description": "The stored filter id",
        "example": "FILTERID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/stored-filters/{filterId}",
    "method": "updateFilterById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Stored filters",
    "typeScriptTag": "storedFilters",
    "description": "Update an stored filter",
    "parameters": [
      {
        "name": "filterId",
        "schema": "string",
        "required": true,
        "description": "The stored filter id",
        "example": "FILTERID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "filterName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILTERNAME"
      },
      {
        "name": "rawJsonFilters",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RAWJSONFILTERS"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "userEmail",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USEREMAIL"
      },
      {
        "name": "methods",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "assets",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "applications",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "userDomains",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "userEmails",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "consumingOrganizations",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "responseCodes",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "maxLatencies",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "avgLatencies",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/sla-definitions/{id}",
    "method": "deleteDefinition",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "SLA Definitions",
    "typeScriptTag": "slaDefinitions",
    "description": "Delete a sla definition",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The sla definition id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/sla-definitions/{id}",
    "method": "getDefinition",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SLA Definitions",
    "typeScriptTag": "slaDefinitions",
    "description": "Retrieve a sla definition",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The sla definition id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An SLA definition"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/sla-definitions/{id}",
    "method": "updateSlaDefinition",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "SLA Definitions",
    "typeScriptTag": "slaDefinitions",
    "description": "Update an sla definition",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The sla definition id",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Production SLA (99.9% Uptime)"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "baseAdjustment",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 100
      },
      {
        "name": "pricingRuleIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "3kTMd",
          "K3TMs",
          "mmTFd"
        ]
      },
      {
        "name": "violationRules",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An SLA definition"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/sites",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sites",
    "typeScriptTag": "sites",
    "description": "List sites",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "Id of site's organization",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/sites",
    "method": "createSite",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sites",
    "typeScriptTag": "sites",
    "description": "Create an site",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My Mobile Site"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "aSjk123"
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "81d8c8a0-9383-45ff-8b63-c8a4c75d05bf"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/sites",
    "method": "updateSite",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Sites",
    "typeScriptTag": "sites",
    "description": "Update a site",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "aSm1Fsv"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "aSjk123"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My Mobile Site"
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "81d8c8a0-9383-45ff-8b63-c8a4c75d05bf"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/site-provider/configurations/{id}",
    "method": "deleteConfiguration",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Site Provider Configurations",
    "typeScriptTag": "siteProviderConfigurations",
    "description": "Delete an site configuration",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The sit eprovider configuration id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/site-provider/configurations/{id}",
    "method": "getConfiguration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Site Provider Configurations",
    "typeScriptTag": "siteProviderConfigurations",
    "description": "Retrieve a site provider configuration",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The site provider configuration id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/site-provider/configurations/{id}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Site Provider Configurations",
    "typeScriptTag": "siteProviderConfigurations",
    "description": "Update a site provider configuration",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The site provider configuration id",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Mulesoft Sites"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "siteProvider",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "MulesoftACMSiteProvider"
      },
      {
        "name": "configurationProperties",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "username=foo,environment=production,loginUr=https://foo.com"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/products/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Delete a product",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The product id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/products/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Get a product",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The product id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Product"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/products/{id}",
    "method": "updateProductById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Update a product",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The product id",
        "example": "ID"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "tag1",
          "tag2",
          "tag3"
        ]
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Truly an awesome product"
      },
      {
        "name": "version",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1.0.0"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "my-awesome-product"
      },
      {
        "name": "shortDescription",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "truly an awesome product"
      },
      {
        "name": "link",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://portal.acmesoft/com/my-awesome-product"
      },
      {
        "name": "baseCost",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 100
      },
      {
        "name": "settlementPeriod",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "MONTHLY"
      },
      {
        "name": "account",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "23bf56cb-2df6-490e-a039-5755866e0c1c"
      },
      {
        "name": "transactionType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBSCRIPTION"
      },
      {
        "name": "paymentConfigurationId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "cVks1f"
      },
      {
        "name": "pricingRuleIds",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "3kTMd",
          "K3TMs",
          "mmTFd"
        ]
      },
      {
        "name": "assetIds",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "3kTMd",
          "K3TMs",
          "mmTFd"
        ]
      },
      {
        "name": "productIds",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "3kTMd",
          "K3TMs",
          "mmTFd"
        ]
      },
      {
        "name": "slaDefinitionIds",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "3kTMd",
          "K3TMs",
          "mmTFd"
        ]
      },
      {
        "name": "cpqStaged",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "defaultQuota",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "defaultQuotaNotificationThreshold",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "sendDefaultNotificationOnInvoice",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "notificationAddressesOnInvoice",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "overageRatePerTransaction",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "subscriptionIncludedTransactions",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "isStaged",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1234"
      },
      {
        "name": "terms",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "termsDisplayName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalTerms1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalTermsDisplayName1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalTerms2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalTermsDisplayName2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "12345abcd"
      },
      {
        "name": "displayPriority",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "notifyClientOnInvoice",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "notifyClientTrialAboutToExpire",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "audienceRestriction",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER"
      },
      {
        "name": "externalLabel",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12345abcd"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Production"
      },
      {
        "name": "apimConfigurationId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "namedOrganizations",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "3kTMd",
          "K3TMs",
          "mmTFd"
        ]
      },
      {
        "name": "plan",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "performanceDefinition",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "subscriptionAllowMidPeriodCancellation",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "productLockedToV1",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "logo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "staged",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Product"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/products/{id}/remove-trial",
    "method": "removeTrialFromProduct",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Remove trial from a product",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The product id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Product"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/product/families/{id}",
    "method": "deleteOperation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Product Family",
    "typeScriptTag": "productFamily",
    "description": "Delete a product family",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The product family id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/product/families/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product Family",
    "typeScriptTag": "productFamily",
    "description": "Get an product family",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The product family id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A product family that can be used to group products"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/product/families/{id}",
    "method": "updateFamilyOperation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Product Family",
    "typeScriptTag": "productFamily",
    "description": "Update an product family",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The product family id",
        "example": "ID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "sBcTTs3"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "sBcTTs3"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a Product Family"
      },
      {
        "name": "allowProductFamilyDowngrade",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "allowProductFamilyUpgrade",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "productFamilyTiers",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A product family that can be used to group products"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/product-keys/{productKeyId}/upgrade-product-to/{productId}",
    "method": "upgradeProductTo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Product Keys",
    "typeScriptTag": "productKeys",
    "description": "Upgrade a product key's product",
    "parameters": [
      {
        "name": "productKeyId",
        "schema": "string",
        "required": true,
        "description": "The product key id",
        "example": "PRODUCTKEYID"
      },
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "The product to upgrade the product key to",
        "example": "PRODUCTID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/product-keys/{productKeyId}/downgrade-product-to/{productId}",
    "method": "downgradeProductTo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Product Keys",
    "typeScriptTag": "productKeys",
    "description": "Downgrade a product key's product",
    "parameters": [
      {
        "name": "productKeyId",
        "schema": "string",
        "required": true,
        "description": "The product key id",
        "example": "PRODUCTKEYID"
      },
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "The product to downgrade the product key to",
        "example": "PRODUCTID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/product-keys/{id}",
    "method": "getKeyById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product Keys",
    "typeScriptTag": "productKeys",
    "description": "Retrieve a product key",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The product key id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Product Key to accessing an Product's Asset(s)"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/product-keys/{id}",
    "method": "updateKeyOperation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Product Keys",
    "typeScriptTag": "productKeys",
    "description": "Update a product key",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Product Key ID",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Product Key #1234"
      },
      {
        "name": "productIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "3kTMd",
          "K3TMs",
          "mmTFd"
        ]
      },
      {
        "name": "valid",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "slaDefinitionIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "3kTMd",
          "K3TMs",
          "mmTFd"
        ]
      },
      {
        "name": "pricingRuleIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "3kTMd",
          "K3TMs",
          "mmTFd"
        ]
      },
      {
        "name": "expiration",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1620579969000
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalQuoteId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "quota",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "subscriptionQuotaCount",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "quotaConsumed",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "quotaNotificationThreshold",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "applications",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "sendDefaultNotificationOnCreation",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "notificationAddressesOnCreation",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "notificationAddressesOnQuotaThreshold",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "consumerOrganizationId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "sa3kaL"
      },
      {
        "name": "disableProductKeyOnPaymentFailed",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "namedConsumers",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "namedOrganizations",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "consumerDataProviderId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "subscriptionAllowMidPeriodCancellation",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "notifyClientTrialAboutToExpire",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "upgradeViaPaymentFlag",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Product Key to accessing an Product's Asset(s)"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/product-keys/reactivate/{productKeyId}",
    "method": "reactivateKeyOperation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Product Keys",
    "typeScriptTag": "productKeys",
    "description": "Reactivate a product key",
    "parameters": [
      {
        "name": "productKeyId",
        "schema": "string",
        "required": true,
        "description": "The product key id",
        "example": "PRODUCTKEYID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/product-keys/force-reset/{productKeyId}",
    "method": "forceResetKey",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Product Keys",
    "typeScriptTag": "productKeys",
    "description": "Force reset a product key",
    "parameters": [
      {
        "name": "productKeyId",
        "schema": "string",
        "required": true,
        "description": "The product key id",
        "example": "PRODUCTKEYID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/pricing-rules/{ruleId}",
    "method": "deleteRule",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Pricing Rules",
    "typeScriptTag": "pricingRules",
    "description": "Delete a pricing rule",
    "parameters": [
      {
        "name": "ruleId",
        "schema": "string",
        "required": true,
        "description": "The rule id",
        "example": "RULEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/pricing-rules/{ruleId}",
    "method": "getRuleById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pricing Rules",
    "typeScriptTag": "pricingRules",
    "description": "Get a pricing rule",
    "parameters": [
      {
        "name": "ruleId",
        "schema": "string",
        "required": true,
        "description": "The rule id",
        "example": "RULEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Pricing Rule"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/pricing-rules/{ruleId}",
    "method": "updateRuleById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Pricing Rules",
    "typeScriptTag": "pricingRules",
    "description": "Update a pricing rule",
    "parameters": [
      {
        "name": "ruleId",
        "schema": "string",
        "required": true,
        "description": "The rule id",
        "example": "RULEID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "compute-cost-pricing-rule"
      },
      {
        "name": "script",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "lineItem.product.baseCost * 0.20"
      },
      {
        "name": "pricingProperties",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "defaultExecutionNote",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "sample execution note"
      },
      {
        "name": "target",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHARGE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A Pricing Rule"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/plans/{id}",
    "method": "deletePlan",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Plans",
    "typeScriptTag": "plans",
    "description": "Delete a plan",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The plan id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/plans/{id}",
    "method": "getPlan",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Plans",
    "typeScriptTag": "plans",
    "description": "Get an plan",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The plan id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/plans/{id}",
    "method": "updatePlanById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Plans",
    "typeScriptTag": "plans",
    "description": "Update an plan",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The plan id",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "sBcTTs3"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NsYmyL"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "sBcTTs3"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a plan"
      },
      {
        "name": "graduated",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "template",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "planType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBSCRIPTION"
      },
      {
        "name": "charge",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 3243243
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USD"
      },
      {
        "name": "period",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "MONTH"
      },
      {
        "name": "periodCount",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 3
      },
      {
        "name": "trialPeriod",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "MONTH"
      },
      {
        "name": "trialPeriodCount",
        "schema": "array",
        "required": false,
        "description": "",
        "example": 4
      },
      {
        "name": "prePaySetups",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "features",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "elements",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "setups",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/plans/{id}/remove-trial",
    "method": "removeTrialOperation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Plans",
    "typeScriptTag": "plans",
    "description": "Remove trial from a plan",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The plan id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/plan-elements/{id}",
    "method": "deletePlanElement",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Elements",
    "typeScriptTag": "elements",
    "description": "Delete a plan element",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The plan element id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/plan-elements/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Elements",
    "typeScriptTag": "elements",
    "description": "Get an plan element",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The plan element id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/plan-elements/{id}",
    "method": "updateElementById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Elements",
    "typeScriptTag": "elements",
    "description": "Update a plan element",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The plan element id",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "sBcTTs3"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NsYmyL"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "sBcTTs3"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Country"
      },
      {
        "name": "elementDefinitionId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "sBcTTs3"
      },
      {
        "name": "distinctValue",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FRANCE"
      },
      {
        "name": "flatAmount",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 34.33
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/pay/customer/{customerId}",
    "method": "outstandingInvoices",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Pay outstanding invoices",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "Customer id",
        "example": "CUSTOMERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/force-reset/product/{productId}/user/{userId}",
    "method": "forceResetProductUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Force reset payment record and payment customer for testing",
    "parameters": [
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "Product id",
        "example": "PRODUCTID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User id",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/customers/{id}/pay",
    "method": "payOutstandingInvoices",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Payment Methods",
    "typeScriptTag": "paymentMethods",
    "description": "Pay all outstanding invoices for payment customer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The payment customer id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Payment Customer"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/customers/{customerId}/default/method/{methodId}",
    "method": "setDefaultMethod",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Payment Methods",
    "typeScriptTag": "paymentMethods",
    "description": "Set default payment method for a payment customer",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "The payment customer id",
        "example": "CUSTOMERID"
      },
      {
        "name": "methodId",
        "schema": "string",
        "required": true,
        "description": "The default payment method id",
        "example": "METHODID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Payment Customer"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/customers/force-reset/{id}",
    "method": "forceResetCustomer",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Payment Methods",
    "typeScriptTag": "paymentMethods",
    "description": "Force reset payment customer for testing",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The payment customer id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Payment Customer"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/customers/force-reset/user/{userId}/configuration/{paymentConfigurationId}",
    "method": "forceResetCustomerForTesting",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Payment Methods",
    "typeScriptTag": "paymentMethods",
    "description": "Force reset payment customer for testing",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User Id",
        "example": "USERID"
      },
      {
        "name": "paymentConfigurationId",
        "schema": "string",
        "required": true,
        "description": "Product Id",
        "example": "PAYMENTCONFIGURATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/configurations/{id}",
    "method": "deleteConfiguration",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Payment Configurations",
    "typeScriptTag": "paymentConfigurations",
    "description": "Delete a payment configuration",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The payment configuration id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/configurations/{id}",
    "method": "getConfiguration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payment Configurations",
    "typeScriptTag": "paymentConfigurations",
    "description": "Retrieve a payment configuration",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The payment configuration id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Payment Configuration"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/configurations/{id}",
    "method": "updateConfigurationOperation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Payment Configurations",
    "typeScriptTag": "paymentConfigurations",
    "description": "Update a payment configuration",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The payment configuration id",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Stripe (Production)"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "paymentProvider",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "STRIPE"
      },
      {
        "name": "configurationProperties",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "username=foo,environment=production,loginUr=https://foo.com"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Payment Configuration"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/complete-subscription/product/{productId}/user/{userId}",
    "method": "getProductKey",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Get product key for payment",
    "parameters": [
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "Product Id",
        "example": "PRODUCTID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User Id",
        "example": "USERID"
      },
      {
        "name": "applicationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contractExternalId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A report on current status of payment"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/cancel/product/{productId}/user/{userId}",
    "method": "cancelProductPayment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Cancel payment",
    "parameters": [
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "Product Id",
        "example": "PRODUCTID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User Id",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Delete an organization",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Organization ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/{id}",
    "method": "getOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Retrieve an organization",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A view of an organization"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/{id}",
    "method": "updateOrganizationOperation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Update an organization",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Marketing"
      },
      {
        "name": "tenantId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "B0NV05"
      },
      {
        "name": "parentId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "B0NV05"
      },
      {
        "name": "invoiceNotificationTemplate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "invoiceTemplate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "productKeyCreationNotificationTemplate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "productKeyUpgradeNotificationTemplate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "productKeyQuotaNotificationTemplate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "productKeyTierQuotaNotificationTemplate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "emailFromAddress",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "domainAliases",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "acmesoft.org",
          "acmesoft.io"
        ]
      },
      {
        "name": "address1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "postalCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "emailAddress",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "instructionText",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "helpText",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "billingEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "billingPhoneNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "logo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12345abcd"
      },
      {
        "name": "assetAutoDiscoveryEnabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "invoiceReflectsProduct",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/notification-provider/configurations/{id}",
    "method": "removeConfiguration",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Notification Provider Configurations",
    "typeScriptTag": "notificationProviderConfigurations",
    "description": "Delete a notification provider configuration",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The notification provider configuration id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/notification-provider/configurations/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notification Provider Configurations",
    "typeScriptTag": "notificationProviderConfigurations",
    "description": "Retrieve a notification provider configuration",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The notification provider configuration id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/notification-provider/configurations/{id}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Notification Provider Configurations",
    "typeScriptTag": "notificationProviderConfigurations",
    "description": "Update a notification provider configuration",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The notification provider configuration id",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Slack (Production)"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "notificationProviderProvider",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SLACK"
      },
      {
        "name": "configurationProperties",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "username=foo,environment=production,loginUr=https://foo.com"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/notification-custom-content",
    "method": "updateTemplate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Notification Custom Content",
    "typeScriptTag": "notificationCustomContent",
    "description": "Update a notification template",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "aSjk123"
      },
      {
        "name": "productKeyCreationNotificationContent",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is a body of text"
      },
      {
        "name": "productKeyDeletionNotificationContent",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is a body of text"
      },
      {
        "name": "productKeyUpgradeNotificationContent",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is a body of text"
      },
      {
        "name": "productKeyActivationNotificationContent",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is a body of text"
      },
      {
        "name": "productKeyInvalidNotificationContent",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is a body of text"
      },
      {
        "name": "productKeyFailedPaymentContent",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is a body of text"
      },
      {
        "name": "successfulPaymentNotificationContent",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is a body of text"
      },
      {
        "name": "freeTrialNotificationContent:",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is a test"
      },
      {
        "name": "productKeyCreationNotificationSubject",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is a subject of text"
      },
      {
        "name": "productKeyDeletionNotificationSubject",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is subject of text"
      },
      {
        "name": "productKeyUpgradeNotificationSubject",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is a test"
      },
      {
        "name": "productKeyActivationNotificationSubject",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is a test"
      },
      {
        "name": "productKeyInvalidNotificationSubject",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is a test"
      },
      {
        "name": "productKeyFailedPaymentSubject",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is a body of text"
      },
      {
        "name": "successfulPaymentNotificationSubject",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is a test"
      },
      {
        "name": "freeTrialNotificationSubject",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is a test"
      },
      {
        "name": "invoiceNotificationContent",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is a test"
      },
      {
        "name": "invoiceNotificationSubject",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is a test"
      },
      {
        "name": "quotaNotificationContent",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is a test"
      },
      {
        "name": "quotaNotificationSubject",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is a test"
      },
      {
        "name": "quotaTierNotificationContent",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is a test"
      },
      {
        "name": "quotaTierNotificationSubject",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is a test"
      },
      {
        "name": "logo",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/identity-provider/configurations/{id}",
    "method": "deleteProviderConfig",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Identity Provider Configurations",
    "typeScriptTag": "identityProviderConfigurations",
    "description": "Delete an Identity Provider Configuration",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Identity Provider Configuration ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/identity-provider/configurations/{id}",
    "method": "getConfiguration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Identity Provider Configurations",
    "typeScriptTag": "identityProviderConfigurations",
    "description": "Retrieve an Identity Provider Configuration",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The API Management Configuration ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Identity provider configuration"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/identity-provider/configurations/{id}",
    "method": "updateProviderConfig",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Identity Provider Configurations",
    "typeScriptTag": "identityProviderConfigurations",
    "description": "Update an identity provider management configuration",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The identity provider configuration id",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "AUTH0"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "identityProvider",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "AUTH0"
      },
      {
        "name": "configurationProperties",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "username=foo,environment=production,loginUr=https://foo.com"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Identity provider configuration"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/features/{id}",
    "method": "deleteFeatureById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Features",
    "typeScriptTag": "features",
    "description": "Delete a feature",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Feature ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/features/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Features",
    "typeScriptTag": "features",
    "description": "Get an feature",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The feature id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of plan features"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/features/{id}",
    "method": "updateFeatureById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Features",
    "typeScriptTag": "features",
    "description": "Update an feature",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The feature id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "access to documentation"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NsYmyL"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NsYmyL"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "sBcTTs3"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "documentation"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of plan features"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/export/configurations/{id}",
    "method": "deleteConfiguration",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Export Configurations",
    "typeScriptTag": "exportConfigurations",
    "description": "Delete an export configuration",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The export configuration's id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/export/configurations/{id}",
    "method": "getConfiguration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Export Configurations",
    "typeScriptTag": "exportConfigurations",
    "description": "Retrieve an export configuration",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The export configuration id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/export/configurations/{id}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Export Configurations",
    "typeScriptTag": "exportConfigurations",
    "description": "Update an export configuration",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The export configuration id",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Email Export (SAP)"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "exportProvider",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "FILESYSTEM"
      },
      {
        "name": "configurationProperties",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "username=foo,environment=production,loginUr=https://foo.com"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/element-definitions/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Element Definitions",
    "typeScriptTag": "elementDefinitions",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The element definition id",
        "example": "ID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/element-definitions/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Element Definitions",
    "typeScriptTag": "elementDefinitions",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The element definition id",
        "example": "ID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An ElementDefinition/Service being metered by the platform"
      }
    ]
  },
  {
    "url": "/element-definitions/{id}",
    "method": "updatePricingRule",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Element Definitions",
    "typeScriptTag": "elementDefinitions",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The element definition id",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "elementDescription",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An ElementDefinition/Service being metered by the platform"
      }
    ]
  },
  {
    "url": "/consumer-data-provider/configurations/{id}",
    "method": "deleteConfiguration",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Consumer Data Provider Configurations",
    "typeScriptTag": "consumerDataProviderConfigurations",
    "description": "Delete a data provider configuration",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The consumer data provider configuration id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/consumer-data-provider/configurations/{id}",
    "method": "getConfiguration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Consumer Data Provider Configurations",
    "typeScriptTag": "consumerDataProviderConfigurations",
    "description": "Retrieve an data provider configuration",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The data provider configuration id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A consumerDataProviderConfiguration associated with the license"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/consumer-data-provider/configurations/{id}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Consumer Data Provider Configurations",
    "typeScriptTag": "consumerDataProviderConfigurations",
    "description": "Update an data provider configuration",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The consumer data provider configuration id",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Subscription (Yearly)"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "consumerDataProviderProvider",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "SNOWFLAKE"
      },
      {
        "name": "configurationProperties",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "username=foo,environment=production,loginUr=https://foo.com"
      },
      {
        "name": "createSQL",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATESQL"
      },
      {
        "name": "querySQL",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUERYSQL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A consumerDataProviderConfiguration associated with the license"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/billing-metadata/{id}",
    "method": "deleteOperation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Billing Metadata",
    "typeScriptTag": "billingMetadata",
    "description": "Delete billing metadata",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The billing metadata id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/billing-metadata/{id}",
    "method": "updateOperation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Billing Metadata",
    "typeScriptTag": "billingMetadata",
    "description": "Update an billing metadata",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The billing metadata id",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      },
      {
        "name": "target",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{id}",
    "method": "deleteAsset",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Assets",
    "typeScriptTag": "assets",
    "description": "Delete an asset",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The asset id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Assets",
    "typeScriptTag": "assets",
    "description": "Get an asset",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The asset id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An asset being metered"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{id}",
    "method": "updateAssetById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Assets",
    "typeScriptTag": "assets",
    "description": "Update an asset",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The asset id",
        "example": "ID"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "tag1",
          "tag2",
          "tag3"
        ]
      },
      {
        "name": "version",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1.0.0"
      },
      {
        "name": "assetType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "API"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "c7a01027-9f5c-4e26-9ad5-3608897a723d"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NsYmyL"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "my-awesome-asset"
      },
      {
        "name": "The description of the asset",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "truly an awesome product"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "sBcTTs3"
      },
      {
        "name": "productIds",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "sQYmyQ",
          "jQYkyl",
          "a92j3"
        ]
      },
      {
        "name": "slaDefinitionIds",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "3kTMd",
          "K3TMs",
          "mmTFd"
        ]
      },
      {
        "name": "properties",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12345abcd"
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1234"
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "/api/products"
      },
      {
        "name": "method",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "POST"
      },
      {
        "name": "applicationAutoDiscoveryEnabled",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "classificationPatterns",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "elementDefinitionIds",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "logo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "devPortalLink",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "http://url.com"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An asset being metered"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/applications",
    "method": "listApplications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "List applications",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "Id of application's organization",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "count",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/applications",
    "method": "createNewApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Create an application",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "tag1",
          "tag2",
          "tag3"
        ]
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My Mobile App"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "aSjk123"
      },
      {
        "name": "organizationName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Acme Financial, Inc"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "aSjk123"
      },
      {
        "name": "userEmailAddress",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "aSjk123"
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "81d8c8a0-9383-45ff-8b63-c8a4c75d05bf"
      },
      {
        "name": "productKeyIds",
        "schema": "array",
        "required": true,
        "description": "",
        "example": "['aca234', 'aBsSqs', '1sDzsd']"
      },
      {
        "name": "consumerOrganizationId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "sa3kaL"
      },
      {
        "name": "consumerOrganizationName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Acme Financial, Inc"
      },
      {
        "name": "identityProviderName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "aSjk123"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "An application"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/applications",
    "method": "updateApplicationOperation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Update an application",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "tag1",
          "tag2",
          "tag3"
        ]
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "aBDk341"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My Mobile Application"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "aSjk123"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "aSjk123"
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "81d8c8a0-9383-45ff-8b63-c8a4c75d05bf"
      },
      {
        "name": "productKeyIds",
        "schema": "array",
        "required": true,
        "description": "",
        "example": "['aca234', 'aBsSqs', '1sDzsd']"
      },
      {
        "name": "consumerOrganizationId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "sa3kaL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An application"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/apim/configurations/{id}",
    "method": "deleteConfiguration",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "API Management Configurations",
    "typeScriptTag": "apiManagementConfigurations",
    "description": "Delete an API management configuration",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The API management configuration id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/apim/configurations/{id}",
    "method": "getConfigurationById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API Management Configurations",
    "typeScriptTag": "apiManagementConfigurations",
    "description": "Retrieve an API management configuration",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The API management configuration id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API management configuration"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/apim/configurations/{id}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "API Management Configurations",
    "typeScriptTag": "apiManagementConfigurations",
    "description": "Update an API management configuration",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The API management configuration id",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "MULESOFT"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "apimProvider",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "MULESOFT"
      },
      {
        "name": "configurationProperties",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "username=foo,environment=production,loginUr=https://foo.com"
      },
      {
        "name": "authenticationMechanism",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONNECTED_APP"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API management configuration"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/account-tier",
    "method": "listAllTiers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account Tiers",
    "typeScriptTag": "accountTiers",
    "description": "Get all account tiers",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/account-tier",
    "method": "createAccountTier",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account Tiers",
    "typeScriptTag": "accountTiers",
    "description": "Create an AccountTier",
    "parameters": [
      {
        "name": "accountTierType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNTTIERTYPE"
      },
      {
        "name": "selfServiceIncludedEvents",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/account-tier",
    "method": "updateTierOperation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Account Tiers",
    "typeScriptTag": "accountTiers",
    "description": "Update an account tier",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "selfServiceIncludedEvents",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/account-tier/{id}/upgrade",
    "method": "upgradeTier",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Account Tiers",
    "typeScriptTag": "accountTiers",
    "description": "Upgrade account tier",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The account tier ID",
        "example": "ID"
      },
      {
        "name": "product to upgrade to",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRODUCT TO UPGRADE TO"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/account-tier/{id}/sync",
    "method": "syncTierData",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Account Tiers",
    "typeScriptTag": "accountTiers",
    "description": "Sync account tier data",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The account tier id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/account-tier/{id}/payment-methods/{paymentMethodId}/default",
    "method": "setDefaultPaymentMethod",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Account Tiers",
    "typeScriptTag": "accountTiers",
    "description": "Set default payment method",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The account tier id",
        "example": "ID"
      },
      {
        "name": "paymentMethodId",
        "schema": "string",
        "required": true,
        "description": "The payment method ID",
        "example": "PAYMENTMETHODID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/account-tier/{id}/downgrade",
    "method": "downgradeTierById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Account Tiers",
    "typeScriptTag": "accountTiers",
    "description": "Downgrade account tier",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The account tier id",
        "example": "ID"
      },
      {
        "name": "product to downgrade to",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRODUCT TO DOWNGRADE TO"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users",
    "method": "getUserList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Retrieve a lst of users for the supplied organzization / tenant",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": "The Organization ID"
      },
      {
        "name": "tenantId",
        "schema": "string",
        "required": false,
        "description": "The Tenant ID"
      },
      {
        "name": "currentOrganizationId",
        "schema": "string",
        "required": false,
        "description": "The current organization ID"
      },
      {
        "name": "roleNames",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users",
    "method": "createUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Create a user",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "gabe"
      },
      {
        "name": "emailAddress",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "gabe@pipedpiper.com"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "changeme"
      },
      {
        "name": "isActive",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "organizationIds",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "B0NV05",
          "LA6m0o",
          "bAyD0L"
        ]
      },
      {
        "name": "roles",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "ROLE_ADMIN",
          "ROLE_API_CONSUMER"
        ]
      },
      {
        "name": "administeredOrganizationIds",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "B0NV05",
          "LA6m0o",
          "bAyD0L"
        ]
      },
      {
        "name": "administeredTenantIds",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "B0NV05",
          "LA6m0o",
          "bAyD0L"
        ]
      },
      {
        "name": "personas",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "CIO",
          "COO"
        ]
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "John"
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Smith"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A view of a user"
      }
    ]
  },
  {
    "url": "/tiers",
    "method": "listOwnedByOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tiers",
    "typeScriptTag": "tiers",
    "description": "List of tiers owned by a organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "Id of tiers organization",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of Plan tiers"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/tiers",
    "method": "createTier",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tiers",
    "typeScriptTag": "tiers",
    "description": "Create a tier",
    "parameters": [
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NsYmyL"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "sBcTTs3"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Free Tier"
      },
      {
        "name": "upTo",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1343234
      },
      {
        "name": "unitAmount",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 1343234
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "List of Plan tiers"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenants",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tenants",
    "typeScriptTag": "tenants",
    "description": "List tenants",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenants",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tenants",
    "typeScriptTag": "tenants",
    "description": "Create a tenant",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "aviation.aircraft"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AcmeSoft"
      },
      {
        "name": "profile",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MONETIZATION"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A view of a tenant"
      }
    ]
  },
  {
    "url": "/templates",
    "method": "createTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Create a template",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "aSjk123"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Invoice Template"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INVOICE_NOTIFICATION"
      },
      {
        "name": "content",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENT"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/stored-filters",
    "method": "createStoredfilter",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Stored filters",
    "typeScriptTag": "storedFilters",
    "description": "Create an storedfilter",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "filterName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILTERNAME"
      },
      {
        "name": "rawJsonFilters",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RAWJSONFILTERS"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "userEmail",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USEREMAIL"
      },
      {
        "name": "methods",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "assets",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "applications",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "userDomains",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "userEmails",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "consumingOrganizations",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "responseCodes",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "maxLatencies",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "avgLatencies",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/sla-violations/review",
    "method": "reviewAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SLA Violations",
    "typeScriptTag": "slaViolations",
    "description": "Review sla violations",
    "parameters": [
      {
        "name": "violationIds",
        "schema": "array",
        "required": true,
        "description": "",
        "example": "[3kTMd,d2dMs]"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A service level Aareement violation"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/sla-definitions",
    "method": "getByOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SLA Definitions",
    "typeScriptTag": "slaDefinitions",
    "description": "List sla definitions by organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/sla-definitions",
    "method": "createDefinition",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SLA Definitions",
    "typeScriptTag": "slaDefinitions",
    "description": "Create a sla definition",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Enterprise SLA (99.9% Uptime)"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OWNERID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "baseAdjustment",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 100
      },
      {
        "name": "pricingRuleIds",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "3kTMd",
          "K3TMs",
          "mmTFd"
        ]
      },
      {
        "name": "violationRules",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "An SLA definition"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/site-provider/configurations",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Site Provider Configurations",
    "typeScriptTag": "siteProviderConfigurations",
    "description": "List site provider configurations",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "paged",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/site-provider/configurations",
    "method": "createConsumerDataProviderConfiguration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Site Provider Configurations",
    "typeScriptTag": "siteProviderConfigurations",
    "description": "Create an consumerdataprovider configuration",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Mulesoft Sites"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "siteProvider",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MulesoftACMSiteProvider"
      },
      {
        "name": "configurationProperties",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "username=foo,environment=production,loginUr=https://foo.com"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/registration",
    "method": "createUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Registration",
    "typeScriptTag": "registration",
    "description": "",
    "parameters": [
      {
        "name": "emailAddress",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "gabe@pipedpiper.com"
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Betram"
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Gilfoyle"
      },
      {
        "name": "companyName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "pipedpiper.com"
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "555-555-5555"
      },
      {
        "name": "role",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CTO"
      },
      {
        "name": "gateway",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "MuleSoft"
      },
      {
        "name": "profileType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MONETIZATION"
      },
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1234"
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1234"
      },
      {
        "name": "testMode",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response for self-service signup requests"
      }
    ]
  },
  {
    "url": "/products",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "List products",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": "The organization id"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": false,
        "description": "The owner id"
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cpqStaged",
        "schema": "boolean",
        "required": false,
        "description": "Retrieve cpq staged products?"
      },
      {
        "name": "cpqConfigurationId",
        "schema": "string",
        "required": false,
        "description": "The cpq configuration id"
      },
      {
        "name": "expand",
        "schema": "string",
        "required": false,
        "description": "Attributes to expand (any combination of the following allowed): [calls, spends, consumers]"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "The starting timestamp (for expanded sla violations and invoices)"
      },
      {
        "name": "end",
        "schema": "integer",
        "required": false,
        "description": "The ending timestamp (for expanded sla violations and invoices)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/products",
    "method": "createProduct",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Create a product",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "tag1",
          "tag2",
          "tag3"
        ]
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "truly an awesome product"
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1.0.0"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "my-awesome-product"
      },
      {
        "name": "shortDescription",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Truly an awesome product"
      },
      {
        "name": "link",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://portal.acmesoft/com/my-awesome-product"
      },
      {
        "name": "baseCost",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 100
      },
      {
        "name": "settlementPeriod",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "100"
      },
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "23bf56cb-2df6-490e-a039-5755866e0c1c"
      },
      {
        "name": "transactionType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "true"
      },
      {
        "name": "paymentConfigurationId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2"
      },
      {
        "name": "pricingRuleIds",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "3kTMd",
          "K3TMs",
          "mmTFd"
        ]
      },
      {
        "name": "assetIds",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "3kTMd",
          "K3TMs",
          "mmTFd"
        ]
      },
      {
        "name": "productIds",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "3kTMd",
          "K3TMs",
          "mmTFd"
        ]
      },
      {
        "name": "slaDefinitionIds",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "3kTMd",
          "K3TMs",
          "mmTFd"
        ]
      },
      {
        "name": "defaultQuota",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "defaultQuotaNotificationThreshold",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "sendDefaultNotificationOnInvoice",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "notificationAddressesOnInvoice",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "overageRatePerTransaction",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "subscriptionIncludedTransactions",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "isStaged",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1234"
      },
      {
        "name": "terms",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "termsDisplayName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalTerms1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalTermsDisplayName1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalTerms2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalTermsDisplayName2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "disable",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "12345abcd"
      },
      {
        "name": "displayPriority",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "notifyClientOnInvoice",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "notifyClientTrialAboutToExpire",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Production"
      },
      {
        "name": "apimConfigurationId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "audienceRestriction",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER"
      },
      {
        "name": "externalLabel",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12345abcd"
      },
      {
        "name": "namedOrganizations",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "3kTMd",
          "K3TMs",
          "mmTFd"
        ]
      },
      {
        "name": "plan",
        "schema": "object",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "performanceDefinition",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "subscriptionAllowMidPeriodCancellation",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "productLockedToV1",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "logo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "staged",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A Product"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/product/families",
    "method": "listOwnedByOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product Family",
    "typeScriptTag": "productFamily",
    "description": "List of product families owned by a organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "Id of product families organization",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A product family that can be used to group products"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/product/families",
    "method": "createNewFamily",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Product Family",
    "typeScriptTag": "productFamily",
    "description": "Create an product family",
    "parameters": [
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NsYmyL"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "sBcTTs3"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a Product Family"
      },
      {
        "name": "allowProductFamilyDowngrade",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "allowProductFamilyUpgrade",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "productFamilyTiers",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A product family that can be used to group products"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/product-keys",
    "method": "createNewKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Product Keys",
    "typeScriptTag": "productKeys",
    "description": "Create a product key",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Product Key #1234"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "consumerOrganizationId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "sa3kaL"
      },
      {
        "name": "productIds",
        "schema": "array",
        "required": true,
        "description": "",
        "example": "[3kTMd,Dk12sc]"
      },
      {
        "name": "valid",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "key",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "5c99c760-4d11-4463-a211-937594d913d0"
      },
      {
        "name": "slaDefinitionIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "3kTMd",
          "K3TMs",
          "mmTFd"
        ]
      },
      {
        "name": "pricingRuleIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "3kTMd",
          "K3TMs",
          "mmTFd"
        ]
      },
      {
        "name": "expiration",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1620579969000
      },
      {
        "name": "clientEmailAddress",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENTEMAILADDRESS"
      },
      {
        "name": "externalQuoteId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "quota",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "quotaConsumed",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "quotaNotificationThreshold",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "applications",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "sendDefaultNotificationOnCreation",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "notificationAddressesOnCreation",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "sendDefaultNotificationOnQuotaThreshold",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "notificationAddressesOnQuotaThreshold",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "applicationExternalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "disableProductKeyOnPaymentFailed",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "companyName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Acme"
      },
      {
        "name": "namedConsumers",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "namedOrganizations",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "consumerDataProviderId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "subscriptionAllowMidPeriodCancellation",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "notifyClientTrialAboutToExpire",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A Product Key to accessing an Product's Asset(s)"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/product-keys/validate",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Product Keys",
    "typeScriptTag": "productKeys",
    "description": "Retrieve the status of a product key",
    "parameters": [
      {
        "name": "productKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5c99c760-4d11-4463-a211-937594d913d0"
      },
      {
        "name": "assetKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5c99c760-4d11-4463-a211-937594d913d0"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/pricing-rules",
    "method": "createRule",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pricing Rules",
    "typeScriptTag": "pricingRules",
    "description": "Create a pricing rule",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Free Trial Pricing Rule"
      },
      {
        "name": "script",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "baseCost + properties['currentComputeCost']]"
      },
      {
        "name": "pricingProperties",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "defaultExecutionNote",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "sample execution note"
      },
      {
        "name": "target",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CHARGE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A Pricing Rule"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/plans",
    "method": "listOwnedByOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Plans",
    "typeScriptTag": "plans",
    "description": "List of plans owned by a organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "ID of Plans Organization",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/plans",
    "method": "createPlan",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Plans",
    "typeScriptTag": "plans",
    "description": "Create an plan",
    "parameters": [
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NsYmyL"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "sBcTTs3"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a plan"
      },
      {
        "name": "graduated",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "template",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "planType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBSCRIPTION"
      },
      {
        "name": "charge",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 3243243
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USD"
      },
      {
        "name": "period",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "MONTH"
      },
      {
        "name": "periodCount",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 3
      },
      {
        "name": "trialPeriod",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "MONTH"
      },
      {
        "name": "trialPeriodCount",
        "schema": "array",
        "required": true,
        "description": "",
        "example": 4
      },
      {
        "name": "prePaySetups",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "features",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "elements",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "setups",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/plan-elements",
    "method": "listOwnedByOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Elements",
    "typeScriptTag": "elements",
    "description": "List of plan elements owned by a organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "Id of plan elements organization",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/plan-elements",
    "method": "createPlanElement",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Elements",
    "typeScriptTag": "elements",
    "description": "Create a plan element",
    "parameters": [
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NsYmyL"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "sBcTTs3"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Country"
      },
      {
        "name": "elementDefinitionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "sBcTTs3"
      },
      {
        "name": "distinctValue",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FRANCE"
      },
      {
        "name": "flatAmount",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 34.33
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/open",
    "method": "initiatePaymentOperation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Initiate payment",
    "parameters": [
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "assetId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "productKeyId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "productKeyDescription",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "dummy product key"
      },
      {
        "name": "applicationExternalId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "externalUserId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "userEmailAddress",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "billingAddressLine1",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3343 abc street"
      },
      {
        "name": "billingAddressLine2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3343 abc street"
      },
      {
        "name": "billingAddressCity",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "New York"
      },
      {
        "name": "billingAddressState",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "New York"
      },
      {
        "name": "billingAddressPostalCode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "23214"
      },
      {
        "name": "billingAddressCountryCode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "US"
      },
      {
        "name": "companyName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Acme"
      },
      {
        "name": "applicationName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Acme"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/customers",
    "method": "listCustomers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payment Methods",
    "typeScriptTag": "paymentMethods",
    "description": "List Payment Customers",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The Organization ID",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/customers",
    "method": "addNewMethod",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment Methods",
    "typeScriptTag": "paymentMethods",
    "description": "Add a new payment method",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "paymentConfigurationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "billingAddress",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Payment Customer"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/customers/{id}/method",
    "method": "addNewMethodOperation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment Methods",
    "typeScriptTag": "paymentMethods",
    "description": "Add a new payment method",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Payment Customer ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/configurations",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payment Configurations",
    "typeScriptTag": "paymentConfigurations",
    "description": "List payment configurations",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/configurations",
    "method": "createConfigurationOperation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment Configurations",
    "typeScriptTag": "paymentConfigurations",
    "description": "Create a payment configuration",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Stripe Configuration (Production)"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "paymentProvider",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STRIPE"
      },
      {
        "name": "tax",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INCLUSIVE"
      },
      {
        "name": "configurationProperties",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "username=foo,environment=production,loginUr=https://foo.com"
      },
      {
        "name": "testModeEnabled",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Payment Configuration"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/checkout",
    "method": "initiateCheckoutPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Initiate payment",
    "parameters": [
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "assetId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "productKeyId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "productKeyDescription",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "dummy product key"
      },
      {
        "name": "applicationExternalId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "applicationName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "companyName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalUserId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "userEmailAddress",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "billingAddress",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Payment View"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "List organizations",
    "parameters": [
      {
        "name": "tenantId",
        "schema": "string",
        "required": false,
        "description": "The tenant id"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": "The parent organization id"
      },
      {
        "name": "currentOrganizationId",
        "schema": "string",
        "required": false,
        "description": "The current organization id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations",
    "method": "createOrganization",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Create an organization",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Marketing"
      },
      {
        "name": "tenantId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "B0NV05"
      },
      {
        "name": "parentId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "B0NV05"
      },
      {
        "name": "invoiceNotificationTemplate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "invoiceTemplate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "productKeyCreationNotificationTemplate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "productKeyUpgradeNotificationTemplate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "productKeyQuotaNotificationTemplate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "productKeyTierQuotaNotificationTemplate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "emailFromAddress",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "domainAliases",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "acmesoft.org",
          "acmesoft.io"
        ]
      },
      {
        "name": "address1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "postalCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "emailAddress",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "instructionText",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "helpText",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "billingEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "billingPhoneNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "logo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12345abcd"
      },
      {
        "name": "assetAutoDiscoveryEnabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A view of an organization"
      }
    ]
  },
  {
    "url": "/notification-provider/configurations",
    "method": "getConfigurationProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notification Provider Configurations",
    "typeScriptTag": "notificationProviderConfigurations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/notification-provider/configurations",
    "method": "createConfiguration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notification Provider Configurations",
    "typeScriptTag": "notificationProviderConfigurations",
    "description": "Create a notificationprovider configuration",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Snowflake (Production)"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "notificationProviderProvider",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MULESOFT"
      },
      {
        "name": "configurationProperties",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "username=foo,environment=production,loginUr=https://foo.com"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/refunds",
    "method": "issueRefundOperation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Issue a refund",
    "parameters": [
      {
        "name": "productKeyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 100
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Customer requested a refund"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/payment",
    "method": "addReceivedPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Add a received payment to an invoice",
    "parameters": [
      {
        "name": "paymentDate",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USD"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 18.25
      },
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "payment_method",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CARD"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/line-items",
    "method": "submitLineItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Submit a line item to be recorded",
    "parameters": [
      {
        "name": "productKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "bb8f0656-0f9b-4f30-a461-5c0be94055f1"
      },
      {
        "name": "application",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "bb8f0656-0f9b-4f30-a461-5c0be94055f1"
      },
      {
        "name": "assetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "bb8f0656-0f9b-4f30-a461-5c0be94055f1"
      },
      {
        "name": "timestamp",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1585104831000
      },
      {
        "name": "callCount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 5
      },
      {
        "name": "resource",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "/api/widgets"
      },
      {
        "name": "paymentProvider",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "STRIPE"
      },
      {
        "name": "elementDTO",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/identity-provider/configurations",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Identity Provider Configurations",
    "typeScriptTag": "identityProviderConfigurations",
    "description": "List Identity Provide Configurations",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The Organization ID",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/identity-provider/configurations",
    "method": "createProviderConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Identity Provider Configurations",
    "typeScriptTag": "identityProviderConfigurations",
    "description": "Create an Identity Provider Configuration",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "identityProviderProvider",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTH0"
      },
      {
        "name": "configurationProperties",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "username=foo,environment=production,loginUr=https://foo.com"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Identity provider configuration"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/features",
    "method": "listOrganizationFeatures",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Features",
    "typeScriptTag": "features",
    "description": "List of features owned by a organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "Id of features organization",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of plan features"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/features",
    "method": "createFeature",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Features",
    "typeScriptTag": "features",
    "description": "Create an feature",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Access to Documentation"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NsYmyL"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "sBcTTs3"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Documentation"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "List of plan features"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/export/configurations",
    "method": "listExportConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Export Configurations",
    "typeScriptTag": "exportConfigurations",
    "description": "List export configurations",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/export/configurations",
    "method": "createConfiguration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Export Configurations",
    "typeScriptTag": "exportConfigurations",
    "description": "Create an export configuration",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SAP Email"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "exportProvider",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "configurationProperties",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "username=foo,environment=production,loginUr=https://foo.com"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/element-definitions",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Element Definitions",
    "typeScriptTag": "elementDefinitions",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/element-definitions",
    "method": "createPricingRule",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Element Definitions",
    "typeScriptTag": "elementDefinitions",
    "description": "",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "elementDescription",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ELEMENTDESCRIPTION"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An ElementDefinition/Service being metered by the platform"
      }
    ]
  },
  {
    "url": "/demo/rules/lineitem",
    "method": "evaluatePricingRuleOperation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Demo Pricing Rules",
    "typeScriptTag": "demoPricingRules",
    "description": "Evaluate a pricing rule against some demo data",
    "parameters": [
      {
        "name": "demoLineItemDTO",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEMOLINEITEMDTO"
      },
      {
        "name": "ruleScript",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "baseCost + properties['currentComputeCost']]"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Demo Pricing Rules DSL DTO"
      }
    ]
  },
  {
    "url": "/consumer-data-provider/configurations",
    "method": "listDataProviderConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Consumer Data Provider Configurations",
    "typeScriptTag": "consumerDataProviderConfigurations",
    "description": "List data provider configurations",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "paged",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/consumer-data-provider/configurations",
    "method": "createConfigurationOperation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Consumer Data Provider Configurations",
    "typeScriptTag": "consumerDataProviderConfigurations",
    "description": "Create an consumerdataprovider configuration",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Snowflake (Production)"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "consumerDataProviderProvider",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SNOWFLAKE"
      },
      {
        "name": "configurationProperties",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "username=foo,environment=production,loginUr=https://foo.com"
      },
      {
        "name": "createSQL",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATESQL"
      },
      {
        "name": "querySQL",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUERYSQL"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A consumerDataProviderConfiguration associated with the license"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/communications",
    "method": "listPaginatedCommunications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Communications",
    "typeScriptTag": "communications",
    "description": "List communications (paginated)",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/communications",
    "method": "createCommunication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Communications",
    "typeScriptTag": "communications",
    "description": "Create a communication",
    "parameters": [
      {
        "name": "subject",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Product Access Request"
      },
      {
        "name": "content",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "\n            Hello, \n            \n            Please provide access to this Product\n        "
      },
      {
        "name": "recipient",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "john.wick@hypercurrent.io"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "john.wick@hypercurrent.io"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/commerce/terms",
    "method": "getTerms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Commerce Portal Acceptance Terms",
    "typeScriptTag": "commercePortalAcceptanceTerms",
    "description": "",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/commerce/terms",
    "method": "acceptancePost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Commerce Portal Acceptance Terms",
    "typeScriptTag": "commercePortalAcceptanceTerms",
    "description": "",
    "parameters": [
      {
        "name": "userEmail",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USEREMAIL"
      },
      {
        "name": "acceptanceTimestamp",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCEPTANCETIMESTAMP"
      },
      {
        "name": "signedDocumentUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SIGNEDDOCUMENTURL"
      },
      {
        "name": "ipAddress",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IPADDRESS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/billing-metadata",
    "method": "listByOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Billing Metadata",
    "typeScriptTag": "billingMetadata",
    "description": "List billing metadata by organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/billing-metadata",
    "method": "createOperation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Billing Metadata",
    "typeScriptTag": "billingMetadata",
    "description": "Create billing metadata",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALUE"
      },
      {
        "name": "target",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGET"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets",
    "method": "listOwnedByUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Assets",
    "typeScriptTag": "assets",
    "description": "List of assets owned by a user",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "Id of assets organization",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "apimConfigurationId",
        "schema": "string",
        "required": true,
        "description": "Id of the API management configuration",
        "example": "APIMCONFIGURATIONID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "Id of the environment",
        "example": "ENVIRONMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An asset being metered"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets",
    "method": "createAsset",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Assets",
    "typeScriptTag": "assets",
    "description": "Create an asset",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "tag1",
          "tag2",
          "tag3"
        ]
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1.0.0"
      },
      {
        "name": "assetType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "c7a01027-9f5c-4e26-9ad5-3608897a723d"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NsYmyL"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "my-awesome-asset"
      },
      {
        "name": "the description of the asset",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Truly an awesome asset"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "sBcTTs3"
      },
      {
        "name": "productIds",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "sQYmyQ",
          "jQYkyl",
          "a92j3"
        ]
      },
      {
        "name": "slaDefinitionIds",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "3kTMd",
          "K3TMs",
          "mmTFd"
        ]
      },
      {
        "name": "properties",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12345abcd"
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1234"
      },
      {
        "name": "resource",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "/api/products"
      },
      {
        "name": "method",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "POST"
      },
      {
        "name": "applicationAutoDiscoveryEnabled",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "classificationPatterns",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "elementDefinitionIds",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "logo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "devPortalLink",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "http://url.com"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "An asset being metered"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/apim/configurations",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API Management Configurations",
    "typeScriptTag": "apiManagementConfigurations",
    "description": "List API management configurations",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/apim/configurations",
    "method": "createApiConfiguration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API Management Configurations",
    "typeScriptTag": "apiManagementConfigurations",
    "description": "Create an API management configuration",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Gravitee (Production)"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "apimProvider",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GRAVITEE"
      },
      {
        "name": "configurationProperties",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "username=foo,environment=production,loginUr=https://foo.com"
      },
      {
        "name": "authenticationMechanism",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CONNECTED_APP"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "API management configuration"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api-keys",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "List API leys",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "Id of API key's organization",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api-keys",
    "method": "createApiKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "Create an API key",
    "parameters": [
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3kTMd"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Acme Integration Key"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "AssociatedApiKey"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/admin/tenant/unsuspend",
    "method": "unsuspendTenant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Admin",
    "typeScriptTag": "admin",
    "description": "",
    "parameters": [
      {
        "name": "tenantId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TENANTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/admin/tenant/suspend",
    "method": "suspendTenant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Admin",
    "typeScriptTag": "admin",
    "description": "",
    "parameters": [
      {
        "name": "tenantId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TENANTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/account-tier/{id}/payment-methods",
    "method": "getPaymentMethods",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account Tiers",
    "typeScriptTag": "accountTiers",
    "description": "Get details of loaded payment methods for account tiers",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The account tier id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/account-tier/{id}/payment-methods",
    "method": "loadPaymentMethods",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account Tiers",
    "typeScriptTag": "accountTiers",
    "description": "Get details of loaded payment methods for account tiers",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The account tier ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/paged",
    "method": "listPaged",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Paginated list of users",
    "parameters": [
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "The starting timestamp"
      },
      {
        "name": "end",
        "schema": "integer",
        "required": false,
        "description": "The ending timestamp"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "roleName",
        "schema": "string",
        "required": false,
        "description": "Name of role"
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The query string"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A user with expanded invoice values"
      }
    ]
  },
  {
    "url": "/users/notification-sources",
    "method": "getCurrentAuthenticatedUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Retrieve the currently logged in/authenticated user",
    "parameters": [
      {
        "name": "tenantId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TENANTID"
      },
      {
        "name": "currentOrganizationId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/isotope/entrypoint",
    "method": "generateIsotopeDockerEntrypoint",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Generate the isotope docker entrypoint",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "Id of the organization",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "ID of the user",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The isotope command"
      }
    ]
  },
  {
    "url": "/users/isotope/command",
    "method": "generateIsotopeCommandString",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Generate the isotope install command string",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "ID of the organization",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "ID of the user",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The isotope command"
      }
    ]
  },
  {
    "url": "/users/current",
    "method": "getCurrentAuthenticatedUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Retrieve the currently logged in/authenticated user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A view of a user"
      }
    ]
  },
  {
    "url": "/traffic-anomalies",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Traffic Anomalies",
    "typeScriptTag": "trafficAnomalies",
    "description": "List traffic anomalies for the organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/tiers/paged",
    "method": "listPaged",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tiers",
    "typeScriptTag": "tiers",
    "description": "List of tiers (paginated)",
    "parameters": [
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "Id of tier's owner",
        "example": "OWNERID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "Id of tier's organization",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenants/paged",
    "method": "listPaginatedTenants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tenants",
    "typeScriptTag": "tenants",
    "description": "List tenants (paginated)",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tags",
    "method": "listByOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "List tags by organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The Organization ID",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/subscription-notification/{id}",
    "method": "deleteSubscriberNotification",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Subscription Notifications",
    "typeScriptTag": "subscriptionNotifications",
    "description": "Delete an subscribernotification",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The subscriber notification id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/subscription-notification/{id}",
    "method": "getSubscriberNotifications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscription Notifications",
    "typeScriptTag": "subscriptionNotifications",
    "description": "Retrieve subscriber notifications for the organization",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ID"
      },
      {
        "name": "affectedProducts",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "specificRecipients",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "affectedOwners",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/subscription-notification/owners/{id}",
    "method": "getRecipientsCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscription Notifications",
    "typeScriptTag": "subscriptionNotifications",
    "description": "Retrieve the number of recipients for a subscription notification",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ID"
      },
      {
        "name": "affectedProducts",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "affectedProductLicenseOwners",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AFFECTEDPRODUCTLICENSEOWNERS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/subscription-notification/body/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscription Notifications",
    "typeScriptTag": "subscriptionNotifications",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The subscriber notification id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/stored-filters/userId/{userId}",
    "method": "getUserFilters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stored filters",
    "typeScriptTag": "storedFilters",
    "description": "Get an stored filters",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "Id of stored filter's organization",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The user id",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/slas/summarized-by-violation",
    "method": "listByOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SLAs",
    "typeScriptTag": "slAs",
    "description": "List slas by organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "productId",
        "schema": "string",
        "required": false,
        "description": "The product id"
      },
      {
        "name": "slaDefinitionId",
        "schema": "string",
        "required": false,
        "description": "The sla definition id"
      },
      {
        "name": "consumingOrganizationId",
        "schema": "string",
        "required": false,
        "description": "The consuming organization id"
      },
      {
        "name": "isReviewed",
        "schema": "boolean",
        "required": false,
        "description": "Filter on reviewed"
      },
      {
        "name": "violationType",
        "schema": "string",
        "required": false,
        "description": "The sla violation type",
        "example": "LATENCY, RESPONSE_CODE"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/sla-violations/{slaId}/summarized",
    "method": "listSummarized",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SLA Violations",
    "typeScriptTag": "slaViolations",
    "description": "List summarized sla violations",
    "parameters": [
      {
        "name": "slaId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SLAID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/sla-violations/total-refunded",
    "method": "getTotalRefundedAmount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SLA Violations",
    "typeScriptTag": "slaViolations",
    "description": "Get total refund amount for slas for an organization or consumer",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "consumerId",
        "schema": "string",
        "required": true,
        "description": "The consumer id",
        "example": "CONSUMERID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Service Level Agreement"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/sla-violations/slas",
    "method": "listByOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SLA Violations",
    "typeScriptTag": "slaViolations",
    "description": "List slas by organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The Organization ID",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/sla-definitions/paged",
    "method": "listPaginatedSlaDefinitions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SLA Definitions",
    "typeScriptTag": "slaDefinitions",
    "description": "List sla definitions (paginated)",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "Id of the organization",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/sites/{id}",
    "method": "removeSite",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Sites",
    "typeScriptTag": "sites",
    "description": "Delete an site",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Site ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/sites/{id}",
    "method": "getSiteById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sites",
    "typeScriptTag": "sites",
    "description": "Get an site",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The asset id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/site-provider/configurations/property-names",
    "method": "getPropertyNames",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Site Provider Configurations",
    "typeScriptTag": "siteProviderConfigurations",
    "description": "Retrieve site provider configuration property names",
    "parameters": [
      {
        "name": "provider",
        "schema": "string",
        "required": true,
        "description": "The site provider",
        "example": "PROVIDER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/site-provider/configurations/property-descriptions",
    "method": "getPropertyDescriptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Site Provider Configurations",
    "typeScriptTag": "siteProviderConfigurations",
    "description": "Retrieve site provider configuration property descriptions",
    "parameters": [
      {
        "name": "provider",
        "schema": "string",
        "required": true,
        "description": "The site provider",
        "example": "PROVIDER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/products/{id}/trial",
    "method": "getTrialDataForOwner",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Get trial data for product and owner",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The product id",
        "example": "ID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": false,
        "description": "The client id"
      },
      {
        "name": "clientEmailAddress",
        "schema": "string",
        "required": false,
        "description": "The client email address"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Product Trial End Date For Client"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/products/{id}/product-keys",
    "method": "getProductKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Retrieve product keys associated with an product",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The product id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/products/trial",
    "method": "getTrialDataForOwner",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Get product trial data for owner",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": false,
        "description": "The client id"
      },
      {
        "name": "clientEmailAddress",
        "schema": "string",
        "required": false,
        "description": "The client email address"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/products/summarized",
    "method": "listSummarized",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "List products (summarized)",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "The environment id",
        "example": "ENVIRONMENTID"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": false,
        "description": "The ownerid id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/products/summarized/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Get a product",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The product id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Product"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/products/summarized/paged",
    "method": "listSummarizedProducts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "List products (paginated and summarized)",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "The environment id",
        "example": "ENVIRONMENTID"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": false,
        "description": "The owner id"
      },
      {
        "name": "staged",
        "schema": "boolean",
        "required": false,
        "description": "Filter on products being staged or unstaged for commerce portal publication"
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The query string"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/products/search",
    "method": "searchProducts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Search for products",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "Id of product's organization",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "Search by the external id",
        "example": "EXTERNALID"
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The query string"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/products/reports/asset-consumer-count-by-product",
    "method": "getAssetConsumerCountByProduct",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product Reports",
    "typeScriptTag": "productReports",
    "description": "Retrieve asset consumer count associated with a product",
    "parameters": [
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "The Product ID",
        "example": "PRODUCTID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "The starting timestamp (milliseconds)"
      },
      {
        "name": "end",
        "schema": "integer",
        "required": false,
        "description": "The ending timestamp (milliseconds)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/products/paged",
    "method": "listPagedProducts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "List products (paginated)",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": "The Organization ID"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": false,
        "description": "The Owner ID"
      },
      {
        "name": "expand",
        "schema": "string",
        "required": false,
        "description": "Attributes to expand (any combination of the following allowed): [calls, spends, consumers]"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "The starting timestamp (for expanded sla violations and invoices)"
      },
      {
        "name": "end",
        "schema": "integer",
        "required": false,
        "description": "The ending timestamp (for expanded sla violations and invoices)"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Zero-based page index (0..N)",
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "The size of the page to be returned",
        "default": 20
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/products/metrics",
    "method": "getMetricsForOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Retrieve product metrics for the organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The Organization ID",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp ",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/products/metrics/organization",
    "method": "getMetricsForOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Retrieve consumer product metrics for the organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The Organization ID",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp ",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/products/counts",
    "method": "getProductCounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Get product counts",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/products/changelogs/{id}",
    "method": "getChangelogsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Get changelogs for a product",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The product id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/product/families/summarized/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product Family",
    "typeScriptTag": "productFamily",
    "description": "Get an product family",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The product family id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Summary of a product family that can be used to group products"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/product/families/summarized/paged",
    "method": "listSummarizedPaged",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product Family",
    "typeScriptTag": "productFamily",
    "description": "List of product families (paginated)",
    "parameters": [
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "Id of product families owner",
        "example": "OWNERID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "Id of product families organization",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/product/families/paged",
    "method": "listPaged",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product Family",
    "typeScriptTag": "productFamily",
    "description": "List of product families (paginated)",
    "parameters": [
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "Id of product families owner",
        "example": "OWNERID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "Id of product families organization",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/product-keys/{id}/line-items",
    "method": "getLineItemsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product Keys",
    "typeScriptTag": "productKeys",
    "description": "Retrieve line items associated with a product key",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ProductKey ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/product-keys/summarized/{id}",
    "method": "getSummarizedByKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product Keys",
    "typeScriptTag": "productKeys",
    "description": "Get summarized product key",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The product key id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/product-keys/search",
    "method": "searchProductKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product Keys",
    "typeScriptTag": "productKeys",
    "description": "Search for product keys",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "Id of product key's organization",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "The query string",
        "example": "QUERY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/product-keys/paged",
    "method": "getOrganizationKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product Keys",
    "typeScriptTag": "productKeys",
    "description": "Retrieve product keys for the organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/product-keys/events/summarized",
    "method": "getSummarizedEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product Keys",
    "typeScriptTag": "productKeys",
    "description": "Retrieve summarized productkeyevents associated with the supplied organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/product-keys/events/search",
    "method": "searchProductKeyEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product Keys",
    "typeScriptTag": "productKeys",
    "description": "Search for product key events",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUERY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/product-keys/events/paged",
    "method": "getEventsPaged",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product Keys",
    "typeScriptTag": "productKeys",
    "description": "Paginated list of product key events",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/product-keys/client",
    "method": "getUserKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product Keys",
    "typeScriptTag": "productKeys",
    "description": "Retrieve product keys for the user",
    "parameters": [
      {
        "name": "emailAddress",
        "schema": "string",
        "required": true,
        "description": "The Email Address",
        "example": "EMAILADDRESS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/product-keys/client/{id}",
    "method": "getUserKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product Keys",
    "typeScriptTag": "productKeys",
    "description": "Retrieve product keys for the user",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The User ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/product-keys/client/{id}/paged",
    "method": "getForUserPaged",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product Keys",
    "typeScriptTag": "productKeys",
    "description": "Retrieve product keys for the user",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The user id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/product-keys/client/summarized",
    "method": "getAssociatedUserKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product Keys",
    "typeScriptTag": "productKeys",
    "description": "Retrieve all product keys associated with the user",
    "parameters": [
      {
        "name": "emailAddress",
        "schema": "string",
        "required": true,
        "description": "The email address",
        "example": "EMAILADDRESS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/pricing-rules/{accountId}/cost",
    "method": "getCostByAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pricing Rules",
    "typeScriptTag": "pricingRules",
    "description": "Retrieve cost by account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The Account ID",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/pricing-rules/organization/{organizationId}",
    "method": "getAllForOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pricing Rules",
    "typeScriptTag": "pricingRules",
    "description": "Get all pricing rules for an organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/pricing-rules/execution-logs",
    "method": "getLogsForOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pricing Rules",
    "typeScriptTag": "pricingRules",
    "description": "Get pricing rule execution logs for an organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/plans/paged",
    "method": "listPaged",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Plans",
    "typeScriptTag": "plans",
    "description": "List of plans (paginated)",
    "parameters": [
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "Id of plans owner",
        "example": "OWNERID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "Id of plans organization",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/plan-elements/paged",
    "method": "listPaged",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Elements",
    "typeScriptTag": "elements",
    "description": "List of plan elements (paginated)",
    "parameters": [
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "Id of plan elements owner",
        "example": "OWNERID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "Id of plan elements organization",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/record/product/{productId}/user/{userId}",
    "method": "recordGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Get payment record",
    "parameters": [
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "Product Id",
        "example": "PRODUCTID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User Id",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A report on current status of payment"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/paged",
    "method": "listPagedPaymentRecords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "List payment records (paginated)",
    "parameters": [
      {
        "name": "tenantId",
        "schema": "string",
        "required": true,
        "description": "ID of Tenant",
        "example": "TENANTID"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Zero-based page index (0..N)",
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "The size of the page to be returned",
        "default": 20
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/history/tenant/{tenantId}",
    "method": "getPaymentRecords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Get payment records",
    "parameters": [
      {
        "name": "tenantId",
        "schema": "string",
        "required": true,
        "description": "Tenant id",
        "example": "TENANTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/history/product/{productId}/user/{userId}",
    "method": "getPaymentRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Get payment record",
    "parameters": [
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "Product id",
        "example": "PRODUCTID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User id",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/customers/{id}",
    "method": "deleteCustomer",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Payment Methods",
    "typeScriptTag": "paymentMethods",
    "description": "Delete a payment customer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The payment customer id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/customers/{id}",
    "method": "getCustomerData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payment Methods",
    "typeScriptTag": "paymentMethods",
    "description": "Retrieve payment customer data ",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The payment customer id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Payment Customer"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/customers/user/{userId}/configuration/{paymentConfigurationId}",
    "method": "getPaymentCustomer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payment Methods",
    "typeScriptTag": "paymentMethods",
    "description": "Get payment customer",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User id",
        "example": "USERID"
      },
      {
        "name": "paymentConfigurationId",
        "schema": "string",
        "required": true,
        "description": "Payment configuration id",
        "example": "PAYMENTCONFIGURATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A Payment Customer"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/configurations/property-names",
    "method": "getPropertyNames",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payment Configurations",
    "typeScriptTag": "paymentConfigurations",
    "description": "Retrieve payment configuration property names",
    "parameters": [
      {
        "name": "provider",
        "schema": "string",
        "required": true,
        "description": "The payment provider",
        "example": "PROVIDER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/{id}/product-keys",
    "method": "getProductKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Retrieve all product keys associated with an organization",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/{id}/product-keys/summarized",
    "method": "getProductKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Retrieve all product keys associated with an organization",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ID"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": false,
        "description": "The owner id"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": false,
        "description": "The client id"
      },
      {
        "name": "consumingOrganizationId",
        "schema": "string",
        "required": false,
        "description": "The consuming organization id"
      },
      {
        "name": "includeDeactivated",
        "schema": "boolean",
        "required": false,
        "description": "Include deactivated keys?"
      },
      {
        "name": "paged",
        "schema": "boolean",
        "required": false,
        "description": "Return paginated data?"
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The query string"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "The starting timestamp (milliseconds)"
      },
      {
        "name": "end",
        "schema": "integer",
        "required": false,
        "description": "The ending timestamp (milliseconds)"
      },
      {
        "name": "productId",
        "schema": "string",
        "required": false,
        "description": "Filter product keys on productid"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/paged",
    "method": "listPaged",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "List organizations (paginated)",
    "parameters": [
      {
        "name": "tenantId",
        "schema": "string",
        "required": true,
        "description": "The tenant id",
        "example": "TENANTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/notifications/update/{organizationId}/{userEmail}",
    "method": "sendMockUpdateNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Send mock update notification",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The current organization ID",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "userEmail",
        "schema": "string",
        "required": true,
        "description": "The current user ID",
        "example": "USEREMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notifications/successful-payment/{organizationId}/{userEmail}",
    "method": "sendMockSuccessfulPaymentNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Send mock successful payment notification",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The current organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "userEmail",
        "schema": "string",
        "required": true,
        "description": "The current user id",
        "example": "USEREMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notifications/reactivation/{organizationId}/{userEmail}",
    "method": "sendMockReactivationNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Send mock reactivation notification",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The current organization ID",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "userEmail",
        "schema": "string",
        "required": true,
        "description": "The current user ID",
        "example": "USEREMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notifications/quota/{organizationId}/{userEmail}",
    "method": "mockQuotaWarningNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Send mock quota warning notification",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The current organization ID",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "userEmail",
        "schema": "string",
        "required": true,
        "description": "The current user ID",
        "example": "USEREMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notifications/quota-tier/{organizationId}/{userEmail}",
    "method": "sendMockQuotaTierWarningNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Send mock quota tier warning notification",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The current organization ID",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "userEmail",
        "schema": "string",
        "required": true,
        "description": "The current user ID",
        "example": "USEREMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notifications/invoice/{organizationId}/{userEmail}",
    "method": "sendMockInvoiceNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Send mock invoice notification",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The current organization ID",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "userEmail",
        "schema": "string",
        "required": true,
        "description": "The current user ID",
        "example": "USEREMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notifications/invalid/{organizationId}/{userEmail}",
    "method": "sendMockInvalidNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Send mock invalid notification",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The current organization ID",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "userEmail",
        "schema": "string",
        "required": true,
        "description": "The current user ID",
        "example": "USEREMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notifications/free-trial/{organizationId}/{userEmail}",
    "method": "sendMockFreeTrialNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Send mock free trial notification",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The current organization ID",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "userEmail",
        "schema": "string",
        "required": true,
        "description": "The current user ID",
        "example": "USEREMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notifications/failed-payment/{organizationId}/{userEmail}",
    "method": "sendMockFailedPaymentNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Send mock failed payment notification",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The current organization ID",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "userEmail",
        "schema": "string",
        "required": true,
        "description": "The current user ID",
        "example": "USEREMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notifications/deactivate/{organizationId}/{userEmail}",
    "method": "sendMockUpdateNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Send mock update notification",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The current organization ID",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "userEmail",
        "schema": "string",
        "required": true,
        "description": "The current user ID",
        "example": "USEREMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notifications/creation/{organizationId}/{userEmail}",
    "method": "mockCreationNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Send mock creation notification",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The current organization ID",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "userEmail",
        "schema": "string",
        "required": true,
        "description": "The current user ID",
        "example": "USEREMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notifications/activation/{organizationId}/{userEmail}",
    "method": "sendMockActivation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Send mock activation notification",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The current organization ID",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "userEmail",
        "schema": "string",
        "required": true,
        "description": "The current user ID",
        "example": "USEREMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notification-provider/configurations/{id}/connectivity-status",
    "method": "getConnectivityStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notification Provider Configurations",
    "typeScriptTag": "notificationProviderConfigurations",
    "description": "Retrieve a notification provider configuration's connectivity status",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The notification provider configuration id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notification-provider/configurations/property-names",
    "method": "getPropertyNames",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notification Provider Configurations",
    "typeScriptTag": "notificationProviderConfigurations",
    "description": "Retrieve notification provider configuration property names",
    "parameters": [
      {
        "name": "provider",
        "schema": "string",
        "required": true,
        "description": "The notification provider",
        "example": "PROVIDER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/notification-provider/configurations/property-descriptions",
    "method": "getPropertyDescriptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notification Provider Configurations",
    "typeScriptTag": "notificationProviderConfigurations",
    "description": "Retrieve notification provider configuration property descriptions",
    "parameters": [
      {
        "name": "provider",
        "schema": "string",
        "required": true,
        "description": "The notification provider",
        "example": "PROVIDER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/notification-custom-content/{id}",
    "method": "getTemplatesForOrg",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notification Custom Content",
    "typeScriptTag": "notificationCustomContent",
    "description": "Get notification templates for org",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices",
    "method": "listForUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "List invoices for a user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": "The User ID"
      },
      {
        "name": "emailAddress",
        "schema": "string",
        "required": false,
        "description": "The User's email address"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "The starting timestamp"
      },
      {
        "name": "end",
        "schema": "integer",
        "required": false,
        "description": "The ending timestamp"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Retrieve an invoice",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The invoice id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A billing invoice for asset usage"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/{id}/refunds",
    "method": "getRefundsByInvoice",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Retrieve refunds by invoice",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The invoice id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/{id}/line-items",
    "method": "getLineItemsByInvoice",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Retrieve line items by invoice",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The invoice id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/user/{userId}/summarized",
    "method": "listSummarizedByUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Paginated list of summarized invoices",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The user's id",
        "example": "USERID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "The starting timestamp"
      },
      {
        "name": "end",
        "schema": "integer",
        "required": false,
        "description": "The ending timestamp"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/user/{id}",
    "method": "getUserInvoices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Retrieve invoices for a user",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The user id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/user/{id}/refunds/paged",
    "method": "getRefundsForUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Retrieve refunds for a user",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The user id",
        "example": "ID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/user/{id}/recent-transactions/paged",
    "method": "getUserRecentTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Retrieve transactions for a user",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The User ID",
        "example": "ID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "The starting timestamp"
      },
      {
        "name": "end",
        "schema": "integer",
        "required": false,
        "description": "The ending timestamp"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/user/{id}/line-items",
    "method": "getUserLineItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Retrieve line items for a user",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The user id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/user/{id}/line-items/paged",
    "method": "getLineItemsForUserPaged",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Retrieve line items for a user (paginated)",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The User ID",
        "example": "ID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "page",
        "schema": "undefined",
        "description": "Results page you want to retrieve (0..N)"
      },
      {
        "name": "size",
        "schema": "undefined",
        "description": "Number of records per page."
      },
      {
        "name": "sort",
        "schema": "undefined",
        "description": "Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/summarized/{id}",
    "method": "getSummarizedInvoice",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Retrieve a summarized invoice",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The invoice id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A billing invoice for asset usage"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reset-quotas",
    "method": "resetQuotasForSettlementPeriod",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Reset quotas for the given settlement period",
    "parameters": [
      {
        "name": "settlementPeriod",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SETTLEMENTPERIOD"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/total-revenue-by-organization",
    "method": "getTotalSpendByAsset",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve total spend for an asset over the defined interval",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/total-requests-by-organization",
    "method": "getTotalRequestsByOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve total requests by organization over the defined interval",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/top-requests-by-consuming-organization",
    "method": "getTopRequestsByConsumingOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve top requests by consuming organization over the defined interval",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/top-products-by-organization",
    "method": "getTopProductsByOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve top revenue generating products for an organization over the defined interval",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/top-producer-requests-by-organization",
    "method": "getTopProducerRequestsByOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve top producer requests over the defined interval",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/top-elements-by-product",
    "method": "getTopRevenueGeneratingElements",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve top revenue generating elements for an organization over the defined interval",
    "parameters": [
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "The product id",
        "example": "PRODUCTID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "interval",
        "schema": "string",
        "required": false,
        "description": "The intervals (days, weeks or months)",
        "default": "days"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/top-elements-by-consuming-organization",
    "method": "getTopElementsByConsumingOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve top revenue generating elements for an organization over the defined interval",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "tenantId",
        "schema": "string",
        "required": true,
        "description": "The tenant id",
        "example": "TENANTID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/top-consumers-by-organization",
    "method": "getTopConsumersInterval",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve top consumers over the defined interval",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/top-consumer-revenue-by-organization",
    "method": "getTopConsumerRevenueByOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve top consumer revenue over the defined interval",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/top-consumer-requests-by-product-key-creation",
    "method": "getTopConsumerRequestsByProductKeyCreation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve top consumer requests by productkey creation over the defined interval",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "interval",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INTERVAL"
      },
      {
        "name": "aggregationType",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "PRODUCT_KEY_CLIENT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/top-consumer-requests-by-organization",
    "method": "getTopConsumerRequestsByOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve top consumer requests over the defined interval",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "interval",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "aggregationType",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "PRODUCT_KEY_CLIENT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/top-consumer-line-items-by-organization",
    "method": "getTopConsumerRequestsOverInterval",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve top consumer requests over the defined interval",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "interval",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/top-assets-by-providing-organization",
    "method": "getTopAssetsByProvidingOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve top revenue generating assets for an organization over the defined interval",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/top-assets-by-product",
    "method": "getTopAssetsByProduct",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve top revenue generating assets for an organization over the defined interval",
    "parameters": [
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "The product id",
        "example": "PRODUCTID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "interval",
        "schema": "string",
        "required": false,
        "description": "The intervals (days, weeks or months)",
        "default": "days"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/top-assets-by-consuming-organization",
    "method": "getTopAssetsByConsumingOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve top revenue generating assets for an organization over the defined interval",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "tenantId",
        "schema": "string",
        "required": true,
        "description": "The tenant id",
        "example": "TENANTID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/spend-by-user",
    "method": "getTotalSpendByUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve total spend for a user over the defined interval",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The user id",
        "example": "USERID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/spend-by-product",
    "method": "getTotalSpendByProduct",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve total spend for an asset over the defined interval",
    "parameters": [
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "The product id",
        "example": "PRODUCTID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/spend-by-organization",
    "method": "getSpendByOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve total spend for an organization over the defined interval",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/spend-by-assets",
    "method": "getTotalSpendByAssets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve total spend across multiple assets over the defined interval",
    "parameters": [
      {
        "name": "assetIds",
        "schema": "string",
        "required": true,
        "description": "A list of asset ids",
        "example": "ASSETIDS"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/spend-by-asset",
    "method": "getTotalSpendByAsset",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve total spend for an asset over the defined interval",
    "parameters": [
      {
        "name": "assetId",
        "schema": "string",
        "required": true,
        "description": "The asset id",
        "example": "ASSETID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/recent-charges-by-product-owner",
    "method": "getChargesByInterval",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve total charges across all assets over the defined intervals",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": "The organization id"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": false,
        "description": "The product owner (user) id"
      },
      {
        "name": "quarterStart",
        "schema": "integer",
        "required": true,
        "description": "The quarter start timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "quarterEnd",
        "schema": "integer",
        "required": true,
        "description": "The quarter end timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "yearStart",
        "schema": "integer",
        "required": true,
        "description": "The year start timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "yearEnd",
        "schema": "integer",
        "required": true,
        "description": "The year end timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "monthStart",
        "schema": "integer",
        "required": true,
        "description": "The month start timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "monthEnd",
        "schema": "integer",
        "required": true,
        "description": "The month end timestamp(milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/recent-charges-by-product-consumer",
    "method": "totalChargeIntervals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve total charges across all assets over the defined intervals",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": "The organization id"
      },
      {
        "name": "consumerId",
        "schema": "string",
        "required": false,
        "description": "The product owner (user) id"
      },
      {
        "name": "quarterStart",
        "schema": "integer",
        "required": true,
        "description": "The quarter start timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "quarterEnd",
        "schema": "integer",
        "required": true,
        "description": "The quarter end timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "yearStart",
        "schema": "integer",
        "required": true,
        "description": "The year start timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "yearEnd",
        "schema": "integer",
        "required": true,
        "description": "The year end timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "monthStart",
        "schema": "integer",
        "required": true,
        "description": "The month start timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "monthEnd",
        "schema": "integer",
        "required": true,
        "description": "The month end timestamp(milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/recent-charges-by-asset",
    "method": "getChargesByAsset",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve total charges across all assets over the defined intervals",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "quarterStart",
        "schema": "integer",
        "required": true,
        "description": "The quarter start timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "quarterEnd",
        "schema": "integer",
        "required": true,
        "description": "The quarter end timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "yearStart",
        "schema": "integer",
        "required": true,
        "description": "The year start timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "yearEnd",
        "schema": "integer",
        "required": true,
        "description": "The year end timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "monthStart",
        "schema": "integer",
        "required": true,
        "description": "The month start timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "monthEnd",
        "schema": "integer",
        "required": true,
        "description": "The month end timestamp(milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/product-keys-without-activity",
    "method": "getProductKeysWithoutActivity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve productkeys without activity over the defined interval",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/most-engaged-consuming-organizations",
    "method": "getMostEngagedConsumingOrganizations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve most engaged consuming organizations over the defined interval",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "interval",
        "schema": "string",
        "required": false,
        "description": "The intervals (days, weeks or months)",
        "default": "days"
      },
      {
        "name": "aggregationType",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "PRODUCT_KEY_CLIENT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/most-engaged-consumers",
    "method": "getMostEngagedConsumers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve most engaged consumers over the defined interval",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "interval",
        "schema": "string",
        "required": false,
        "description": "The intervals (days, weeks or months)",
        "default": "days"
      },
      {
        "name": "aggregationType",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "PRODUCT_KEY_CLIENT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/inactive-consumers",
    "method": "getInactiveConsumersInterval",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve most inactive consumers consumers over the defined interval",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "interval",
        "schema": "string",
        "required": false,
        "description": "The intervals (days, weeks or months)",
        "default": "days"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/created-product-key-counts",
    "method": "getActiveProductKeyCountsOverInterval",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve total active product key counts over the defined interval",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "PRODUCTID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/consumers-by-organization",
    "method": "getConsumersByOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve consumers for an organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/calls-by-user",
    "method": "getTotalCallCountForUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve total call count for a user over the defined interval",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The user id",
        "example": "USERID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "interval",
        "schema": "string",
        "required": true,
        "description": "The interval (days, weeks or months)",
        "example": "INTERVAL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/calls-by-product",
    "method": "getCallsByProductTotal",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve total calls for a product over the defined interval",
    "parameters": [
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "The asset id",
        "example": "PRODUCTID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/calls-by-organization",
    "method": "getTotalCallCountForOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve total call count for an organization over the defined interval",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "consumingOrganizationId",
        "schema": "string",
        "required": false,
        "description": "The consuming organization id"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "interval",
        "schema": "string",
        "required": true,
        "description": "The interval (days, weeks or months)",
        "example": "INTERVAL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/calls-by-client-and-product",
    "method": "getTotalCallCountForProductUsageByClientOverInterval",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve total call count for an product's usage by a given client over the defined interval",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The client id",
        "example": "CLIENTID"
      },
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "The product id",
        "example": "PRODUCTID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/calls-by-client-and-asset",
    "method": "getCallCountByClientAndAsset",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve total call count for an asset's usage by a given client over the defined interval",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The client id",
        "example": "CLIENTID"
      },
      {
        "name": "assetId",
        "schema": "string",
        "required": true,
        "description": "The asset id",
        "example": "ASSETID"
      },
      {
        "name": "numberOfMonths",
        "schema": "integer",
        "required": false,
        "description": "The number of months of data to get"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "The starting timestamp (milliseconds)"
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/calls-by-asset",
    "method": "getTotalCallsByAsset",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve total calls for an asset over the defined interval",
    "parameters": [
      {
        "name": "assetId",
        "schema": "string",
        "required": true,
        "description": "The asset id",
        "example": "ASSETID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/asset-total-spend-by-user",
    "method": "getTotalAssetSpendByUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve total asset spend for a user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The user id",
        "example": "USERID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/asset-spend-by-user",
    "method": "getTotalAssetSpendForUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve total asset spend for a user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The user id",
        "example": "USERID"
      },
      {
        "name": "assetId",
        "schema": "string",
        "required": true,
        "description": "The asset id",
        "example": "ASSETID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/asset-spend-by-owner",
    "method": "getTotalSpendOverInterval",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve total asset spend for an organization over the defined interval",
    "parameters": [
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "The owner id",
        "example": "OWNERID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/asset-spend-by-organization",
    "method": "getTotalAssetSpendByOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve total asset spend for an organization over the defined interval",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "assetId",
        "schema": "string",
        "required": true,
        "description": "The asset id",
        "example": "ASSETID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/asset-calls-by-user",
    "method": "getTotalAssetCallsByUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve total asset call count for a user over the defined interval",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The user id",
        "example": "USERID"
      },
      {
        "name": "assetId",
        "schema": "string",
        "required": true,
        "description": "The asset id",
        "example": "ASSETID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/asset-calls-by-organization",
    "method": "getAssetCallCountByOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve total asset call count for an organization over the defined interval",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "assetId",
        "schema": "string",
        "required": true,
        "description": "The asset id",
        "example": "ASSETID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/applications-value-by-product",
    "method": "getApplicationValuesByProduct",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve the product applications values for an organization over the defined interval",
    "parameters": [
      {
        "name": "productId",
        "schema": "string",
        "required": false,
        "description": "The product id"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "interval",
        "schema": "string",
        "required": false,
        "description": "The intervals (days, weeks or months)",
        "default": "days"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/reports/active-product-key-counts",
    "method": "getTotalActiveProductKeyCounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice Reports",
    "typeScriptTag": "invoiceReports",
    "description": "Retrieve total active product key counts over the defined interval",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "interval",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INTERVAL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/product-keys/top",
    "method": "getTopConsumingProductKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Retrieve top consuming product keys for the current user",
    "parameters": [
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "The starting timestamp"
      },
      {
        "name": "end",
        "schema": "integer",
        "required": false,
        "description": "The ending timestamp"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/paged",
    "method": "listPaged",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "List invoices (paginated)",
    "parameters": [
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "The starting timestamp"
      },
      {
        "name": "end",
        "schema": "integer",
        "required": false,
        "description": "The ending timestamp"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization's id",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/paged/{id}/refunds",
    "method": "listPagedRefunds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "List refunds (paginated)",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Id of invoice",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/paged/{id}/line-items",
    "method": "listLineItemsPaged",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "List of line items (paginated)",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Id of the invoice",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/organization/{organizationId}/summarized",
    "method": "listSummarizedByOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Paginated list of summarized invoices",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization's id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "The starting timestamp"
      },
      {
        "name": "end",
        "schema": "integer",
        "required": false,
        "description": "The ending timestamp"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/organization/{organizationId}/paged",
    "method": "listPagedByOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Paginated list of invoices",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization's id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "The starting timestamp"
      },
      {
        "name": "end",
        "schema": "integer",
        "required": false,
        "description": "The ending timestamp"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/organization/{id}/refunds/paged",
    "method": "getOrganizationRefunds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Retrieve refunds for an organization",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The User ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/organization/{id}/refunds/csv",
    "method": "getOrganizationRefundsCsv",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Retrieve refunds for an organization as a csv",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The user id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/organization/{id}/recent-transactions",
    "method": "getOrganizationTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Retrieve transactions for an organization",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "The starting timestamp"
      },
      {
        "name": "end",
        "schema": "integer",
        "required": false,
        "description": "The ending timestamp"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/organization/{id}/recent-transactions/search",
    "method": "searchRecentTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Search recent transactions for an organization",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ID"
      },
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "The query string",
        "example": "QUERY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/organization/{id}/recent-transactions/paged",
    "method": "getOrganizationTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Retrieve transactions for an organization",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "The starting timestamp"
      },
      {
        "name": "end",
        "schema": "integer",
        "required": false,
        "description": "The ending timestamp"
      },
      {
        "name": "productIds",
        "schema": "array",
        "required": false,
        "description": "The product ids to filter"
      },
      {
        "name": "productLicenseIds",
        "schema": "array",
        "required": false,
        "description": "The product license ids to filter"
      },
      {
        "name": "clientIds",
        "schema": "array",
        "required": false,
        "description": "The client email address ids to filter"
      },
      {
        "name": "assetIds",
        "schema": "array",
        "required": false,
        "description": "The asset ids to filter"
      },
      {
        "name": "applicationIds",
        "schema": "array",
        "required": false,
        "description": "The application ids to filter"
      },
      {
        "name": "chargeTypes",
        "schema": "array",
        "required": false,
        "description": "The charge types to filter"
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The query string"
      },
      {
        "name": "page",
        "schema": "undefined",
        "description": "Results page you want to retrieve (0..N)"
      },
      {
        "name": "size",
        "schema": "undefined",
        "description": "Number of records per page."
      },
      {
        "name": "sort",
        "schema": "undefined",
        "description": "Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/organization/{id}/line-items/paged",
    "method": "getLineItemsForOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Retrieve line items for an organization",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Organization ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/generate",
    "method": "generateInvoice",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Generate an invoice",
    "parameters": [
      {
        "name": "settlementPeriod",
        "schema": "string",
        "required": true,
        "description": "Settlement period of invoice",
        "example": "SETTLEMENTPERIOD"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/charge-calculation-log/{id}",
    "method": "getChargeCalculationLog",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Charge calculation log",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Id of charge calculation log",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A charge calculation log"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/apis/top",
    "method": "getTopConsumedApis",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Retrieve most consumed APIs for the current user",
    "parameters": [
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "The starting timestamp"
      },
      {
        "name": "end",
        "schema": "integer",
        "required": false,
        "description": "The ending timestamp"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/apis/top/paged",
    "method": "getTopConsumedApis",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Retrieve paginated most consumed apis for the current user",
    "parameters": [
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "The starting timestamp"
      },
      {
        "name": "end",
        "schema": "integer",
        "required": false,
        "description": "The ending timestamp"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/identity-provider/configurations/property-names",
    "method": "getPropertyNames",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Identity Provider Configurations",
    "typeScriptTag": "identityProviderConfigurations",
    "description": "Retrieve Identity Provider Configuration Property Names",
    "parameters": [
      {
        "name": "provider",
        "schema": "string",
        "required": true,
        "description": "The Identity Provider",
        "example": "PROVIDER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/identity-provider/configurations/property-descriptions",
    "method": "getPropertyDescriptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Identity Provider Configurations",
    "typeScriptTag": "identityProviderConfigurations",
    "description": "Retrieve Identity Provider Management Configuration Property Descriptions",
    "parameters": [
      {
        "name": "provider",
        "schema": "string",
        "required": true,
        "description": "The Identity Provider",
        "example": "PROVIDER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/hubspot/token/{id}",
    "method": "getToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hubspot",
    "typeScriptTag": "hubspot",
    "description": "Get a token",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "User id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/features/paged",
    "method": "listPagedFeatures",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Features",
    "typeScriptTag": "features",
    "description": "List of features (paginated)",
    "parameters": [
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "Id of features owner",
        "example": "OWNERID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "Id of features organization",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/export/configurations/property-names",
    "method": "getPropertyNames",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Export Configurations",
    "typeScriptTag": "exportConfigurations",
    "description": "Retrieve export configuration property names",
    "parameters": [
      {
        "name": "provider",
        "schema": "string",
        "required": true,
        "description": "The export provider",
        "example": "PROVIDER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/environments",
    "method": "listByOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Environments",
    "typeScriptTag": "environments",
    "description": "List environments by organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "apimConfigurationId",
        "schema": "string",
        "required": false,
        "description": "Filter environments by API managemnet configuration"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/consumer-data-provider/configurations/{id}/connectivity-status",
    "method": "getConnectivityStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Consumer Data Provider Configurations",
    "typeScriptTag": "consumerDataProviderConfigurations",
    "description": "Retrieve an data provider configuration's connectivity status",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The data provider configuration id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/consumer-data-provider/configurations/queries",
    "method": "getDataProviderQueries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Consumer Data Provider Configurations",
    "typeScriptTag": "consumerDataProviderConfigurations",
    "description": "Retrieve data provider queries",
    "parameters": [
      {
        "name": "provider",
        "schema": "string",
        "required": true,
        "description": "The consumer data provider",
        "example": "PROVIDER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/consumer-data-provider/configurations/property-names",
    "method": "getPropertyNames",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Consumer Data Provider Configurations",
    "typeScriptTag": "consumerDataProviderConfigurations",
    "description": "Retrieve data provider configuration property names",
    "parameters": [
      {
        "name": "provider",
        "schema": "string",
        "required": true,
        "description": "The consumer data provider",
        "example": "PROVIDER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/consumer-data-provider/configurations/property-descriptions",
    "method": "getPropertyDescriptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Consumer Data Provider Configurations",
    "typeScriptTag": "consumerDataProviderConfigurations",
    "description": "Retrieve data provider configuration property descriptions",
    "parameters": [
      {
        "name": "provider",
        "schema": "string",
        "required": true,
        "description": "The consumer data provider",
        "example": "PROVIDER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/audit-trail/internal/metadata",
    "method": "listEventMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Internal System Audit Trail",
    "typeScriptTag": "internalSystemAuditTrail",
    "description": "List internal audit trail event metadata",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Internal audit trail event metadata"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/audit-trail/internal/events",
    "method": "listEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Internal System Audit Trail",
    "typeScriptTag": "internalSystemAuditTrail",
    "description": "List internal audit trail events",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "logSource",
        "schema": "string",
        "required": false,
        "description": "The log source"
      },
      {
        "name": "operation",
        "schema": "string",
        "required": false,
        "description": "The operation type"
      },
      {
        "name": "results",
        "schema": "string",
        "required": false,
        "description": "Results"
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/audit-trail/external/metadata",
    "method": "listEventMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "External System Audit Trail",
    "typeScriptTag": "externalSystemAuditTrail",
    "description": "List external audit trail event metadata",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The Organization ID",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "External audit trail event metadata"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/audit-trail/external/events",
    "method": "listEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "External System Audit Trail",
    "typeScriptTag": "externalSystemAuditTrail",
    "description": "List external audit trail events",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "logSource",
        "schema": "string",
        "required": false,
        "description": "The log source"
      },
      {
        "name": "operation",
        "schema": "string",
        "required": false,
        "description": "The operation type"
      },
      {
        "name": "results",
        "schema": "string",
        "required": false,
        "description": "Results"
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/summarized",
    "method": "listSummarized",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Assets",
    "typeScriptTag": "assets",
    "description": "List assets (summarized)",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "Id of asset's organization",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "The environment id",
        "example": "ENVIRONMENTID"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": false,
        "description": "Id of asset's owner"
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The query string"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/search",
    "method": "searchOperation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Assets",
    "typeScriptTag": "assets",
    "description": "Search for assets",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "Id of asset's organization",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "The query string",
        "example": "QUERY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/reports/sla-violations-paged",
    "method": "listSlaViolationsBySlaAndDateRange",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Asset Reports",
    "typeScriptTag": "assetReports",
    "description": "List SLA Violations by SLA and date range (paginated)",
    "parameters": [
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/reports/sla-violations-by-owner",
    "method": "getSlaViolationsByOwnerAndDateRange",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Asset Reports",
    "typeScriptTag": "assetReports",
    "description": "Retrieve SLA violations by owner and date range",
    "parameters": [
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "The owner id",
        "example": "OWNERID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/reports/sla-violations-by-organization",
    "method": "listSlaViolationsByOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Asset Reports",
    "typeScriptTag": "assetReports",
    "description": "List SLA violations by organization and date range (paginated)",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A service level Aareement violation"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/reports/sla-violations-by-consumer",
    "method": "getSlaViolationsByConsumerAndDateRange",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Asset Reports",
    "typeScriptTag": "assetReports",
    "description": "Retrieve SLA violations by consumer and date range",
    "parameters": [
      {
        "name": "consumerId",
        "schema": "string",
        "required": true,
        "description": "The consumer id",
        "example": "CONSUMERID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/reports/sla-violation-count-by-organization",
    "method": "countSlaViolationsByOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Asset Reports",
    "typeScriptTag": "assetReports",
    "description": "Count of  SLA violations by organization and date range (paginated)",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A service level Aareement violation"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/paged",
    "method": "listPaged",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Assets",
    "typeScriptTag": "assets",
    "description": "List of assets (paginated)",
    "parameters": [
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "Id of asset's owner",
        "example": "OWNERID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "Id of assets organization",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/metadata/unclassified",
    "method": "getUnclassifiedMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Assets",
    "typeScriptTag": "assets",
    "description": "Get unclassified metadata for an organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/changelogs/{id}",
    "method": "getChangelogsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Assets",
    "typeScriptTag": "assets",
    "description": "Get changelogs for an asset",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The asset id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/assets-identifiers",
    "method": "listOwnedByOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Assets",
    "typeScriptTag": "assets",
    "description": "List of assets owned by a organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "Id of asset's organization",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "apimConfigurationId",
        "schema": "string",
        "required": true,
        "description": "Id of the API management configuration",
        "example": "APIMCONFIGURATIONID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "Id of the environment",
        "example": "ENVIRONMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/asset-metrics/transaction-counts",
    "method": "getTotalTransactionCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Asset Metrics",
    "typeScriptTag": "assetMetrics",
    "description": "Retrieve the total transaction count for the tenant",
    "parameters": [
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "The starting timestamp"
      },
      {
        "name": "end",
        "schema": "integer",
        "required": false,
        "description": "The ending timestamp"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/asset-metrics/top-applications-by-total-requests",
    "method": "getTopApplicationsByTotalRequests",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Asset Metrics",
    "typeScriptTag": "assetMetrics",
    "description": "Retrieve the top applications by total requests for the organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "assetId",
        "schema": "array",
        "required": true,
        "description": "The assets id"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "The starting timestamp"
      },
      {
        "name": "end",
        "schema": "integer",
        "required": false,
        "description": "The ending timestamp"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/asset-metrics/requests-by-response-type",
    "method": "getRequestPercentageByResponseType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Asset Metrics",
    "typeScriptTag": "assetMetrics",
    "description": "Retrieve the total request percentage by response type for the organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "assetIds",
        "schema": "array",
        "required": true,
        "description": "The asset id"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "The starting timestamp"
      },
      {
        "name": "end",
        "schema": "integer",
        "required": false,
        "description": "The ending timestamp"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/asset-metrics/recent-analytics-transaction",
    "method": "listRecentAnalyticsTransaction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Asset Metrics",
    "typeScriptTag": "assetMetrics",
    "description": "List derived asset metrics",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "paged",
        "schema": "boolean",
        "required": false,
        "description": "Paged flag"
      },
      {
        "name": "method",
        "schema": "string",
        "required": false,
        "description": "Filter: the methods use in the operations for the resources to be filtered"
      },
      {
        "name": "assetId",
        "schema": "string",
        "required": false,
        "description": "Filter: the asset ids for the resources to be filtered"
      },
      {
        "name": "userDomain",
        "schema": "string",
        "required": false,
        "description": "Filter: the user domains related to the resources to be filtered"
      },
      {
        "name": "applicationId",
        "schema": "string",
        "required": false,
        "description": "Filter: the user domains related to the resources to be filtered"
      },
      {
        "name": "consumerEmailAddress",
        "schema": "string",
        "required": false,
        "description": "Filter: the consumer email address related to the resources to be filtered"
      },
      {
        "name": "consumingOrganizationId",
        "schema": "string",
        "required": false,
        "description": "Filter: the consumer organization ids related to the resources to be filtered"
      },
      {
        "name": "responseCode",
        "schema": "string",
        "required": false,
        "description": "Filter: the response codes returned by the resources to be filtered"
      },
      {
        "name": "averageLatency",
        "schema": "string",
        "required": false,
        "description": "Filter: the average latency calculated by the resources to be filtered"
      },
      {
        "name": "maxLatency",
        "schema": "string",
        "required": false,
        "description": "Filter: the maximun latency calculated by the resources to be filtered"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/asset-metrics/derived",
    "method": "listDerivedAssetMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Asset Metrics",
    "typeScriptTag": "assetMetrics",
    "description": "List derived asset metrics",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "assetId",
        "schema": "array",
        "required": true,
        "description": "The asset id"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp (milliseconds)",
        "example": 0
      },
      {
        "name": "group",
        "schema": "string",
        "required": false,
        "description": "Grouping"
      },
      {
        "name": "paged",
        "schema": "boolean",
        "required": false,
        "description": "Paged"
      },
      {
        "name": "groupFilter",
        "schema": "array",
        "required": false,
        "description": "GroupFilter",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/asset-metrics/derived/assets",
    "method": "listDerivedAssetMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Asset Metrics",
    "typeScriptTag": "assetMetrics",
    "description": "List assets derived asset metrics",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A summary of an Asset/Service being metered by the platform"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/asset-metrics/api-latencies-by-period",
    "method": "getApiLatenciesByPeriod",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Asset Metrics",
    "typeScriptTag": "assetMetrics",
    "description": "Retrieve the api latencies by period for the organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "assetId",
        "schema": "array",
        "required": true,
        "description": "The asset's id"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp",
        "example": 0
      },
      {
        "name": "latencyView",
        "schema": "string",
        "required": false,
        "description": "The latency calculation",
        "default": "AVERAGE_LATENCY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/asset-metrics/api-latencies-by-organization",
    "method": "getLatenciesByOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Asset Metrics",
    "typeScriptTag": "assetMetrics",
    "description": "Retrieve the API latencies by consuming organization for the organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "assetId",
        "schema": "array",
        "required": true,
        "description": "The asset's id"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp",
        "example": 0
      },
      {
        "name": "latencyView",
        "schema": "string",
        "required": false,
        "description": "The latency calculation",
        "default": "AVERAGE_LATENCY"
      },
      {
        "name": "consumingOrganizationId",
        "schema": "array",
        "required": false,
        "description": "The consuming organization ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/asset-metrics/api-latencies-by-api",
    "method": "getApiLatenciesByApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Asset Metrics",
    "typeScriptTag": "assetMetrics",
    "description": "Retrieve the API latencies by API for the organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "assetId",
        "schema": "array",
        "required": true,
        "description": "The asset's id"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp",
        "example": 0
      },
      {
        "name": "latencyView",
        "schema": "string",
        "required": false,
        "description": "The latency calculation",
        "default": "AVERAGE_LATENCY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/asset-metrics/api-experience-over-time",
    "method": "listDerivedGroupedMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Asset Metrics",
    "typeScriptTag": "assetMetrics",
    "description": "List derived grouped asset metrics",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "assetId",
        "schema": "array",
        "required": false,
        "description": "The asset id"
      },
      {
        "name": "eventView",
        "schema": "string",
        "required": false,
        "description": "The event view selected",
        "default": "TOTAL_REQUESTS"
      },
      {
        "name": "group",
        "schema": "string",
        "required": true,
        "description": "The group clause",
        "example": "GROUP",
        "default": "API_URI"
      },
      {
        "name": "period",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "LAST_HOUR"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/asset-metrics/api-errors-by-period",
    "method": "getApiErrorByPeriod",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Asset Metrics",
    "typeScriptTag": "assetMetrics",
    "description": "Retrieve the api error by period for the organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "assetId",
        "schema": "array",
        "required": true,
        "description": "The assets id"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp",
        "example": 0
      },
      {
        "name": "isPercentage",
        "schema": "boolean",
        "required": true,
        "description": "The organization id",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/asset-metrics/api-errors-by-organization",
    "method": "getApiErrorByOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Asset Metrics",
    "typeScriptTag": "assetMetrics",
    "description": "Retrieve the API error by the organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "assetId",
        "schema": "array",
        "required": true,
        "description": "The assets id"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp",
        "example": 0
      },
      {
        "name": "isPercentage",
        "schema": "boolean",
        "required": true,
        "description": "The Organization ID",
        "example": true
      },
      {
        "name": "consumingOrganizationId",
        "schema": "array",
        "required": false,
        "description": "The consuming organization ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/asset-metrics/api-errors-by-api",
    "method": "getApiErrorByApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Asset Metrics",
    "typeScriptTag": "assetMetrics",
    "description": "Retrieve the API error by API for the organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization id",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "assetId",
        "schema": "array",
        "required": true,
        "description": "The assets id"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "The starting timestamp",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "The ending timestamp",
        "example": 0
      },
      {
        "name": "isPercentage",
        "schema": "boolean",
        "required": true,
        "description": "The Organization ID",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/applications/{id}",
    "method": "deleteApplication",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Delete an application",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The application id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/applications/{id}",
    "method": "getApplicationById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Get an Application",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The asset id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An application"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/applications/summarized",
    "method": "listSummarizedApplications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "List summarized applications",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "Id of application's organization",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "count",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The query string"
      },
      {
        "name": "includeDeactivated",
        "schema": "boolean",
        "required": false,
        "description": "Include deactivated applications?"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/applications/summarized/{id}",
    "method": "getSummarizedApplication",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Get summarized applications",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The application id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/applications/search",
    "method": "findApplications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Search for applications",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "Id of application's organization",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "The query string",
        "example": "QUERY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/apim/configurations/{id}/connectivity-status",
    "method": "getConnectivityStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API Management Configurations",
    "typeScriptTag": "apiManagementConfigurations",
    "description": "Retrieve an API management configuration's connectivity status",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The API management configuration ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/apim/configurations/property-names",
    "method": "getPropertyNames",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API Management Configurations",
    "typeScriptTag": "apiManagementConfigurations",
    "description": "Retrieve API management configuration property names",
    "parameters": [
      {
        "name": "provider",
        "schema": "string",
        "required": true,
        "description": "The API management provider",
        "example": "PROVIDER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/apim/configurations/property-descriptions",
    "method": "getPropertyDescriptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API Management Configurations",
    "typeScriptTag": "apiManagementConfigurations",
    "description": "Retrieve API management configuration property descriptions",
    "parameters": [
      {
        "name": "provider",
        "schema": "string",
        "required": true,
        "description": "The API management provider",
        "example": "PROVIDER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/apim/configurations/connectivity-status",
    "method": "getConnectivityStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API Management Configurations",
    "typeScriptTag": "apiManagementConfigurations",
    "description": "Retrieve an API management configuration's connectivity status",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The API management client id",
        "example": "CLIENTID"
      },
      {
        "name": "clientSecret",
        "schema": "string",
        "required": true,
        "description": "The API management client secret",
        "example": "CLIENTSECRET"
      },
      {
        "name": "apimProvider",
        "schema": "string",
        "required": true,
        "description": "The API management provider",
        "example": "APIMPROVIDER"
      },
      {
        "name": "authenticationMechanism",
        "schema": "string",
        "required": true,
        "description": "The authentication mechanism",
        "example": "AUTHENTICATIONMECHANISM"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/account-tier/{id}",
    "method": "getTierById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account Tiers",
    "typeScriptTag": "accountTiers",
    "description": "Get account tier",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The account tier id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/account-tier/products",
    "method": "listAllProducts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account Tiers",
    "typeScriptTag": "accountTiers",
    "description": "Get details of all products configured for Account Tiers",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/account-tier/current",
    "method": "getCurrentUserTier",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account Tiers",
    "typeScriptTag": "accountTiers",
    "description": "Get the current logged in user's account tier",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/product-keys/{productKeyId}",
    "method": "deactivateKey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Product Keys",
    "typeScriptTag": "productKeys",
    "description": "Deactivate a productkey",
    "parameters": [
      {
        "name": "productKeyId",
        "schema": "string",
        "required": true,
        "description": "The product key id",
        "example": "PRODUCTKEYID"
      },
      {
        "name": "force",
        "schema": "boolean",
        "required": false,
        "description": "Delete the productkey immediately as opposed to at the end of its associated SettlementPeriod"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/customers/{customerId}/method/{methodId}",
    "method": "deleteCustomerMethod",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Payment Methods",
    "typeScriptTag": "paymentMethods",
    "description": "Delete a payment method from a payment customer",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "The payment customer id",
        "example": "CUSTOMERID"
      },
      {
        "name": "methodId",
        "schema": "string",
        "required": true,
        "description": "The payment method id",
        "example": "METHODID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Payment Customer"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api-keys/{id}",
    "method": "deleteOperation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "Delete an API Key",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The API key id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/account-tier/{id}/payment-methods/{paymentMethodId}",
    "method": "deletePaymentMethods",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Account Tiers",
    "typeScriptTag": "accountTiers",
    "description": "Get details of loaded payment methods for account tiers",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The account tier ID",
        "example": "ID"
      },
      {
        "name": "paymentMethodId",
        "schema": "string",
        "required": true,
        "description": "The payment method ID",
        "example": "PAYMENTMETHODID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/meter",
    "method": "apiMeteringData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Metring",
    "typeScriptTag": "metring",
    "description": "Insert API metering data",
    "parameters": [
      {
        "name": "api",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3c2c3d64-2f59-4642-9406-17d7fb5e2d5c"
      },
      {
        "name": "productKey",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "53546bb0-9014-11eb-a8b3-0242ac130003"
      },
      {
        "name": "application",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "53546bb0-9014-11eb-a8b3-0242ac130003"
      },
      {
        "name": "method",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GET"
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://api.foo.com/v1/api"
      },
      {
        "name": "metadata",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "5.0"
      },
      {
        "name": "backendLatency",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 0.05
      },
      {
        "name": "gatewayLatency",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 0.05
      },
      {
        "name": "responseCode",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 200
      },
      {
        "name": "timedOut",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "requestMessageSize",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 10000
      },
      {
        "name": "responseMessageSize",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 10000
      },
      {
        "name": "requestHeaders",
        "schema": "array",
        "required": true,
        "description": "",
        "example": 10000
      },
      {
        "name": "responseHeaders",
        "schema": "array",
        "required": true,
        "description": "",
        "example": 10000
      },
      {
        "name": "userAgent",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10000"
      },
      {
        "name": "remoteUser",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "apiclient"
      },
      {
        "name": "remoteHost",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "api.acmesoft.com"
      },
      {
        "name": "httpProtocol",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "HTTP/1.0"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "correlationId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "e6e62ba0-94c1-466c-8921-52f9d6b84066"
      },
      {
        "name": "platformAPIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "hak-1234-20a033c6fbcb453ba9c797971c237080"
      },
      {
        "name": "elements",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/event",
    "method": "saveApiEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Save can API event",
    "parameters": [
      {
        "name": "requestId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "eventType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "assetId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "productKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "application",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "method",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "currentMillis",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "uri",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "elapsedTime",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "responseCode",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "requestMessageSize",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "responseMessageSize",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "remoteHost",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userAgent",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "correlationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "backendLatency",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/meter/product-key",
    "method": "validateProductKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metring",
    "typeScriptTag": "metring",
    "description": "Determine if a ProductKey is valid or not",
    "parameters": [
      {
        "name": "productKey",
        "schema": "string",
        "required": false,
        "description": "The product key"
      },
      {
        "name": "application",
        "schema": "string",
        "required": false,
        "description": "The application ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Revenium Metering API"
      apiBaseUrl="https://api.revenium.io/meter/v1/api"
      apiVersion="1.14.0-SNAPSHOT"
      endpoints={296}
      sdkMethods={377}
      schemas={1012}
      parameters={1400}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/revenium/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/revenium/openapi.yaml"
      developerDocumentation="revenium.readme.io/reference"
    />
  );
}
  