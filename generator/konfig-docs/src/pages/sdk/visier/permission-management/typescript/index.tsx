import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function VisierPermissionManagementTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="visier-permission-management-typescript-sdk"
      metaDescription={`Visier is the people impact platform that puts the right insights in the right hands, at the right time, throughout the business. 

We help organizations of all sizes unlock the power of their people data for business impact. This includes enterprises using our category-leading people analytics software, partners embedding our solution into existing apps, and developers building on the Visier platform.

As the global leader in people analytics, Visier has over 25,000 customers in 75 countries around the world, including enterprises like BASF, Bridgestone, Electronic Arts, McKesson, MerckKGaA, and more. Visier is headquartered in Vancouver, BC with offices and team members worldwide.`}
      company="Visier"
      serviceName="PermissionManagement"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/permission-management/logo.png"
      companyKebabCase="visier"
      clientNameCamelCase="visierPermissionManagement"
      homepage="visier.com"
      lastUpdated={new Date("2024-03-19T23:14:00.000Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/permission-management/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/permission-management/imagePreview.jpg"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["enterprise_software","people_analytics","business_impact","team_management","workforce_insights","human_resources","workforce_intelligence","workforce_analytics","hr_metrics","hr_analytics","hr_dashboard","hr_reporting","workforce_planning","human_capital_management","workforce_solutions","talent_acquisition_analytics"]}
      methods={[
  {
    "url": "/v1/admin/capabilities",
    "method": "getCapabilities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PermissionManagement",
    "typeScriptTag": "permissionManagement",
    "description": "Retrieve a list of all permission capabilities",
    "parameters": [
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "Specify the tenant to retrieve the capabilities from."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/admin/capabilities/{capabilityId}",
    "method": "getCapability",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PermissionManagement",
    "typeScriptTag": "permissionManagement",
    "description": "Retrieve a permission capability's details",
    "parameters": [
      {
        "name": "capabilityId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the capability you want to retrieve.",
        "example": "CAPABILITYID"
      },
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "Specify the tenant to retrieve a capability from."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/admin/content-packages",
    "method": "getContentPackages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PermissionManagement",
    "typeScriptTag": "permissionManagement",
    "description": "Retrieve a list of all content packages",
    "parameters": [
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "Specify the tenant to retrieve the content packages from."
      },
      {
        "name": "searchString",
        "schema": "string",
        "description": "Optional search string to return only content packages whose display name or description contains that search string.\n If searchString is empty or not provided, the response returns a list of all content packages."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/admin/content-packages/{contentPackageId}",
    "method": "getContentPackage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PermissionManagement",
    "typeScriptTag": "permissionManagement",
    "description": "Retrieve a content package's details",
    "parameters": [
      {
        "name": "contentPackageId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the content package you want to retrieve.",
        "example": "CONTENTPACKAGEID"
      },
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "Specify the tenant to retrieve a content package from."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/admin/data-security-objects",
    "method": "getDataSecurityObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PermissionManagement",
    "typeScriptTag": "permissionManagement",
    "description": "Retrieve a list of data security objects",
    "parameters": [
      {
        "name": "id",
        "schema": "array",
        "description": "The unique identifiers of the data security objects (analytic objects) to retrieve.\n Default is all data security objects."
      },
      {
        "name": "includeDetails",
        "schema": "boolean",
        "description": "If true, the response includes the analytic objects (display name, ID, and object type), related objects,\n securable properties, and securable dimensions. If false, the response only includes analytic objects\n (display name, ID, and object type). Default is false."
      },
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "Specify the tenant to retrieve data security objects from."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/admin/permissions",
    "method": "deletePermissions",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "PermissionManagement",
    "typeScriptTag": "permissionManagement",
    "description": "Delete permissions",
    "parameters": [
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "Specify the tenant to delete permissions from."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/admin/permissions",
    "method": "getPermissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PermissionManagement",
    "typeScriptTag": "permissionManagement",
    "description": "Retrieve a list of all permissions",
    "parameters": [
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "Specify the tenant to retrieve the permissions from."
      },
      {
        "name": "includeDetails",
        "schema": "boolean",
        "description": "If true, returns the permission's details. If false, only returns the permissions' ID, display name,\n and description. Default is false."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of available permissions"
      },
      {
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/admin/permissions",
    "method": "createPermissions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PermissionManagement",
    "typeScriptTag": "permissionManagement",
    "description": "Create permissions",
    "parameters": [
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "Specify the tenant to create permissions in."
      },
      {
        "name": "permissions",
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
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/admin/permissions",
    "method": "updatePermissions",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "PermissionManagement",
    "typeScriptTag": "permissionManagement",
    "description": "Update permissions",
    "parameters": [
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "Specify the tenant to update permissions in."
      },
      {
        "name": "permissions",
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
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/admin/permissions/{permissionId}",
    "method": "getPermission",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PermissionManagement",
    "typeScriptTag": "permissionManagement",
    "description": "Retrieve a permission's details",
    "parameters": [
      {
        "name": "permissionId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the permission you want to retrieve.",
        "example": "PERMISSIONID"
      },
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "Specify the tenant to retrieve a permission from."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Visier Permission Management APIs"
      apiBaseUrl="https://{vanity-name}.api.visier.io"
      apiVersion="22222222.99201.1200"
      endpoints={7}
      sdkMethods={10}
      schemas={33}
      parameters={19}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/permission-management/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/visier/permission-management/openapi.yaml"
      developerDocumentation="docs.visier.com/developer/apis/apis.htm"
    />
  );
}
  