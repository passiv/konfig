import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function BaremetricsTypeScriptSdk() {
  return (
    <Sdk
      sdkName="baremetrics-typescript-sdk"
      metaDescription="Baremetrics provides real-time subscription metrics for teams built with Stripe, Shopify Partners, Braintree, Recurly, Chargebee, Google Play, and App Store Connect. 

In addition to metrics, Baremetrics provides tools that help you reduce churn and grow your business faster: 

Recover: Prevent failed charges and keep your hard-earned revenue with our 100% automated toolkit. 

Cancellation insights: Learn exactly why your customers cancel, calculate lost revenue by cancellation reason, and send automated emails to win customers back.

Flightpath: Plan for the future with flexible financial modeling tools built for growing SaaS companies."
      company="Baremetrics"
      doesNotHaveApiDescription={true}
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/baremetrics/logo.png"
      clientNameCamelCase="baremetrics"
      homepage="baremetrics.com"
      lastUpdated={new Date("2024-03-11T06:04:39.099Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/baremetrics/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/baremetrics/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/v1/account",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Get Account",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/sources",
    "method": "listSources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "List Sources",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/{source_id}/plans",
    "method": "getPlansList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "List Plans",
    "parameters": [
      {
        "name": "search",
        "schema": "string",
        "description": "Allows you to search based on the name or oid fields"
      },
      {
        "name": "sourceId",
        "schema": "string",
        "required": true,
        "description": "Please see [Sources](ref:sources)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/{source_id}/plans",
    "method": "createPlan",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Create Plan",
    "parameters": [
      {
        "name": "sourceId",
        "schema": "string",
        "required": true,
        "description": "Please see [Sources](ref:sources)"
      },
      {
        "name": "oid",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "interval",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "interval_count",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "trial_duration",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "trial_duration_unit",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/{source_id}/plans/{oid}",
    "method": "deletePlan",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Delete Plan",
    "parameters": [
      {
        "name": "oid",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "sourceId",
        "schema": "string",
        "required": true,
        "description": "Please see [Sources](ref:sources)"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/{source_id}/plans/{oid}",
    "method": "getPlan",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Show Plan",
    "parameters": [
      {
        "name": "oid",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "sourceId",
        "schema": "string",
        "required": true,
        "description": "Please see [Sources](ref:sources)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/{source_id}/plans/{plan_oid}",
    "method": "updatePlan",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Update Plan",
    "parameters": [
      {
        "name": "planOid",
        "schema": "string",
        "required": true,
        "description": "Your interval plan id"
      },
      {
        "name": "sourceId",
        "schema": "string",
        "required": true,
        "description": "Please see [Sources](ref:sources)"
      },
      {
        "name": "name",
        "schema": "string",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/{source_id}/customers",
    "method": "getCustomerList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "List Customers",
    "parameters": [
      {
        "name": "search",
        "schema": "string",
        "description": "Allows you to search for a customer based on: oid, email, notes and name"
      },
      {
        "name": "sourceId",
        "schema": "string",
        "required": true,
        "description": "Please see [Sources](ref:sources)"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Allows you to sort the results. You can use ltv or created"
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/{source_id}/customers",
    "method": "createCustomerRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Create Customer",
    "parameters": [
      {
        "name": "sourceId",
        "schema": "string",
        "required": true,
        "description": "Please see [Sources](ref:sources)"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "oid",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "created",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/{source_id}/customers/{oid}",
    "method": "deleteCustomer",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Delete Customer",
    "parameters": [
      {
        "name": "oid",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "sourceId",
        "schema": "string",
        "required": true,
        "description": "Please see [Sources](ref:sources)"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/{source_id}/customers/{oid}",
    "method": "getCustomerDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Show Customer",
    "parameters": [
      {
        "name": "oid",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "sourceId",
        "schema": "string",
        "required": true,
        "description": "Please see [Sources](ref:sources)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/{source_id}/customers/{oid}/events",
    "method": "listCustomerEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "List Customer Events",
    "parameters": [
      {
        "name": "sourceId",
        "schema": "string",
        "required": true,
        "description": "Please see [Sources](ref:sources)"
      },
      {
        "name": "oid",
        "schema": "string",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/{source_id}/customers/{customer_oid}",
    "method": "updateCustomerInformation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Update Customer",
    "parameters": [
      {
        "name": "customerOid",
        "schema": "string",
        "required": true,
        "description": "Your unique ID for the customer"
      },
      {
        "name": "sourceId",
        "schema": "string",
        "required": true,
        "description": "Please see [Sources](ref:sources)"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/{source_id}/subscriptions",
    "method": "getSubscriptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "List Subscriptions",
    "parameters": [
      {
        "name": "sourceId",
        "schema": "string",
        "required": true,
        "description": "Please see [Sources](ref:sources)"
      },
      {
        "name": "customerOid",
        "schema": "string",
        "description": "This allows you to return subscriptions for a given customer"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Allows you to order subscriptions from newest to oldest `desc` or oldest to newest `asc`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/{source_id}/subscriptions",
    "method": "createSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Create Subscription",
    "parameters": [
      {
        "name": "sourceId",
        "schema": "string",
        "required": true,
        "description": "Please see [Sources](ref:sources)"
      },
      {
        "name": "oid",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "started_at",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "canceled_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "plan_oid",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "customer_oid",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "addons",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "discount",
        "schema": "integer",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/{source_id}/subscriptions/{oid}",
    "method": "removeSubscription",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Delete Subscription",
    "parameters": [
      {
        "name": "oid",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "sourceId",
        "schema": "string",
        "required": true,
        "description": "Please see [Sources](ref:sources)"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/{source_id}/subscriptions/{oid}",
    "method": "getSubscription",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Show Subscription",
    "parameters": [
      {
        "name": "oid",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "sourceId",
        "schema": "string",
        "required": true,
        "description": "Please see [Sources](ref:sources)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/{source_id}/subscriptions/{subscription_oid}",
    "method": "updateSubscription",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Update Subscription",
    "parameters": [
      {
        "name": "subscriptionOid",
        "schema": "string",
        "required": true,
        "description": "Your unique ID for the subscription"
      },
      {
        "name": "sourceId",
        "schema": "string",
        "required": true,
        "description": "Please see [Sources](ref:sources)"
      },
      {
        "name": "plan_oid",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "occurred_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "addons",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "discount",
        "schema": "integer",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/{source_id}/subscriptions/{subscription_oid}/cancel",
    "method": "cancelSubscription",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Cancel Subscription",
    "parameters": [
      {
        "name": "subscriptionOid",
        "schema": "string",
        "required": true,
        "description": "Your unique ID for the subscription"
      },
      {
        "name": "sourceId",
        "schema": "string",
        "required": true,
        "description": "Please see [Sources](ref:sources)"
      },
      {
        "name": "canceled_at",
        "schema": "string",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/annotations",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Annotation",
    "typeScriptTag": "annotation",
    "description": "List Annotations",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/annotations",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Annotation",
    "typeScriptTag": "annotation",
    "description": "Create Annotation",
    "parameters": [
      {
        "name": "metric",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "annotation",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "global",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "user_id",
        "schema": "string",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/annotations/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Annotation",
    "typeScriptTag": "annotation",
    "description": "Delete Annotation",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/annotations/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Annotation",
    "typeScriptTag": "annotation",
    "description": "Show Annotation",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/goals",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Goal",
    "typeScriptTag": "goal",
    "description": "List Goals",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/goals",
    "method": "createNewGoal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Goal",
    "typeScriptTag": "goal",
    "description": "Create Goal",
    "parameters": [
      {
        "name": "metric",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "start_amount",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "end_amount",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "start_date",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "end_date",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/goals/{id}",
    "method": "remove",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Goal",
    "typeScriptTag": "goal",
    "description": "Delete Goal",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/goals/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Goal",
    "typeScriptTag": "goal",
    "description": "Show Goal",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/users",
    "method": "listUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "List Users",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/users/{id}",
    "method": "getUserById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Show User",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/{source_id}/charges",
    "method": "getChargeList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "List Charges",
    "parameters": [
      {
        "name": "sourceId",
        "schema": "string",
        "required": true,
        "description": "Please see [Sources](ref:sources)"
      },
      {
        "name": "start",
        "schema": "string",
        "description": ""
      },
      {
        "name": "end",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subscriptionOid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerOid",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/{source_id}/charges",
    "method": "createChargeOneOff",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Create Charge",
    "parameters": [
      {
        "name": "sourceId",
        "schema": "string",
        "required": true,
        "description": "Please see [Sources](ref:sources)"
      },
      {
        "name": "oid",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "customer_oid",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fee",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "subscription_oid",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/{source_id}/charges/{oid}",
    "method": "removeOneOffCharge",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Delete Charge",
    "parameters": [
      {
        "name": "sourceId",
        "schema": "string",
        "required": true,
        "description": "Please see [Sources](ref:sources)"
      },
      {
        "name": "oid",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/{source_id}/charges/{oid}",
    "method": "getChargeDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Show Charge",
    "parameters": [
      {
        "name": "sourceId",
        "schema": "string",
        "required": true,
        "description": "Please see [Sources](ref:sources)"
      },
      {
        "name": "oid",
        "schema": "string",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/{source_id}/refunds",
    "method": "getRefunds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "List Refunds",
    "parameters": [
      {
        "name": "sourceId",
        "schema": "string",
        "required": true,
        "description": "Please see [Sources](ref:sources)"
      },
      {
        "name": "start",
        "schema": "string",
        "description": ""
      },
      {
        "name": "end",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/{source_id}/refunds",
    "method": "createOneOffRefund",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Create Refund",
    "parameters": [
      {
        "name": "sourceId",
        "schema": "string",
        "required": true,
        "description": "Please see [Sources](ref:sources)"
      },
      {
        "name": "oid",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "customer_oid",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "charge_oid",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "created",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/{source_id}/refunds/{oid}",
    "method": "removeOneOffRefund",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Delete Refund",
    "parameters": [
      {
        "name": "sourceId",
        "schema": "string",
        "required": true,
        "description": "Please see [Sources](ref:sources)"
      },
      {
        "name": "oid",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/{source_id}/refunds/{oid}",
    "method": "getRefundDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Show Refund",
    "parameters": [
      {
        "name": "sourceId",
        "schema": "string",
        "required": true,
        "description": "Please see [Sources](ref:sources)"
      },
      {
        "name": "oid",
        "schema": "string",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/{source_id}/events",
    "method": "getEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "List Events",
    "parameters": [
      {
        "name": "sourceId",
        "schema": "string",
        "required": true,
        "description": "Please see [Sources](ref:sources)"
      },
      {
        "name": "liveStream",
        "schema": "string",
        "description": "Set this to true to only return events that show up in the live stream"
      },
      {
        "name": "start",
        "schema": "string",
        "description": ""
      },
      {
        "name": "end",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/{source_id}/events/{id}",
    "method": "getEventById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Show Event",
    "parameters": [
      {
        "name": "sourceId",
        "schema": "string",
        "required": true,
        "description": "Please see [Sources](ref:sources)"
      },
      {
        "name": "id",
        "schema": "string",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/metrics",
    "method": "showSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metric",
    "typeScriptTag": "metric",
    "description": "Show Summary",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/metrics/{metric}",
    "method": "showDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metric",
    "typeScriptTag": "metric",
    "description": "Show Metric",
    "parameters": [
      {
        "name": "metric",
        "schema": "string",
        "required": true,
        "description": "You can see a list of available metrics [here](https://developers.baremetrics.com/reference/introduction)"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "compareTo",
        "schema": "integer",
        "description": "The number of days ago to compare results to"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/metrics/{metric}/customers",
    "method": "listCustomers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metric",
    "typeScriptTag": "metric",
    "description": "Show Customers",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "metric",
        "schema": "string",
        "required": true,
        "description": "You can see a list of available metrics [here](https://developers.baremetrics.com/reference/introduction)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/metrics/{metric}/plans",
    "method": "showPlanBreakout",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metric",
    "typeScriptTag": "metric",
    "description": "Show Plan Breakout",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "metric",
        "schema": "string",
        "required": true,
        "description": "You can see a list of available metrics [here](https://developers.baremetrics.com/reference/introduction)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/metrics/cohorts",
    "method": "showCohorts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metric",
    "typeScriptTag": "metric",
    "description": "Show Cohorts",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/segments/fields",
    "method": "getFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Segment",
    "typeScriptTag": "segment",
    "description": "List Fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/segments",
    "method": "listSegments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Segment",
    "typeScriptTag": "segment",
    "description": "List Segments",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/segments",
    "method": "createRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Segment",
    "typeScriptTag": "segment",
    "description": "Create Segment",
    "parameters": [
      {
        "name": "query",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/segments/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Segment",
    "typeScriptTag": "segment",
    "description": "Delete Segment",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/segments/{id}",
    "method": "showDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Segment",
    "typeScriptTag": "segment",
    "description": "Show Segment",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/segments/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Segment",
    "typeScriptTag": "segment",
    "description": "Update Segment",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "query",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/segments/search",
    "method": "findWithoutSave",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Segment",
    "typeScriptTag": "segment",
    "description": "Search Segment",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "query",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/attributes",
    "method": "setProperties",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Attribute",
    "typeScriptTag": "attribute",
    "description": "Set Attributes",
    "parameters": [
      {
        "name": "attributes",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/attributes/fields",
    "method": "getFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Attribute",
    "typeScriptTag": "attribute",
    "description": "List Attribute Fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/attributes/fields",
    "method": "createField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Attribute",
    "typeScriptTag": "attribute",
    "description": "Create Attribute Field",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "field_type",
        "schema": "string",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/attributes/fields/{id}",
    "method": "updateField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Attribute",
    "typeScriptTag": "attribute",
    "description": "Update Attribute Field",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "title",
        "schema": "string",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/cancellation_insights/events",
    "method": "listCancellationInsightEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Event",
    "typeScriptTag": "event",
    "description": "List Events",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/cancellation_insights/events",
    "method": "createInsightEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Event",
    "typeScriptTag": "event",
    "description": "Create Event",
    "parameters": [
      {
        "name": "reason_id",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customer_oid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subscription_oids",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/cancellation_insights/events/{id}",
    "method": "getEventById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Event",
    "typeScriptTag": "event",
    "description": "Show Event",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/cancellation_insights/events/{id}",
    "method": "updateEventById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Event",
    "typeScriptTag": "event",
    "description": "Update Event",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "reason_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "comment",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/cancellation_insights/reasons/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Reason",
    "typeScriptTag": "reason",
    "description": "Delete Reason",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/cancellation_insights/reasons/{id}",
    "method": "showDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reason",
    "typeScriptTag": "reason",
    "description": "Show Reason",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/cancellation_insights/reasons/{id}",
    "method": "updateReasonById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Reason",
    "typeScriptTag": "reason",
    "description": "Update Reason",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "sort_key",
        "schema": "integer",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/cancellation_insights/reasons",
    "method": "createNewReason",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CancellationInsight",
    "typeScriptTag": "cancellationInsight",
    "description": "Create Reason",
    "parameters": [
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "sort_key",
        "schema": "integer",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Production"
      apiBaseUrl="https://api.baremetrics.com"
      apiVersion="1.0"
      endpoints={41}
      sdkMethods={63}
      schemas={148}
      parameters={164}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/baremetrics/openapi.yaml"
    />
  );
}
  