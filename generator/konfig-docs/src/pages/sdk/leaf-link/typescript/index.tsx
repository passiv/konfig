import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function LeafLinkTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="leaf-link-typescript-sdk"
      metaDescription={`LeafLink is the industry's wholesale platform. Easily and efficiently sell, ship, pay, get paid, advertise and drive margin. LeafLink is live in 30 markets with over $5B in annual orders.`}
      company="LeafLink"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/leaflink/logo.png"
      companyKebabCase="leaf-link"
      clientNameCamelCase="leafLink"
      homepage="www.leaflink.com/"
      lastUpdated={new Date("2024-03-27T22:16:59.911Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/leaflink/favicon.png"
      // Missing contactUrl
      contactEmail="support@leaflink.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/leaflink/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["ecommerce","marketplaces","wholesale","cannabis"]}
      methods={[
  {
    "url": "/activity-entries",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "activity-entries",
    "typeScriptTag": "activityEntries",
    "description": "List",
    "parameters": [
      {
        "name": "dateLt",
        "schema": "string",
        "required": false,
        "description": "Filter by entered activity datetime, less than."
      },
      {
        "name": "dateLte",
        "schema": "string",
        "required": false,
        "description": "Filter by entered activity datetime, less than or equal to."
      },
      {
        "name": "dateGt",
        "schema": "string",
        "required": false,
        "description": "Filter by entered activity datetime, greater than."
      },
      {
        "name": "dateGte",
        "schema": "string",
        "required": false,
        "description": "Filter by entered activity datetime, greater than or equal to."
      },
      {
        "name": "entry",
        "schema": "string",
        "required": false,
        "description": "Filter by activity entry descriptions."
      },
      {
        "name": "entryIn",
        "schema": "string",
        "required": false,
        "description": "Filter by entry__in"
      },
      {
        "name": "entryStartswith",
        "schema": "string",
        "required": false,
        "description": "Filter by entry__startswith"
      },
      {
        "name": "modifiedLt",
        "schema": "string",
        "required": false,
        "description": "Filter by the datetime the object was last modified, less than."
      },
      {
        "name": "modifiedLte",
        "schema": "string",
        "required": false,
        "description": "Filter by the datetime the object was last modified, less than or equal to."
      },
      {
        "name": "modifiedGt",
        "schema": "string",
        "required": false,
        "description": "Filter by the datetime the object was last modified, greater than."
      },
      {
        "name": "modifiedGte",
        "schema": "string",
        "required": false,
        "description": "Filter by the datetime the object was last modified, greater than or equal to."
      },
      {
        "name": "id",
        "schema": "number",
        "required": false,
        "description": "Filter by id"
      },
      {
        "name": "createdOnLt",
        "schema": "string",
        "required": false,
        "description": "Filter by created_on datetime, less than."
      },
      {
        "name": "createdOnLte",
        "schema": "string",
        "required": false,
        "description": "Filter by created_on datetime, less than or equal to."
      },
      {
        "name": "createdOnGt",
        "schema": "string",
        "required": false,
        "description": "Filter by created_on datetime, greater than."
      },
      {
        "name": "createdOnGte",
        "schema": "string",
        "required": false,
        "description": "Filter by created_on datetime, greater than or equal to."
      },
      {
        "name": "owner",
        "schema": "number",
        "required": false,
        "description": "Filter by owner ID."
      },
      {
        "name": "author",
        "schema": "number",
        "required": false,
        "description": "Filter by author ID."
      },
      {
        "name": "company",
        "schema": "number",
        "required": false,
        "description": "Filter by associated company ID."
      },
      {
        "name": "customer",
        "schema": "number",
        "required": false,
        "description": "Filter by associated customer ID."
      },
      {
        "name": "staff",
        "schema": "number",
        "required": false,
        "description": "Filter by associated staff ID."
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Filter by activity type."
      },
      {
        "name": "brand",
        "schema": "number",
        "required": false,
        "description": "Filter by associated brand ID."
      },
      {
        "name": "contact",
        "schema": "number",
        "required": false,
        "description": "Filter by associated contact ID."
      },
      {
        "name": "companySlug",
        "schema": "string",
        "required": false,
        "description": "Filter by Company slug"
      },
      {
        "name": "delete",
        "schema": "string",
        "required": false,
        "description": "Filter by deleted or non-deleted entries."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
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
    "url": "/activity-entries",
    "method": "createEntry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "activity-entries",
    "typeScriptTag": "activityEntries",
    "description": "Create",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
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
        "name": "created_on",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "modified",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "entry",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTRY"
      },
      {
        "name": "delete",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "owner",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "author",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "company",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "customer",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "staff",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "brand",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "contact",
        "schema": "integer",
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
    "url": "/activity-entries/{id}",
    "method": "deleteFlag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "activity-entries",
    "typeScriptTag": "activityEntries",
    "description": "Delete",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/activity-entries/{id}",
    "method": "readById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "activity-entries",
    "typeScriptTag": "activityEntries",
    "description": "Read",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/activity-entries/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "activity-entries",
    "typeScriptTag": "activityEntries",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
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
        "name": "created_on",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "modified",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "entry",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTRY"
      },
      {
        "name": "delete",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "owner",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "author",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "company",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "customer",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "staff",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "brand",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "contact",
        "schema": "integer",
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
    "url": "/batch-documents",
    "method": "listAllDocuments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "batch-documents",
    "typeScriptTag": "batchDocuments",
    "description": "List batch documents",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/batch-documents",
    "method": "uploadNewDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "batch-documents",
    "typeScriptTag": "batchDocuments",
    "description": "Upload a batch document",
    "parameters": [
      {
        "name": "summary",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "document",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOCUMENT"
      },
      {
        "name": "batch",
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
      }
    ]
  },
  {
    "url": "/batch-documents/{id}",
    "method": "deleteDocument",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "batch-documents",
    "typeScriptTag": "batchDocuments",
    "description": "Delete a batch document",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/batch-documents/{id}",
    "method": "getIndividualDocument",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "batch-documents",
    "typeScriptTag": "batchDocuments",
    "description": "Retrieve a batch document",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/batches",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "batches",
    "typeScriptTag": "batches",
    "description": "List batches",
    "parameters": [
      {
        "name": "batchDateLt",
        "schema": "string",
        "required": false,
        "description": "Filter by batch_date__lt"
      },
      {
        "name": "batchDateLte",
        "schema": "string",
        "required": false,
        "description": "Filter by batch_date__lte"
      },
      {
        "name": "batchDateGt",
        "schema": "string",
        "required": false,
        "description": "Filter by batch_date__gt"
      },
      {
        "name": "batchDateGte",
        "schema": "string",
        "required": false,
        "description": "Filter by batch_date__gte"
      },
      {
        "name": "id",
        "schema": "number",
        "required": false,
        "description": "Filter by one or multiple batch ids, separated by commas."
      },
      {
        "name": "owner",
        "schema": "number",
        "required": false,
        "description": "Filter by one or multiple company ids, separated by commas."
      },
      {
        "name": "companySlug",
        "schema": "string",
        "required": false,
        "description": "Filter by owner company slug."
      },
      {
        "name": "productionBatchNumber",
        "schema": "string",
        "required": false,
        "description": "Filter by one or multiple production_batch_numbers, separated by commas."
      },
      {
        "name": "products",
        "schema": "number",
        "required": false,
        "description": "Filter by one or multiple product ids, separated by commas."
      },
      {
        "name": "thc",
        "schema": "string",
        "required": false,
        "description": "Filter by a range of THC percent."
      },
      {
        "name": "thca",
        "schema": "string",
        "required": false,
        "description": "Filter by a range of THCa percent."
      },
      {
        "name": "totalThc",
        "schema": "string",
        "required": false,
        "description": "Filter by a range of total THC percent."
      },
      {
        "name": "cbd",
        "schema": "string",
        "required": false,
        "description": "Filter by a range of CBD percent."
      },
      {
        "name": "cbda",
        "schema": "string",
        "required": false,
        "description": "Filter by a range of CBDa percent."
      },
      {
        "name": "cbg",
        "schema": "string",
        "required": false,
        "description": "Filter by a range of CBG percent."
      },
      {
        "name": "cbn",
        "schema": "string",
        "required": false,
        "description": "Filter by a range of CBN percent."
      },
      {
        "name": "totalCannabinoids",
        "schema": "string",
        "required": false,
        "description": "Filter by a range of total cannabinoids percent."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
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
    "url": "/batches",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "batches",
    "typeScriptTag": "batches",
    "description": "Create a batch",
    "parameters": [
      {
        "name": "owner",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OWNER"
      },
      {
        "name": "production_batch_number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRODUCTION_BATCH_NUMBER"
      },
      {
        "name": "batch_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BATCH_DATE"
      },
      {
        "name": "thc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "thca",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "total_thc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cbd",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cbda",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cbg",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cbn",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "total_cannabinoids",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cannabinoid_unit",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "testing_source",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TESTING_SOURCE"
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
    "url": "/batches/{id}",
    "method": "deleteBatch",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "batches",
    "typeScriptTag": "batches",
    "description": "Delete a batch",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/batches/{id}",
    "method": "getBatch",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "batches",
    "typeScriptTag": "batches",
    "description": "Retrieve a batch",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/batches/{id}",
    "method": "updateBatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "batches",
    "typeScriptTag": "batches",
    "description": "Update a batch",
    "parameters": [
      {
        "name": "production_batch_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "batch_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "thc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "thca",
        "schema": "string",
        "description": ""
      },
      {
        "name": "total_thc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "cbd",
        "schema": "string",
        "description": ""
      },
      {
        "name": "cbda",
        "schema": "string",
        "description": ""
      },
      {
        "name": "cbg",
        "schema": "string",
        "description": ""
      },
      {
        "name": "cbn",
        "schema": "string",
        "description": ""
      },
      {
        "name": "total_cannabinoids",
        "schema": "string",
        "description": ""
      },
      {
        "name": "cannabinoid_unit",
        "schema": "string",
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
    "url": "/inventory/items",
    "method": "listAllItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "inventory-items",
    "typeScriptTag": "inventoryItems",
    "description": "List",
    "parameters": [
      {
        "name": "includeArchived",
        "schema": "boolean",
        "required": false,
        "description": "Filter by archived status"
      },
      {
        "name": "product",
        "schema": "string",
        "required": false,
        "description": "Filter by product ID"
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
    "url": "/inventory/items",
    "method": "createItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "inventory-items",
    "typeScriptTag": "inventoryItems",
    "description": "Create",
    "parameters": [
      {
        "name": "batch",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "is_archived",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "facility",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "product",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "quantity",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/inventory/items/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "inventory-items",
    "typeScriptTag": "inventoryItems",
    "description": "Read",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this inventory item.",
        "example": 0
      },
      {
        "name": "includeArchived",
        "schema": "boolean",
        "required": false,
        "description": "Filter by the archived status. (https://developer.leaflink.com/legacy/v2/api/ref/index.html"
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
    "url": "/inventory/items/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "inventory-items",
    "typeScriptTag": "inventoryItems",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this inventory item.",
        "example": 0
      },
      {
        "name": "includeArchived",
        "schema": "boolean",
        "required": false,
        "description": "Filter by the archived status. (https://developer.leaflink.com/legacy/v2/api/ref/index.html"
      },
      {
        "name": "is_archived",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "number",
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
    "url": "/inventory/facilities",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "facilities",
    "typeScriptTag": "facilities",
    "description": "List",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/inventory/facilities/{id}",
    "method": "read",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "facilities",
    "typeScriptTag": "facilities",
    "description": "Read",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this facility.",
        "example": 0
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
    "url": "/brands",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "brands",
    "typeScriptTag": "brands",
    "description": "List brands",
    "parameters": [
      {
        "name": "companyIn",
        "schema": "string",
        "required": false,
        "description": "Filter by a list of company ids."
      },
      {
        "name": "company",
        "schema": "string",
        "required": false,
        "description": "Filter by company id."
      },
      {
        "name": "companySlug",
        "schema": "string",
        "required": false,
        "description": "Filter by a company slug."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
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
    "url": "/brands/{id}",
    "method": "read",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "brands",
    "typeScriptTag": "brands",
    "description": "Retrieve a brand",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "companies",
    "typeScriptTag": "companies",
    "description": "List companies",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
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
    "url": "/companies/{id}",
    "method": "read",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "companies",
    "typeScriptTag": "companies",
    "description": "Retrieve a company",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/company-staff",
    "method": "listStaffMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "company-staff",
    "typeScriptTag": "companyStaff",
    "description": "List staff members",
    "parameters": [
      {
        "name": "company",
        "schema": "string",
        "required": false,
        "description": "Filter by company id"
      },
      {
        "name": "isAdmin",
        "schema": "string",
        "required": false,
        "description": "Filter by admin status, `true` or `false`"
      },
      {
        "name": "isActive",
        "schema": "string",
        "required": false,
        "description": "Filter by active status, `true` or `false`"
      },
      {
        "name": "companySlug",
        "schema": "string",
        "required": false,
        "description": "Filter by company slug"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
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
    "url": "/company-staff/{id}",
    "method": "getStaffMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "company-staff",
    "typeScriptTag": "companyStaff",
    "description": "Retrieve a staff member",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "contacts",
    "typeScriptTag": "contacts",
    "description": "List",
    "parameters": [
      {
        "name": "modifiedLt",
        "schema": "string",
        "required": false,
        "description": "Filter by modified__lt"
      },
      {
        "name": "modifiedLte",
        "schema": "string",
        "required": false,
        "description": "Filter by modified__lte"
      },
      {
        "name": "modifiedGt",
        "schema": "string",
        "required": false,
        "description": "Filter by modified__gt"
      },
      {
        "name": "modifiedGte",
        "schema": "string",
        "required": false,
        "description": "Filter by modified__gte"
      },
      {
        "name": "id",
        "schema": "number",
        "required": false,
        "description": "Filter by the exact id of the contact"
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": false,
        "description": "Filter by the last name of a contact."
      },
      {
        "name": "lastNameIn",
        "schema": "string",
        "required": false,
        "description": "Filter by last_name__in"
      },
      {
        "name": "lastNameStartswith",
        "schema": "string",
        "required": false,
        "description": "Filter by last_name__startswith"
      },
      {
        "name": "createdOnLt",
        "schema": "string",
        "required": false,
        "description": "Filter by created_on datetime, less than."
      },
      {
        "name": "createdOnLte",
        "schema": "string",
        "required": false,
        "description": "Filter by created_on datetime, less than or equal to."
      },
      {
        "name": "createdOnGt",
        "schema": "string",
        "required": false,
        "description": "Filter by created_on datetime, greater than."
      },
      {
        "name": "createdOnGte",
        "schema": "string",
        "required": false,
        "description": "Filter by created_on datetime, greater than or equal to."
      },
      {
        "name": "companySlug",
        "schema": "string",
        "required": false,
        "description": "Filter by owner Company slug."
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": false,
        "description": "Filter by the first name of a contact."
      },
      {
        "name": "firstNameIn",
        "schema": "string",
        "required": false,
        "description": "Filter by first_name__in"
      },
      {
        "name": "firstNameStartswith",
        "schema": "string",
        "required": false,
        "description": "Filter by first_name__startswith"
      },
      {
        "name": "owner",
        "schema": "number",
        "required": false,
        "description": "Filter by one or multiple company ids, separated by commas."
      },
      {
        "name": "delete",
        "schema": "string",
        "required": false,
        "description": "Filter by contact deletion status"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
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
    "url": "/contacts",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "contacts",
    "typeScriptTag": "contacts",
    "description": "Create",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "created_on",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "modified",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "owner",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRST_NAME"
      },
      {
        "name": "last_name",
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
        "name": "secondary_email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "role",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone_extension",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "secondary_phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "secondary_phone_extension",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "delete",
        "schema": "boolean",
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
    "url": "/contacts/{id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "contacts",
    "typeScriptTag": "contacts",
    "description": "Delete",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{id}",
    "method": "read",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "contacts",
    "typeScriptTag": "contacts",
    "description": "Read",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "contacts",
    "typeScriptTag": "contacts",
    "description": "Update",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "created_on",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "modified",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "owner",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRST_NAME"
      },
      {
        "name": "last_name",
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
        "name": "secondary_email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "role",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone_extension",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "secondary_phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "secondary_phone_extension",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "delete",
        "schema": "boolean",
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
    "url": "/customer-status",
    "method": "listAllAvailableObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customer-statuses",
    "typeScriptTag": "customerStatuses",
    "description": "List",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
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
    "url": "/customer-status",
    "method": "createNewStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "customer-statuses",
    "typeScriptTag": "customerStatuses",
    "description": "Create",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATE"
      },
      {
        "name": "order",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "owner",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "is_stock",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "hex_color",
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
    "url": "/customer-statuses/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "customer-statuses",
    "typeScriptTag": "customerStatuses",
    "description": "Delete",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/customer-statuses/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customer-statuses",
    "typeScriptTag": "customerStatuses",
    "description": "Read",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/customer-statuses/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "customer-statuses",
    "typeScriptTag": "customerStatuses",
    "description": "Update",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATE"
      },
      {
        "name": "order",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "owner",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "is_stock",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "hex_color",
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
    "url": "/customer-tiers",
    "method": "listAllAvailableObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customer-tiers",
    "typeScriptTag": "customerTiers",
    "description": "List",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
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
    "url": "/customer-tiers/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customer-tiers",
    "typeScriptTag": "customerTiers",
    "description": "Read",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customers",
    "typeScriptTag": "customers",
    "description": "List customers",
    "parameters": [
      {
        "name": "fieldsInclude",
        "schema": "string",
        "description": "Include only specific fields in the response, separated by commas."
      },
      {
        "name": "fieldsExclude",
        "schema": "string",
        "description": "Exclude specific fields in the response, separated by commas."
      },
      {
        "name": "includeChildren",
        "schema": "string",
        "description": "Include additional fields in the response. Available values include `tags`, `service_zone`, `managers`, `contacts`, and `license_type`"
      },
      {
        "name": "nickname",
        "schema": "string",
        "required": false,
        "description": "Filter by the customer's nickname."
      },
      {
        "name": "nicknameIn",
        "schema": "string",
        "required": false,
        "description": "Filter by nickname__in"
      },
      {
        "name": "nicknameStartswith",
        "schema": "string",
        "required": false,
        "description": "Filter by nickname__startswith"
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": "Filter by the customer's business phone number."
      },
      {
        "name": "phoneIn",
        "schema": "string",
        "required": false,
        "description": "Filter by phone__in"
      },
      {
        "name": "phoneStartswith",
        "schema": "string",
        "required": false,
        "description": "Filter by phone__startswith"
      },
      {
        "name": "dba",
        "schema": "string",
        "required": false,
        "description": "Filter by the customer's dba."
      },
      {
        "name": "dbaIn",
        "schema": "string",
        "required": false,
        "description": "Filter by dba__in"
      },
      {
        "name": "dbaStartswith",
        "schema": "string",
        "required": false,
        "description": "Filter by dba__startswith"
      },
      {
        "name": "ownerSlug",
        "schema": "string",
        "required": false,
        "description": "Filter by the slug of the Company that owns this Customer record."
      },
      {
        "name": "idIn",
        "schema": "number",
        "required": false,
        "description": "Filter by id__in"
      },
      {
        "name": "id",
        "schema": "number",
        "required": false,
        "description": "Filter by id"
      },
      {
        "name": "nextContactDateLt",
        "schema": "string",
        "required": false,
        "description": "Filter by next_contact_date__lt"
      },
      {
        "name": "nextContactDateLte",
        "schema": "string",
        "required": false,
        "description": "Filter by next_contact_date__lte"
      },
      {
        "name": "nextContactDateGt",
        "schema": "string",
        "required": false,
        "description": "Filter by next_contact_date__gt"
      },
      {
        "name": "nextContactDateGte",
        "schema": "string",
        "required": false,
        "description": "Filter by next_contact_date__gte"
      },
      {
        "name": "companySlug",
        "schema": "string",
        "required": false,
        "description": "Filter by the slug of the Company that owns this Customer record."
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": "Filter by the customer's external id."
      },
      {
        "name": "externalIdIn",
        "schema": "string",
        "required": false,
        "description": "Filter by external_id__in"
      },
      {
        "name": "externalIdStartswith",
        "schema": "string",
        "required": false,
        "description": "Filter by external_id__startswith"
      },
      {
        "name": "ein",
        "schema": "string",
        "required": false,
        "description": "Filter by the customer's EIN."
      },
      {
        "name": "einIn",
        "schema": "string",
        "required": false,
        "description": "Filter by ein__in"
      },
      {
        "name": "einStartswith",
        "schema": "string",
        "required": false,
        "description": "Filter by ein__startswith"
      },
      {
        "name": "discountPercentLt",
        "schema": "number",
        "required": false,
        "description": "Filter by discount_percent__lt"
      },
      {
        "name": "discountPercentLte",
        "schema": "number",
        "required": false,
        "description": "Filter by discount_percent__lte"
      },
      {
        "name": "discountPercentGt",
        "schema": "number",
        "required": false,
        "description": "Filter by discount_percent__gt"
      },
      {
        "name": "discountPercentGte",
        "schema": "number",
        "required": false,
        "description": "Filter by discount_percent__gte"
      },
      {
        "name": "oldLicenseNumber",
        "schema": "string",
        "required": false,
        "description": "Filter by the customer's previous license number."
      },
      {
        "name": "oldLicenseNumberIn",
        "schema": "string",
        "required": false,
        "description": "Filter by old_license_number__in"
      },
      {
        "name": "oldLicenseNumberStartswith",
        "schema": "string",
        "required": false,
        "description": "Filter by old_license_number__startswith"
      },
      {
        "name": "modifiedLt",
        "schema": "string",
        "required": false,
        "description": "Filter by the datetime the object was last modified, less than."
      },
      {
        "name": "modifiedLte",
        "schema": "string",
        "required": false,
        "description": "Filter by the datetime the object was last modified, less than or equal to."
      },
      {
        "name": "modifiedGt",
        "schema": "string",
        "required": false,
        "description": "Filter by the datetime the object was last modified, greater than."
      },
      {
        "name": "modifiedGte",
        "schema": "string",
        "required": false,
        "description": "Filter by the datetime the object was last modified, greater than or equal to."
      },
      {
        "name": "brand",
        "schema": "string",
        "required": false,
        "description": "Filter by the customer's associated brand."
      },
      {
        "name": "brandIn",
        "schema": "string",
        "required": false,
        "description": "Filter by brand__in"
      },
      {
        "name": "brandStartswith",
        "schema": "string",
        "required": false,
        "description": "Filter by brand__startswith"
      },
      {
        "name": "createdOnLt",
        "schema": "string",
        "required": false,
        "description": "Filter by created_on datetime, less than."
      },
      {
        "name": "createdOnLte",
        "schema": "string",
        "required": false,
        "description": "Filter by created_on datetime, less than or equal to."
      },
      {
        "name": "createdOnGt",
        "schema": "string",
        "required": false,
        "description": "Filter by created_on datetime, greater than."
      },
      {
        "name": "createdOnGte",
        "schema": "string",
        "required": false,
        "description": "Filter by created_on datetime, greater than or equal to."
      },
      {
        "name": "address",
        "schema": "string",
        "required": false,
        "description": "Filter by the customer's address."
      },
      {
        "name": "addressIn",
        "schema": "string",
        "required": false,
        "description": "Filter by address__in"
      },
      {
        "name": "addressStartswith",
        "schema": "string",
        "required": false,
        "description": "Filter by address__startswith"
      },
      {
        "name": "businessLicenseName",
        "schema": "string",
        "required": false,
        "description": "Filter by the customer's business license name."
      },
      {
        "name": "businessLicenseNameIn",
        "schema": "string",
        "required": false,
        "description": "Filter by business_license_name__in"
      },
      {
        "name": "businessLicenseNameStartswith",
        "schema": "string",
        "required": false,
        "description": "Filter by business_license_name__startswith"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Filter by the customer's name."
      },
      {
        "name": "nameIn",
        "schema": "string",
        "required": false,
        "description": "Filter by name__in"
      },
      {
        "name": "nameStartswith",
        "schema": "string",
        "required": false,
        "description": "Filter by name__startswith"
      },
      {
        "name": "businessIdentifier",
        "schema": "string",
        "required": false,
        "description": "Filter by the customer's business identifier."
      },
      {
        "name": "businessIdentifierIn",
        "schema": "string",
        "required": false,
        "description": "Filter by business_identifier__in"
      },
      {
        "name": "businessIdentifierStartswith",
        "schema": "string",
        "required": false,
        "description": "Filter by business_identifier__startswith"
      },
      {
        "name": "licenseNumber",
        "schema": "string",
        "required": false,
        "description": "Filter by the customer's license number."
      },
      {
        "name": "licenseNumberIn",
        "schema": "string",
        "required": false,
        "description": "Filter by license_number__in"
      },
      {
        "name": "licenseNumberStartswith",
        "schema": "string",
        "required": false,
        "description": "Filter by license_number__startswith"
      },
      {
        "name": "extAcctId",
        "schema": "string",
        "required": false,
        "description": "Filter by the customer's external account id."
      },
      {
        "name": "extAcctIdIn",
        "schema": "string",
        "required": false,
        "description": "Filter by ext_acct_id__in"
      },
      {
        "name": "extAcctIdStartswith",
        "schema": "string",
        "required": false,
        "description": "Filter by ext_acct_id__startswith"
      },
      {
        "name": "extAcctIdIsnull",
        "schema": "string",
        "required": false,
        "description": "Filter by ext_acct_id__isnull"
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "Filter by the customer's email."
      },
      {
        "name": "emailIn",
        "schema": "string",
        "required": false,
        "description": "Filter by email__in"
      },
      {
        "name": "emailStartswith",
        "schema": "string",
        "required": false,
        "description": "Filter by email__startswith"
      },
      {
        "name": "website",
        "schema": "string",
        "required": false,
        "description": "Filter by the customer's website."
      },
      {
        "name": "websiteIn",
        "schema": "string",
        "required": false,
        "description": "Filter by website__in"
      },
      {
        "name": "websiteStartswith",
        "schema": "string",
        "required": false,
        "description": "Filter by website__startswith"
      },
      {
        "name": "owner",
        "schema": "number",
        "required": false,
        "description": "Filter by owner ID."
      },
      {
        "name": "partner",
        "schema": "number",
        "required": false,
        "description": "Filter by partner ID."
      },
      {
        "name": "tier",
        "schema": "number",
        "required": false,
        "description": "Filter by the ID of a customer's tier."
      },
      {
        "name": "priceSchedule",
        "schema": "number",
        "required": false,
        "description": "Filter by the ID of a customer's price schedule."
      },
      {
        "name": "serviceZone",
        "schema": "number",
        "required": false,
        "description": "Filter by the ID of a customer's service zone."
      },
      {
        "name": "licenseType",
        "schema": "number",
        "required": false,
        "description": "Filter by the ID of a customer's license type."
      },
      {
        "name": "licenseInactive",
        "schema": "string",
        "required": false,
        "description": "Filter by the whether a customer's license is active."
      },
      {
        "name": "paymentTerm",
        "schema": "integer",
        "required": false,
        "description": "Filter by the customer's payment term"
      },
      {
        "name": "paymentMethod",
        "schema": "integer",
        "required": false,
        "description": "Filter by the customer's payment method"
      },
      {
        "name": "status",
        "schema": "number",
        "required": false,
        "description": "Filter by the ID of a customer's status."
      },
      {
        "name": "state",
        "schema": "number",
        "required": false,
        "description": "Filter by the ID of a customer's state."
      },
      {
        "name": "leaflinkSource",
        "schema": "string",
        "required": false,
        "description": "Filter by whether the customer was added by LeafLink."
      },
      {
        "name": "archived",
        "schema": "string",
        "required": false,
        "description": "Filter by whether the customer has been archived."
      },
      {
        "name": "delinquent",
        "schema": "string",
        "required": false,
        "description": "Filter by whether the customer is delinquent."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "externalIdKey",
        "schema": "string",
        "description": "Filter for orders that match external_ids key:values.  Must be used with external_id_values."
      },
      {
        "name": "externalIdValues",
        "schema": "string",
        "description": "Filter for orders that match external_ids key:values.  Multiple values separated by a comma.  Must be used with external_id_key."
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
    "url": "/customers",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "customers",
    "typeScriptTag": "customers",
    "description": "Create a customer",
    "parameters": [
      {
        "name": "description",
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
        "name": "managers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "next_contact_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "nickname",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "external_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ext_acct_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "license_number",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "old_license_number",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "license_inactive",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "business_identifier",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ein",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "directions",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "delivery_preferences",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "shipping_charge",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "brand",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "dba",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "business_license_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "website",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unit_number",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zipcode",
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
        "name": "county",
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
        "name": "lat",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "long",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone_extension",
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
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "leaflink_last_views",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "leaflink_source",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "delinquent",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "discount_percent",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "owner",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "tier",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "price_schedule",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "service_zone",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "license_type",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_term",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_methods",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "available_payment_options",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "external_ids",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "corporate_address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "delivery_address",
        "schema": "object",
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
    "url": "/customers/{id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "customers",
    "typeScriptTag": "customers",
    "description": "Archive a customer",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/{id}",
    "method": "read",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customers",
    "typeScriptTag": "customers",
    "description": "Retrieve a customer",
    "parameters": [
      {
        "name": "fieldsInclude",
        "schema": "string",
        "description": "Include only specific fields in the response, separated by commas."
      },
      {
        "name": "fieldsExclude",
        "schema": "string",
        "description": "Exclude specific fields in the response, separated by commas."
      },
      {
        "name": "includeChildren",
        "schema": "string",
        "description": "Include additional fields in the response. Available values include `tags`, `service_zone`, `managers`, `contacts`, and `license_type`"
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
    "url": "/customers/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "customers",
    "typeScriptTag": "customers",
    "description": "Update a customer",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "description": ""
      },
      {
        "name": "managers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "next_contact_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "nickname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "external_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ext_acct_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "license_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "old_license_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "license_inactive",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "business_identifier",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ein",
        "schema": "string",
        "description": ""
      },
      {
        "name": "directions",
        "schema": "string",
        "description": ""
      },
      {
        "name": "delivery_preferences",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipping_charge",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brand",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dba",
        "schema": "string",
        "description": ""
      },
      {
        "name": "business_license_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "website",
        "schema": "string",
        "description": ""
      },
      {
        "name": "address",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unit_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "zipcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "description": ""
      },
      {
        "name": "county",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lat",
        "schema": "string",
        "description": ""
      },
      {
        "name": "long",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone_extension",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "leaflink_last_views",
        "schema": "string",
        "description": ""
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "delinquent",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "discount_percent",
        "schema": "string",
        "description": ""
      },
      {
        "name": "owner",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "tier",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "price_schedule",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "service_zone",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "license_type",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "available_payment_options",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "payment_term",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "payment_methods",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "status",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "external_ids",
        "schema": "object",
        "description": ""
      },
      {
        "name": "corporate_address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "delivery_address",
        "schema": "object",
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
    "url": "/license-types",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "license-types",
    "typeScriptTag": "licenseTypes",
    "description": "List",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
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
    "url": "/license-types/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "license-types",
    "typeScriptTag": "licenseTypes",
    "description": "Read",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/licenses",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "licenses",
    "typeScriptTag": "licenses",
    "description": "List",
    "parameters": [
      {
        "name": "numberIn",
        "schema": "string",
        "required": false,
        "description": "Filter by number__in"
      },
      {
        "name": "number",
        "schema": "string",
        "required": false,
        "description": "Filter by number"
      },
      {
        "name": "companySlug",
        "schema": "string",
        "required": false,
        "description": "Filter by company_slug"
      },
      {
        "name": "id",
        "schema": "number",
        "required": false,
        "description": "Filter by id"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
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
    "url": "/licenses/{id}",
    "method": "read",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "licenses",
    "typeScriptTag": "licenses",
    "description": "Read",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/line-items",
    "method": "listAllActiveCompanies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "line-items",
    "typeScriptTag": "lineItems",
    "description": "List line items",
    "parameters": [
      {
        "name": "expand",
        "schema": "string",
        "required": false,
        "description": "Expand an id field into its full object.  Supported values include `product`."
      },
      {
        "name": "id",
        "schema": "number",
        "required": false,
        "description": "Filter by id"
      },
      {
        "name": "productName",
        "schema": "string",
        "required": false,
        "description": "Filter by product name."
      },
      {
        "name": "productId",
        "schema": "string",
        "required": false,
        "description": "Filter by product id."
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": "Filter by order number or external_id_seller. Multiple values may be separated by commas."
      },
      {
        "name": "isSample",
        "schema": "string",
        "required": false,
        "description": "Filter by sample status."
      },
      {
        "name": "orderCreatedOnGte",
        "schema": "string",
        "required": false,
        "description": "Filter by Order created_on, greater than or equal to"
      },
      {
        "name": "orderCreatedOnLte",
        "schema": "string",
        "required": false,
        "description": "Filter by Order created_on, less than or equal to"
      },
      {
        "name": "orderShipDateGte",
        "schema": "string",
        "required": false,
        "description": "Filter by Order ship_date, greater than or equal to"
      },
      {
        "name": "orderShipDateLte",
        "schema": "string",
        "required": false,
        "description": "Filter by Order ship_date, less than or equal to"
      },
      {
        "name": "orderModifiedGte",
        "schema": "string",
        "required": false,
        "description": "Filter by Order modified, greater than or equal to"
      },
      {
        "name": "orderModifiedLte",
        "schema": "string",
        "required": false,
        "description": "Filter by Order modified, less than or equal to"
      },
      {
        "name": "orderCustomerCities",
        "schema": "string",
        "required": false,
        "description": "Filter by Order Customer cities, separated by commas."
      },
      {
        "name": "orderCustomerManagers",
        "schema": "string",
        "required": false,
        "description": "Filter by Order Customer managers, separated by commas."
      },
      {
        "name": "orderCustomers",
        "schema": "string",
        "required": false,
        "description": "Filter by Order Customer, separated by commas."
      },
      {
        "name": "companySlug",
        "schema": "string",
        "required": false,
        "description": "Filter by seller company slug"
      },
      {
        "name": "orderServiceZone",
        "schema": "number",
        "required": false,
        "description": "Filter by order__service_zone"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
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
    "url": "/line-items",
    "method": "createNewLineItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "line-items",
    "typeScriptTag": "lineItems",
    "description": "Create line item",
    "parameters": [
      {
        "name": "ordered_unit_price",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "sale_price",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUANTITY"
      },
      {
        "name": "product",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRODUCT"
      },
      {
        "name": "order",
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
        "name": "is_sample",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "unit_multiplier",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "is_medical_line_item",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "is_packed",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "packed_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "packed_by",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "unit_of_measure",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "position",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "batch",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "package_tags",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wholesale_price",
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
    "url": "/line-items/{id}",
    "method": "deleteLineItem",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "line-items",
    "typeScriptTag": "lineItems",
    "description": "Delete a line item",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/line-items/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "line-items",
    "typeScriptTag": "lineItems",
    "description": "Retrieve a line item",
    "parameters": [
      {
        "name": "expand",
        "schema": "string",
        "required": false,
        "description": "Expand an id field into its full object.  Supported values include `product`."
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
    "url": "/line-items/{id}",
    "method": "updateLineItem",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "line-items",
    "typeScriptTag": "lineItems",
    "description": "Update a line item",
    "parameters": [
      {
        "name": "ordered_unit_price",
        "schema": "object",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_sample",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "sale_price",
        "schema": "object",
        "description": ""
      },
      {
        "name": "is_packed",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "packed_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "packed_by",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "position",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "batch",
        "schema": "integer",
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
    "url": "/order-event-logs",
    "method": "listAllLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "order-event-logs",
    "typeScriptTag": "orderEventLogs",
    "description": "List",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": false,
        "description": "Filter by id"
      },
      {
        "name": "by",
        "schema": "string",
        "required": false,
        "description": "Filter Event Logs by the username, first name, or last name of the person whose event created it."
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": "Filter Event Logs by their associated order number."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
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
    "url": "/order-event-logs/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "order-event-logs",
    "typeScriptTag": "orderEventLogs",
    "description": "Read",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/order-payments",
    "method": "listAllActiveCompanies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "order-payments",
    "typeScriptTag": "orderPayments",
    "description": "List payments",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
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
    "url": "/order-payments",
    "method": "createPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "order-payments",
    "typeScriptTag": "orderPayments",
    "description": "Create a payment",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORDER"
      },
      {
        "name": "recorded_by",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "total",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "payment_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENT_DATE"
      },
      {
        "name": "reason",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_type",
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
    "url": "/order-payments/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "order-payments",
    "typeScriptTag": "orderPayments",
    "description": "Retrieve a payment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/order-sales-reps",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "order-sales-reps",
    "typeScriptTag": "orderSalesReps",
    "description": "List",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
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
    "url": "/order-sales-reps",
    "method": "createNewSalesRep",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "order-sales-reps",
    "typeScriptTag": "orderSalesReps",
    "description": "Create",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORDER"
      },
      {
        "name": "rep",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "created_on",
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
    "url": "/order-sales-reps/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "order-sales-reps",
    "typeScriptTag": "orderSalesReps",
    "description": "Delete",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/order-sales-reps/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "order-sales-reps",
    "typeScriptTag": "orderSalesReps",
    "description": "Read",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/buyer/orders",
    "method": "listOrdersSent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "buyer-orders",
    "typeScriptTag": "buyerOrders",
    "description": "List orders",
    "parameters": [
      {
        "name": "seller",
        "schema": "string",
        "description": "Filter results by seller id"
      },
      {
        "name": "fieldsInclude",
        "schema": "string",
        "description": "Include only specific fields in the response, separated by commas."
      },
      {
        "name": "fieldsExclude",
        "schema": "string",
        "description": "Exclude specific fields in the response, separated by commas."
      },
      {
        "name": "fieldsAdd",
        "schema": "string",
        "description": "Include additional fields in the response. Available values include `created_by` and `last_changed_by`"
      },
      {
        "name": "includeChildren",
        "schema": "string",
        "description": "Include additional fields in the response. Available values include `line_items`, `customer`, and `sales_reps`"
      },
      {
        "name": "sellerSlugIexact",
        "schema": "string",
        "required": false,
        "description": "Filter results the company slug on the seller side of the order.  Case-insensitive exact match."
      },
      {
        "name": "modifiedGte",
        "schema": "string",
        "required": false,
        "description": "Filter by the modified date, greater than or equal to"
      },
      {
        "name": "modifiedLte",
        "schema": "string",
        "required": false,
        "description": "Filter by the modified date, less than or equal to"
      },
      {
        "name": "modifiedGt",
        "schema": "string",
        "required": false,
        "description": "Filter by the modified date, greater than"
      },
      {
        "name": "modifiedLt",
        "schema": "string",
        "required": false,
        "description": "Filter by the modified date, less than"
      },
      {
        "name": "externalIdSeller",
        "schema": "string",
        "required": false,
        "description": "Filter by the number assigned to the order by the seller company"
      },
      {
        "name": "externalIdSellerIcontains",
        "schema": "string",
        "required": false,
        "description": "Filter by the number assigned to the order by the seller company. Case-insensitive containment match: returns orders that contain the string"
      },
      {
        "name": "createdOnGte",
        "schema": "string",
        "required": false,
        "description": "Filter by the created_on date, greater than or equal to"
      },
      {
        "name": "createdOnLte",
        "schema": "string",
        "required": false,
        "description": "Filter by the created_on date, less than or equal to"
      },
      {
        "name": "createdOnGt",
        "schema": "string",
        "required": false,
        "description": "Filter by the created_on date, greater than"
      },
      {
        "name": "createdOnLt",
        "schema": "string",
        "required": false,
        "description": "Filter by the created_on date, less than"
      },
      {
        "name": "orderId",
        "schema": "string",
        "required": false,
        "description": "Filter by the external_id_seller or the number"
      },
      {
        "name": "number",
        "schema": "string",
        "required": false,
        "description": "Filter by the unique order number generated by LeafLink."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter by status."
      },
      {
        "name": "brand",
        "schema": "number",
        "required": false,
        "description": "Filter by brand id"
      },
      {
        "name": "brandIn",
        "schema": "number",
        "required": false,
        "description": "Filter by multiple brand ids, separated by commas"
      },
      {
        "name": "paid",
        "schema": "string",
        "required": false,
        "description": "Filter by paid status"
      },
      {
        "name": "salesRep",
        "schema": "number",
        "required": false,
        "description": "Filter by the user id of the sales rep assigned to an order.  This is the id field on the company-staff object."
      },
      {
        "name": "classification",
        "schema": "string",
        "required": false,
        "description": "Filter by the classification of the license-type associated to the order"
      },
      {
        "name": "user",
        "schema": "string",
        "required": false,
        "description": "Filter by the username, first name, or last name of the last person who edited the order"
      },
      {
        "name": "connectedToMetrc",
        "schema": "string",
        "required": false,
        "description": "Filter by whether or not they have metrc packages associated with their line items"
      },
      {
        "name": "manual",
        "schema": "string",
        "required": false,
        "description": "Filter by whether or not orders were manually created by the company on the seller side of the order"
      },
      {
        "name": "companySlug",
        "schema": "string",
        "required": false,
        "description": "Filter by the slug of seller company"
      },
      {
        "name": "serviceZone",
        "schema": "number",
        "required": false,
        "description": "Filter Orders by service zone of customers"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "externalIdKey",
        "schema": "string",
        "description": "Filter for orders that match external_ids key:values.  Must be used with external_id_values."
      },
      {
        "name": "externalIdValues",
        "schema": "string",
        "description": "Filter for orders that match external_ids key:values.  Multiple values separated by a comma.  Must be used with external_id_key."
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
    "url": "/orders-received",
    "method": "listAllActiveCompanies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "orders-received",
    "typeScriptTag": "ordersReceived",
    "description": "List orders",
    "parameters": [
      {
        "name": "fieldsInclude",
        "schema": "string",
        "description": "Include only specific fields in the response, separated by commas."
      },
      {
        "name": "fieldsExclude",
        "schema": "string",
        "description": "Exclude specific fields in the response, separated by commas."
      },
      {
        "name": "fieldsAdd",
        "schema": "string",
        "description": "Include additional fields in the response. Available values include `created_by` and `last_changed_by`"
      },
      {
        "name": "includeChildren",
        "schema": "string",
        "description": "Include additional fields in the response. Available values include `line_items`, `customer`, and `sales_reps`"
      },
      {
        "name": "sellerSlugIexact",
        "schema": "string",
        "required": false,
        "description": "Filter results the company slug on the seller side of the order.  Case-insensitive exact match."
      },
      {
        "name": "modifiedGte",
        "schema": "string",
        "required": false,
        "description": "Filter by the modified date, greater than or equal to"
      },
      {
        "name": "modifiedLte",
        "schema": "string",
        "required": false,
        "description": "Filter by the modified date, less than or equal to"
      },
      {
        "name": "modifiedGt",
        "schema": "string",
        "required": false,
        "description": "Filter by the modified date, greater than"
      },
      {
        "name": "modifiedLt",
        "schema": "string",
        "required": false,
        "description": "Filter by the modified date, less than"
      },
      {
        "name": "externalIdSeller",
        "schema": "string",
        "required": false,
        "description": "Filter by the number assigned to the order by the seller company"
      },
      {
        "name": "externalIdSellerIcontains",
        "schema": "string",
        "required": false,
        "description": "Filter by the number assigned to the order by the seller company. Case-insensitive containment match: returns orders that contain the string"
      },
      {
        "name": "createdOnGte",
        "schema": "string",
        "required": false,
        "description": "Filter by the created_on date, greater than or equal to"
      },
      {
        "name": "createdOnLte",
        "schema": "string",
        "required": false,
        "description": "Filter by the created_on date, less than or equal to"
      },
      {
        "name": "createdOnGt",
        "schema": "string",
        "required": false,
        "description": "Filter by the created_on date, greater than"
      },
      {
        "name": "createdOnLt",
        "schema": "string",
        "required": false,
        "description": "Filter by the created_on date, less than"
      },
      {
        "name": "orderId",
        "schema": "string",
        "required": false,
        "description": "Filter by the external_id_seller or the number"
      },
      {
        "name": "number",
        "schema": "string",
        "required": false,
        "description": "Filter by the unique order number generated by LeafLink."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter by status. Multiple statuses can be submitted as comma-separated list. Case Insensitive."
      },
      {
        "name": "statusNot",
        "schema": "string",
        "required": false,
        "description": "Exclude by order status. Multiple statuses can be submitted as a comma-separated list. Case Insensitive."
      },
      {
        "name": "brand",
        "schema": "number",
        "required": false,
        "description": "Filter by brand id"
      },
      {
        "name": "brandIn",
        "schema": "number",
        "required": false,
        "description": "Filter by multiple brand ids, separated by commas"
      },
      {
        "name": "buyer",
        "schema": "string",
        "required": false,
        "description": "Filter by the id of the company on the buyer side of the order"
      },
      {
        "name": "paid",
        "schema": "string",
        "required": false,
        "description": "Filter by paid status"
      },
      {
        "name": "customer",
        "schema": "string",
        "required": false,
        "description": "Filter by the customer name or nickname for the company on the buyer side of the order"
      },
      {
        "name": "salesRep",
        "schema": "number",
        "required": false,
        "description": "Filter by the user id of the sales rep assigned to an order.  This is the id field on the company-staff object."
      },
      {
        "name": "classification",
        "schema": "string",
        "required": false,
        "description": "Filter by the classification of the license-type associated to the order"
      },
      {
        "name": "user",
        "schema": "string",
        "required": false,
        "description": "Filter by the username, first name, or last name of the last person who edited the order"
      },
      {
        "name": "connectedToMetrc",
        "schema": "string",
        "required": false,
        "description": "Filter by whether or not they have metrc packages associated with their line items"
      },
      {
        "name": "manual",
        "schema": "string",
        "required": false,
        "description": "Filter by whether or not orders were manually created by the company on the seller side of the order"
      },
      {
        "name": "companySlug",
        "schema": "string",
        "required": false,
        "description": "Filter by the slug of seller company"
      },
      {
        "name": "serviceZone",
        "schema": "number",
        "required": false,
        "description": "Filter Orders by service zone of customers"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "externalIdKey",
        "schema": "string",
        "description": "Filter for orders that match external_ids key:values.  Must be used with external_id_values."
      },
      {
        "name": "externalIdValues",
        "schema": "string",
        "description": "Filter for orders that match external_ids key:values.  Multiple values separated by a comma.  Must be used with external_id_key."
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
    "url": "/orders-received",
    "method": "createOrderWithLineItems",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "orders-received",
    "typeScriptTag": "ordersReceived",
    "description": "Create an order",
    "parameters": [
      {
        "name": "seller",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customer",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "line_items",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "brand",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "external_id_seller",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ext_acct_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "discount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "discount_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tax_amount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "tax_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "shipping_charge",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_term",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_due_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paid",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "paid_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ship_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "shipping_details",
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
        "name": "internal_notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "delivery_preferences",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sales_reps",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "delivery_provider",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "delivery_info",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "facility_id",
        "schema": "integer",
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
    "url": "/orders-received/{number}",
    "method": "deleteDraftOrder",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "orders-received",
    "typeScriptTag": "ordersReceived",
    "description": "Delete a draft order",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders-received/{number}",
    "method": "getOrder",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "orders-received",
    "typeScriptTag": "ordersReceived",
    "description": "Retrieve an order",
    "parameters": [
      {
        "name": "fieldsInclude",
        "schema": "string",
        "description": "Include only specific fields in the response, separated by commas."
      },
      {
        "name": "fieldsExclude",
        "schema": "string",
        "description": "Exclude specific fields in the response, separated by commas."
      },
      {
        "name": "fieldsAdd",
        "schema": "string",
        "description": "Include additional fields in the response. Available values include `created_by` and `last_changed_by`"
      },
      {
        "name": "includeChildren",
        "schema": "string",
        "description": "Include additional fields in the response. Available values include `line_items`, `customer`, and `sales_reps`"
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
    "url": "/orders-received/{number}",
    "method": "updateOrder",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "orders-received",
    "typeScriptTag": "ordersReceived",
    "description": "Update an order",
    "parameters": [
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "discount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discount_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tax_amount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "tax_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipping_charge",
        "schema": "object",
        "description": ""
      },
      {
        "name": "payment_term",
        "schema": "string",
        "description": ""
      },
      {
        "name": "selected_payment_option",
        "schema": "object",
        "description": ""
      },
      {
        "name": "payment_methods",
        "schema": "array",
        "description": ""
      },
      {
        "name": "payment_due_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paid",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "paid_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ship_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipping_details",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "internal_notes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "delivery_preferences",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sales_reps",
        "schema": "array",
        "description": ""
      },
      {
        "name": "classification",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payment_balance",
        "schema": "string",
        "description": ""
      },
      {
        "name": "available_transitions",
        "schema": "string",
        "description": ""
      },
      {
        "name": "delivery_provider",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "delivery_info",
        "schema": "object",
        "description": ""
      },
      {
        "name": "is_combination",
        "schema": "string",
        "description": ""
      },
      {
        "name": "distributor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "external_ids",
        "schema": "object",
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
    "url": "/orders-received/{number}/transition/{action}",
    "method": "transitionOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "orders-received",
    "typeScriptTag": "ordersReceived",
    "description": "Transition an order",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/product-batches",
    "method": "listAssignments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "product-batches",
    "typeScriptTag": "productBatches",
    "description": "List assignments",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
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
    "url": "/product-batches",
    "method": "createAssignment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "product-batches",
    "typeScriptTag": "productBatches",
    "description": "Create an assignment",
    "parameters": [
      {
        "name": "product",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRODUCT"
      },
      {
        "name": "batch",
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
      }
    ]
  },
  {
    "url": "/product-batches/{id}",
    "method": "deleteAssignment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "product-batches",
    "typeScriptTag": "productBatches",
    "description": "Delete an assignment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/product-batches/{id}",
    "method": "getAssignment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "product-batches",
    "typeScriptTag": "productBatches",
    "description": "Retrieve an assignment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/product-categories",
    "method": "listCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "product-categories",
    "typeScriptTag": "productCategories",
    "description": "List categories",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
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
    "url": "/product-categories/{id}",
    "method": "getCategory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "product-categories",
    "typeScriptTag": "productCategories",
    "description": "Retrieve a category",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/product-images",
    "method": "listImages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "product-images",
    "typeScriptTag": "productImages",
    "description": "List images",
    "parameters": [
      {
        "name": "product",
        "schema": "number",
        "required": false,
        "description": "Filter by product id."
      },
      {
        "name": "id",
        "schema": "number",
        "required": false,
        "description": "Filter by image id."
      },
      {
        "name": "companySlug",
        "schema": "string",
        "required": false,
        "description": "Filter by company slug."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
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
    "url": "/product-images",
    "method": "uploadNewImage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "product-images",
    "typeScriptTag": "productImages",
    "description": "Upload an image",
    "parameters": [
      {
        "name": "image",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IMAGE"
      },
      {
        "name": "product",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "position",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Images for the product"
      }
    ]
  },
  {
    "url": "/product-images/{id}",
    "method": "deleteImage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "product-images",
    "typeScriptTag": "productImages",
    "description": "Delete an image",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/product-images/{id}",
    "method": "getImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "product-images",
    "typeScriptTag": "productImages",
    "description": "Retrieve an image",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Images for the product"
      }
    ]
  },
  {
    "url": "/product-lines",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "product-lines",
    "typeScriptTag": "productLines",
    "description": "List product lines",
    "parameters": [
      {
        "name": "brand",
        "schema": "string",
        "required": false,
        "description": "Filter by brand"
      },
      {
        "name": "id",
        "schema": "number",
        "required": false,
        "description": "Filter by id"
      },
      {
        "name": "company",
        "schema": "number",
        "required": false,
        "description": "Filter by company"
      },
      {
        "name": "companySlug",
        "schema": "string",
        "required": false,
        "description": "Filter by owner company slug."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
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
    "url": "/product-lines",
    "method": "createNewProductLine",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "product-lines",
    "typeScriptTag": "productLines",
    "description": "Create a product line",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "brand",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "menu_position",
        "schema": "integer",
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
    "url": "/product-lines/{id}",
    "method": "getProductLine",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "product-lines",
    "typeScriptTag": "productLines",
    "description": "Retrieve a product line",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/product-lines/{id}",
    "method": "updateProductLine",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "product-lines",
    "typeScriptTag": "productLines",
    "description": "Update a product line",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brand",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "menu_position",
        "schema": "integer",
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
    "url": "/product-subcategories",
    "method": "listSubcategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "product-subcategories",
    "typeScriptTag": "productSubcategories",
    "description": "List subcategories",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
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
    "url": "/product-subcategories/{id}",
    "method": "getSubcategory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "product-subcategories",
    "typeScriptTag": "productSubcategories",
    "description": "Retrieve a subcategory",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/products",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "products",
    "typeScriptTag": "products",
    "description": "List products",
    "parameters": [
      {
        "name": "sku",
        "schema": "string",
        "description": "Filter by one or more sku, separated by commas."
      },
      {
        "name": "fieldsInclude",
        "schema": "string",
        "description": "Include only specific fields in the response, separated by commas."
      },
      {
        "name": "fieldsExclude",
        "schema": "string",
        "description": "Exclude specific fields in the response, separated by commas."
      },
      {
        "name": "includeChildren",
        "schema": "string",
        "description": "Include additional fields in the response.  Available values include `images`, `volume_discounts`, and `strains`"
      },
      {
        "name": "modifiedLt",
        "schema": "string",
        "required": false,
        "description": "Filter by the modified date, less than"
      },
      {
        "name": "modifiedLte",
        "schema": "string",
        "required": false,
        "description": "Filter by the modified date, less than or equal to"
      },
      {
        "name": "modifiedGt",
        "schema": "string",
        "required": false,
        "description": "Filter by the modified on date, greater than"
      },
      {
        "name": "modifiedGte",
        "schema": "string",
        "required": false,
        "description": "Filter by the modified date, greater than or equal to"
      },
      {
        "name": "lastEditLt",
        "schema": "string",
        "required": false,
        "description": "Filter by last edit date, less than"
      },
      {
        "name": "lastEditLte",
        "schema": "string",
        "required": false,
        "description": "Filter by last edit date, less than or equal to"
      },
      {
        "name": "lastEditGt",
        "schema": "string",
        "required": false,
        "description": "Filter by last edit date, greater than"
      },
      {
        "name": "lastEditGte",
        "schema": "string",
        "required": false,
        "description": "Filter by last edit date, greater than or equal to"
      },
      {
        "name": "createdOnLt",
        "schema": "string",
        "required": false,
        "description": "Filter by created on date, less than"
      },
      {
        "name": "createdOnLte",
        "schema": "string",
        "required": false,
        "description": "Filter by created on date, less than or equal to"
      },
      {
        "name": "createdOnGt",
        "schema": "string",
        "required": false,
        "description": "Filter by created on date, greater than"
      },
      {
        "name": "createdOnGte",
        "schema": "string",
        "required": false,
        "description": "Filter by created on date, greater than or equal to"
      },
      {
        "name": "id",
        "schema": "number",
        "required": false,
        "description": "Filter by product id"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Filter by name, case insensitive"
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Filter by a search term"
      },
      {
        "name": "displayName",
        "schema": "string",
        "required": false,
        "description": "Filter by display name, case insensitive"
      },
      {
        "name": "brand",
        "schema": "number",
        "required": false,
        "description": "Filter by brand.  Multiple values separated by commas."
      },
      {
        "name": "company",
        "schema": "number",
        "required": false,
        "description": "Filter by company id.  Multiple values separated by commas."
      },
      {
        "name": "hasChildren",
        "schema": "string",
        "required": false,
        "description": "Filter by whether or not products have children"
      },
      {
        "name": "parent",
        "schema": "number",
        "required": false,
        "description": "Filter by parent product id.  Multiple values separated by commas."
      },
      {
        "name": "parentIsnull",
        "schema": "string",
        "required": false,
        "description": "Filter by whether or not products are parent products.  A null value for parent indicated a parent product."
      },
      {
        "name": "subCategoryIsnull",
        "schema": "string",
        "required": false,
        "description": "Filter by whether or not products have sub-categories assigned. Values can be `true` or `false`"
      },
      {
        "name": "productLine",
        "schema": "number",
        "required": false,
        "description": "Filter by product line id.  Multiple values separated by commas."
      },
      {
        "name": "strains",
        "schema": "number",
        "required": false,
        "description": "Filter by strain id.  Values available at the /strains/ endpoint.  Multiple values separated by commas."
      },
      {
        "name": "category",
        "schema": "number",
        "required": false,
        "description": "Filter by category id.  Values available at the /product-categories/ endpoint.  Multiple values separated by commas."
      },
      {
        "name": "subCategory",
        "schema": "number",
        "required": false,
        "description": "Filter by sub_category id.  Values available at the /product-subcategories/ endpoint.  Multiple values separated by commas."
      },
      {
        "name": "license",
        "schema": "number",
        "required": false,
        "description": "Filter by license id.  Values available at the /licenses/ endpoint.  Multiple values separated by commas."
      },
      {
        "name": "licenseIsnull",
        "schema": "string",
        "required": false,
        "description": "Filter by license__isnull"
      },
      {
        "name": "licenseType",
        "schema": "number",
        "required": false,
        "description": "Filter by license type display name.  Values available at /license-types/ endpoint.  Multiple values separated by commas."
      },
      {
        "name": "listingState",
        "schema": "string",
        "required": false,
        "description": "Filter by listing state id.  Values available at /listing-states/ endpoint.  Multiple values separated by commas."
      },
      {
        "name": "archived",
        "schema": "string",
        "required": false,
        "description": "Filter by whether or not the product is archived"
      },
      {
        "name": "buyer",
        "schema": "number",
        "required": false,
        "description": "Filter by id for a specific buyer, view the products available to this buyer and the unique price_schedule_price if applicable"
      },
      {
        "name": "s2SConnected",
        "schema": "string",
        "required": false,
        "description": "Filter by s2s_connected"
      },
      {
        "name": "companySlug",
        "schema": "string",
        "required": false,
        "description": "Filter by the seller company slug"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "externalIdKey",
        "schema": "string",
        "description": "Filter for orders that match external_ids key:values.  Must be used with external_id_values."
      },
      {
        "name": "externalIdValues",
        "schema": "string",
        "description": "Filter for orders that match external_ids key:values.  Multiple values separated by a comma.  Must be used with external_id_key."
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
    "url": "/products",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "products",
    "typeScriptTag": "products",
    "description": "Create a product",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "drop_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "sku",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SKU"
      },
      {
        "name": "quantity",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unit_multiplier",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "retail_price",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wholesale_price",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "sale_price",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "minimum_order",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MINIMUM_ORDER"
      },
      {
        "name": "maximum_order",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MAXIMUM_ORDER"
      },
      {
        "name": "AVAILABLE_FOR_SAMPLES",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "extern_acct_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "extern_income_acct_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "featured",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "tagline",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allow_fractional_quantities",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "parent",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "listing_state",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LISTING_STATE"
      },
      {
        "name": "display_listing_state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "inventory_management",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INVENTORY_MANAGEMENT"
      },
      {
        "name": "unit_of_measure",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UNIT_OF_MEASURE"
      },
      {
        "name": "sell_in_unit_of_measure",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unit_denomination",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "category",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "sub_category",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "grow_type",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "seller",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "brand",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "product_line",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "manufacturer",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "strain_classification",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STRAIN_CLASSIFICATION"
      },
      {
        "name": "license",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "strains",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "extern_sts_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "base_units_per_unit",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "external_ids",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "threshold_value",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "threshold_action",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reverse_threshold_value",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "reverse_threshold_action",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "show_quantity",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "product_data_items",
        "schema": "array",
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
    "url": "/products/{id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "products",
    "typeScriptTag": "products",
    "description": "Archive a product",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/products/{id}",
    "method": "read",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "products",
    "typeScriptTag": "products",
    "description": "Retrieve a product",
    "parameters": [
      {
        "name": "fieldsInclude",
        "schema": "string",
        "description": "Include only specific fields in the response, separated by commas."
      },
      {
        "name": "fieldsExclude",
        "schema": "string",
        "description": "Exclude specific fields in the response, separated by commas."
      },
      {
        "name": "includeChildren",
        "schema": "string",
        "description": "Include additional fields in the response.  Available values include `images`, `volume_discounts`, and `strains`"
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
    "url": "/products/{id}",
    "method": "updateProduct",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "products",
    "typeScriptTag": "products",
    "description": "Update a product",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "drop_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sku",
        "schema": "string",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "string",
        "description": ""
      },
      {
        "name": "available_inventory",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unit_multiplier",
        "schema": "integer",
        "description": "",
        "default": 1
      },
      {
        "name": "retail_price",
        "schema": "object",
        "description": ""
      },
      {
        "name": "wholesale_price",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sale_price",
        "schema": "object",
        "description": ""
      },
      {
        "name": "minimum_order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "maximum_order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "AVAILABLE_FOR_SAMPLES",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "extern_acct_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "extern_income_acct_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "featured",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "tagline",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allow_fractional_quantities",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "parent",
        "schema": "object",
        "description": ""
      },
      {
        "name": "listing_state",
        "schema": "string",
        "description": ""
      },
      {
        "name": "display_listing_state",
        "schema": "string",
        "description": ""
      },
      {
        "name": "inventory_management",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unit_of_measure",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sell_in_unit_of_measure",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unit_denomination",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "category",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "sub_category",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "grow_type",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "seller",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "brand",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "product_line",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "manufacturer",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "strain_classification",
        "schema": "string",
        "description": ""
      },
      {
        "name": "license",
        "schema": "object",
        "description": ""
      },
      {
        "name": "strains",
        "schema": "array",
        "description": ""
      },
      {
        "name": "extern_sts_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "base_units_per_unit",
        "schema": "string",
        "description": ""
      },
      {
        "name": "external_ids",
        "schema": "object",
        "description": ""
      },
      {
        "name": "threshold_value",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "threshold_action",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reverse_threshold_value",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "reverse_threshold_action",
        "schema": "string",
        "description": ""
      },
      {
        "name": "show_quantity",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "product_data_items",
        "schema": "array",
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
    "url": "/promocodes",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "promocodes",
    "typeScriptTag": "promocodes",
    "description": "List",
    "parameters": [
      {
        "name": "companySlug",
        "schema": "string",
        "required": false,
        "description": "Filter by company_slug"
      },
      {
        "name": "brand",
        "schema": "string",
        "required": false,
        "description": "Filter by brand"
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": "Filter by code"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
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
    "url": "/promocodes",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "promocodes",
    "typeScriptTag": "promocodes",
    "description": "Create",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "brand",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "discount_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "discount_amount",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "start_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "START_DATE"
      },
      {
        "name": "end_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "END_DATE"
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
    "url": "/promocodes/{id}",
    "method": "remove",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "promocodes",
    "typeScriptTag": "promocodes",
    "description": "Delete",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/promocodes/{id}",
    "method": "getSpecificCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "promocodes",
    "typeScriptTag": "promocodes",
    "description": "Read",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/promocodes/{id}",
    "method": "updateDateFields",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "promocodes",
    "typeScriptTag": "promocodes",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "brand",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "discount_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "discount_amount",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "start_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "START_DATE"
      },
      {
        "name": "end_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "END_DATE"
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
    "url": "/reports",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "reports",
    "typeScriptTag": "reports",
    "description": "List",
    "parameters": [
      {
        "name": "companySlug",
        "schema": "string",
        "required": false,
        "description": "Filter by company slug."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
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
    "url": "/reports",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "reports",
    "typeScriptTag": "reports",
    "description": "Create",
    "parameters": [
      {
        "name": "number",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "user",
        "schema": "integer",
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
        "name": "report_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REPORT_TYPE"
      },
      {
        "name": "request_time",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "complete_time",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "company",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "export",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "query",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "to_email",
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
    "url": "/reports/{number}",
    "method": "getReportById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "reports",
    "typeScriptTag": "reports",
    "description": "Read",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/strains",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "strains",
    "typeScriptTag": "strains",
    "description": "List strains",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": false,
        "description": "Filter by strain id"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Filter by strain name"
      },
      {
        "name": "company",
        "schema": "number",
        "required": false,
        "description": "Filter by company ids, separated by commas"
      },
      {
        "name": "companySlug",
        "schema": "string",
        "required": false,
        "description": "Filter by company slug"
      },
      {
        "name": "companyIsnull",
        "schema": "string",
        "required": false,
        "description": "Filter by company__isnull"
      },
      {
        "name": "parents",
        "schema": "number",
        "required": false,
        "description": "Filter by parent strain ids, separated by commas"
      },
      {
        "name": "strainClassification",
        "schema": "string",
        "required": false,
        "description": "Filter by strain classifications, separated by commas."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
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
    "url": "/strains",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "strains",
    "typeScriptTag": "strains",
    "description": "Create a strain",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "parents",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "company",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "strain_classification",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STRAIN_CLASSIFICATION"
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
    "url": "/strains/{id}",
    "method": "read",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "strains",
    "typeScriptTag": "strains",
    "description": "Retrieve a strain",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/retailer-inventory",
    "method": "listProducts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "retailer-inventory",
    "typeScriptTag": "retailerInventory",
    "description": "List products",
    "parameters": [
      {
        "name": "company",
        "schema": "string",
        "required": false,
        "description": "Filter by company id."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
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
    "url": "/retailer-inventory",
    "method": "createProduct",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "retailer-inventory",
    "typeScriptTag": "retailerInventory",
    "description": "Create a product",
    "parameters": [
      {
        "name": "is_low",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "source",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SOURCE"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "sku",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SKU"
      },
      {
        "name": "brand",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRAND"
      },
      {
        "name": "quantity",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "company",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "unit_of_measure",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UNIT_OF_MEASURE"
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
    "url": "/retailer-inventory/{id}",
    "method": "deleteProduct",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "retailer-inventory",
    "typeScriptTag": "retailerInventory",
    "description": "Delete a product",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/retailer-inventory/{id}",
    "method": "getProduct",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "retailer-inventory",
    "typeScriptTag": "retailerInventory",
    "description": "Retrieve a product",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/retailer-inventory/{id}",
    "method": "updateProduct",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "retailer-inventory",
    "typeScriptTag": "retailerInventory",
    "description": "Update a product",
    "parameters": [
      {
        "name": "is_low",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "source",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sku",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brand",
        "schema": "string",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "company",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "unit_of_measure",
        "schema": "string",
        "description": ""
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
      apiTitle="LeafLink Marketplace V2 API"
      apiBaseUrl="https://www.leaflink.com/api/v2"
      apiVersion=""
      endpoints={60}
      sdkMethods={157}
      schemas={104}
      parameters={805}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/leaflink/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/leaflink/openapi.yaml"
      developerDocumentation="developer.leaflink.com/legacy/v2/api/ref/index.html"
    />
  );
}
  