import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function GitLabTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="git-lab-typescript-sdk"
      metaDescription={`GitLab is a complete DevOps platform, delivered as a single application, that provides teams a way to collaborate, build, and deploy their software. With GitLab, you can automate the entire DevOps lifecycle from planning and creating code to testing, releasing, and monitoring applications.`}
      company="GitLab"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gitlab/logo.png"
      companyKebabCase="git-lab"
      clientNameCamelCase="gitLab"
      homepage="gitlab.com"
      lastUpdated={new Date("2024-03-27T20:44:35.877Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gitlab/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gitlab/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["developer_tools","automation","collaboration","version_control","continuous_integration","continuous_delivery"]}
      methods={[
  {
    "url": "/groups/{id}/badges/{badge_id}",
    "method": "removeFromGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "badges",
    "typeScriptTag": "badges",
    "description": "Removes a badge from the group.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the group owned by the authenticated user.",
        "example": "ID"
      },
      {
        "name": "badgeId",
        "schema": "integer",
        "required": true,
        "description": "The badge ID",
        "example": 0
      }
    ],
    "responses": []
  },
  {
    "url": "/groups/{id}/badges/{badge_id}",
    "method": "getGroupBadge",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "badges",
    "typeScriptTag": "badges",
    "description": "Gets a badge of a group.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the group owned by the authenticated user.",
        "example": "ID"
      },
      {
        "name": "badgeId",
        "schema": "integer",
        "required": true,
        "description": "The badge ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_Badge model"
      }
    ]
  },
  {
    "url": "/groups/{id}/badges/{badge_id}",
    "method": "updateGroupBadge",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "badges",
    "typeScriptTag": "badges",
    "description": "Updates a badge of a group.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the group owned by the authenticated user.",
        "example": "ID"
      },
      {
        "name": "badgeId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "link_url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "image_url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_Badge model"
      }
    ]
  },
  {
    "url": "/groups/{id}/badges",
    "method": "listViewableByAuthenticatedUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "badges",
    "typeScriptTag": "badges",
    "description": "Gets a list of group badges viewable by the authenticated user.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the group owned by the authenticated user.",
        "example": "ID"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Current page number",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of items per page",
        "default": 20
      },
      {
        "name": "name",
        "schema": "string",
        "description": "Name for the badge"
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
    "url": "/groups/{id}/badges",
    "method": "addToGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "badges",
    "typeScriptTag": "badges",
    "description": "Adds a badge to a group.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the group owned by the authenticated user.",
        "example": "ID"
      },
      {
        "name": "link_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LINK_URL"
      },
      {
        "name": "image_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IMAGE_URL"
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
        "statusCode": "201",
        "description": "API_Entities_Badge model"
      }
    ]
  },
  {
    "url": "/groups/{id}/badges/render",
    "method": "previewFromGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "badges",
    "typeScriptTag": "badges",
    "description": "Preview a badge from a group.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the group owned by the authenticated user.",
        "example": "ID"
      },
      {
        "name": "linkUrl",
        "schema": "string",
        "required": true,
        "description": "URL of the badge link",
        "example": "LINK_URL"
      },
      {
        "name": "imageUrl",
        "schema": "string",
        "required": true,
        "description": "URL of the badge image",
        "example": "IMAGE_URL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_BasicBadgeDetails model"
      }
    ]
  },
  {
    "url": "/groups/{id}/access_requests/{user_id}",
    "method": "denyAccessRequest",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "access_requests",
    "typeScriptTag": "accessRequests",
    "description": "Denies an access request for the given user.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the group owned by the authenticated user",
        "example": "ID"
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "The user ID of the access requester",
        "example": 0
      }
    ],
    "responses": []
  },
  {
    "url": "/groups/{id}/access_requests/{user_id}/approve",
    "method": "approveUserAccess",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "access_requests",
    "typeScriptTag": "accessRequests",
    "description": "Approves an access request for the given user.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the group owned by the authenticated user",
        "example": "ID"
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "The user ID of the access requester",
        "example": 0
      },
      {
        "name": "access_level",
        "schema": "integer",
        "description": "",
        "default": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_AccessRequester model"
      }
    ]
  },
  {
    "url": "/groups/{id}/access_requests",
    "method": "getListForGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "access_requests",
    "typeScriptTag": "accessRequests",
    "description": "Gets a list of access requests for a group.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the group owned by the authenticated user",
        "example": "ID"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Current page number",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of items per page",
        "default": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_AccessRequester model"
      }
    ]
  },
  {
    "url": "/groups/{id}/access_requests",
    "method": "authenticateUserToGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "access_requests",
    "typeScriptTag": "accessRequests",
    "description": "Requests access for the authenticated user to a group.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the group owned by the authenticated user",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_AccessRequester model"
      }
    ]
  },
  {
    "url": "/projects/{id}/repository/merged_branches",
    "method": "removeMergedBranches",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "branches",
    "typeScriptTag": "branches",
    "description": "Delete all merged branches",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the project",
        "example": "ID"
      }
    ],
    "responses": []
  },
  {
    "url": "/projects/{id}/repository/branches/{branch}",
    "method": "deleteBranch",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "branches",
    "typeScriptTag": "branches",
    "description": "Delete a branch",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the project",
        "example": "ID"
      },
      {
        "name": "branch",
        "schema": "string",
        "required": true,
        "description": "The name of the branch",
        "example": "BRANCH"
      }
    ],
    "responses": []
  },
  {
    "url": "/projects/{id}/repository/branches/{branch}",
    "method": "getSingleBranch",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "branches",
    "typeScriptTag": "branches",
    "description": "Get a single repository branch",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the project",
        "example": "ID"
      },
      {
        "name": "branch",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_Branch model"
      }
    ]
  },
  {
    "url": "/projects/{id}/repository/branches/{branch}",
    "method": "checkExistence",
    "httpMethod": HttpMethodsEnum.HEAD,
    "tag": "branches",
    "typeScriptTag": "branches",
    "description": "Check if a branch exists",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the project",
        "example": "ID"
      },
      {
        "name": "branch",
        "schema": "string",
        "required": true,
        "description": "The name of the branch",
        "example": "BRANCH"
      }
    ],
    "responses": []
  },
  {
    "url": "/projects/{id}/repository/branches",
    "method": "getProjectRepository",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "branches",
    "typeScriptTag": "branches",
    "description": "Get a project repository branches",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the project",
        "example": "ID"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Current page number",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of items per page",
        "default": 20
      },
      {
        "name": "search",
        "schema": "string",
        "description": "Return list of branches matching the search criteria"
      },
      {
        "name": "regex",
        "schema": "string",
        "description": "Return list of branches matching the regex"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Return list of branches sorted by the given field"
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "Name of branch to start the pagination from"
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
    "url": "/projects/{id}/repository/branches",
    "method": "createBranch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "branches",
    "typeScriptTag": "branches",
    "description": "Create branch",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the project",
        "example": "ID"
      },
      {
        "name": "branch",
        "schema": "string",
        "required": true,
        "description": "The name of the branch",
        "example": "BRANCH"
      },
      {
        "name": "ref",
        "schema": "string",
        "required": true,
        "description": "Create branch from commit sha or existing branch",
        "example": "REF"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "API_Entities_Branch model"
      }
    ]
  },
  {
    "url": "/projects/{id}/repository/branches/{branch}/unprotect",
    "method": "unprotectBranch",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "branches",
    "typeScriptTag": "branches",
    "description": "Unprotect a single branch",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the project",
        "example": "ID"
      },
      {
        "name": "branch",
        "schema": "string",
        "required": true,
        "description": "The name of the branch",
        "example": "BRANCH"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_Branch model"
      }
    ]
  },
  {
    "url": "/projects/{id}/repository/branches/{branch}/protect",
    "method": "protectBranch",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "branches",
    "typeScriptTag": "branches",
    "description": "Protect a single branch",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the project",
        "example": "ID"
      },
      {
        "name": "branch",
        "schema": "string",
        "required": true,
        "description": "The name of the branch",
        "example": "BRANCH"
      },
      {
        "name": "developers_can_push",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "developers_can_merge",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_Branch model"
      }
    ]
  },
  {
    "url": "/projects/{id}/badges/{badge_id}",
    "method": "removeFromProject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "badges",
    "typeScriptTag": "badges",
    "description": "Removes a badge from the project.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the project owned by the authenticated user.",
        "example": "ID"
      },
      {
        "name": "badgeId",
        "schema": "integer",
        "required": true,
        "description": "The badge ID",
        "example": 0
      }
    ],
    "responses": []
  },
  {
    "url": "/projects/{id}/badges/{badge_id}",
    "method": "getProjectBadge",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "badges",
    "typeScriptTag": "badges",
    "description": "Gets a badge of a project.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the project owned by the authenticated user.",
        "example": "ID"
      },
      {
        "name": "badgeId",
        "schema": "integer",
        "required": true,
        "description": "The badge ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_Badge model"
      }
    ]
  },
  {
    "url": "/projects/{id}/badges/{badge_id}",
    "method": "updateProjectBadge",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "badges",
    "typeScriptTag": "badges",
    "description": "Updates a badge of a project.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the project owned by the authenticated user.",
        "example": "ID"
      },
      {
        "name": "badgeId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "link_url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "image_url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_Badge model"
      }
    ]
  },
  {
    "url": "/projects/{id}/badges",
    "method": "listViewableByAuthenticatedUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "badges",
    "typeScriptTag": "badges",
    "description": "Gets a list of project badges viewable by the authenticated user.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the project owned by the authenticated user.",
        "example": "ID"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Current page number",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of items per page",
        "default": 20
      },
      {
        "name": "name",
        "schema": "string",
        "description": "Name for the badge"
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
    "url": "/projects/{id}/badges",
    "method": "addToProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "badges",
    "typeScriptTag": "badges",
    "description": "Adds a badge to a project.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the project owned by the authenticated user.",
        "example": "ID"
      },
      {
        "name": "link_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LINK_URL"
      },
      {
        "name": "image_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IMAGE_URL"
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
        "statusCode": "201",
        "description": "API_Entities_Badge model"
      }
    ]
  },
  {
    "url": "/projects/{id}/badges/render",
    "method": "previewFromProject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "badges",
    "typeScriptTag": "badges",
    "description": "Preview a badge from a project.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the project owned by the authenticated user.",
        "example": "ID"
      },
      {
        "name": "linkUrl",
        "schema": "string",
        "required": true,
        "description": "URL of the badge link",
        "example": "LINK_URL"
      },
      {
        "name": "imageUrl",
        "schema": "string",
        "required": true,
        "description": "URL of the badge image",
        "example": "IMAGE_URL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_BasicBadgeDetails model"
      }
    ]
  },
  {
    "url": "/projects/{id}/access_requests/{user_id}",
    "method": "denyAccessRequest",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "access_requests",
    "typeScriptTag": "accessRequests",
    "description": "Denies an access request for the given user.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the project owned by the authenticated user",
        "example": "ID"
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "The user ID of the access requester",
        "example": 0
      }
    ],
    "responses": []
  },
  {
    "url": "/projects/{id}/access_requests/{user_id}/approve",
    "method": "approveUserAccess",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "access_requests",
    "typeScriptTag": "accessRequests",
    "description": "Approves an access request for the given user.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the project owned by the authenticated user",
        "example": "ID"
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "The user ID of the access requester",
        "example": 0
      },
      {
        "name": "access_level",
        "schema": "integer",
        "description": "",
        "default": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_AccessRequester model"
      }
    ]
  },
  {
    "url": "/projects/{id}/access_requests",
    "method": "listForProject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "access_requests",
    "typeScriptTag": "accessRequests",
    "description": "Gets a list of access requests for a project.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the project owned by the authenticated user",
        "example": "ID"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Current page number",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of items per page",
        "default": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_AccessRequester model"
      }
    ]
  },
  {
    "url": "/projects/{id}/access_requests",
    "method": "requestAccessToProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "access_requests",
    "typeScriptTag": "accessRequests",
    "description": "Requests access for the authenticated user to a project.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the project owned by the authenticated user",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_AccessRequester model"
      }
    ]
  },
  {
    "url": "/projects/{id}/alert_management_alerts/{alert_iid}/metric_images/{metric_image_id}",
    "method": "removeMetricImage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "alert_management",
    "typeScriptTag": "alertManagement",
    "description": "Remove a metric image for an alert",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the project",
        "example": "ID"
      },
      {
        "name": "alertIid",
        "schema": "integer",
        "required": true,
        "description": "The IID of the Alert",
        "example": 0
      },
      {
        "name": "metricImageId",
        "schema": "integer",
        "required": true,
        "description": "The ID of metric image",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "API_Entities_MetricImage model"
      }
    ]
  },
  {
    "url": "/projects/{id}/alert_management_alerts/{alert_iid}/metric_images/{metric_image_id}",
    "method": "updateMetricImageForAlert",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "alert_management",
    "typeScriptTag": "alertManagement",
    "description": "Update a metric image for an alert",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the project",
        "example": "ID"
      },
      {
        "name": "alertIid",
        "schema": "integer",
        "required": true,
        "description": "The IID of the Alert",
        "example": 0
      },
      {
        "name": "metricImageId",
        "schema": "integer",
        "required": true,
        "description": "The ID of metric image",
        "example": 0
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url_text",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_MetricImage model"
      }
    ]
  },
  {
    "url": "/projects/{id}/alert_management_alerts/{alert_iid}/metric_images",
    "method": "getMetricImages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "alert_management",
    "typeScriptTag": "alertManagement",
    "description": "Metric Images for alert",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the project",
        "example": "ID"
      },
      {
        "name": "alertIid",
        "schema": "integer",
        "required": true,
        "description": "The IID of the Alert",
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
    "url": "/projects/{id}/alert_management_alerts/{alert_iid}/metric_images",
    "method": "uploadMetricImageForAlert",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "alert_management",
    "typeScriptTag": "alertManagement",
    "description": "Upload a metric image for an alert",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the project",
        "example": "ID"
      },
      {
        "name": "alertIid",
        "schema": "integer",
        "required": true,
        "description": "The IID of the Alert",
        "example": 0
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "url_text",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_MetricImage model"
      }
    ]
  },
  {
    "url": "/projects/{id}/alert_management_alerts/{alert_iid}/metric_images/authorize",
    "method": "authorizeMetricImageFileUpload",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "alert_management",
    "typeScriptTag": "alertManagement",
    "description": "Workhorse authorize metric image file upload",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID or URL-encoded path of the project",
        "example": "ID"
      },
      {
        "name": "alertIid",
        "schema": "integer",
        "required": true,
        "description": "The IID of the Alert",
        "example": 0
      }
    ],
    "responses": []
  },
  {
    "url": "/admin/batched_background_migrations/{id}",
    "method": "getMigration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "batched_background_migrations",
    "typeScriptTag": "batchedBackgroundMigrations",
    "description": "Retrieve a batched background migration",
    "parameters": [
      {
        "name": "database",
        "schema": "string",
        "description": "The name of the database",
        "default": "main"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The batched background migration id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_BatchedBackgroundMigration model"
      }
    ]
  },
  {
    "url": "/admin/batched_background_migrations",
    "method": "listMigrations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "batched_background_migrations",
    "typeScriptTag": "batchedBackgroundMigrations",
    "description": "Get the list of batched background migrations",
    "parameters": [
      {
        "name": "database",
        "schema": "string",
        "description": "The name of the database, the default `main`",
        "default": "main"
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
    "url": "/admin/batched_background_migrations/{id}/resume",
    "method": "resumeMigration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "batched_background_migrations",
    "typeScriptTag": "batchedBackgroundMigrations",
    "description": "Resume a batched background migration",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The batched background migration id",
        "example": 0
      },
      {
        "name": "database",
        "schema": "string",
        "description": "",
        "default": "main"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_BatchedBackgroundMigration model"
      }
    ]
  },
  {
    "url": "/admin/batched_background_migrations/{id}/pause",
    "method": "pauseMigration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "batched_background_migrations",
    "typeScriptTag": "batchedBackgroundMigrations",
    "description": "Pause a batched background migration",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The batched background migration id",
        "example": 0
      },
      {
        "name": "database",
        "schema": "string",
        "description": "",
        "default": "main"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_BatchedBackgroundMigration model"
      }
    ]
  },
  {
    "url": "/admin/ci/variables/{key}",
    "method": "deleteInstanceVariable",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ci_variables",
    "typeScriptTag": "ciVariables",
    "description": "Delete an existing instance-level variable",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "The key of a variable",
        "example": "KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "API_Entities_Ci_Variable model"
      }
    ]
  },
  {
    "url": "/admin/ci/variables/{key}",
    "method": "getInstanceVariableDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ci_variables",
    "typeScriptTag": "ciVariables",
    "description": "Get the details of a specific instance-level variable",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "The key of a variable",
        "example": "KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_Ci_Variable model"
      }
    ]
  },
  {
    "url": "/admin/ci/variables/{key}",
    "method": "updateInstanceVariable",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ci_variables",
    "typeScriptTag": "ciVariables",
    "description": "Update an instance-level variable",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "The key of a variable",
        "example": "KEY"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      },
      {
        "name": "protected",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "masked",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "raw",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "variable_type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_Ci_Variable model"
      }
    ]
  },
  {
    "url": "/admin/ci/variables",
    "method": "listAllInstanceVariables",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ci_variables",
    "typeScriptTag": "ciVariables",
    "description": "List all instance-level variables",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "Current page number",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of items per page",
        "default": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_Ci_Variable model"
      }
    ]
  },
  {
    "url": "/admin/ci/variables",
    "method": "createNewInstanceLevelVariable",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ci_variables",
    "typeScriptTag": "ciVariables",
    "description": "Create a new instance-level variable",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEY"
      },
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALUE"
      },
      {
        "name": "protected",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "masked",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "raw",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "variable_type",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "API_Entities_Ci_Variable model"
      }
    ]
  },
  {
    "url": "/admin/databases/{database_name}/dictionary/tables/{table_name}",
    "method": "getDictionaryDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "admin",
    "typeScriptTag": "admin",
    "description": "Retrieve dictionary details",
    "parameters": [
      {
        "name": "databaseName",
        "schema": "string",
        "required": true,
        "description": "The database name",
        "example": "DATABASE_NAME"
      },
      {
        "name": "tableName",
        "schema": "string",
        "required": true,
        "description": "The table name",
        "example": "TABLE_NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_Dictionary_Table model"
      }
    ]
  },
  {
    "url": "/admin/clusters/{cluster_id}",
    "method": "deleteInstanceCluster",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "clusters",
    "typeScriptTag": "clusters",
    "description": "Delete instance cluster",
    "parameters": [
      {
        "name": "clusterId",
        "schema": "integer",
        "required": true,
        "description": "The cluster ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "API_Entities_Cluster model"
      }
    ]
  },
  {
    "url": "/admin/clusters/{cluster_id}",
    "method": "getSingleInstance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "clusters",
    "typeScriptTag": "clusters",
    "description": "Get a single instance cluster",
    "parameters": [
      {
        "name": "clusterId",
        "schema": "integer",
        "required": true,
        "description": "The cluster ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_Cluster model"
      }
    ]
  },
  {
    "url": "/admin/clusters/{cluster_id}",
    "method": "updateInstanceCluster",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "clusters",
    "typeScriptTag": "clusters",
    "description": "Edit instance cluster",
    "parameters": [
      {
        "name": "clusterId",
        "schema": "integer",
        "required": true,
        "description": "The cluster ID",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "environment_scope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "namespace_per_environment",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "domain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "management_project_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "managed",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "platform_kubernetes_attributes[api_url]",
        "schema": "string",
        "description": ""
      },
      {
        "name": "platform_kubernetes_attributes[token]",
        "schema": "string",
        "description": ""
      },
      {
        "name": "platform_kubernetes_attributes[ca_cert]",
        "schema": "string",
        "description": ""
      },
      {
        "name": "platform_kubernetes_attributes[namespace]",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_Cluster model"
      }
    ]
  },
  {
    "url": "/admin/clusters/add",
    "method": "addExistingInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "clusters",
    "typeScriptTag": "clusters",
    "description": "Add existing instance cluster",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "environment_scope",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "*"
      },
      {
        "name": "namespace_per_environment",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "domain",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "management_project_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "managed",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "platform_kubernetes_attributes[api_url]",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PLATFORM_KUBERNETES_ATTRIBUTES[API_URL]"
      },
      {
        "name": "platform_kubernetes_attributes[token]",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PLATFORM_KUBERNETES_ATTRIBUTES[TOKEN]"
      },
      {
        "name": "platform_kubernetes_attributes[ca_cert]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "platform_kubernetes_attributes[namespace]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "platform_kubernetes_attributes[authorization_type]",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "rbac"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "API_Entities_Cluster model"
      }
    ]
  },
  {
    "url": "/admin/clusters",
    "method": "listInstanceClusters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "clusters",
    "typeScriptTag": "clusters",
    "description": "List instance clusters",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/admin/migrations/{timestamp}/mark",
    "method": "markAsExecuted",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "migrations",
    "typeScriptTag": "migrations",
    "description": "Mark the migration as successfully executed",
    "parameters": [
      {
        "name": "timestamp",
        "schema": "integer",
        "required": true,
        "description": "The migration version timestamp",
        "example": 0
      },
      {
        "name": "database",
        "schema": "string",
        "description": "",
        "default": "main"
      }
    ],
    "responses": []
  },
  {
    "url": "/applications/{id}",
    "method": "removeSpecificApplication",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "applications",
    "typeScriptTag": "applications",
    "description": "Delete an application",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the application (not the application_id)",
        "example": 0
      }
    ],
    "responses": []
  },
  {
    "url": "/applications",
    "method": "listAllRegistered",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "applications",
    "typeScriptTag": "applications",
    "description": "Get applications",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/applications",
    "method": "createNewApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "applications",
    "typeScriptTag": "applications",
    "description": "Create a new application",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "redirect_uri",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REDIRECT_URI"
      },
      {
        "name": "scopes",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SCOPES"
      },
      {
        "name": "confidential",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_ApplicationWithSecret model"
      }
    ]
  },
  {
    "url": "/avatar",
    "method": "getUserAvatarUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "avatar",
    "typeScriptTag": "avatar",
    "description": "Return avatar url for a user",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "Public email address of the user",
        "example": "EMAIL"
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "Single pixel dimension for Gravatar images"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_Avatar model"
      }
    ]
  },
  {
    "url": "/broadcast_messages/{id}",
    "method": "deleteMessage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "broadcast_messages",
    "typeScriptTag": "broadcastMessages",
    "description": "Delete a broadcast message",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Broadcast message ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_BroadcastMessage model"
      }
    ]
  },
  {
    "url": "/broadcast_messages/{id}",
    "method": "getSpecificMessage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "broadcast_messages",
    "typeScriptTag": "broadcastMessages",
    "description": "Get a specific broadcast message",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Broadcast message ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_BroadcastMessage model"
      }
    ]
  },
  {
    "url": "/broadcast_messages/{id}",
    "method": "updateMessageById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "broadcast_messages",
    "typeScriptTag": "broadcastMessages",
    "description": "Update a broadcast message",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Broadcast message ID",
        "example": 0
      },
      {
        "name": "message",
        "schema": "string",
        "description": ""
      },
      {
        "name": "starts_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ends_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "font",
        "schema": "string",
        "description": ""
      },
      {
        "name": "target_access_levels",
        "schema": "array",
        "description": ""
      },
      {
        "name": "target_path",
        "schema": "string",
        "description": ""
      },
      {
        "name": "broadcast_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dismissable",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_BroadcastMessage model"
      }
    ]
  },
  {
    "url": "/broadcast_messages",
    "method": "getAllMessages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "broadcast_messages",
    "typeScriptTag": "broadcastMessages",
    "description": "Get all broadcast messages",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "Current page number",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of items per page",
        "default": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_BroadcastMessage model"
      }
    ]
  },
  {
    "url": "/broadcast_messages",
    "method": "createMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "broadcast_messages",
    "typeScriptTag": "broadcastMessages",
    "description": "Create a broadcast message",
    "parameters": [
      {
        "name": "message",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MESSAGE"
      },
      {
        "name": "starts_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ends_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "color",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "font",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "target_access_levels",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "target_path",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "broadcast_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dismissable",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "API_Entities_BroadcastMessage model"
      }
    ]
  },
  {
    "url": "/bulk_imports/{import_id}/entities/{entity_id}",
    "method": "getEntityDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "bulk_imports",
    "typeScriptTag": "bulkImports",
    "description": "Get GitLab Migration entity details",
    "parameters": [
      {
        "name": "importId",
        "schema": "integer",
        "required": true,
        "description": "The ID of user's GitLab Migration",
        "example": 0
      },
      {
        "name": "entityId",
        "schema": "integer",
        "required": true,
        "description": "The ID of GitLab Migration entity",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_BulkImports model"
      }
    ]
  },
  {
    "url": "/bulk_imports/{import_id}/entities",
    "method": "listEntities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "bulk_imports",
    "typeScriptTag": "bulkImports",
    "description": "List GitLab Migration entities",
    "parameters": [
      {
        "name": "importId",
        "schema": "integer",
        "required": true,
        "description": "The ID of user's GitLab Migration",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Return import entities with specified status"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Current page number",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of items per page",
        "default": 20
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
    "url": "/bulk_imports/{import_id}",
    "method": "getMigrationDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "bulk_imports",
    "typeScriptTag": "bulkImports",
    "description": "Get GitLab Migration details",
    "parameters": [
      {
        "name": "importId",
        "schema": "integer",
        "required": true,
        "description": "The ID of user's GitLab Migration",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_BulkImport model"
      }
    ]
  },
  {
    "url": "/bulk_imports/entities",
    "method": "listEntities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "bulk_imports",
    "typeScriptTag": "bulkImports",
    "description": "List all GitLab Migrations' entities",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "Current page number",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of items per page",
        "default": 20
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Return GitLab Migrations sorted in created by `asc` or `desc` order.",
        "default": "desc"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Return all GitLab Migrations' entities with specified status"
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
    "url": "/bulk_imports",
    "method": "listMigrations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "bulk_imports",
    "typeScriptTag": "bulkImports",
    "description": "List all GitLab Migrations",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "Current page number",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of items per page",
        "default": 20
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Return GitLab Migrations sorted in created by `asc` or `desc` order.",
        "default": "desc"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Return GitLab Migrations with specified status"
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
    "url": "/bulk_imports",
    "method": "startMigration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "bulk_imports",
    "typeScriptTag": "bulkImports",
    "description": "Start a new GitLab Migration",
    "parameters": [
      {
        "name": "configuration[url]",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONFIGURATION[URL]"
      },
      {
        "name": "configuration[access_token]",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONFIGURATION[ACCESS_TOKEN]"
      },
      {
        "name": "entities[source_type]",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "entities[source_full_path]",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "entities[destination_namespace]",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "entities[destination_slug]",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "entities[destination_name]",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "entities[migrate_projects]",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_BulkImport model"
      }
    ]
  },
  {
    "url": "/application/appearance",
    "method": "getCurrentAppearance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "application",
    "typeScriptTag": "application",
    "description": "Get the current appearance",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_Appearance model"
      }
    ]
  },
  {
    "url": "/application/appearance",
    "method": "modifyAppearance",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "application",
    "typeScriptTag": "application",
    "description": "Modify appearance",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pwa_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pwa_short_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pwa_description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "logo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pwa_icon",
        "schema": "string",
        "description": ""
      },
      {
        "name": "header_logo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "favicon",
        "schema": "string",
        "description": ""
      },
      {
        "name": "new_project_guidelines",
        "schema": "string",
        "description": ""
      },
      {
        "name": "profile_image_guidelines",
        "schema": "string",
        "description": ""
      },
      {
        "name": "header_message",
        "schema": "string",
        "description": ""
      },
      {
        "name": "footer_message",
        "schema": "string",
        "description": ""
      },
      {
        "name": "message_background_color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "message_font_color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email_header_and_footer_enabled",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_Appearance model"
      }
    ]
  },
  {
    "url": "/application/plan_limits",
    "method": "getCurrentLimits",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "plan_limits",
    "typeScriptTag": "planLimits",
    "description": "Get current plan limits",
    "parameters": [
      {
        "name": "planName",
        "schema": "string",
        "description": "Name of the plan to get the limits from. Default: default.",
        "default": "default"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_PlanLimit model"
      }
    ]
  },
  {
    "url": "/application/plan_limits",
    "method": "modifyPlanLimits",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "plan_limits",
    "typeScriptTag": "planLimits",
    "description": "Change plan limits",
    "parameters": [
      {
        "name": "plan_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PLAN_NAME"
      },
      {
        "name": "ci_pipeline_size",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ci_active_jobs",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ci_project_subscriptions",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ci_pipeline_schedules",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ci_needs_size_limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ci_registered_group_runners",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ci_registered_project_runners",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "conan_max_file_size",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "enforcement_limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "generic_packages_max_file_size",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "helm_max_file_size",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "maven_max_file_size",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "notification_limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "npm_max_file_size",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "nuget_max_file_size",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "pypi_max_file_size",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "terraform_module_max_file_size",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "storage_size_limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "pipeline_hierarchy_size",
        "schema": "integer",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_PlanLimit model"
      }
    ]
  },
  {
    "url": "/metadata",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "metadata",
    "typeScriptTag": "metadata",
    "description": "Retrieve metadata information for this GitLab instance",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_Metadata model"
      }
    ]
  },
  {
    "url": "/version",
    "method": "getVersionInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "metadata",
    "typeScriptTag": "metadata",
    "description": "Retrieves version information for the GitLab instance",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_Metadata model"
      }
    ]
  },
  {
    "url": "/projects/{id}/jobs",
    "method": "listForProject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "List jobs for a project",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project",
        "example": 0
      },
      {
        "name": "scope",
        "schema": "array",
        "required": false,
        "description": "Return all jobs with the specified statuses"
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
    "url": "/projects/{id}/jobs/{job_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Get a single job by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project",
        "example": 0
      },
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the job",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API_Entities_Job model"
      }
    ]
  },
  {
    "url": "/projects/{id}/jobs/{job_id}/play",
    "method": "runManualJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Run a manual job",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project",
        "example": 0
      },
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the manual job to run",
        "example": 0
      },
      {
        "name": "jobVariablesAttributes",
        "schema": "array",
        "required": false,
        "description": "An array containing the custom variables available to the job"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Job started successfully"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="GitLab API"
      apiBaseUrl="https://www.gitlab.com/api/v4"
      apiVersion="v4"
      endpoints={48}
      sdkMethods={73}
      schemas={59}
      parameters={248}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gitlab/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/gitlab/openapi.yaml"
      developerDocumentation="docs.gitlab.com/ee/api/rest/"
    />
  );
}
  