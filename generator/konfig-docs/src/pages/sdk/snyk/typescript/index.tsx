import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function SnykTypeScriptSdk() {
  return (
    <Sdk
      sdkName="snyk-typescript-sdk"
      metaDescription="Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more."
      company="Snyk"
      doesNotHaveApiDescription={true}
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/snyk/logo.png"
      clientNameCamelCase="snyk"
      homepage="docs.snyk.io/snyk-api/snyk-rest-api-overview"
      lastUpdated={new Date("2024-02-02T23:02:23.295Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/snyk/favicon.ico"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/snyk/imagePreview.jpg"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/custom_base_images",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Base Images",
    "typeScriptTag": "customBaseImages",
    "description": "Get a custom base image collection",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "Return the page of results immediately after this cursor"
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "Return the page of results immediately before this cursor"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of results to return per page"
      },
      {
        "name": "projectId",
        "schema": "string",
        "description": "The ID of the container project that the custom base image is based off of."
      },
      {
        "name": "orgId",
        "schema": "string",
        "description": "The organization ID of the custom base image"
      },
      {
        "name": "groupId",
        "schema": "string",
        "description": "The group ID of the custom base image"
      },
      {
        "name": "repository",
        "schema": "string",
        "description": "The image repository"
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "The image tag"
      },
      {
        "name": "includeInRecommendations",
        "schema": "boolean",
        "description": "Whether this image should be recommended as a base image upgrade"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Which column to sort by. \nIf sorting by version, the versioning schema is used.\n"
      },
      {
        "name": "sortDirection",
        "schema": "string",
        "description": "Which direction to sort"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom_base_images",
    "method": "markImageAsCustomBase",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Base Images",
    "typeScriptTag": "customBaseImages",
    "description": "Create a Custom Base Image from an existing container project",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom_base_images/{custombaseimage_id}",
    "method": "removeCustomBaseImage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Custom Base Images",
    "typeScriptTag": "customBaseImages",
    "description": "Delete a custom base image",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "custombaseimageId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for custom base image"
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom_base_images/{custombaseimage_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Base Images",
    "typeScriptTag": "customBaseImages",
    "description": "Get a custom base image",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "custombaseimageId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for custom base image"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom_base_images/{custombaseimage_id}",
    "method": "updateAttributes",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Custom Base Images",
    "typeScriptTag": "customBaseImages",
    "description": "Update a custom base image",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "custombaseimageId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for custom base image"
      },
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups/{group_id}/apps/installs",
    "method": "listGroupAppInstalls",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Get a list of apps installed for a group.",
    "parameters": [
      {
        "name": "expand",
        "schema": "array",
        "description": "Expand relationships."
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "Group ID"
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "Return the page of results immediately after this cursor"
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "Return the page of results immediately before this cursor"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of results to return per page"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups/{group_id}/apps/installs",
    "method": "installGroupApp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Install a Snyk Apps to this group.",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "Group ID"
      },
      {
        "name": "data",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "relationships",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups/{group_id}/apps/installs/{install_id}",
    "method": "revokeGroupAppInstall",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Revoke app authorization for an Snyk Group with install ID.",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "Group ID"
      },
      {
        "name": "installId",
        "schema": "string",
        "required": true,
        "description": "Install ID"
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups/{group_id}/apps/installs/{install_id}/secrets",
    "method": "createInstallSecret",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Manage client secret for non-interactive Snyk App installations.",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "Group ID"
      },
      {
        "name": "installId",
        "schema": "string",
        "required": true,
        "description": "Install ID"
      },
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups/{group_id}/audit_logs/search",
    "method": "searchGroupAuditLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Audit Logs",
    "typeScriptTag": "auditLogs",
    "description": "Search Group audit logs.",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "The ID of the Group."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "The ID for the next page of results."
      },
      {
        "name": "from",
        "schema": "string",
        "description": "The start date (inclusive) of the audit logs search. Example: 2023-07-27\n"
      },
      {
        "name": "to",
        "schema": "string",
        "description": "The end date (inclusive) of the audit logs search. Example: 2023-07-27\n"
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "Number of results to return per page."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Order in which results are returned."
      },
      {
        "name": "userId",
        "schema": "string",
        "description": "Filter logs by user ID."
      },
      {
        "name": "projectId",
        "schema": "string",
        "description": "Filter logs by project ID."
      },
      {
        "name": "event",
        "schema": "string",
        "description": "Filter logs by event type, cannot be used in conjunction with exclude_event parameter."
      },
      {
        "name": "excludeEvent",
        "schema": "string",
        "description": "Exclude event type from results, cannot be used in conjunctions with event parameter."
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups/{group_id}/issues",
    "method": "byGroupId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issues",
    "typeScriptTag": "issues",
    "description": "Get issues by group ID",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "Return the page of results immediately after this cursor"
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "Return the page of results immediately before this cursor"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of results to return per page"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "Group ID"
      },
      {
        "name": "scanItemId",
        "schema": "string",
        "description": "A scan item id to filter issues through their scan item relationship."
      },
      {
        "name": "scanItemType",
        "schema": "string",
        "description": "A scan item types to filter issues through their scan item relationship."
      },
      {
        "name": "type",
        "schema": "string",
        "description": "An issue type to filter issues."
      },
      {
        "name": "updatedBefore",
        "schema": "string",
        "description": "A filter to select issues updated before this date."
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "A filter to select issues updated after this date."
      },
      {
        "name": "createdBefore",
        "schema": "string",
        "description": "A filter to select issues created before this date."
      },
      {
        "name": "createdAfter",
        "schema": "string",
        "description": "A filter to select issues created after this date."
      },
      {
        "name": "effectiveSeverityLevel",
        "schema": "array",
        "description": "One or more effective severity levels to filter issues."
      },
      {
        "name": "status",
        "schema": "array",
        "description": "An issue's status"
      },
      {
        "name": "ignored",
        "schema": "boolean",
        "description": "Whether an issue is ignored or not."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups/{group_id}/issues/{issue_id}",
    "method": "getByIssueId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issues",
    "typeScriptTag": "issues",
    "description": "Get an issue",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "Group ID"
      },
      {
        "name": "issueId",
        "schema": "string",
        "required": true,
        "description": "Issue ID"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups/{group_id}/service_accounts",
    "method": "listGroupServiceAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ServiceAccounts",
    "typeScriptTag": "serviceAccounts",
    "description": "Get a list of group service accounts.",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "The ID of the Snyk Group that owns the service accounts."
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "Return the page of results immediately after this cursor"
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "Return the page of results immediately before this cursor"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of results to return per page"
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups/{group_id}/service_accounts",
    "method": "createGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ServiceAccounts",
    "typeScriptTag": "serviceAccounts",
    "description": "Create a service account for a group.",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "The ID of the Snyk Group that is creating and owns the service account"
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups/{group_id}/service_accounts/{serviceaccount_id}",
    "method": "deleteGroupServiceAccount",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ServiceAccounts",
    "typeScriptTag": "serviceAccounts",
    "description": "Delete a group service account.",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "The ID of the Snyk Group that owns the service account."
      },
      {
        "name": "serviceaccountId",
        "schema": "string",
        "required": true,
        "description": "The ID of the service account."
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups/{group_id}/service_accounts/{serviceaccount_id}",
    "method": "getGroupServiceAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ServiceAccounts",
    "typeScriptTag": "serviceAccounts",
    "description": "Get a group service account.",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "The ID of the Snyk Group that owns the service account."
      },
      {
        "name": "serviceaccountId",
        "schema": "string",
        "required": true,
        "description": "The ID of the service account."
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups/{group_id}/service_accounts/{serviceaccount_id}",
    "method": "updateGroupNameById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "ServiceAccounts",
    "typeScriptTag": "serviceAccounts",
    "description": "Update a group service account.",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "The ID of the Snyk Group that owns the service account."
      },
      {
        "name": "serviceaccountId",
        "schema": "string",
        "required": true,
        "description": "The ID of the service account."
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups/{group_id}/service_accounts/{serviceaccount_id}/secrets",
    "method": "manageClientSecret",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ServiceAccounts",
    "typeScriptTag": "serviceAccounts",
    "description": "Manage a group service account's client secret.",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "The ID of the Snyk Group that owns the service account."
      },
      {
        "name": "serviceaccountId",
        "schema": "string",
        "required": true,
        "description": "The ID of the service account."
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups/{group_id}/settings/iac",
    "method": "getForGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IacSettings",
    "typeScriptTag": "iacSettings",
    "description": "Get the Infrastructure as Code Settings for a group",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "The id of the group whose Infrastructure as Code settings are requested"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups/{group_id}/settings/iac",
    "method": "updateForGroup",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "IacSettings",
    "typeScriptTag": "iacSettings",
    "description": "Update the Infrastructure as Code Settings for a group",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "The id of the group whose Infrastructure as Code settings are getting updated"
      },
      {
        "name": "data",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/openapi",
    "method": "listAvailableVersions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OpenAPI",
    "typeScriptTag": "openApi",
    "description": "List available versions of OpenAPI specification",
    "parameters": [],
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/openapi/{version}",
    "method": "getEffectiveVersion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OpenAPI",
    "typeScriptTag": "openApi",
    "description": "Get OpenAPI specification effective at version.",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the API"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs",
    "method": "listAccessibleOrganizations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orgs",
    "typeScriptTag": "orgs",
    "description": "List accessible organizations",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "Return the page of results immediately after this cursor"
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "Return the page of results immediately before this cursor"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of results to return per page"
      },
      {
        "name": "groupId",
        "schema": "string",
        "description": "If set, only return organizations within the specified group"
      },
      {
        "name": "isPersonal",
        "schema": "boolean",
        "description": "If true, only return organizations that are not part of a group."
      },
      {
        "name": "slug",
        "schema": "string",
        "description": "Only return orgs whose slug exactly matches this value."
      },
      {
        "name": "name",
        "schema": "string",
        "description": "Only return orgs whose name contains this value."
      },
      {
        "name": "expand",
        "schema": "array",
        "description": "Expand the specified related resources in the response to include their attributes."
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orgs",
    "typeScriptTag": "orgs",
    "description": "Get organization",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for org"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Orgs",
    "typeScriptTag": "orgs",
    "description": "Update organization",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for org"
      },
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/app_bots",
    "method": "listAppBots",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Get a list of app bots authorized to an organization.",
    "parameters": [
      {
        "name": "expand",
        "schema": "array",
        "description": "Expand relationships."
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "Return the page of results immediately after this cursor"
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "Return the page of results immediately before this cursor"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of results to return per page"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/app_bots/{bot_id}",
    "method": "revokeBotAuthorization",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Revoke app bot authorization",
    "parameters": [
      {
        "name": "botId",
        "schema": "string",
        "required": true,
        "description": "The ID of the app bot"
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/apps",
    "method": "listOrgApps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Get a list of apps created by an organization.",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "Return the page of results immediately after this cursor"
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "Return the page of results immediately before this cursor"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of results to return per page"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/apps",
    "method": "createOrganizationApp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Create a new app for an organization.",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/apps/creations",
    "method": "listOrgCreations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Get a list of apps created by an organization.",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "Return the page of results immediately after this cursor"
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "Return the page of results immediately before this cursor"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of results to return per page"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/apps/creations",
    "method": "createNewAppForOrganization",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Create a new Snyk App for an organization.",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/apps/creations/{app_id}",
    "method": "deleteByAppId",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Delete an app by its App ID.",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "App ID"
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/apps/creations/{app_id}",
    "method": "getByAppId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Get a Snyk App by its App ID.",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "App ID"
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/apps/creations/{app_id}",
    "method": "updateCreationAttributesById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Update app creation attributes such as name, redirect URIs, and access token time to live using the App ID.",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "App ID"
      },
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/apps/creations/{app_id}/secrets",
    "method": "manageClientSecretForSnykApp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Manage client secret for the Snyk App.",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "App ID"
      },
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/apps/installs",
    "method": "listOrgInstalls",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Get a list of apps installed for an organization.",
    "parameters": [
      {
        "name": "expand",
        "schema": "array",
        "description": "Expand relationships."
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "Return the page of results immediately after this cursor"
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "Return the page of results immediately before this cursor"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of results to return per page"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/apps/installs",
    "method": "installSnykAppToOrg",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Install a Snyk Apps to this organization.",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "data",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "relationships",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/apps/installs/{install_id}",
    "method": "byInstallId",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Revoke app authorization for an Snyk Organization with install ID.",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "installId",
        "schema": "string",
        "required": true,
        "description": "Install ID"
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/apps/installs/{install_id}/secrets",
    "method": "manageClientSecretForSnykApp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Manage client secret for non-interactive Snyk App installations.",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "installId",
        "schema": "string",
        "required": true,
        "description": "Install ID"
      },
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/apps/{client_id}",
    "method": "deleteAppById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Delete an app",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "Client ID"
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/apps/{client_id}",
    "method": "getByClientId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Get an app by client id",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "Client ID"
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/apps/{client_id}",
    "method": "updateAttributes",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Update app attributes that are name, redirect URIs, and access token time to live",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "Client ID"
      },
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/apps/{client_id}/secrets",
    "method": "manageClientSecrets",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Manage client secrets for an app.",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "Client ID"
      },
      {
        "name": "mode",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "secret",
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
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/audit_logs/search",
    "method": "searchOrganizationAuditLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Audit Logs",
    "typeScriptTag": "auditLogs",
    "description": "Search Organization audit logs.",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "The ID of the organization."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "The ID for the next page of results."
      },
      {
        "name": "from",
        "schema": "string",
        "description": "The start date (inclusive) of the audit logs search. Example: 2023-07-27\n"
      },
      {
        "name": "to",
        "schema": "string",
        "description": "The end date (inclusive) of the audit logs search. Example: 2023-07-27\n"
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "Number of results to return per page."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Order in which results are returned."
      },
      {
        "name": "userId",
        "schema": "string",
        "description": "Filter logs by user ID."
      },
      {
        "name": "projectId",
        "schema": "string",
        "description": "Filter logs by project ID."
      },
      {
        "name": "event",
        "schema": "string",
        "description": "Filter logs by event type, cannot be used in conjunction with exclude_event parameter."
      },
      {
        "name": "excludeEvent",
        "schema": "string",
        "description": "Exclude event type from results, cannot be used in conjunctions with event parameter."
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/collections",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Collection",
    "typeScriptTag": "collection",
    "description": "Get collections",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "Return the page of results immediately after this cursor"
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "Return the page of results immediately before this cursor"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of results to return per page"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Return collections sorted by the specified attributes"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "Return collections sorted in the specified direction"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "Return collections which names include the provided string"
      },
      {
        "name": "isGenerated",
        "schema": "boolean",
        "description": "Return collections where is_generated matches the provided boolean"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/collections",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Collection",
    "typeScriptTag": "collection",
    "description": "Create a collection",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/collections/{collection_id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Collection",
    "typeScriptTag": "collection",
    "description": "Delete a collection",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a collection"
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/collections/{collection_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Collection",
    "typeScriptTag": "collection",
    "description": "Get a collection",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a collection"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/collections/{collection_id}",
    "method": "editCollection",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Collection",
    "typeScriptTag": "collection",
    "description": "Edit a collection",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a collection"
      },
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/collections/{collection_id}/relationships/projects",
    "method": "removeProjects",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Collection",
    "typeScriptTag": "collection",
    "description": "Remove projects from a collection",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a collection"
      },
      {
        "name": "data",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/collections/{collection_id}/relationships/projects",
    "method": "getProjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Collection",
    "typeScriptTag": "collection",
    "description": "Get projects from the specified collection",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a collection"
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "Return the page of results immediately after this cursor"
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "Return the page of results immediately before this cursor"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of results to return per page"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Return projects sorted by the specified attributes"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "Return projects sorted in the specified direction"
      },
      {
        "name": "targetId",
        "schema": "array",
        "description": "Return projects that belong to the provided targets"
      },
      {
        "name": "show",
        "schema": "array",
        "description": "Return projects that are with or without issues"
      },
      {
        "name": "integration",
        "schema": "array",
        "description": "Return projects that match the provided integration types"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/collections/{collection_id}/relationships/projects",
    "method": "addProjectsTo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Collection",
    "typeScriptTag": "collection",
    "description": "Add projects to a collection",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a collection"
      },
      {
        "name": "data",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/container_images",
    "method": "listInstancesOfContainerImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ContainerImage",
    "typeScriptTag": "containerImage",
    "description": "List instances of container image",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "imageIds",
        "schema": "array",
        "description": "A comma-separated list of Image IDs"
      },
      {
        "name": "platform",
        "schema": "string",
        "description": "The image Operating System and processor architecture"
      },
      {
        "name": "names",
        "schema": "array",
        "description": "The container registry names"
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of results to return per page"
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "Return the page of results immediately after this cursor"
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "Return the page of results immediately before this cursor"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/container_images/{image_id}",
    "method": "getInstance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ContainerImage",
    "typeScriptTag": "containerImage",
    "description": "Get instance of container image",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "imageId",
        "schema": "string",
        "required": true,
        "description": "Image ID"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/container_images/{image_id}/relationships/image_target_refs",
    "method": "listImageTargetRefs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ContainerImage",
    "typeScriptTag": "containerImage",
    "description": "List instances of image target references for a container image",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "imageId",
        "schema": "string",
        "required": true,
        "description": "Image ID"
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of results to return per page"
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "Return the page of results immediately after this cursor"
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "Return the page of results immediately before this cursor"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/invites",
    "method": "listPendingUserInvitations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invites",
    "typeScriptTag": "invites",
    "description": "List pending user invitations to an organization.",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "The id of the org the user is being invited to"
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "Return the page of results immediately after this cursor"
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "Return the page of results immediately before this cursor"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of results to return per page"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/invites",
    "method": "userToOrganization",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invites",
    "typeScriptTag": "invites",
    "description": "Invite a user to an organization",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "The id of the org the user is being invited to"
      },
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/invites/{invite_id}",
    "method": "cancelPendingInvitation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Invites",
    "typeScriptTag": "invites",
    "description": "Cancel a pending user invitations to an organization.",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "The id of the org the user is being invited to"
      },
      {
        "name": "inviteId",
        "schema": "string",
        "required": true,
        "description": "The id of the pending invite to cancel"
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/issues",
    "method": "listByOrgId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issues",
    "typeScriptTag": "issues",
    "description": "Get issues by org ID",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "Return the page of results immediately after this cursor"
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "Return the page of results immediately before this cursor"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of results to return per page"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "scanItemId",
        "schema": "string",
        "description": "A scan item id to filter issues through their scan item relationship."
      },
      {
        "name": "scanItemType",
        "schema": "string",
        "description": "A scan item types to filter issues through their scan item relationship."
      },
      {
        "name": "type",
        "schema": "string",
        "description": "An issue type to filter issues."
      },
      {
        "name": "updatedBefore",
        "schema": "string",
        "description": "A filter to select issues updated before this date."
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "A filter to select issues updated after this date."
      },
      {
        "name": "createdBefore",
        "schema": "string",
        "description": "A filter to select issues created before this date."
      },
      {
        "name": "createdAfter",
        "schema": "string",
        "description": "A filter to select issues created after this date."
      },
      {
        "name": "effectiveSeverityLevel",
        "schema": "array",
        "description": "One or more effective severity levels to filter issues."
      },
      {
        "name": "status",
        "schema": "array",
        "description": "An issue's status"
      },
      {
        "name": "ignored",
        "schema": "boolean",
        "description": "Whether an issue is ignored or not."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/issues/{issue_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issues",
    "typeScriptTag": "issues",
    "description": "Get an issue",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "issueId",
        "schema": "string",
        "required": true,
        "description": "Issue ID"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/packages/issues",
    "method": "queryForPackages",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issues",
    "typeScriptTag": "issues",
    "description": "List issues for a given set of packages  (Currently not available to all customers)",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an organization"
      },
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/packages/{purl}/issues",
    "method": "listByPackage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issues",
    "typeScriptTag": "issues",
    "description": "List issues for a package",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "purl",
        "schema": "string",
        "required": true,
        "description": "A URI-encoded Package URL (purl). Supported purl types are apk, cargo, cocoapods, composer, deb, gem, generic, golang, hex, maven, npm, nuget, pub, pypi, rpm, and swift. A version for the package is also required."
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an organization"
      },
      {
        "name": "offset",
        "schema": "number",
        "description": "Specify the number of results to skip before returning results. Must be greater than or equal to 0. Default is 0."
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "Specify the number of results to return. Must be greater than 0 and less than 1000. Default is 1000."
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/projects",
    "method": "listForOrg",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "List all Projects for an Org with the given Org ID.",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "The ID of the org that the projects belong to."
      },
      {
        "name": "targetId",
        "schema": "array",
        "description": "Return projects that belong to the provided targets"
      },
      {
        "name": "targetReference",
        "schema": "string",
        "description": "Return projects that match the provided target reference"
      },
      {
        "name": "targetFile",
        "schema": "string",
        "description": "Return projects that match the provided target file"
      },
      {
        "name": "targetRuntime",
        "schema": "string",
        "description": "Return projects that match the provided target runtime"
      },
      {
        "name": "metaCount",
        "schema": "string",
        "description": "The collection count."
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "Return projects that match the provided IDs."
      },
      {
        "name": "names",
        "schema": "array",
        "description": "Return projects that match the provided names."
      },
      {
        "name": "origins",
        "schema": "array",
        "description": "Return projects that match the provided origins."
      },
      {
        "name": "types",
        "schema": "array",
        "description": "Return projects that match the provided types."
      },
      {
        "name": "expand",
        "schema": "array",
        "description": "Expand relationships."
      },
      {
        "name": "metaLatestIssueCounts",
        "schema": "boolean",
        "description": "Include a summary count for the issues found in the most recent scan of this project"
      },
      {
        "name": "metaLatestDependencyTotal",
        "schema": "boolean",
        "description": "Include the total number of dependencies found in the most recent scan of this project"
      },
      {
        "name": "cliMonitoredBefore",
        "schema": "string",
        "description": "Filter projects uploaded and monitored before this date (encoded value)"
      },
      {
        "name": "cliMonitoredAfter",
        "schema": "string",
        "description": "Filter projects uploaded and monitored after this date (encoded value)"
      },
      {
        "name": "importingUserPublicId",
        "schema": "array",
        "description": "Return projects that match the provided importing user public ids."
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "Return projects that match all the provided tags"
      },
      {
        "name": "businessCriticality",
        "schema": "array",
        "description": "Return projects that match all the provided business_criticality value"
      },
      {
        "name": "environment",
        "schema": "array",
        "description": "Return projects that match all the provided environment values"
      },
      {
        "name": "lifecycle",
        "schema": "array",
        "description": "Return projects that match all the provided lifecycle values"
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "Return the page of results immediately after this cursor"
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "Return the page of results immediately before this cursor"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of results to return per page"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/projects/{project_id}",
    "method": "deleteByProjectId",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Delete project by project ID.",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "The ID of the org to which the project belongs to."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "The ID of the project."
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/projects/{project_id}",
    "method": "getByProjectId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get project by project ID.",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "The ID of the org to which the project belongs to."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "The ID of the project."
      },
      {
        "name": "expand",
        "schema": "array",
        "description": "Expand relationships."
      },
      {
        "name": "metaLatestIssueCounts",
        "schema": "boolean",
        "description": "Include a summary count for the issues found in the most recent scan of this project"
      },
      {
        "name": "metaLatestDependencyTotal",
        "schema": "boolean",
        "description": "Include the total number of dependencies found in the most recent scan of this project"
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/projects/{project_id}",
    "method": "updateByProjectId",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Updates project by project ID.",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "The ID of the Org the project belongs to."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "The ID of the project to patch."
      },
      {
        "name": "expand",
        "schema": "array",
        "description": "Expand relationships."
      },
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/projects/{project_id}/sbom",
    "method": "getProjectDocument",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SBOM",
    "typeScriptTag": "sbom",
    "description": "Get a project’s SBOM document",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an organization"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a project"
      },
      {
        "name": "format",
        "schema": "string",
        "description": "The desired SBOM format of the response."
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/service_accounts",
    "method": "listOrganizationServiceAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ServiceAccounts",
    "typeScriptTag": "serviceAccounts",
    "description": "Get a list of organization service accounts.",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "The ID of the Snyk Organization that owns the service accounts."
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "Return the page of results immediately after this cursor"
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "Return the page of results immediately before this cursor"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of results to return per page"
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/service_accounts",
    "method": "createForOrganization",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ServiceAccounts",
    "typeScriptTag": "serviceAccounts",
    "description": "Create a service account for an organization.",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "The ID of the Snyk Organization that is creating and will own the service account."
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/service_accounts/{serviceaccount_id}",
    "method": "deleteOrgServiceAccount",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ServiceAccounts",
    "typeScriptTag": "serviceAccounts",
    "description": "Delete a service account in an organization.",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "The ID of org to which the service account belongs."
      },
      {
        "name": "serviceaccountId",
        "schema": "string",
        "required": true,
        "description": "The ID of the service account."
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/service_accounts/{serviceaccount_id}",
    "method": "getOrganizationAccountById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ServiceAccounts",
    "typeScriptTag": "serviceAccounts",
    "description": "Get an organization service account.",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "The ID of the Snyk Organization that owns the service account."
      },
      {
        "name": "serviceaccountId",
        "schema": "string",
        "required": true,
        "description": "The ID of the service account."
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/service_accounts/{serviceaccount_id}",
    "method": "updateOrganizationServiceAccountName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "ServiceAccounts",
    "typeScriptTag": "serviceAccounts",
    "description": "Update an organization service account.",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "The ID of the Snyk Organization that owns the service account."
      },
      {
        "name": "serviceaccountId",
        "schema": "string",
        "required": true,
        "description": "The ID of the service account."
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/service_accounts/{serviceaccount_id}/secrets",
    "method": "manageClientSecretForOrganizationServiceAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ServiceAccounts",
    "typeScriptTag": "serviceAccounts",
    "description": "Manage an organization service account's client secret.",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "The ID of the Snyk Organization that owns the service account."
      },
      {
        "name": "serviceaccountId",
        "schema": "string",
        "required": true,
        "description": "The ID of the service account."
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/settings/iac",
    "method": "getForOrgIac",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IacSettings",
    "typeScriptTag": "iacSettings",
    "description": "Get the Infrastructure as Code Settings for an org.",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "The id of the org whose Infrastructure as Code settings are requested."
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/settings/iac",
    "method": "updateForOrg",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "IacSettings",
    "typeScriptTag": "iacSettings",
    "description": "Update the Infrastructure as Code Settings for an org",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "The id of the org whose Infrastructure as Code settings are getting updated"
      },
      {
        "name": "data",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/settings/sast",
    "method": "getForOrg",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SastSettings",
    "typeScriptTag": "sastSettings",
    "description": "Retrieves the SAST settings for an org",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "The id of the org for which we want to retrieve the SAST settings"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/settings/sast",
    "method": "toggleSnykCodeSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "SastSettings",
    "typeScriptTag": "sastSettings",
    "description": "Enable/Disable the Snyk Code settings for an org",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "The id of the org for which we want to update the Snyk Code setting"
      },
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/slack_app/{bot_id}",
    "method": "removeIntegration",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "SlackSettings",
    "typeScriptTag": "slackSettings",
    "description": "Remove the given Slack App integration",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "botId",
        "schema": "string",
        "required": true,
        "description": "Bot ID"
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/slack_app/{bot_id}",
    "method": "getDefaultNotificationSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SlackSettings",
    "typeScriptTag": "slackSettings",
    "description": "Get Slack integration default notification settings.",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "botId",
        "schema": "string",
        "required": true,
        "description": "Bot ID"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/slack_app/{bot_id}",
    "method": "createDefaultNotificationSettings",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SlackSettings",
    "typeScriptTag": "slackSettings",
    "description": "Create new Slack notification default settings.",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "botId",
        "schema": "string",
        "required": true,
        "description": "Bot ID"
      },
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/slack_app/{bot_id}/projects",
    "method": "getOverridesForProjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SlackSettings",
    "typeScriptTag": "slackSettings",
    "description": "Slack notification settings overrides for projects",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "Return the page of results immediately after this cursor"
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "Return the page of results immediately before this cursor"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of results to return per page"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "botId",
        "schema": "string",
        "required": true,
        "description": "Bot ID"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/slack_app/{bot_id}/projects/{project_id}",
    "method": "removeProjectOverride",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "SlackSettings",
    "typeScriptTag": "slackSettings",
    "description": "Remove Slack settings override for a project.",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID"
      },
      {
        "name": "botId",
        "schema": "string",
        "required": true,
        "description": "Bot ID"
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/slack_app/{bot_id}/projects/{project_id}",
    "method": "updateNotificationSettingsForProject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "SlackSettings",
    "typeScriptTag": "slackSettings",
    "description": "Update Slack notification settings for a project.",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "botId",
        "schema": "string",
        "required": true,
        "description": "Bot ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID"
      },
      {
        "name": "data",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/slack_app/{bot_id}/projects/{project_id}",
    "method": "projectOverride",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SlackSettings",
    "typeScriptTag": "slackSettings",
    "description": "Create a new Slack settings override for a given project.",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID"
      },
      {
        "name": "botId",
        "schema": "string",
        "required": true,
        "description": "Bot ID"
      },
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/slack_app/{tenant_id}/channels",
    "method": "getChannels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Slack",
    "typeScriptTag": "slack",
    "description": "Get a list of Slack channels",
    "parameters": [
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "Return the page of results immediately after this cursor"
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "Return the page of results immediately before this cursor"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of results to return per page"
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "tenantId",
        "schema": "string",
        "required": true,
        "description": "Tenant ID"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/orgs/{org_id}/slack_app/{tenant_id}/channels/{channel_id}",
    "method": "getChannelNameById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Slack",
    "typeScriptTag": "slack",
    "description": "Get Slack Channel name by Slack Channel ID.",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org ID"
      },
      {
        "name": "channelId",
        "schema": "string",
        "required": true,
        "description": "Slack Channel ID"
      },
      {
        "name": "tenantId",
        "schema": "string",
        "required": true,
        "description": "Tenant ID"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/self/apps",
    "method": "listApps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Get a list of apps that can act on your behalf.",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "Return the page of results immediately after this cursor"
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "Return the page of results immediately before this cursor"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of results to return per page"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/self/apps/installs",
    "method": "listUserInstalledApps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Get a list of apps installed for an user.",
    "parameters": [
      {
        "name": "expand",
        "schema": "array",
        "description": "Expand relationships."
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "Return the page of results immediately after this cursor"
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "Return the page of results immediately before this cursor"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of results to return per page"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/self/apps/installs/{install_id}",
    "method": "revokeByInstallId",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Revoke access for an app by install ID.",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "installId",
        "schema": "string",
        "required": true,
        "description": "Install ID"
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/self/apps/{app_id}",
    "method": "revokeAppById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Revoke an app",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "App ID"
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/self/apps/{app_id}/sessions",
    "method": "getActiveSessions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Get a list of active OAuth sessions for the app.",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "Return the page of results immediately after this cursor"
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "Return the page of results immediately before this cursor"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of results to return per page"
      },
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "App ID"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/self/apps/{app_id}/sessions/{session_id}",
    "method": "revokeUserAppSession",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Revoke an active user app session.",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "The requested version of the endpoint to process the request"
      },
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "App ID"
      },
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "Session ID"
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Snyk API"
      apiBaseUrl="https://api.snyk.io/rest"
      apiVersion="REST"
      endpoints={59}
      sdkMethods={154}
      schemas={182}
      parameters={421}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/snyk/openapi.yaml"
    />
  );
}
  