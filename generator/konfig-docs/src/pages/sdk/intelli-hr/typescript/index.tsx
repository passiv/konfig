import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function IntelliHrTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="intelli-hr-typescript-sdk"
      metaDescription={`IntelliHR, a Humanforce company, is an intelligent people platform that's revolutionising human resources management by empowering global HR leaders to foster inclusive, engaging, high-performing, and aligned workplace cultures.

Designed for today's hybrid work environment, intelliHR's cloud-based platform seamlessly enhances employee engagement, performance, and retention. With ease of implementation, best-of-breed integrations, and robust data-driven capabilities, intelliHR is the preferred HR software for hundreds of forward-thinking organisations and 70,000 users globally. 

Ideal for mid-to-large-sized businesses, intelliHR offers comprehensive features, including:
•	centralised data management
•	seamless onboarding
•	automated reviews
•	goal tracking
•	continuous feedback
•	engagement surveys
•	compliance management

Its full configurability ensures a tailored fit for specific needs, while advanced people analytics empower HR leaders and executive teams to make informed, strategic decisions. IntelliHR is not just software; it's a strategic partner dedicated to optimising workforce management and creating impactful workplace experiences for sustained success across diverse industries and geographies.`}
      company="intelliHR"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/intellihr/logo.png"
      companyKebabCase="intelli-hr"
      clientNameCamelCase="intelliHr"
      homepage="intellihr.com"
      lastUpdated={new Date("2024-03-26T07:11:53.840Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/intellihr/favicon.png"
      // Missing contactUrl
      contactEmail="support@intellihr.co"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/intellihr/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr","hr_management","hr_software","human_resources","people_management_platform","hr_platform","hr_management_system","hr_services","hr_solutions","employee_engagement","talent_management","human_resource_management","hr_systems","people_analytics","hr_metrics","hr_analytics","hr_dashboard","hr_reporting","workforce_planning","human_capital_management","workforce_solutions","talent_acquisition_analytics","people_management_software","hris","people","strategic_hr","culture","people_decisions"]}
      methods={[
  {
    "url": "/business-entities",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Business Entities",
    "typeScriptTag": "businessEntities",
    "description": "List all Business Entities",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/business-entities",
    "method": "createNewEntity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Business Entities",
    "typeScriptTag": "businessEntities",
    "description": "Create a new Business Entity",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IntelliHR"
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "BE001"
      },
      {
        "name": "legalName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "IntelliHR Systems Limited"
      },
      {
        "name": "number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "00 000 000 000"
      },
      {
        "name": "isEnabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "text_field_api_name": {
            "value": "Some text value"
          },
          "numeric_field_api_name": {
            "value": "50"
          },
          "single_select_api_name": {
            "value": {
              "label": "Drama"
            }
          },
          "multi_select_api_name": {
            "value": {
              "labels": [
                "Bananas",
                "Apples"
              ]
            }
          },
          "people_dropdown_api_name": {
            "value": [
              {
                "person": {
                  "id": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9X",
                  "name": "Bruce Wayne",
                  "primaryEmailAddress": "bruce.wayne@example.com",
                  "employeeNumber": "00001",
                  "autoIncrementIntellihrId": "1000"
                },
                "job": {
                  "id": "569904c8-5d36-4c2f-afb0-525eeb8da32d",
                  "name": "Maintenance worker"
                }
              },
              {
                "person": {
                  "id": "313fde44-f24e-4ec9-9473-0d0f3527222d",
                  "name": "Batman",
                  "primaryEmailAddress": "batman@example.com",
                  "employeeNumber": "00002",
                  "autoIncrementIntellihrId": "1001"
                },
                "job": {
                  "id": "653304c8-5d36-4c2f-afb0-525eeb8da32d",
                  "name": "Janitor"
                }
              }
            ]
          }
        }
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/business-entities/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Business Entities",
    "typeScriptTag": "businessEntities",
    "description": "Delete a Business Entity by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success"
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
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/business-entities/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Business Entities",
    "typeScriptTag": "businessEntities",
    "description": "Find a Business Entity by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/business-entities/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Business Entities",
    "typeScriptTag": "businessEntities",
    "description": "Update a Business Entity by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "IntelliHR"
      },
      {
        "name": "code",
        "schema": "string",
        "description": "",
        "example": "BE001"
      },
      {
        "name": "legalName",
        "schema": "string",
        "description": "",
        "example": "IntelliHR Systems Limited"
      },
      {
        "name": "number",
        "schema": "string",
        "description": "",
        "example": "00 000 000 000"
      },
      {
        "name": "isEnabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "description": "",
        "example": {
          "text_field_api_name": {
            "value": "Some text value"
          },
          "numeric_field_api_name": {
            "value": "50"
          },
          "single_select_api_name": {
            "value": {
              "label": "Drama"
            }
          },
          "multi_select_api_name": {
            "value": {
              "labels": [
                "Bananas",
                "Apples"
              ]
            }
          },
          "people_dropdown_api_name": {
            "value": [
              {
                "person": {
                  "id": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9X",
                  "name": "Bruce Wayne",
                  "primaryEmailAddress": "bruce.wayne@example.com",
                  "employeeNumber": "00001",
                  "autoIncrementIntellihrId": "1000"
                },
                "job": {
                  "id": "569904c8-5d36-4c2f-afb0-525eeb8da32dX",
                  "name": "Maintenance worker"
                }
              },
              {
                "person": {
                  "id": "313fde44-f24e-4ec9-9473-0d0f3527222dX",
                  "name": "Batman",
                  "primaryEmailAddress": "batman@example.com",
                  "employeeNumber": "00002",
                  "autoIncrementIntellihrId": "1001"
                },
                "job": {
                  "id": "653304c8-5d36-4c2f-afb0-525eeb8da32dX",
                  "name": "Janitor"
                }
              }
            ]
          }
        }
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/business-units",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Business Units",
    "typeScriptTag": "businessUnits",
    "description": "List all Business Units",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      },
      {
        "name": "filters",
        "schema": "object",
        "description": "Filters can be applied in the query string to limit the data returned from this endpoint. Filters are provided in the format `filters[<filter_name>][<operation_type>]=<filter_value>`.For example, a filter to get items matching a specific filter value would be `filters[identifier][eq]=Engineering`\n\rBelow is a list of operation types available on filters, note that each filter may not support every type:\n\r• Equality `[eq]`: Checks for an exact match with the given filter value\n\rThe list of supported filters is given below."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/business-units",
    "method": "createNewUnit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Business Units",
    "typeScriptTag": "businessUnits",
    "description": "Create a new Business Unit",
    "parameters": [
      {
        "name": "identifier",
        "schema": "string",
        "required": false,
        "description": "",
        "example": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Engineering"
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "BE001"
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": "",
        "example": ""
      },
      {
        "name": "parentId",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9"
      },
      {
        "name": "isEnabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "text_field_api_name": {
            "value": "Some text value"
          },
          "numeric_field_api_name": {
            "value": "50"
          },
          "single_select_api_name": {
            "value": {
              "label": "Drama"
            }
          },
          "multi_select_api_name": {
            "value": {
              "labels": [
                "Bananas",
                "Apples"
              ]
            }
          },
          "people_dropdown_api_name": {
            "value": [
              {
                "person": {
                  "id": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9X",
                  "name": "Bruce Wayne",
                  "primaryEmailAddress": "bruce.wayne@example.com",
                  "employeeNumber": "00001",
                  "autoIncrementIntellihrId": "1000"
                },
                "job": {
                  "id": "569904c8-5d36-4c2f-afb0-525eeb8da32dX",
                  "name": "Maintenance worker"
                }
              },
              {
                "person": {
                  "id": "313fde44-f24e-4ec9-9473-0d0f3527222dX",
                  "name": "Batman",
                  "primaryEmailAddress": "batman@example.com",
                  "employeeNumber": "00002",
                  "autoIncrementIntellihrId": "1001"
                },
                "job": {
                  "id": "653304c8-5d36-4c2f-afb0-525eeb8da32dX",
                  "name": "Janitor"
                }
              }
            ]
          }
        }
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/business-units/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Business Units",
    "typeScriptTag": "businessUnits",
    "description": "Delete a Business Unit by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success"
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
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/business-units/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Business Units",
    "typeScriptTag": "businessUnits",
    "description": "Find a Business Unit by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/business-units/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Business Units",
    "typeScriptTag": "businessUnits",
    "description": "Update a Business Unit by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": false,
        "description": "",
        "example": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Engineering"
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "BE001"
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": "",
        "example": ""
      },
      {
        "name": "parentId",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9"
      },
      {
        "name": "isEnabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "text_field_api_name": {
            "value": "Some text value"
          },
          "numeric_field_api_name": {
            "value": "50"
          },
          "single_select_api_name": {
            "value": {
              "label": "Drama"
            }
          },
          "multi_select_api_name": {
            "value": {
              "labels": [
                "Bananas",
                "Apples"
              ]
            }
          },
          "people_dropdown_api_name": {
            "value": [
              {
                "person": {
                  "id": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9X",
                  "name": "Bruce Wayne",
                  "primaryEmailAddress": "bruce.wayne@example.com",
                  "employeeNumber": "00001",
                  "autoIncrementIntellihrId": "1000"
                },
                "job": {
                  "id": "569904c8-5d36-4c2f-afb0-525eeb8da32dX",
                  "name": "Maintenance worker"
                }
              },
              {
                "person": {
                  "id": "313fde44-f24e-4ec9-9473-0d0f3527222dX",
                  "name": "Batman",
                  "primaryEmailAddress": "batman@example.com",
                  "employeeNumber": "00002",
                  "autoIncrementIntellihrId": "1001"
                },
                "job": {
                  "id": "653304c8-5d36-4c2f-afb0-525eeb8da32dX",
                  "name": "Janitor"
                }
              }
            ]
          }
        }
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/custom-field-definitions",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Field Definitions",
    "typeScriptTag": "customFieldDefinitions",
    "description": "List all Custom Field Definitions",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      },
      {
        "name": "filters",
        "schema": "object",
        "description": "Filters can be applied in the query string to limit the data returned from this endpoint. Filters are provided in the format `filters[<filter_name>][<operation_type>]=<filter_value>`.For example, a filter to get items matching a specific filter value would be `filters[modelType][eq]=TRAINING`\n\rBelow is a list of operation types available on filters, note that each filter may not support every type:\n\r• Equality `[eq]`: Checks for an exact match with the given filter value\n\rThe list of supported filters is given below."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/custom-field-definitions",
    "method": "createDefinition",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Field Definitions",
    "typeScriptTag": "customFieldDefinitions",
    "description": "Create a Custom Field Definition",
    "parameters": [
      {
        "name": "description",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "This field is used to describe the custom field."
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Custom Field"
      },
      {
        "name": "apiName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "custom_field"
      },
      {
        "name": "modelType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PERSON"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEXT"
      },
      {
        "name": "isSensitive",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "selectDefinition",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "textDefinition",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "peopleDropdownDefinition",
        "schema": "undefined",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/custom-field-definitions/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Custom Field Definitions",
    "typeScriptTag": "customFieldDefinitions",
    "description": "Delete a Custom Field Definition by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success"
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
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/custom-field-definitions/{id}",
    "method": "findDefinitionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Field Definitions",
    "typeScriptTag": "customFieldDefinitions",
    "description": "Find a Custom Field Definition by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/custom-field-definitions/{id}",
    "method": "updateDefinitionById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Custom Field Definitions",
    "typeScriptTag": "customFieldDefinitions",
    "description": "Update a Custom Field Definition",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "undefined",
        "description": "",
        "example": "This field is used to describe the custom field."
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Custom Field"
      },
      {
        "name": "isEnabled",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "isSensitive",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "selectDefinition",
        "schema": "object",
        "description": ""
      },
      {
        "name": "peopleDropdownDefinition",
        "schema": "undefined",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/default-remuneration-components",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Default Remuneration Components",
    "typeScriptTag": "defaultRemunerationComponents",
    "description": "List all Default Remuneration Components",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/default-remuneration-components/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Default Remuneration Components",
    "typeScriptTag": "defaultRemunerationComponents",
    "description": "Find a Default Remuneration Component by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/employment-conditions",
    "method": "listAllEmploymentConditions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employment Conditions",
    "typeScriptTag": "employmentConditions",
    "description": "List all employment conditions",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/employment-conditions/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employment Conditions",
    "typeScriptTag": "employmentConditions",
    "description": "Find an Employment Condition by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/extended-leave",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Extended Leave",
    "typeScriptTag": "extendedLeave",
    "description": "Create Extended Leave",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2015-03-01T22:30:00+00:00"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2015-03-01T22:30:00+00:00"
      },
      {
        "name": "leaveType",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "fte",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/extended-leave/{id}",
    "method": "updateFinalise",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Extended Leave",
    "typeScriptTag": "extendedLeave",
    "description": "Update or Finalise Extended Leave",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9"
      },
      {
        "name": "shouldNotFinaliseEndDate",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2015-03-01T22:30:00+00:00"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2015-03-01T22:30:00+00:00"
      },
      {
        "name": "leaveType",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "fte",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/extended-leave-types",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Extended Leave Types",
    "typeScriptTag": "extendedLeaveTypes",
    "description": "List all Extended Leave Types",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/extended-leave-types/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Extended Leave Types",
    "typeScriptTag": "extendedLeaveTypes",
    "description": "Find an Extended Leave Type by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/forms/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forms",
    "typeScriptTag": "forms",
    "description": "Find a Form by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/job-change-reasons",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Change Reasons",
    "typeScriptTag": "jobChangeReasons",
    "description": "List all Job Change Reasons",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/job-change-reasons",
    "method": "createNewReason",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job Change Reasons",
    "typeScriptTag": "jobChangeReasons",
    "description": "Create a new Job Change Reason",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Engineering"
      },
      {
        "name": "isEnabled",
        "schema": "boolean",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/job-change-reasons/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Job Change Reasons",
    "typeScriptTag": "jobChangeReasons",
    "description": "Delete a Job Change Reason by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success"
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
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/job-change-reasons/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Change Reasons",
    "typeScriptTag": "jobChangeReasons",
    "description": "Find a Job Change Reason by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/job-change-reasons/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Job Change Reasons",
    "typeScriptTag": "jobChangeReasons",
    "description": "Update a Job Change Reason by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Engineering"
      },
      {
        "name": "isEnabled",
        "schema": "boolean",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/job-requirement-groups",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Requirement Groups",
    "typeScriptTag": "jobRequirementGroups",
    "description": "List all Job Requirement Groups",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/job-requirement-groups",
    "method": "createNewGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job Requirement Groups",
    "typeScriptTag": "jobRequirementGroups",
    "description": "Create a new Job Requirement Group",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ABCDE12345"
      },
      {
        "name": "libraryItemIds",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/job-requirement-groups/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Job Requirement Groups",
    "typeScriptTag": "jobRequirementGroups",
    "description": "Delete a Job Requirement Group by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success"
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
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/job-requirement-groups/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Requirement Groups",
    "typeScriptTag": "jobRequirementGroups",
    "description": "Find a Job Requirement Group by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/job-requirement-groups/{id}",
    "method": "updateAttributes",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Job Requirement Groups",
    "typeScriptTag": "jobRequirementGroups",
    "description": "Patch an existing Job Requirement Group",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ABCDE12345"
      },
      {
        "name": "libraryItemIds",
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
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/job-end/{id}",
    "method": "cancelEndDate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "End Job",
    "typeScriptTag": "endJob",
    "description": "Cancel job end date",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      },
      {
        "name": "cancelDisablingUserAccount",
        "schema": "undefined",
        "description": "Whether to cancel the disabling of the users account upon the job end date, if user doesn't exist the Boolean has no effect yet the request will still succeed.",
        "example": "true"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/job-end/{id}",
    "method": "jobFinalize",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "End Job",
    "typeScriptTag": "endJob",
    "description": "End a job",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      },
      {
        "name": "shouldNotFinaliseEndDate",
        "schema": "undefined",
        "description": "If true, do not finalise the job.",
        "example": "true"
      },
      {
        "name": "shouldRetainUserAccount",
        "schema": "undefined",
        "description": "If true, keeps the user account when finalising the job.",
        "example": "true"
      },
      {
        "name": "suppressEvents",
        "schema": "undefined",
        "description": "When true, no events will be fired from this action",
        "example": "true"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "",
        "example": "2015-03-01T22:30:00+00:00"
      },
      {
        "name": "reassignDirectReportsTo",
        "schema": "string",
        "description": "",
        "example": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9"
      },
      {
        "name": "turnoverType",
        "schema": "string",
        "description": "",
        "example": "involuntary"
      },
      {
        "name": "turnoverReason",
        "schema": "string",
        "description": "",
        "example": "Medical reasons"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/jobs",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "List all Jobs",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      },
      {
        "name": "filters",
        "schema": "object",
        "description": "Filters can be applied in the query string to limit the data returned from this endpoint. Filters are provided in the format `filters[<filter_name>][<operation_type>]=<filter_value>`.For example, a filter to get items matching a specific filter value would be `filters[personId][eq]=dc996d73-a75e-499c-a96e-bd7d0df45f57,26d0ffc4-60f6-4672-a603-caaa4564af12`\n\rBelow is a list of operation types available on filters, note that each filter may not support every type:\n\r• Equality `[eq]`: Checks for an exact match with the given filter value\n\rThe list of supported filters is given below."
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sorting can be applied in the query string to order the data returned from this endpoint. Sort can be prepended with a minus to return the data in descending (-) order. For example, a sort to get the most recent records first would be `-createdAt`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/jobs",
    "method": "createRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Create a new Job",
    "parameters": [
      {
        "name": "person",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "id": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9X",
          "name": "Bruce Wayne",
          "primaryEmailAddress": "bruce.wayne@example.com",
          "employeeNumber": "00001",
          "autoIncrementIntellihrId": "1000"
        }
      },
      {
        "name": "companyStartDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2015-03-01T22:30:00+00:00"
      },
      {
        "name": "companyEndDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2015-03-01T22:30:00+00:00"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2015-03-01T22:30:00+00:00"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2015-03-01T22:30:00+00:00"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Food Scientist"
      },
      {
        "name": "businessEntity",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "businessUnit",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "establishment",
        "schema": "object",
        "required": false,
        "description": "",
        "default": "{ 'name': 'No Establishment' }"
      },
      {
        "name": "supervisorPerson",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "id": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9X",
          "name": "Bruce Wayne",
          "primaryEmailAddress": "bruce.wayne@example.com",
          "employeeNumber": "00001",
          "autoIncrementIntellihrId": "1000"
        }
      },
      {
        "name": "supervisorJob",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "location",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "workClass",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "workType",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "fte",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1"
      },
      {
        "name": "payGrade",
        "schema": "object",
        "required": false,
        "description": "",
        "default": "{ 'name': 'No Pay Grade' }"
      },
      {
        "name": "employmentCondition",
        "schema": "object",
        "required": false,
        "description": "",
        "default": "{ 'name': 'No Employment Condition' }"
      },
      {
        "name": "remunerationSchedule",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "recruitment",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "text_field_api_name": {
            "value": "Some text value"
          },
          "numeric_field_api_name": {
            "value": "50"
          },
          "single_select_api_name": {
            "value": {
              "label": "Drama"
            }
          },
          "multi_select_api_name": {
            "value": {
              "labels": [
                "Bananas",
                "Apples"
              ]
            }
          },
          "people_dropdown_api_name": {
            "value": [
              {
                "person": {
                  "id": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9X",
                  "name": "Bruce Wayne",
                  "primaryEmailAddress": "bruce.wayne@example.com",
                  "employeeNumber": "00001",
                  "autoIncrementIntellihrId": "1000"
                },
                "job": {
                  "id": "569904c8-5d36-4c2f-afb0-525eeb8da32dX",
                  "name": "Maintenance worker"
                }
              },
              {
                "person": {
                  "id": "313fde44-f24e-4ec9-9473-0d0f3527222dX",
                  "name": "Batman",
                  "primaryEmailAddress": "batman@example.com",
                  "employeeNumber": "00002",
                  "autoIncrementIntellihrId": "1001"
                },
                "job": {
                  "id": "653304c8-5d36-4c2f-afb0-525eeb8da32dX",
                  "name": "Janitor"
                }
              }
            ]
          }
        }
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/jobs/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Find a Job by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      },
      {
        "name": "asAt",
        "schema": "string",
        "description": "Used to configure what date to return this job data for, as a [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6) datetime. \n\nAll data returned from the job endpoints represent the values of the Person's job attributes at a specific point in time. \n\nBy default, the current datetime is used, but this parameter can be used to configure a different datetime to see historical data.",
        "example": "2015-03-01T22:30:00+00:00"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/jobs/{id}",
    "method": "updateAttributes",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Patch an existing Job",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      },
      {
        "name": "effectiveFrom",
        "schema": "undefined",
        "required": true,
        "description": "",
        "example": "2015-03-01T22:30:00+00:00"
      },
      {
        "name": "effectiveTo",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2015-03-01T22:30:00+00:00"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Food Scientist"
      },
      {
        "name": "businessEntity",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "businessUnit",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "establishment",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "jobChangeReason",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "supervisorPerson",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "id": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9X",
          "name": "Bruce Wayne",
          "primaryEmailAddress": "bruce.wayne@example.com",
          "employeeNumber": "00001",
          "autoIncrementIntellihrId": "1000"
        }
      },
      {
        "name": "supervisorJob",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "location",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "workClass",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "workType",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "fte",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1"
      },
      {
        "name": "payGrade",
        "schema": "object",
        "required": false,
        "description": "",
        "default": "{ 'name': 'No Pay Grade' }"
      },
      {
        "name": "employmentCondition",
        "schema": "object",
        "required": false,
        "description": "",
        "default": "{ 'name': 'No Employment Condition' }"
      },
      {
        "name": "remunerationSchedule",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "text_field_api_name": {
            "value": "Some text value"
          },
          "numeric_field_api_name": {
            "value": "50"
          },
          "single_select_api_name": {
            "value": {
              "label": "Drama"
            }
          },
          "multi_select_api_name": {
            "value": {
              "labels": [
                "Bananas",
                "Apples"
              ]
            }
          },
          "people_dropdown_api_name": {
            "value": [
              {
                "person": {
                  "id": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9X",
                  "name": "Bruce Wayne",
                  "primaryEmailAddress": "bruce.wayne@example.com",
                  "employeeNumber": "00001",
                  "autoIncrementIntellihrId": "1000"
                },
                "job": {
                  "id": "569904c8-5d36-4c2f-afb0-525eeb8da32dX",
                  "name": "Maintenance worker"
                }
              },
              {
                "person": {
                  "id": "313fde44-f24e-4ec9-9473-0d0f3527222dX",
                  "name": "Batman",
                  "primaryEmailAddress": "batman@example.com",
                  "employeeNumber": "00002",
                  "autoIncrementIntellihrId": "1001"
                },
                "job": {
                  "id": "653304c8-5d36-4c2f-afb0-525eeb8da32dX",
                  "name": "Janitor"
                }
              }
            ]
          }
        }
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/jobs/{jobId}/timeline",
    "method": "getUpcomingChanges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Timeline",
    "typeScriptTag": "jobTimeline",
    "description": "Get Job Timeline",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "Id string param for relevant [Job](https://developers.intellihr.io/docs/v1/)",
        "example": "JOBID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/locations",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "List all locations",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/locations",
    "method": "createNewLocation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Create a new Location",
    "parameters": [
      {
        "name": "parentId",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Brisbane Office"
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "BE001"
      },
      {
        "name": "address",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1234 Queen Street, Brisbane City QLD 4000"
      },
      {
        "name": "isEnabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "text_field_api_name": {
            "value": "Some text value"
          },
          "numeric_field_api_name": {
            "value": "50"
          },
          "single_select_api_name": {
            "value": {
              "label": "Drama"
            }
          },
          "multi_select_api_name": {
            "value": {
              "labels": [
                "Bananas",
                "Apples"
              ]
            }
          },
          "people_dropdown_api_name": {
            "value": [
              {
                "person": {
                  "id": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9X",
                  "name": "Bruce Wayne",
                  "primaryEmailAddress": "bruce.wayne@example.com",
                  "employeeNumber": "00001",
                  "autoIncrementIntellihrId": "1000"
                },
                "job": {
                  "id": "569904c8-5d36-4c2f-afb0-525eeb8da32dX",
                  "name": "Maintenance worker"
                }
              },
              {
                "person": {
                  "id": "313fde44-f24e-4ec9-9473-0d0f3527222dX",
                  "name": "Batman",
                  "primaryEmailAddress": "batman@example.com",
                  "employeeNumber": "00002",
                  "autoIncrementIntellihrId": "1001"
                },
                "job": {
                  "id": "653304c8-5d36-4c2f-afb0-525eeb8da32dX",
                  "name": "Janitor"
                }
              }
            ]
          }
        }
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/locations/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Delete a Location by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success"
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
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/locations/{id}",
    "method": "findLocationById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Find a Location by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/locations/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Update a Location by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      },
      {
        "name": "parentId",
        "schema": "undefined",
        "description": "",
        "example": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Brisbane Office"
      },
      {
        "name": "code",
        "schema": "string",
        "description": "",
        "example": "BE001"
      },
      {
        "name": "address",
        "schema": "string",
        "description": "",
        "example": "1234 Queen Street, Brisbane City QLD 4000"
      },
      {
        "name": "isEnabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "description": "",
        "example": {
          "text_field_api_name": {
            "value": "Some text value"
          },
          "numeric_field_api_name": {
            "value": "50"
          },
          "single_select_api_name": {
            "value": {
              "label": "Drama"
            }
          },
          "multi_select_api_name": {
            "value": {
              "labels": [
                "Bananas",
                "Apples"
              ]
            }
          },
          "people_dropdown_api_name": {
            "value": [
              {
                "person": {
                  "id": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9X",
                  "name": "Bruce Wayne",
                  "primaryEmailAddress": "bruce.wayne@example.com",
                  "employeeNumber": "00001",
                  "autoIncrementIntellihrId": "1000"
                },
                "job": {
                  "id": "569904c8-5d36-4c2f-afb0-525eeb8da32dX",
                  "name": "Maintenance worker"
                }
              },
              {
                "person": {
                  "id": "313fde44-f24e-4ec9-9473-0d0f3527222dX",
                  "name": "Batman",
                  "primaryEmailAddress": "batman@example.com",
                  "employeeNumber": "00002",
                  "autoIncrementIntellihrId": "1001"
                },
                "job": {
                  "id": "653304c8-5d36-4c2f-afb0-525eeb8da32dX",
                  "name": "Janitor"
                }
              }
            ]
          }
        }
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/pay-grades",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pay Grades",
    "typeScriptTag": "payGrades",
    "description": "List all pay grades",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      },
      {
        "name": "asAt",
        "schema": "string",
        "description": "Used to configure what date to return this data, as a [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6) datetime. \n\nAll data returned from the endpoints represent the values of the attributes at a specific point in time. \n\nBy default, the current datetime is used, but this parameter can be used to configure a different datetime to see historical data.",
        "example": "2015-03-01T22:30:00+00:00"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/pay-grades",
    "method": "createRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pay Grades",
    "typeScriptTag": "payGrades",
    "description": "Create a new Pay Grade",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "The founder pay grade"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Founder"
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "L0"
      },
      {
        "name": "employmentCondition",
        "schema": "object",
        "required": false,
        "description": "",
        "default": "{ 'name': 'No Employment Condition' }"
      },
      {
        "name": "payGradeType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "FIXED",
        "default": "FIXED"
      },
      {
        "name": "isOverridable",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "permanentHourlyRate",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 25.5
      },
      {
        "name": "permanentHourlyRateCurrency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "AUD"
      },
      {
        "name": "casualHourlyRate",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 25.5
      },
      {
        "name": "casualHourlyRateCurrency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "AUD"
      },
      {
        "name": "annualSalary",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 25.5
      },
      {
        "name": "annualSalaryCurrency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "AUD"
      },
      {
        "name": "paySteps",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/pay-grades/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Pay Grades",
    "typeScriptTag": "payGrades",
    "description": "Delete a Pay Grade by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success"
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
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/pay-grades/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pay Grades",
    "typeScriptTag": "payGrades",
    "description": "Find a Pay Grade by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      },
      {
        "name": "asAt",
        "schema": "string",
        "description": "Used to configure what date to return this data, as a [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6) datetime. \n\nAll data returned from the endpoints represent the values of the attributes at a specific point in time. \n\nBy default, the current datetime is used, but this parameter can be used to configure a different datetime to see historical data.",
        "example": "2015-03-01T22:30:00+00:00"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/pay-grades/{id}",
    "method": "updateRecord",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Pay Grades",
    "typeScriptTag": "payGrades",
    "description": "Patch an existing Pay Grade",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "The founder pay grade"
      },
      {
        "name": "effectiveFrom",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2015-03-01T22:30:00+00:00"
      },
      {
        "name": "effectiveTo",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2015-03-01T22:30:00+00:00"
      },
      {
        "name": "isEnabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Founder"
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "L0"
      },
      {
        "name": "employmentCondition",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "payGradeType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "FIXED"
      },
      {
        "name": "isOverridable",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "permanentHourlyRate",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 25.5
      },
      {
        "name": "permanentHourlyRateCurrency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "AUD"
      },
      {
        "name": "casualHourlyRate",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 25.5
      },
      {
        "name": "casualHourlyRateCurrency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "AUD"
      },
      {
        "name": "annualSalary",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 25.5
      },
      {
        "name": "annualSalaryCurrency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "AUD"
      },
      {
        "name": "paySteps",
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
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/people",
    "method": "listAllPeople",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "List all people",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      },
      {
        "name": "filters",
        "schema": "object",
        "description": "Filters can be applied in the query string to limit the data returned from this endpoint. Filters are provided in the format `filters[<filter_name>][<operation_type>]=<filter_value>`.For example, a filter to get items matching a specific filter value would be `filters[jobId][eq]=dc996d73-a75e-499c-a96e-bd7d0df45f57,26d0ffc4-60f6-4672-a603-caaa4564af12`\n\rBelow is a list of operation types available on filters, note that each filter may not support every type:\n\r• Equality `[eq]`: Checks for an exact match with the given filter value\n\rThe list of supported filters is given below."
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sorting can be applied in the query string to order the data returned from this endpoint. Sort can be prepended with a minus to return the data in descending (-) order. For example, a sort to get the most recent records first would be `-createdAt`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/people",
    "method": "createNewPerson",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "",
    "parameters": [
      {
        "name": "title",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "Mr"
      },
      {
        "name": "firstName",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "Bruce"
      },
      {
        "name": "middleName",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "Thomas"
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Wayne"
      },
      {
        "name": "preferredName",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "Batman"
      },
      {
        "name": "dateOfBirth",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "1939-07-23"
      },
      {
        "name": "gender",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Other",
        "default": "Other"
      },
      {
        "name": "employeeNumber",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "00001"
      },
      {
        "name": "emergencyContact",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "name": "John Doe",
          "relationship": "Sibling",
          "phone": "0451 234 234",
          "email": "johndoe@example.com"
        }
      },
      {
        "name": "primaryEmailAddress",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": {
          "email": "bruce.wayne@batman.org",
          "isPersonal": false
        }
      },
      {
        "name": "primaryPhoneNumber",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": {
          "number": "0491 570 156",
          "isPersonal": false
        }
      },
      {
        "name": "emailAddresses",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "email": "bruce.wayne@batman.org",
            "isPersonal": false,
            "isPrimary": true,
            "customFields": {
              "text_field_api_name": {
                "value": "Some text value"
              },
              "numeric_field_api_name": {
                "value": "50"
              },
              "single_select_api_name": {
                "value": {
                  "label": "Drama"
                }
              },
              "multi_select_api_name": {
                "value": {
                  "labels": [
                    "Bananas",
                    "Apples"
                  ]
                }
              },
              "people_dropdown_api_name": {
                "value": [
                  {
                    "person": {
                      "id": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9X",
                      "name": "Bruce Wayne",
                      "primaryEmailAddress": "bruce.wayne@example.com",
                      "employeeNumber": "00001",
                      "autoIncrementIntellihrId": "1000"
                    },
                    "job": {
                      "id": "569904c8-5d36-4c2f-afb0-525eeb8da32dX",
                      "name": "Maintenance worker"
                    }
                  },
                  {
                    "person": {
                      "id": "313fde44-f24e-4ec9-9473-0d0f3527222dX",
                      "name": "Batman",
                      "primaryEmailAddress": "batman@example.com",
                      "employeeNumber": "00002",
                      "autoIncrementIntellihrId": "1001"
                    },
                    "job": {
                      "id": "653304c8-5d36-4c2f-afb0-525eeb8da32dX",
                      "name": "Janitor"
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      {
        "name": "phoneNumbers",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "number": "0491 570 156",
            "isPersonal": false,
            "isPrimary": true,
            "customFields": {
              "text_field_api_name": {
                "value": "Some text value"
              },
              "numeric_field_api_name": {
                "value": "50"
              },
              "single_select_api_name": {
                "value": {
                  "label": "Drama"
                }
              },
              "multi_select_api_name": {
                "value": {
                  "labels": [
                    "Bananas",
                    "Apples"
                  ]
                }
              },
              "people_dropdown_api_name": {
                "value": [
                  {
                    "person": {
                      "id": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9X",
                      "name": "Bruce Wayne",
                      "primaryEmailAddress": "bruce.wayne@example.com",
                      "employeeNumber": "00001",
                      "autoIncrementIntellihrId": "1000"
                    },
                    "job": {
                      "id": "569904c8-5d36-4c2f-afb0-525eeb8da32dX",
                      "name": "Maintenance worker"
                    }
                  },
                  {
                    "person": {
                      "id": "313fde44-f24e-4ec9-9473-0d0f3527222dX",
                      "name": "Batman",
                      "primaryEmailAddress": "batman@example.com",
                      "employeeNumber": "00002",
                      "autoIncrementIntellihrId": "1001"
                    },
                    "job": {
                      "id": "653304c8-5d36-4c2f-afb0-525eeb8da32dX",
                      "name": "Janitor"
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      {
        "name": "addresses",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "addressType": "Home",
            "fullAddress": "Queen Street, Brisbane QLD",
            "country": "Australia",
            "postcode": "4000",
            "state": "Queensland",
            "street": "Queen Street",
            "suburb": "Brisbane",
            "isPrimary": true,
            "customFields": {
              "text_field_api_name": {
                "value": "Some text value"
              },
              "numeric_field_api_name": {
                "value": "50"
              },
              "single_select_api_name": {
                "value": {
                  "label": "Drama"
                }
              },
              "multi_select_api_name": {
                "value": {
                  "labels": [
                    "Bananas",
                    "Apples"
                  ]
                }
              },
              "people_dropdown_api_name": {
                "value": [
                  {
                    "person": {
                      "id": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9X",
                      "name": "Bruce Wayne",
                      "primaryEmailAddress": "bruce.wayne@example.com",
                      "employeeNumber": "00001",
                      "autoIncrementIntellihrId": "1000"
                    },
                    "job": {
                      "id": "569904c8-5d36-4c2f-afb0-525eeb8da32dX",
                      "name": "Maintenance worker"
                    }
                  },
                  {
                    "person": {
                      "id": "313fde44-f24e-4ec9-9473-0d0f3527222dX",
                      "name": "Batman",
                      "primaryEmailAddress": "batman@example.com",
                      "employeeNumber": "00002",
                      "autoIncrementIntellihrId": "1001"
                    },
                    "job": {
                      "id": "653304c8-5d36-4c2f-afb0-525eeb8da32dX",
                      "name": "Janitor"
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      {
        "name": "customFields",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "text_field_api_name": {
            "value": "Some text value"
          },
          "numeric_field_api_name": {
            "value": "50"
          },
          "single_select_api_name": {
            "value": {
              "label": "Drama"
            }
          },
          "multi_select_api_name": {
            "value": {
              "labels": [
                "Bananas",
                "Apples"
              ]
            }
          },
          "people_dropdown_api_name": {
            "value": [
              {
                "person": {
                  "id": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9X",
                  "name": "Bruce Wayne",
                  "primaryEmailAddress": "bruce.wayne@example.com",
                  "employeeNumber": "00001",
                  "autoIncrementIntellihrId": "1000"
                },
                "job": {
                  "id": "569904c8-5d36-4c2f-afb0-525eeb8da32dX",
                  "name": "Maintenance worker"
                }
              },
              {
                "person": {
                  "id": "313fde44-f24e-4ec9-9473-0d0f3527222dX",
                  "name": "Batman",
                  "primaryEmailAddress": "batman@example.com",
                  "employeeNumber": "00002",
                  "autoIncrementIntellihrId": "1001"
                },
                "job": {
                  "id": "653304c8-5d36-4c2f-afb0-525eeb8da32dX",
                  "name": "Janitor"
                }
              }
            ]
          }
        }
      },
      {
        "name": "medicalConditions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "workRight",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "workRightExpiryDate",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "2022-06-23"
      },
      {
        "name": "userAccount",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": {
          "isEnabled": true,
          "username": "BruceWayne",
          "sendWelcomeEmail": true,
          "permissionGroups": [
            "fd652f39-db15-4a12-8c71-a48358ee9709"
          ]
        }
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/people/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Find a Person by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/people/{id}",
    "method": "updatePersonById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      },
      {
        "name": "title",
        "schema": "undefined",
        "description": "",
        "example": "Mr"
      },
      {
        "name": "firstName",
        "schema": "undefined",
        "description": "",
        "example": "Bruce"
      },
      {
        "name": "middleName",
        "schema": "undefined",
        "description": "",
        "example": "Thomas"
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": "",
        "example": "Wayne"
      },
      {
        "name": "preferredName",
        "schema": "undefined",
        "description": "",
        "example": "Batman"
      },
      {
        "name": "dateOfBirth",
        "schema": "undefined",
        "description": "",
        "example": "1939-07-23"
      },
      {
        "name": "gender",
        "schema": "string",
        "description": "",
        "example": "Other",
        "default": "Other"
      },
      {
        "name": "employeeNumber",
        "schema": "undefined",
        "description": "",
        "example": "00001"
      },
      {
        "name": "emergencyContact",
        "schema": "object",
        "description": "",
        "example": {
          "name": "John Doe",
          "relationship": "Sibling",
          "phone": "0451 234 234",
          "email": "johndoe@example.com"
        }
      },
      {
        "name": "emailAddresses",
        "schema": "array",
        "description": "",
        "example": [
          {
            "email": "bruce.wayne@batman.org",
            "isPersonal": false,
            "isPrimary": true,
            "customFields": {
              "text_field_api_name": {
                "value": "Some text value"
              },
              "numeric_field_api_name": {
                "value": "50"
              },
              "single_select_api_name": {
                "value": {
                  "label": "Drama"
                }
              },
              "multi_select_api_name": {
                "value": {
                  "labels": [
                    "Bananas",
                    "Apples"
                  ]
                }
              },
              "people_dropdown_api_name": {
                "value": [
                  {
                    "person": {
                      "id": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9X",
                      "name": "Bruce Wayne",
                      "primaryEmailAddress": "bruce.wayne@example.com",
                      "employeeNumber": "00001",
                      "autoIncrementIntellihrId": "1000"
                    },
                    "job": {
                      "id": "569904c8-5d36-4c2f-afb0-525eeb8da32dX",
                      "name": "Maintenance worker"
                    }
                  },
                  {
                    "person": {
                      "id": "313fde44-f24e-4ec9-9473-0d0f3527222dX",
                      "name": "Batman",
                      "primaryEmailAddress": "batman@example.com",
                      "employeeNumber": "00002",
                      "autoIncrementIntellihrId": "1001"
                    },
                    "job": {
                      "id": "653304c8-5d36-4c2f-afb0-525eeb8da32dX",
                      "name": "Janitor"
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      {
        "name": "phoneNumbers",
        "schema": "array",
        "description": "",
        "example": [
          {
            "number": "0491 570 156",
            "isPersonal": false,
            "isPrimary": true,
            "customFields": {
              "text_field_api_name": {
                "value": "Some text value"
              },
              "numeric_field_api_name": {
                "value": "50"
              },
              "single_select_api_name": {
                "value": {
                  "label": "Drama"
                }
              },
              "multi_select_api_name": {
                "value": {
                  "labels": [
                    "Bananas",
                    "Apples"
                  ]
                }
              },
              "people_dropdown_api_name": {
                "value": [
                  {
                    "person": {
                      "id": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9X",
                      "name": "Bruce Wayne",
                      "primaryEmailAddress": "bruce.wayne@example.com",
                      "employeeNumber": "00001",
                      "autoIncrementIntellihrId": "1000"
                    },
                    "job": {
                      "id": "569904c8-5d36-4c2f-afb0-525eeb8da32dX",
                      "name": "Maintenance worker"
                    }
                  },
                  {
                    "person": {
                      "id": "313fde44-f24e-4ec9-9473-0d0f3527222dX",
                      "name": "Batman",
                      "primaryEmailAddress": "batman@example.com",
                      "employeeNumber": "00002",
                      "autoIncrementIntellihrId": "1001"
                    },
                    "job": {
                      "id": "653304c8-5d36-4c2f-afb0-525eeb8da32dX",
                      "name": "Janitor"
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      {
        "name": "addresses",
        "schema": "array",
        "description": "",
        "example": [
          {
            "addressType": "Home",
            "fullAddress": "Queen Street, Brisbane QLD",
            "country": "Australia",
            "postcode": "4000",
            "state": "Queensland",
            "street": "Queen Street",
            "suburb": "Brisbane",
            "isPrimary": true,
            "customFields": {
              "text_field_api_name": {
                "value": "Some text value"
              },
              "numeric_field_api_name": {
                "value": "50"
              },
              "single_select_api_name": {
                "value": {
                  "label": "Drama"
                }
              },
              "multi_select_api_name": {
                "value": {
                  "labels": [
                    "Bananas",
                    "Apples"
                  ]
                }
              },
              "people_dropdown_api_name": {
                "value": [
                  {
                    "person": {
                      "id": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9X",
                      "name": "Bruce Wayne",
                      "primaryEmailAddress": "bruce.wayne@example.com",
                      "employeeNumber": "00001",
                      "autoIncrementIntellihrId": "1000"
                    },
                    "job": {
                      "id": "569904c8-5d36-4c2f-afb0-525eeb8da32dX",
                      "name": "Maintenance worker"
                    }
                  },
                  {
                    "person": {
                      "id": "313fde44-f24e-4ec9-9473-0d0f3527222dX",
                      "name": "Batman",
                      "primaryEmailAddress": "batman@example.com",
                      "employeeNumber": "00002",
                      "autoIncrementIntellihrId": "1001"
                    },
                    "job": {
                      "id": "653304c8-5d36-4c2f-afb0-525eeb8da32dX",
                      "name": "Janitor"
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      {
        "name": "customFields",
        "schema": "object",
        "description": "",
        "example": {
          "text_field_api_name": {
            "value": "Some text value"
          },
          "numeric_field_api_name": {
            "value": "50"
          },
          "single_select_api_name": {
            "value": {
              "label": "Drama"
            }
          },
          "multi_select_api_name": {
            "value": {
              "labels": [
                "Bananas",
                "Apples"
              ]
            }
          },
          "people_dropdown_api_name": {
            "value": [
              {
                "person": {
                  "id": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9X",
                  "name": "Bruce Wayne",
                  "primaryEmailAddress": "bruce.wayne@example.com",
                  "employeeNumber": "00001",
                  "autoIncrementIntellihrId": "1000"
                },
                "job": {
                  "id": "569904c8-5d36-4c2f-afb0-525eeb8da32dX",
                  "name": "Maintenance worker"
                }
              },
              {
                "person": {
                  "id": "313fde44-f24e-4ec9-9473-0d0f3527222dX",
                  "name": "Batman",
                  "primaryEmailAddress": "batman@example.com",
                  "employeeNumber": "00002",
                  "autoIncrementIntellihrId": "1001"
                },
                "job": {
                  "id": "653304c8-5d36-4c2f-afb0-525eeb8da32dX",
                  "name": "Janitor"
                }
              }
            ]
          }
        }
      },
      {
        "name": "medicalConditions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "workRight",
        "schema": "undefined",
        "description": "",
        "example": {
          "id": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9X",
          "name": "Australian Citizen"
        }
      },
      {
        "name": "workRightExpiryDate",
        "schema": "undefined",
        "description": "",
        "example": "2022-06-23"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/people/{personId}/images",
    "method": "getTemporaryImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People Images",
    "typeScriptTag": "peopleImages",
    "description": "Get a temporary image",
    "parameters": [
      {
        "name": "personId",
        "schema": "string",
        "required": true,
        "description": "Id string param for relevant [Person](https://developers.intellihr.io/docs/v1/)",
        "example": "PERSONID"
      },
      {
        "name": "imageType",
        "schema": "string",
        "required": false,
        "description": "The Image Type. Enum: `PERSON_PROFILE`, `PROFILE_COVER`.",
        "example": "PERSON_PROFILE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/people/{personId}/images",
    "method": "promoteImage",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "People Images",
    "typeScriptTag": "peopleImages",
    "description": "Promote temporary image",
    "parameters": [
      {
        "name": "personId",
        "schema": "string",
        "required": true,
        "description": "Id string param for relevant [Person](https://developers.intellihr.io/docs/v1/)",
        "example": "PERSONID"
      },
      {
        "name": "imageType",
        "schema": "string",
        "description": "",
        "example": "PERSON_PROFILE",
        "default": "PERSON_PROFILE"
      },
      {
        "name": "rotation",
        "schema": "integer",
        "description": "",
        "example": 0,
        "default": 0
      },
      {
        "name": "coordinates",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success"
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
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/people/{personId}/images",
    "method": "generateTemporaryImageUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People Images",
    "typeScriptTag": "peopleImages",
    "description": "Generate an temporary image upload URL for the provided Person.",
    "parameters": [
      {
        "name": "personId",
        "schema": "string",
        "required": true,
        "description": "Id string param for relevant [Person](https://developers.intellihr.io/docs/v1/)",
        "example": "PERSONID"
      },
      {
        "name": "imageType",
        "schema": "string",
        "description": "",
        "example": "PERSON_PROFILE",
        "default": "PERSON_PROFILE"
      },
      {
        "name": "extension",
        "schema": "string",
        "description": "",
        "example": "png"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/people/{personId}/skills",
    "method": "listPersonSkills",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People Skills",
    "typeScriptTag": "peopleSkills",
    "description": "List all Skills assigned to a Person",
    "parameters": [
      {
        "name": "personId",
        "schema": "string",
        "required": true,
        "description": "Id string param for relevant [Person](https://developers.intellihr.io/docs/v1/)",
        "example": "PERSONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/people/{personId}/skills",
    "method": "assignSkillToPerson",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People Skills",
    "typeScriptTag": "peopleSkills",
    "description": "Assign a Skill to a Person",
    "parameters": [
      {
        "name": "personId",
        "schema": "string",
        "required": true,
        "description": "Id string param for relevant [Person](https://developers.intellihr.io/docs/v1/)",
        "example": "PERSONID"
      },
      {
        "name": "skillId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9"
      },
      {
        "name": "skillLevel",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Fortnightly"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/people/{personId}/skills/{id}",
    "method": "deleteAssignedSkillById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "People Skills",
    "typeScriptTag": "peopleSkills",
    "description": "Delete an Assigned Skill by ID",
    "parameters": [
      {
        "name": "personId",
        "schema": "string",
        "required": true,
        "description": "Id string param for relevant [Person](https://developers.intellihr.io/docs/v1/)",
        "example": "PERSONID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success"
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
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/people/{personId}/skills/{id}",
    "method": "findSkillById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People Skills",
    "typeScriptTag": "peopleSkills",
    "description": "Find a Person's Skill by ID",
    "parameters": [
      {
        "name": "personId",
        "schema": "string",
        "required": true,
        "description": "Id string param for relevant [Person](https://developers.intellihr.io/docs/v1/)",
        "example": "PERSONID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/people/{personId}/skills/{id}",
    "method": "updateAssignedSkill",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "People Skills",
    "typeScriptTag": "peopleSkills",
    "description": "Update an Assigned Skill",
    "parameters": [
      {
        "name": "personId",
        "schema": "string",
        "required": true,
        "description": "Id string param for relevant [Person](https://developers.intellihr.io/docs/v1/)",
        "example": "PERSONID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      },
      {
        "name": "skillLevel",
        "schema": "string",
        "description": "",
        "example": "Fortnightly"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/permission-groups",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Permission Groups",
    "typeScriptTag": "permissionGroups",
    "description": "List all Permission Groups",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      },
      {
        "name": "filters",
        "schema": "object",
        "description": "Filters can be applied in the query string to limit the data returned from this endpoint. Filters are provided in the format `filters[<filter_name>][<operation_type>]=<filter_value>`.For example, a filter to get items matching a specific filter value would be `filters[isEnabled][eq]=true`\n\rBelow is a list of operation types available on filters, note that each filter may not support every type:\n\r• Equality `[eq]`: Checks for an exact match with the given filter value\n\rThe list of supported filters is given below."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/permission-groups/{id}",
    "method": "findGroupById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Permission Groups",
    "typeScriptTag": "permissionGroups",
    "description": "Find a Permission Group by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/people/{personId}/documents",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People Documents",
    "typeScriptTag": "peopleDocuments",
    "description": "List all Documents of a person",
    "parameters": [
      {
        "name": "personId",
        "schema": "string",
        "required": true,
        "description": "Id string param for relevant [Person](https://developers.intellihr.io/docs/v1/)",
        "example": "PERSONID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/people/{personId}/documents",
    "method": "createPresignedUploadUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People Documents",
    "typeScriptTag": "peopleDocuments",
    "description": "",
    "parameters": [
      {
        "name": "personId",
        "schema": "string",
        "required": true,
        "description": "personId parameter",
        "example": "PERSONID"
      },
      {
        "name": "filename",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OfferLetter.pdf"
      },
      {
        "name": "mime",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "application/pdf"
      },
      {
        "name": "size",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 300
      },
      {
        "name": "extension",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "pdf"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/people/{personId}/documents/{id}",
    "method": "updateDocument",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "People Documents",
    "typeScriptTag": "peopleDocuments",
    "description": "",
    "parameters": [
      {
        "name": "personId",
        "schema": "string",
        "required": true,
        "description": "personId parameter",
        "example": "PERSONID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      },
      {
        "name": "filename",
        "schema": "string",
        "description": "",
        "example": "OfferLetter.pdf"
      },
      {
        "name": "uploadStatus",
        "schema": "undefined",
        "description": "",
        "example": "SUCCESS"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/person-documents",
    "method": "createPresignedUploadUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Person Documents (deprecated)",
    "typeScriptTag": "personDocumentsDeprecated",
    "description": "",
    "parameters": [
      {
        "name": "person",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "id": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9X",
          "name": "Bruce Wayne",
          "primaryEmailAddress": "bruce.wayne@example.com",
          "employeeNumber": "00001",
          "autoIncrementIntellihrId": "1000"
        }
      },
      {
        "name": "filename",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OfferLetter.pdf"
      },
      {
        "name": "mime",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "application/pdf"
      },
      {
        "name": "size",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 300
      },
      {
        "name": "extension",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "pdf"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/person-documents/{id}",
    "method": "updateDocument",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Person Documents (deprecated)",
    "typeScriptTag": "personDocumentsDeprecated",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      },
      {
        "name": "personId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9"
      },
      {
        "name": "filename",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "OfferLetter.pdf"
      },
      {
        "name": "uploadStatus",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "SUCCESS"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/position-titles",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Position Titles",
    "typeScriptTag": "positionTitles",
    "description": "List all position titles",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      },
      {
        "name": "filters",
        "schema": "object",
        "description": "Filters can be applied in the query string to limit the data returned from this endpoint. Filters are provided in the format `filters[<filter_name>][<operation_type>]=<filter_value>`.For example, a filter to get items matching a specific filter value would be `filters[name][eq]=Engineering Manager`\n\rBelow is a list of operation types available on filters, note that each filter may not support every type:\n\r• Equality `[eq]`: Checks for an exact match with the given filter value\n\rThe list of supported filters is given below."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/position-titles",
    "method": "createNewRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Position Titles",
    "typeScriptTag": "positionTitles",
    "description": "Create a new Position Title",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Engineering Manager"
      },
      {
        "name": "code",
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
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/position-titles/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Position Titles",
    "typeScriptTag": "positionTitles",
    "description": "Delete a Position Title by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success"
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
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/position-titles/{id}",
    "method": "updateAttributes",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Position Titles",
    "typeScriptTag": "positionTitles",
    "description": "Patch an existing Position Title",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Engineering Manager"
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isEnabled",
        "schema": "boolean",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/qualifications",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Qualification Instances",
    "typeScriptTag": "qualificationInstances",
    "description": "List all Qualification Instances",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      },
      {
        "name": "filters",
        "schema": "object",
        "description": "Filters can be applied in the query string to limit the data returned from this endpoint. Filters are provided in the format `filters[<filter_name>][<operation_type>]=<filter_value>`.For example, a filter to get items matching a specific filter value would be `filters[personId][eq]=dc996d73-a75e-499c-a96e-bd7d0df45f57,26d0ffc4-60f6-4672-a603-caaa4564af12`\n\rBelow is a list of operation types available on filters, note that each filter may not support every type:\n\r• Equality `[eq]`: Checks for an exact match with the given filter value\n\rThe list of supported filters is given below."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/qualifications",
    "method": "createNewInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Qualification Instances",
    "typeScriptTag": "qualificationInstances",
    "description": "Create a new Qualification Instance",
    "parameters": [
      {
        "name": "personId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9"
      },
      {
        "name": "qualificationLibraryItemId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "issuingOrganisation",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "ABCDE12345"
      },
      {
        "name": "registrationNumber",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "ABCDE12345"
      },
      {
        "name": "issueDate",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "2015-03-01T22:30:00+00:00"
      },
      {
        "name": "expiryDate",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "2015-03-01T22:30:00+00:00"
      },
      {
        "name": "expiryNotificationQueuedAt",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "2015-03-01T22:30:00+00:00"
      },
      {
        "name": "notes",
        "schema": "undefined",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/qualifications/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Qualification Instances",
    "typeScriptTag": "qualificationInstances",
    "description": "Delete a Qualification Instance by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success"
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
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/qualifications/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Qualification Instances",
    "typeScriptTag": "qualificationInstances",
    "description": "Find a Qualification Instance by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/qualifications/{id}",
    "method": "updateInstanceById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Qualification Instances",
    "typeScriptTag": "qualificationInstances",
    "description": "Update a Qualification Instance by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "issuingOrganisation",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "ABCDE12345"
      },
      {
        "name": "registrationNumber",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "ABCDE12345"
      },
      {
        "name": "issueDate",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "2015-03-01T22:30:00+00:00"
      },
      {
        "name": "expiryDate",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "2015-03-01T22:30:00+00:00"
      },
      {
        "name": "expiryNotificationQueuedAt",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "2015-03-01T22:30:00+00:00"
      },
      {
        "name": "notes",
        "schema": "undefined",
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
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/qualification-statuses/{id}",
    "method": "findStatusById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Qualification Statuses",
    "typeScriptTag": "qualificationStatuses",
    "description": "Find a Qualification Status by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/qualification-library-items",
    "method": "getAllQualifications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Qualification Library Items",
    "typeScriptTag": "qualificationLibraryItems",
    "description": "List all Qualification Library Items",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/qualification-library-items",
    "method": "createNewRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Qualification Library Items",
    "typeScriptTag": "qualificationLibraryItems",
    "description": "Create a new Qualification Library Item",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "qualificationTypeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9"
      },
      {
        "name": "qualificationExpiryType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUALIFICATIONEXPIRYTYPE"
      },
      {
        "name": "qualificationRegistrationNumberVisibilityType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUALIFICATIONREGISTRATIONNUMBERVISIBILITYTYPE"
      },
      {
        "name": "qualificationAttachmentRequirementType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUALIFICATIONATTACHMENTREQUIREMENTTYPE"
      },
      {
        "name": "expiryWarningPeriod",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "sendExpiryWarning",
        "schema": "boolean",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/qualification-library-items/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Qualification Library Items",
    "typeScriptTag": "qualificationLibraryItems",
    "description": "Delete a Qualification Library Item by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success"
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
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/qualification-library-items/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Qualification Library Items",
    "typeScriptTag": "qualificationLibraryItems",
    "description": "Find a Qualification Library Item by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/qualification-library-items/{id}",
    "method": "updateRecord",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Qualification Library Items",
    "typeScriptTag": "qualificationLibraryItems",
    "description": "Patch an existing Qualification Library Item",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "qualificationTypeId",
        "schema": "string",
        "description": "",
        "example": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9"
      },
      {
        "name": "qualificationExpiryType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "qualificationRegistrationNumberVisibilityType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "qualificationAttachmentRequirementType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expiryWarningPeriod",
        "schema": "number",
        "description": ""
      },
      {
        "name": "sendExpiryWarning",
        "schema": "boolean",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/qualification-types",
    "method": "listAllQualificationTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Qualification Types",
    "typeScriptTag": "qualificationTypes",
    "description": "List all Qualification Types",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/qualification-types/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Qualification Types",
    "typeScriptTag": "qualificationTypes",
    "description": "Find a Qualification Type by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/recruitment-sources",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recruitment Sources",
    "typeScriptTag": "recruitmentSources",
    "description": "List all recruitment sources",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/recruitment-sources/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recruitment Sources",
    "typeScriptTag": "recruitmentSources",
    "description": "Find a Recruitment Source by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/representative-types",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Representative Types",
    "typeScriptTag": "representativeTypes",
    "description": "List all Representative Types",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/representative-types/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Representative Types",
    "typeScriptTag": "representativeTypes",
    "description": "Find a Representative Type by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/skills",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Skills",
    "typeScriptTag": "skills",
    "description": "List all Skills",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      },
      {
        "name": "filters",
        "schema": "object",
        "description": "Filters can be applied in the query string to limit the data returned from this endpoint. Filters are provided in the format `filters[<filter_name>][<operation_type>]=<filter_value>`.For example, a filter to get items matching a specific filter value would be `filters[isBusinessCritical][eq]=true`\n\rBelow is a list of operation types available on filters, note that each filter may not support every type:\n\r• Equality `[eq]`: Checks for an exact match with the given filter value\n\rThe list of supported filters is given below."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/skills",
    "method": "createNewSkill",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Skills",
    "typeScriptTag": "skills",
    "description": "",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "The planning, execution, tracking, and analysis of a marketing initiative; sometimes centered around a new product launch or an event."
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Campaign Management"
      },
      {
        "name": "isBusinessCritical",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "skillDisciplineId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/skills/{id}",
    "method": "findSkillById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Skills",
    "typeScriptTag": "skills",
    "description": "Find a Skill by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/skills/{id}",
    "method": "updateSkillById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Skills",
    "typeScriptTag": "skills",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "The planning, execution, tracking, and analysis of a marketing initiative; sometimes centered around a new product launch or an event."
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Campaign Management"
      },
      {
        "name": "isBusinessCritical",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "skillDisciplineId",
        "schema": "string",
        "description": "",
        "example": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/skill-disciplines",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Skill Disciplines",
    "typeScriptTag": "skillDisciplines",
    "description": "List all Skill Disciplines",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      },
      {
        "name": "filters",
        "schema": "object",
        "description": "Filters can be applied in the query string to limit the data returned from this endpoint. Filters are provided in the format `filters[<filter_name>][<operation_type>]=<filter_value>`.For example, a filter to get items matching a specific filter value would be `filters[name][eq]=Accounting`\n\rBelow is a list of operation types available on filters, note that each filter may not support every type:\n\r• Equality `[eq]`: Checks for an exact match with the given filter value\n\rThe list of supported filters is given below."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/skill-disciplines",
    "method": "createNewDiscipline",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Skill Disciplines",
    "typeScriptTag": "skillDisciplines",
    "description": "Create a Skill Discipline",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Accounting"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/skill-disciplines/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Skill Disciplines",
    "typeScriptTag": "skillDisciplines",
    "description": "Find a Skill Discipline by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/skill-disciplines/{id}",
    "method": "updateDisciplineById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Skill Disciplines",
    "typeScriptTag": "skillDisciplines",
    "description": "Patch a Skill Discipline",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Accounting"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/training-providers",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Training Providers",
    "typeScriptTag": "trainingProviders",
    "description": "List all Training Providers",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/training-providers/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Training Providers",
    "typeScriptTag": "trainingProviders",
    "description": "Find a Training Provider by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/trainings",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trainings",
    "typeScriptTag": "trainings",
    "description": "List all Trainings",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      },
      {
        "name": "filters",
        "schema": "object",
        "description": "Filters can be applied in the query string to limit the data returned from this endpoint. Filters are provided in the format `filters[<filter_name>][<operation_type>]=<filter_value>`.For example, a filter to get items matching a specific filter value would be `filters[name][eq]=Accounting%20Compliance%20101`\n\rBelow is a list of operation types available on filters, note that each filter may not support every type:\n\r• Equality `[eq]`: Checks for an exact match with the given filter value\n\rThe list of supported filters is given below."
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sorting can be applied in the query string to order the data returned from this endpoint. Sort can be prepended with a minus to return the data in descending (-) order. For example, a sort to get the most recent records first would be `-createdAt`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/trainings",
    "method": "createNewTraining",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Trainings",
    "typeScriptTag": "trainings",
    "description": "",
    "parameters": [
      {
        "name": "coordinatorPerson",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "id": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9X",
          "name": "Bruce Wayne",
          "primaryEmailAddress": "bruce.wayne@example.com",
          "employeeNumber": "00001",
          "autoIncrementIntellihrId": "1000"
        }
      },
      {
        "name": "completionDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2015-03-01T22:30:00+00:00"
      },
      {
        "name": "cost",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "600"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "AUD"
      },
      {
        "name": "hours",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12"
      },
      {
        "name": "job",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Accounting Compliance 101"
      },
      {
        "name": "person",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "id": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9X",
          "name": "Bruce Wayne",
          "primaryEmailAddress": "bruce.wayne@example.com",
          "employeeNumber": "00001",
          "autoIncrementIntellihrId": "1000"
        }
      },
      {
        "name": "provider",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "text_field_api_name": {
            "value": "Some text value"
          },
          "numeric_field_api_name": {
            "value": "50"
          },
          "single_select_api_name": {
            "value": {
              "label": "Drama"
            }
          },
          "multi_select_api_name": {
            "value": {
              "labels": [
                "Bananas",
                "Apples"
              ]
            }
          },
          "people_dropdown_api_name": {
            "value": [
              {
                "person": {
                  "id": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9X",
                  "name": "Bruce Wayne",
                  "primaryEmailAddress": "bruce.wayne@example.com",
                  "employeeNumber": "00001",
                  "autoIncrementIntellihrId": "1000"
                },
                "job": {
                  "id": "569904c8-5d36-4c2f-afb0-525eeb8da32dX",
                  "name": "Maintenance worker"
                }
              },
              {
                "person": {
                  "id": "313fde44-f24e-4ec9-9473-0d0f3527222dX",
                  "name": "Batman",
                  "primaryEmailAddress": "batman@example.com",
                  "employeeNumber": "00002",
                  "autoIncrementIntellihrId": "1001"
                },
                "job": {
                  "id": "653304c8-5d36-4c2f-afb0-525eeb8da32dX",
                  "name": "Janitor"
                }
              }
            ]
          }
        }
      },
      {
        "name": "status",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/trainings/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Trainings",
    "typeScriptTag": "trainings",
    "description": "Delete a Training by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success"
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
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/trainings/{id}",
    "method": "findTrainingById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trainings",
    "typeScriptTag": "trainings",
    "description": "Find a Training by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/trainings/{id}",
    "method": "updateTrainingById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Trainings",
    "typeScriptTag": "trainings",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      },
      {
        "name": "coordinatorPerson",
        "schema": "object",
        "description": "",
        "example": {
          "id": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9X",
          "name": "Bruce Wayne",
          "primaryEmailAddress": "bruce.wayne@example.com",
          "employeeNumber": "00001",
          "autoIncrementIntellihrId": "1000"
        }
      },
      {
        "name": "completionDate",
        "schema": "string",
        "description": "",
        "example": "2015-03-01T22:30:00+00:00"
      },
      {
        "name": "cost",
        "schema": "string",
        "description": "",
        "example": "600"
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "AUD"
      },
      {
        "name": "hours",
        "schema": "string",
        "description": "",
        "example": "12"
      },
      {
        "name": "job",
        "schema": "object",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Accounting Compliance 101"
      },
      {
        "name": "person",
        "schema": "object",
        "description": "",
        "example": {
          "id": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9X",
          "name": "Bruce Wayne",
          "primaryEmailAddress": "bruce.wayne@example.com",
          "employeeNumber": "00001",
          "autoIncrementIntellihrId": "1000"
        }
      },
      {
        "name": "provider",
        "schema": "object",
        "description": ""
      },
      {
        "name": "type",
        "schema": "object",
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "description": "",
        "example": {
          "text_field_api_name": {
            "value": "Some text value"
          },
          "numeric_field_api_name": {
            "value": "50"
          },
          "single_select_api_name": {
            "value": {
              "label": "Drama"
            }
          },
          "multi_select_api_name": {
            "value": {
              "labels": [
                "Bananas",
                "Apples"
              ]
            }
          },
          "people_dropdown_api_name": {
            "value": [
              {
                "person": {
                  "id": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9X",
                  "name": "Bruce Wayne",
                  "primaryEmailAddress": "bruce.wayne@example.com",
                  "employeeNumber": "00001",
                  "autoIncrementIntellihrId": "1000"
                },
                "job": {
                  "id": "569904c8-5d36-4c2f-afb0-525eeb8da32dX",
                  "name": "Maintenance worker"
                }
              },
              {
                "person": {
                  "id": "313fde44-f24e-4ec9-9473-0d0f3527222dX",
                  "name": "Batman",
                  "primaryEmailAddress": "batman@example.com",
                  "employeeNumber": "00002",
                  "autoIncrementIntellihrId": "1001"
                },
                "job": {
                  "id": "653304c8-5d36-4c2f-afb0-525eeb8da32dX",
                  "name": "Janitor"
                }
              }
            ]
          }
        }
      },
      {
        "name": "status",
        "schema": "object",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/training-statuses",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Training Statuses",
    "typeScriptTag": "trainingStatuses",
    "description": "List all Training Statuses",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/training-types",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Training Types",
    "typeScriptTag": "trainingTypes",
    "description": "List all Training Types",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/training-types/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Training Types",
    "typeScriptTag": "trainingTypes",
    "description": "Find a Training Type by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/users",
    "method": "getAllUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "List all Users",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List Users."
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/users",
    "method": "createUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Create a User",
    "parameters": [
      {
        "name": "isEnabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME"
      },
      {
        "name": "person",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "permissionGroups",
        "schema": "undefined",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Single User."
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
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/users/{id}",
    "method": "findUserById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Find a User by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Single User."
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/users/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Patch a User by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      },
      {
        "name": "isEnabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Single User."
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
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/work-classes",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Work Classes",
    "typeScriptTag": "workClasses",
    "description": "List all work classes",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/work-classes/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Work Classes",
    "typeScriptTag": "workClasses",
    "description": "Find a Work Class by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/workflow-events/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflow Events",
    "typeScriptTag": "workflowEvents",
    "description": "Find a Workflow Event by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/workflows/{id}",
    "method": "triggerById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Trigger a Workflow by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the Workflow to trigger.",
        "example": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9"
      },
      {
        "name": "workflowFormDesigns",
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
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/work-rights",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Work Rights",
    "typeScriptTag": "workRights",
    "description": "List all Work Rights",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/work-rights/{id}",
    "method": "findWorkRightById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Work Rights",
    "typeScriptTag": "workRights",
    "description": "Find a Work Right by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/work-types",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Work Types",
    "typeScriptTag": "workTypes",
    "description": "List all Work Types",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/work-types/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Work Types",
    "typeScriptTag": "workTypes",
    "description": "Find a Work Type by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/webhook-events",
    "method": "listAllEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhook Events",
    "typeScriptTag": "webhookEvents",
    "description": "List all Webhook Events",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List Webhook Events."
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/webhook-events/{id}",
    "method": "findEventById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhook Events",
    "typeScriptTag": "webhookEvents",
    "description": "Find a Webhook Event by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Single Webhook Event."
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/webhooks",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "List all Webhooks",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/webhooks",
    "method": "createWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Create a Webhook",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "webhookEvent",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WEBHOOKEVENT"
      },
      {
        "name": "isEnabled",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "source",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "custom"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/webhooks/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete a Webhook by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success"
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
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/webhooks/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Find a Webhook by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  },
  {
    "url": "/webhooks/{id}",
    "method": "updateWebhook",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Patch a Webhook",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The resource identifier string",
        "example": "ID"
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "webhookEvent",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isEnabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "source",
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
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Unknown server error"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="intelliHR Public API"
      apiBaseUrl="https://api.intellihr.io/v1"
      apiVersion="V1"
      endpoints={76}
      sdkMethods={128}
      schemas={163}
      parameters={448}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/intellihr/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/intellihr/openapi.yaml"
      developerDocumentation="developers.intellihr.io/docs/v1/"
    />
  );
}
  