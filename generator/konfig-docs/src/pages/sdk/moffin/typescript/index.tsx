import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function MoffinTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="moffin-typescript-sdk"
      metaDescription={`Moffin is a leading data integration platform as a service (iPaaS) company that helps its customers digitize client screening and credit analysis. More than 60 companies across Mexico, in industries ranging from financial services to pharmaceuticals, trust Moffin's modern financial infrastructure for the KYC needs. Moffin allows clients to access its platform through either a REST API or no-code forms, saving them tens of thousands of dollars and months of delays from trying to create an in-house client screening solution. Moffin is backed by Ralicap, AngelHub, and Yaydoo.`}
      company="Moffin"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/moffin/logo.png"
      companyKebabCase="moffin"
      clientNameCamelCase="moffin"
      homepage="moffin.mx/"
      lastUpdated={new Date("2024-03-29T23:18:36.493Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/moffin/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/moffin/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["financial_services","fintech","data_integration","kyc"]}
      methods={[
  {
    "url": "/api/v1/profiles/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profiles",
    "typeScriptTag": "profiles",
    "description": "Get a profile by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "",
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
    "url": "/api/v1/profiles/{id}",
    "method": "updateProfile",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "profiles",
    "typeScriptTag": "profiles",
    "description": "Edit a profile",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "middleName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "firstLastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "secondLastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tradeName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "rfc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "basicRFC",
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
        "name": "curp",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNTTYPE"
      },
      {
        "name": "neighborhood",
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
        "name": "zipCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "exteriorNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "interiorNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "MX"
      },
      {
        "name": "municipality",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "nationality",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "MX"
      },
      {
        "name": "nss",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "birthdate",
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
    "url": "/api/v1/profiles",
    "method": "listWithPagination",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profiles",
    "typeScriptTag": "profiles",
    "description": "Get profiles with pagination",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "offset",
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
        "name": "rfc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "search",
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
    "url": "/api/v1/profiles",
    "method": "createProfile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "profiles",
    "typeScriptTag": "profiles",
    "description": "Create profile",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "middleName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "firstLastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "secondLastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tradeName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "rfc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "basicRFC",
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
        "name": "curp",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNTTYPE"
      },
      {
        "name": "neighborhood",
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
        "name": "zipCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "exteriorNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "interiorNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "MX"
      },
      {
        "name": "municipality",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "nationality",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "MX"
      },
      {
        "name": "nss",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "birthdate",
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
    "url": "/api/v1/profiles/info",
    "method": "createMultiple",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "profiles",
    "typeScriptTag": "profiles",
    "description": "Create or update many profiles at the same time",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/profiles/{id}/query",
    "method": "queryProfileServices",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "profiles",
    "typeScriptTag": "profiles",
    "description": "Query profile services",
    "parameters": [
      {
        "name": "bureauPM",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "bureauPF",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "satBlackList",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "satRFC",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "renapoCurp",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "prospectorPF",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "imssJobHistory",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "jumioIdValidation",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "caBlacklist",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "circuloCreditoPF",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Error schema"
      }
    ]
  },
  {
    "url": "/api/v1/profiles/{id}/info",
    "method": "getMoffinReducedInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profiles",
    "typeScriptTag": "profiles",
    "description": "Get a moffin reduced profile",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "",
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
    "url": "/api/v1/report",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "reports",
    "typeScriptTag": "reports",
    "description": "Get reports",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "offset",
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
        "name": "search",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "profileId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "formId",
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
        "name": "service",
        "schema": "array",
        "required": false,
        "description": "To send an array you must send several times service=value as in the following examples: service=sat_rfc&service=bureau_pf or service[]=sat_rfc&service[]=bureau_pf ",
        "default": [
          "bureau_pf",
          "bureau_pm",
          "prospector_pf",
          "jumio_id_validation",
          "renapo_curp",
          "sat_1",
          "sat_rfc",
          "imss_job_history",
          "ca_blacklist",
          "circulo_credito_pf"
        ]
      },
      {
        "name": "createdAt",
        "schema": "object",
        "required": false,
        "description": "Filter reports by createdAt timestamps. Use timestamps in ISO format. Use the format createdAt[from]=\"timestamp\" and createdAt[to]=\"timestamp\" to query reports within a date"
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
    "url": "/api/v1/report/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "reports",
    "typeScriptTag": "reports",
    "description": "Get report by ID",
    "parameters": [
      {
        "name": "withPdf",
        "schema": "string",
        "required": false,
        "description": "<p></p><p>Enable this flag to generate a link to downloadthe PDF file. The link will be available in the <code>pdfURL</code> property. Only <i>bureau_pf</i> and <i>bureau_pm</i> reports have this service available. Each link expires in 15 minutes.</p>",
        "default": "false"
      },
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "",
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
    "url": "/api/v1/postal-codes/{postalCode}",
    "method": "getNeighborhoodsByZip",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "postal codes",
    "typeScriptTag": "postalCodes",
    "description": "Get neighborhoods by zip code",
    "parameters": [
      {
        "name": "postalCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSTALCODE"
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
        "statusCode": "404",
        "description": "Postal code not found"
      }
    ]
  },
  {
    "url": "/api/v1/forms",
    "method": "getFormSubmissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "forms",
    "typeScriptTag": "forms",
    "description": "Retrieve form submissions",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "offset",
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
        "name": "profileId",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "search",
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
    "url": "/api/v1/forms/{id}",
    "method": "getSubmission",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "forms",
    "typeScriptTag": "forms",
    "description": "Retrieve form submission",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "",
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
    "url": "/api/v1/forms/{id}/query",
    "method": "createFormQuery",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "forms",
    "typeScriptTag": "forms",
    "description": "Request form services",
    "parameters": [
      {
        "name": "bureauPM",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "bureauPF",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "satBlackList",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "satRFC",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "renapoCurp",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "prospectorPF",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "imssJobHistory",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "caBlacklist",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "circuloCreditoPF",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Error schema"
      }
    ]
  },
  {
    "url": "/api/v1/formconfigs/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "formconfigs",
    "typeScriptTag": "formconfigs",
    "description": "Retrieve form config",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "",
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
    "url": "/api/v1/formconfigs/{id}",
    "method": "editConfig",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "formconfigs",
    "typeScriptTag": "formconfigs",
    "description": "Edit form config",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "PM form"
      },
      {
        "name": "slug",
        "schema": "string",
        "description": "",
        "example": "pm-form"
      },
      {
        "name": "serviceQueries",
        "schema": "object",
        "description": ""
      },
      {
        "name": "configuration",
        "schema": "object",
        "description": ""
      },
      {
        "name": "formCompletedUrl",
        "schema": "string",
        "description": "",
        "example": "https://moffin.mx/"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Default Response"
      }
    ]
  },
  {
    "url": "/api/v1/formconfigs",
    "method": "getWithPagination",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "formconfigs",
    "typeScriptTag": "formconfigs",
    "description": "Retrive form configs with pagination",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
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
    "url": "/api/v1/formconfigs",
    "method": "createConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "formconfigs",
    "typeScriptTag": "formconfigs",
    "description": "Create form config",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "PM form"
      },
      {
        "name": "slug",
        "schema": "string",
        "description": "",
        "example": "pm-form"
      },
      {
        "name": "serviceQueries",
        "schema": "object",
        "description": ""
      },
      {
        "name": "configuration",
        "schema": "object",
        "description": ""
      },
      {
        "name": "accountType",
        "schema": "string",
        "description": "",
        "example": "PM"
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
    "url": "/api/v1/evaluations",
    "method": "listWithPagination",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customers",
    "typeScriptTag": "customers",
    "description": "Get evaluations with pagination",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "offset",
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
        "name": "formId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "profileId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "hideDuplicates",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
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
    "url": "/api/v1/query/prospector_pf",
    "method": "prospectorPfScore",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Query data sources",
    "typeScriptTag": "queryDataSources",
    "description": "Bureau \"persona fisica\" score",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNAME"
      },
      {
        "name": "middleName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "firstLastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTLASTNAME"
      },
      {
        "name": "secondLastName",
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
        "name": "rfc",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RFC"
      },
      {
        "name": "curp",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ADDRESS"
      },
      {
        "name": "neighborhood",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEIGHBORHOOD"
      },
      {
        "name": "city",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CITY"
      },
      {
        "name": "municipality",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MUNICIPALITY"
      },
      {
        "name": "state",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATE"
      },
      {
        "name": "zipCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ZIPCODE"
      },
      {
        "name": "exteriorNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "interiorNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COUNTRY",
        "default": "MX"
      },
      {
        "name": "nationality",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NATIONALITY",
        "default": "MX"
      },
      {
        "name": "nss",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "birthdate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BIRTHDATE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/query/bureau_pf",
    "method": "bureauPersonaFisicaReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Query data sources",
    "typeScriptTag": "queryDataSources",
    "description": "Bureau \"persona fisica\" report",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNAME"
      },
      {
        "name": "middleName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "firstLastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTLASTNAME"
      },
      {
        "name": "secondLastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SECONDLASTNAME"
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "rfc",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "curp",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ADDRESS"
      },
      {
        "name": "neighborhood",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEIGHBORHOOD"
      },
      {
        "name": "city",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CITY"
      },
      {
        "name": "municipality",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MUNICIPALITY"
      },
      {
        "name": "state",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATE"
      },
      {
        "name": "zipCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ZIPCODE"
      },
      {
        "name": "exteriorNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "interiorNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COUNTRY",
        "default": "MX"
      },
      {
        "name": "nationality",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NATIONALITY",
        "default": "MX"
      },
      {
        "name": "nss",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "birthdate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BIRTHDATE"
      },
      {
        "name": "productType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "creditType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "user",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "creditReference",
        "schema": "array",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": "Usually, we send this error when you have reached your API limit usage. If this is the case, please contact team@moffin.mx"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/query/bureau_pm",
    "method": "bureauPmReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Query data sources",
    "typeScriptTag": "queryDataSources",
    "description": "Bureau \"persona moral\" report",
    "parameters": [
      {
        "name": "productType",
        "schema": "string",
        "description": "",
        "example": "INFORME_BURO"
      },
      {
        "name": "accountType",
        "schema": "string",
        "description": "",
        "example": "PM"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "test+almacenes-ghinos@moffin.mx"
      },
      {
        "name": "tradeName",
        "schema": "string",
        "description": "",
        "example": "ALMACENES GHINOS,SA DE CV"
      },
      {
        "name": "rfc",
        "schema": "string",
        "description": "",
        "example": "AGS930324RN7"
      },
      {
        "name": "address",
        "schema": "string",
        "description": "",
        "example": "AV IGNACIO ALLENDE LOTE 11-B LOCAL 2"
      },
      {
        "name": "city",
        "schema": "string",
        "description": "",
        "example": "TEPEAPULCO"
      },
      {
        "name": "state",
        "schema": "string",
        "description": "",
        "example": "HID"
      },
      {
        "name": "zipCode",
        "schema": "string",
        "description": "",
        "example": "43990"
      },
      {
        "name": "exteriorNumber",
        "schema": "string",
        "description": "",
        "example": "62900"
      },
      {
        "name": "interiorNumber",
        "schema": "string",
        "description": "",
        "example": ""
      },
      {
        "name": "neighborhood",
        "schema": "string",
        "description": "",
        "example": "CD SAHAGUN HGO"
      },
      {
        "name": "municipality",
        "schema": "string",
        "description": "",
        "example": "TEPEAPULCO"
      },
      {
        "name": "nationality",
        "schema": "string",
        "description": "",
        "example": "MX"
      },
      {
        "name": "country",
        "schema": "string",
        "description": "",
        "example": "MX"
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": "",
        "example": "UNO"
      },
      {
        "name": "firstLastName",
        "schema": "string",
        "description": "",
        "example": "PRUEBA"
      },
      {
        "name": "secondLastName",
        "schema": "string",
        "description": "",
        "example": "PROSPECTOR"
      },
      {
        "name": "birthdate",
        "schema": "string",
        "description": "",
        "example": "2000-04-17"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Created response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": "Usually, we send this error when you have reached your API limit usage. If this is the case, please contact team@moffin.mx"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/query/bureau_pm/resume/{id}",
    "method": "getPendingReportById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Query data sources",
    "typeScriptTag": "queryDataSources",
    "description": "Get a pending report with its bureau report id",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Created response"
      },
      {
        "statusCode": "304",
        "description": "Empty response"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized response"
      },
      {
        "statusCode": "409",
        "description": "Conflict response"
      },
      {
        "statusCode": "500",
        "description": "Error schema"
      }
    ]
  },
  {
    "url": "/api/v1/query/sat_blacklist",
    "method": "satBlacklistProfileQuery",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Query data sources",
    "typeScriptTag": "queryDataSources",
    "description": "Sat blacklist profile query",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "middleName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "firstLastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "secondLastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tradeName",
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
        "name": "rfc",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RFC"
      },
      {
        "name": "curp",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNTTYPE"
      },
      {
        "name": "address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "neighborhood",
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
        "name": "municipality",
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
        "name": "zipCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "exteriorNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "interiorNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "MX"
      },
      {
        "name": "nationality",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "MX"
      },
      {
        "name": "nss",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "birthdate",
        "schema": "string",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/query/sat_rfc",
    "method": "getSatRfcCertificatesProfile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Query data sources",
    "typeScriptTag": "queryDataSources",
    "description": "Sat rfc certificates profile query",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "middleName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "firstLastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "secondLastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tradeName",
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
        "name": "rfc",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RFC"
      },
      {
        "name": "curp",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNTTYPE"
      },
      {
        "name": "address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "neighborhood",
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
        "name": "municipality",
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
        "name": "zipCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "exteriorNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "interiorNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "MX"
      },
      {
        "name": "nationality",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "MX"
      },
      {
        "name": "nss",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "birthdate",
        "schema": "string",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/query/renapo_curp",
    "method": "getRenapoCurp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Query data sources",
    "typeScriptTag": "queryDataSources",
    "description": "RENAPO CURP query",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "middleName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "firstLastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "secondLastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tradeName",
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
        "name": "rfc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "curp",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURP"
      },
      {
        "name": "accountType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNTTYPE"
      },
      {
        "name": "address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "neighborhood",
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
        "name": "municipality",
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
        "name": "zipCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "exteriorNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "interiorNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "MX"
      },
      {
        "name": "nationality",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "MX"
      },
      {
        "name": "nss",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "birthdate",
        "schema": "string",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/query/id_validation/jumio",
    "method": "createJumioKycLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Query data sources",
    "typeScriptTag": "queryDataSources",
    "description": "Create JUMIO KYC link",
    "parameters": [
      {
        "name": "successURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "failURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "profileId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalId",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized response"
      },
      {
        "statusCode": "403",
        "description": "Forbidden response"
      }
    ]
  },
  {
    "url": "/api/v1/query/imss-job-history",
    "method": "getImssJobHistory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Query data sources",
    "typeScriptTag": "queryDataSources",
    "description": "Get IMSS Job History",
    "parameters": [
      {
        "name": "curp",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURP"
      },
      {
        "name": "externalId",
        "schema": "string",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/query/ca-blacklist",
    "method": "getComplyAdvantageBlacklist",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "beta",
    "typeScriptTag": "beta",
    "description": "Get Comply Advantage Blacklist",
    "parameters": [
      {
        "name": "firstName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "middleName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "firstLastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "secondLastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tradeName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNTTYPE"
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
    "url": "/api/v1/query/circulo_credito_pf",
    "method": "consolidatedReportWithScore",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "beta",
    "typeScriptTag": "beta",
    "description": "Circulo de Crédito - Persona Física (https://moffin.mx/docs",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNAME"
      },
      {
        "name": "middleName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "firstLastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTLASTNAME"
      },
      {
        "name": "secondLastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SECONDLASTNAME"
      },
      {
        "name": "tradeName",
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
        "name": "rfc",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "curp",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ADDRESS"
      },
      {
        "name": "neighborhood",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEIGHBORHOOD"
      },
      {
        "name": "city",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CITY"
      },
      {
        "name": "municipality",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MUNICIPALITY"
      },
      {
        "name": "state",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATE"
      },
      {
        "name": "zipCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ZIPCODE"
      },
      {
        "name": "exteriorNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "interiorNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "MX"
      },
      {
        "name": "nationality",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NATIONALITY",
        "default": "MX"
      },
      {
        "name": "nss",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "birthdate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BIRTHDATE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized response"
      },
      {
        "statusCode": "403",
        "description": "Forbidden response"
      },
      {
        "statusCode": "404",
        "description": "Not Found response"
      },
      {
        "statusCode": "429",
        "description": "Usually, we send this error when you have reached your API limit usage. If this is the case, please contact team@moffin.mx"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/form/{formConfigId}",
    "method": "createNewForm",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "form",
    "typeScriptTag": "form",
    "description": "Endpoint to create new form",
    "parameters": [
      {
        "name": "formConfigId",
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
    "url": "/api/v1/form/{formId}",
    "method": "updateForm",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "form",
    "typeScriptTag": "form",
    "description": "Endpoint to update an existing form",
    "parameters": [
      {
        "name": "formId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Default Response"
      }
    ]
  },
  {
    "url": "/api/v1/form/submit/{formId}",
    "method": "submitFormById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "form",
    "typeScriptTag": "form",
    "description": "Endpoint to submit a form",
    "parameters": [
      {
        "name": "formId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "validateNIPAuthentication",
        "schema": "boolean",
        "description": "",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Default Response"
      }
    ]
  },
  {
    "url": "/api/v1/form/nip/validate/{formId}",
    "method": "validateNipForm",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "form",
    "typeScriptTag": "form",
    "description": "Endpoint to validate a NIP from a form",
    "parameters": [
      {
        "name": "nip",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Default Response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error thrown if the user is not autorized to do this"
      },
      {
        "statusCode": "409",
        "description": "The form is already submitted"
      }
    ]
  },
  {
    "url": "/api/v1/form/nip/send-sms/{formId}",
    "method": "sendSmsVerification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "form",
    "typeScriptTag": "form",
    "description": "Endpoint to send sms to verify phone in form",
    "parameters": [
      {
        "name": "formId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "organizationName",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Default Response"
      }
    ]
  },
  {
    "url": "/api/v1/form/nip/send-email/{formId}",
    "method": "sendEmailVerification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "form",
    "typeScriptTag": "form",
    "description": "Endpoint to send email to verify in form",
    "parameters": [
      {
        "name": "formId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "organizationName",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Default Response"
      }
    ]
  },
  {
    "url": "/api/v1/service_queries",
    "method": "getServiceQueries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Service queries",
    "typeScriptTag": "serviceQueries",
    "description": "Get service queries",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "offset",
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
        "name": "search",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "profileId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "formId",
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
        "name": "service",
        "schema": "array",
        "required": false,
        "description": "To send an array you must send several times service=value as in the following examples: service=sat_rfc&service=bureau_pf or service[]=sat_rfc&service[]=bureau_pf ",
        "default": [
          "bureau_pf",
          "bureau_pm",
          "prospector_pf",
          "jumio_id_validation",
          "renapo_curp",
          "sat_1",
          "sat_rfc",
          "imss_job_history",
          "ca_blacklist",
          "circulo_credito_pf"
        ]
      },
      {
        "name": "createdAt",
        "schema": "object",
        "required": false,
        "description": "Filter reports by createdAt timestamps. Use timestamps in ISO format. Use the format createdAt[from]=\"timestamp\" and createdAt[to]=\"timestamp\" to query reports within a date"
      },
      {
        "name": "withFileUrl",
        "schema": "boolean",
        "required": false,
        "description": "If set `true` it will generate a link to download the available files for `sat_rfc` and `sat_1` services. Allowing this flag will increase request response considerably.",
        "default": false
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
      apiTitle="Moffin API"
      apiBaseUrl="https://sandbox.moffin.mx"
      apiVersion="0.1.0"
      endpoints={32}
      sdkMethods={36}
      schemas={84}
      parameters={282}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/moffin/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/moffin/openapi.yaml"
      developerDocumentation="moffin.mx/docs"
    />
  );
}
  