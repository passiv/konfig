import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function CircleCiTypeScriptSdk() {
  return (
    <Sdk
      sdkName="circle-ci-typescript-sdk"
      metaDescription="CircleCI is the software delivery engine for teams who want to ship software faster and with confidence. 
We do this today by building the world's best platform for Continuous Integration and Continuous Delivery (CI/CD). Ultimately, we plan to map every source of change for software teams, so they can accelerate innovation and growth. 

Our platform was built by a team of DevOps experts who understand how critical CI/CD is to your entire development process and your entire business. The best software teams know that speed, focus, and consistency of delivery make the difference between good and great. We built CircleCI to deliver on these promises so you can deliver on yours — to reliably bring only the highest quality products to your customers.

CircleCI is proud to be an Equal Opportunity and Affirmative Action employer. We do not discriminate based upon race, religion, color, national origin, sexual orientation, gender, gender identity, gender expression, transgender status, sexual stereotypes, age, status as a protected veteran, status as an individual with a disability, or other applicable legally protected characteristics. We also consider qualified applicants with criminal histories, consistent with applicable federal, state and local law."
      company="CircleCI"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/circleci/logo.png"
      clientNameCamelCase="circleCi"
      homepage="circleci.com"
      lastUpdated={new Date("2024-03-11T06:18:06.947Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/circleci/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/circleci/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/context",
    "method": "listOwnerContexts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Context",
    "typeScriptTag": "context",
    "description": "List contexts",
    "parameters": [
      {
        "name": "ownerId",
        "schema": "string",
        "required": false,
        "description": "The unique ID of the owner of the context. Specify either this or owner-slug."
      },
      {
        "name": "ownerSlug",
        "schema": "string",
        "required": false,
        "description": "A string that represents an organization. Specify either this or owner-id. Cannot be used for accounts."
      },
      {
        "name": "ownerType",
        "schema": "string",
        "required": false,
        "description": "The type of the owner. Defaults to \"organization\". Accounts are only used as context owners in server."
      },
      {
        "name": "pageToken",
        "schema": "string",
        "required": false,
        "description": "A token to retrieve the next page of results."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/context",
    "method": "createNewContext",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Context",
    "typeScriptTag": "context",
    "description": "Create a new context",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "owner",
        "schema": "undefined",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/context/{context-id}",
    "method": "removeContext",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Context",
    "typeScriptTag": "context",
    "description": "Delete a context",
    "parameters": [
      {
        "name": "contextId",
        "schema": "string",
        "required": true,
        "description": "ID of the context (UUID)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "message response"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/context/{context-id}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Context",
    "typeScriptTag": "context",
    "description": "Get a context",
    "parameters": [
      {
        "name": "contextId",
        "schema": "string",
        "required": true,
        "description": "ID of the context (UUID)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/context/{context-id}/environment-variable",
    "method": "listEnvironmentVariables",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Context",
    "typeScriptTag": "context",
    "description": "List environment variables",
    "parameters": [
      {
        "name": "contextId",
        "schema": "string",
        "required": true,
        "description": "ID of the context (UUID)"
      },
      {
        "name": "pageToken",
        "schema": "string",
        "required": false,
        "description": "A token to retrieve the next page of results."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/context/{context-id}/environment-variable/{env-var-name}",
    "method": "removeEnvironmentVariable",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Context",
    "typeScriptTag": "context",
    "description": "Remove an environment variable",
    "parameters": [
      {
        "name": "envVarName",
        "schema": "string",
        "required": true,
        "description": "The name of the environment variable"
      },
      {
        "name": "contextId",
        "schema": "string",
        "required": true,
        "description": "ID of the context (UUID)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "message response"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/context/{context-id}/environment-variable/{env-var-name}",
    "method": "updateEnvironmentVariable",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Context",
    "typeScriptTag": "context",
    "description": "Add or update an environment variable",
    "parameters": [
      {
        "name": "contextId",
        "schema": "string",
        "required": true,
        "description": "ID of the context (UUID)"
      },
      {
        "name": "envVarName",
        "schema": "string",
        "required": true,
        "description": "The name of the environment variable"
      },
      {
        "name": "value",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/insights/pages/{project-slug}/summary",
    "method": "getProjectSummaryMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Insights",
    "typeScriptTag": "insights",
    "description": "Get summary metrics and trends for a project across it's workflows and branches",
    "parameters": [
      {
        "name": "projectSlug",
        "schema": "string",
        "required": true,
        "description": "Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings)."
      },
      {
        "name": "reportingWindow",
        "schema": "string",
        "required": false,
        "description": "The time window used to calculate summary metrics. If not provided, defaults to last-90-days"
      },
      {
        "name": "branches",
        "schema": "object",
        "required": false,
        "description": "The names of VCS branches to include in branch-level workflow metrics."
      },
      {
        "name": "workflowNames",
        "schema": "object",
        "required": false,
        "description": "The names of workflows to include in workflow-level metrics."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/insights/time-series/{project-slug}/workflows/{workflow-name}/jobs",
    "method": "getJobTimeseriesData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Insights",
    "typeScriptTag": "insights",
    "description": "Job timeseries data",
    "parameters": [
      {
        "name": "projectSlug",
        "schema": "string",
        "required": true,
        "description": "Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings)."
      },
      {
        "name": "workflowName",
        "schema": "string",
        "required": true,
        "description": "The name of the workflow."
      },
      {
        "name": "branch",
        "schema": "string",
        "required": false,
        "description": "The name of a vcs branch. If not passed we will scope the API call to the default branch."
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": false,
        "description": "The granularity for which to query timeseries data."
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "Include only executions that started at or after this date. This must be specified if an end-date is provided."
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "Include only executions that started before this date. This date can be at most 90 days after the start-date."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Project level timeseries metrics response"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/insights/{org-slug}/summary",
    "method": "getSummaryMetricsWithTrends",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Insights",
    "typeScriptTag": "insights",
    "description": "Get summary metrics with trends for the entire org, and for each project.",
    "parameters": [
      {
        "name": "orgSlug",
        "schema": "string",
        "required": true,
        "description": "Org slug in the form `vcs-slug/org-name`. The `/` characters may be URL-escaped."
      },
      {
        "name": "reportingWindow",
        "schema": "string",
        "required": false,
        "description": "The time window used to calculate summary metrics. If not provided, defaults to last-90-days"
      },
      {
        "name": "projectNames",
        "schema": "object",
        "required": false,
        "description": "List of project names."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Summary metrics with trends for the entire org, and for each project."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/insights/{project-slug}/branches",
    "method": "listProjectBranches",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Insights",
    "typeScriptTag": "insights",
    "description": "Get all branches for a project",
    "parameters": [
      {
        "name": "projectSlug",
        "schema": "string",
        "required": true,
        "description": "Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings)."
      },
      {
        "name": "workflowName",
        "schema": "string",
        "required": false,
        "description": "The name of a workflow. If not passed we will scope the API call to the project."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Project branches response."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/insights/{project-slug}/flaky-tests",
    "method": "getFlakyTests",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Insights",
    "typeScriptTag": "insights",
    "description": "Get flaky tests for a project",
    "parameters": [
      {
        "name": "projectSlug",
        "schema": "string",
        "required": true,
        "description": "Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings)."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Flaky tests response"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/insights/{project-slug}/workflows",
    "method": "getProjectWorkflowMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Insights",
    "typeScriptTag": "insights",
    "description": "Get summary metrics for a project's workflows",
    "parameters": [
      {
        "name": "projectSlug",
        "schema": "string",
        "required": true,
        "description": "Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings)."
      },
      {
        "name": "pageToken",
        "schema": "string",
        "required": false,
        "description": "A token to retrieve the next page of results."
      },
      {
        "name": "allBranches",
        "schema": "boolean",
        "required": false,
        "description": "Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter."
      },
      {
        "name": "branch",
        "schema": "string",
        "required": false,
        "description": "The name of a vcs branch. If not passed we will scope the API call to the default branch."
      },
      {
        "name": "reportingWindow",
        "schema": "string",
        "required": false,
        "description": "The time window used to calculate summary metrics. If not provided, defaults to last-90-days"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Paginated workflow summary metrics."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/insights/{project-slug}/workflows/{workflow-name}",
    "method": "getRecentWorkflowRuns",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Insights",
    "typeScriptTag": "insights",
    "description": "Get recent runs of a workflow",
    "parameters": [
      {
        "name": "projectSlug",
        "schema": "string",
        "required": true,
        "description": "Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings)."
      },
      {
        "name": "workflowName",
        "schema": "string",
        "required": true,
        "description": "The name of the workflow."
      },
      {
        "name": "allBranches",
        "schema": "boolean",
        "required": false,
        "description": "Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter."
      },
      {
        "name": "branch",
        "schema": "string",
        "required": false,
        "description": "The name of a vcs branch. If not passed we will scope the API call to the default branch."
      },
      {
        "name": "pageToken",
        "schema": "string",
        "required": false,
        "description": "A token to retrieve the next page of results."
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "Include only executions that started at or after this date. This must be specified if an end-date is provided."
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "Include only executions that started before this date. This date can be at most 90 days after the start-date."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Paginated recent workflow runs."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/insights/{project-slug}/workflows/{workflow-name}/jobs",
    "method": "getProjectWorkflowJobMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Insights",
    "typeScriptTag": "insights",
    "description": "Get summary metrics for a project workflow's jobs.",
    "parameters": [
      {
        "name": "projectSlug",
        "schema": "string",
        "required": true,
        "description": "Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings)."
      },
      {
        "name": "workflowName",
        "schema": "string",
        "required": true,
        "description": "The name of the workflow."
      },
      {
        "name": "pageToken",
        "schema": "string",
        "required": false,
        "description": "A token to retrieve the next page of results."
      },
      {
        "name": "allBranches",
        "schema": "boolean",
        "required": false,
        "description": "Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter."
      },
      {
        "name": "branch",
        "schema": "string",
        "required": false,
        "description": "The name of a vcs branch. If not passed we will scope the API call to the default branch."
      },
      {
        "name": "reportingWindow",
        "schema": "string",
        "required": false,
        "description": "The time window used to calculate summary metrics. If not provided, defaults to last-90-days"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Paginated workflow job summary metrics."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/insights/{project-slug}/workflows/{workflow-name}/summary",
    "method": "getWorkflowSummaryMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Insights",
    "typeScriptTag": "insights",
    "description": "Get metrics and trends for workflows",
    "parameters": [
      {
        "name": "projectSlug",
        "schema": "string",
        "required": true,
        "description": "Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings)."
      },
      {
        "name": "workflowName",
        "schema": "string",
        "required": true,
        "description": "The name of the workflow."
      },
      {
        "name": "allBranches",
        "schema": "boolean",
        "required": false,
        "description": "Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter."
      },
      {
        "name": "branch",
        "schema": "string",
        "required": false,
        "description": "The name of a vcs branch. If not passed we will scope the API call to the default branch."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Workflow level aggregated metrics and trends response"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/insights/{project-slug}/workflows/{workflow-name}/test-metrics",
    "method": "getProjectWorkflowTestMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Insights",
    "typeScriptTag": "insights",
    "description": "Get test metrics for a project's workflows",
    "parameters": [
      {
        "name": "projectSlug",
        "schema": "string",
        "required": true,
        "description": "Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings)."
      },
      {
        "name": "workflowName",
        "schema": "string",
        "required": true,
        "description": "The name of the workflow."
      },
      {
        "name": "branch",
        "schema": "string",
        "required": false,
        "description": "The name of a vcs branch. If not passed we will scope the API call to the default branch."
      },
      {
        "name": "allBranches",
        "schema": "boolean",
        "required": false,
        "description": "Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Project level test metrics response"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/me",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "User Information",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/collaborations",
    "method": "listCollaborations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Collaborations",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/pipeline",
    "method": "listRecentPipelines",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipeline",
    "typeScriptTag": "pipeline",
    "description": "Get a list of pipelines",
    "parameters": [
      {
        "name": "orgSlug",
        "schema": "string",
        "required": false,
        "description": "Org slug in the form `vcs-slug/org-name`. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug` and replace the `org-name` with the organization ID (found in Organization Settings)."
      },
      {
        "name": "pageToken",
        "schema": "string",
        "required": false,
        "description": "A token to retrieve the next page of results."
      },
      {
        "name": "mine",
        "schema": "boolean",
        "required": false,
        "description": "Only include entries created by your user."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of pipelines"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/pipeline/continue",
    "method": "continueExecution",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pipeline",
    "typeScriptTag": "pipeline",
    "description": "Continue a pipeline",
    "parameters": [
      {
        "name": "parameters",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "continuation-key",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "configuration",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "message response"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/pipeline/{pipeline-id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipeline",
    "typeScriptTag": "pipeline",
    "description": "Get a pipeline by ID",
    "parameters": [
      {
        "name": "pipelineId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the pipeline."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A pipeline response."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/pipeline/{pipeline-id}/config",
    "method": "getConfigurationById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipeline",
    "typeScriptTag": "pipeline",
    "description": "Get a pipeline's configuration",
    "parameters": [
      {
        "name": "pipelineId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the pipeline."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The configuration strings for the pipeline."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/pipeline/{pipeline-id}/workflow",
    "method": "listWorkflows",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipeline",
    "typeScriptTag": "pipeline",
    "description": "Get a pipeline's workflows",
    "parameters": [
      {
        "name": "pipelineId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the pipeline."
      },
      {
        "name": "pageToken",
        "schema": "string",
        "required": false,
        "description": "A token to retrieve the next page of results."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of workflows and associated pagination token."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/project/{project-slug}",
    "method": "getBySlug",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Get a project",
    "parameters": [
      {
        "name": "projectSlug",
        "schema": "string",
        "required": true,
        "description": "Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings)."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "NOTE: The definition of Project is subject to change."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/project/{project-slug}/checkout-key",
    "method": "listCheckoutKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Get all checkout keys",
    "parameters": [
      {
        "name": "projectSlug",
        "schema": "string",
        "required": true,
        "description": "Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings)."
      },
      {
        "name": "digest",
        "schema": "string",
        "required": false,
        "description": "The fingerprint digest type to return. This may be either `md5` or `sha256`. If not passed, defaults to `md5`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/project/{project-slug}/checkout-key",
    "method": "createCheckoutKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Create a new checkout key",
    "parameters": [
      {
        "name": "projectSlug",
        "schema": "string",
        "required": true,
        "description": "Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings)."
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A checkout key"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/project/{project-slug}/checkout-key/{fingerprint}",
    "method": "deleteCheckoutKeyByFingerprint",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Delete a checkout key",
    "parameters": [
      {
        "name": "projectSlug",
        "schema": "string",
        "required": true,
        "description": "Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings)."
      },
      {
        "name": "fingerprint",
        "schema": "string",
        "required": true,
        "description": "An SSH key fingerprint."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "message response"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/project/{project-slug}/checkout-key/{fingerprint}",
    "method": "getCheckoutKeyByFingerprint",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Get a checkout key",
    "parameters": [
      {
        "name": "projectSlug",
        "schema": "string",
        "required": true,
        "description": "Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings)."
      },
      {
        "name": "fingerprint",
        "schema": "string",
        "required": true,
        "description": "An SSH key fingerprint."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A checkout key"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/project/{project-slug}/envvar",
    "method": "listEnvVarValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "List all environment variables",
    "parameters": [
      {
        "name": "projectSlug",
        "schema": "string",
        "required": true,
        "description": "Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings)."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/project/{project-slug}/envvar",
    "method": "createEnvVar",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Create an environment variable",
    "parameters": [
      {
        "name": "projectSlug",
        "schema": "string",
        "required": true,
        "description": "Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings)."
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "An environment variable is a map containing a value and an optional timestamp."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/project/{project-slug}/envvar/{name}",
    "method": "deleteEnvironmentVariable",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Delete an environment variable",
    "parameters": [
      {
        "name": "projectSlug",
        "schema": "string",
        "required": true,
        "description": "Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings)."
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "The name of the environment variable."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "message response"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/project/{project-slug}/envvar/{name}",
    "method": "getMaskedEnvVar",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Get a masked environment variable",
    "parameters": [
      {
        "name": "projectSlug",
        "schema": "string",
        "required": true,
        "description": "Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings)."
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "The name of the environment variable."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An environment variable is a map containing a value and an optional timestamp."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/project/{project-slug}/job/{job-number}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job",
    "typeScriptTag": "job",
    "description": "Get job details",
    "parameters": [
      {
        "name": "jobNumber",
        "schema": "undefined",
        "required": true,
        "description": "The number of the job."
      },
      {
        "name": "projectSlug",
        "schema": "string",
        "required": true,
        "description": "Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings)."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Job Details"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/project/{project-slug}/job/{job-number}/cancel",
    "method": "cancelWithNumber",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job",
    "typeScriptTag": "job",
    "description": "Cancel job",
    "parameters": [
      {
        "name": "jobNumber",
        "schema": "undefined",
        "required": true,
        "description": "The number of the job."
      },
      {
        "name": "projectSlug",
        "schema": "string",
        "required": true,
        "description": "Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings)."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "message response"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/project/{project-slug}/pipeline",
    "method": "getAllPipelines",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipeline",
    "typeScriptTag": "pipeline",
    "description": "Get all pipelines",
    "parameters": [
      {
        "name": "projectSlug",
        "schema": "string",
        "required": true,
        "description": "Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings)."
      },
      {
        "name": "branch",
        "schema": "string",
        "required": false,
        "description": "The name of a vcs branch."
      },
      {
        "name": "pageToken",
        "schema": "string",
        "required": false,
        "description": "A token to retrieve the next page of results."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of pipelines"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/project/{project-slug}/pipeline",
    "method": "triggerNewPipeline",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pipeline",
    "typeScriptTag": "pipeline",
    "description": "Trigger a new pipeline",
    "parameters": [
      {
        "name": "projectSlug",
        "schema": "string",
        "required": true,
        "description": "Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings)."
      },
      {
        "name": "parameters",
        "schema": "object",
        "description": ""
      },
      {
        "name": "branch",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A pipeline creation response."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/project/{project-slug}/pipeline/mine",
    "method": "listUserPipelines",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipeline",
    "typeScriptTag": "pipeline",
    "description": "Get your pipelines",
    "parameters": [
      {
        "name": "projectSlug",
        "schema": "string",
        "required": true,
        "description": "Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings)."
      },
      {
        "name": "pageToken",
        "schema": "string",
        "required": false,
        "description": "A token to retrieve the next page of results."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of pipelines"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/project/{project-slug}/pipeline/{pipeline-number}",
    "method": "getByNumber",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipeline",
    "typeScriptTag": "pipeline",
    "description": "Get a pipeline by pipeline number",
    "parameters": [
      {
        "name": "projectSlug",
        "schema": "string",
        "required": true,
        "description": "Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings)."
      },
      {
        "name": "pipelineNumber",
        "schema": "undefined",
        "required": true,
        "description": "The number of the pipeline."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A pipeline response."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/project/{project-slug}/schedule",
    "method": "getAllSchedules",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Schedule",
    "typeScriptTag": "schedule",
    "description": "Get all schedules",
    "parameters": [
      {
        "name": "projectSlug",
        "schema": "string",
        "required": true,
        "description": "Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings)."
      },
      {
        "name": "pageToken",
        "schema": "string",
        "required": false,
        "description": "A token to retrieve the next page of results."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A sequence of schedules"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/project/{project-slug}/schedule",
    "method": "createNewSchedule",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Schedule",
    "typeScriptTag": "schedule",
    "description": "Create a schedule",
    "parameters": [
      {
        "name": "projectSlug",
        "schema": "string",
        "required": true,
        "description": "Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings)."
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "parameters",
        "schema": "object",
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
        "name": "timetable",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "attribution-actor",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A schedule response"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/project/{project-slug}/{job-number}/artifacts",
    "method": "getArtifacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job",
    "typeScriptTag": "job",
    "description": "Get a job's artifacts",
    "parameters": [
      {
        "name": "jobNumber",
        "schema": "undefined",
        "required": true,
        "description": "The number of the job."
      },
      {
        "name": "projectSlug",
        "schema": "string",
        "required": true,
        "description": "Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings)."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/project/{project-slug}/{job-number}/tests",
    "method": "getTestMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job",
    "typeScriptTag": "job",
    "description": "Get test metadata",
    "parameters": [
      {
        "name": "jobNumber",
        "schema": "undefined",
        "required": true,
        "description": "The number of the job."
      },
      {
        "name": "projectSlug",
        "schema": "string",
        "required": true,
        "description": "Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings)."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/schedule/{schedule-id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Schedule",
    "typeScriptTag": "schedule",
    "description": "Delete a schedule",
    "parameters": [
      {
        "name": "scheduleId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the schedule."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "message response"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/schedule/{schedule-id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Schedule",
    "typeScriptTag": "schedule",
    "description": "Get a schedule",
    "parameters": [
      {
        "name": "scheduleId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the schedule."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A schedule response"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/schedule/{schedule-id}",
    "method": "updateSchedule",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Schedule",
    "typeScriptTag": "schedule",
    "description": "Update a schedule",
    "parameters": [
      {
        "name": "scheduleId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the schedule."
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "parameters",
        "schema": "object",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timetable",
        "schema": "object",
        "description": ""
      },
      {
        "name": "attribution-actor",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A schedule response"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/user/{id}",
    "method": "getUserInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "User Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the user."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhook",
    "method": "listMatchingScope",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "List webhooks",
    "parameters": [
      {
        "name": "scopeId",
        "schema": "string",
        "required": true,
        "description": "ID of the scope being used (at the moment, only project ID is supported)"
      },
      {
        "name": "scopeType",
        "schema": "string",
        "required": true,
        "description": "Type of the scope being used"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of webhooks"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhook",
    "method": "createOutboundWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Create an outbound webhook",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "events",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "verify-tls",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "signing-secret",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "scope",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhook/{webhook-id}",
    "method": "deleteOutboundWebhook",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Delete an outbound webhook",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "ID of the webhook (UUID)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "message response"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhook/{webhook-id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Get a webhook",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "ID of the webhook (UUID)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhook/{webhook-id}",
    "method": "updateOutboundWebhook",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Update an outbound webhook",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "ID of the webhook (UUID)"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "events",
        "schema": "array",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signing-secret",
        "schema": "string",
        "description": ""
      },
      {
        "name": "verify-tls",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workflow/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflow",
    "typeScriptTag": "workflow",
    "description": "Get a workflow",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the workflow."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A workflow"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workflow/{id}/approve/{approval_request_id}",
    "method": "approveJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflow",
    "typeScriptTag": "workflow",
    "description": "Approve a job",
    "parameters": [
      {
        "name": "approvalRequestId",
        "schema": "string",
        "required": true,
        "description": "The ID of the job being approved."
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the workflow."
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "message response"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workflow/{id}/cancel",
    "method": "cancelWorkflow",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflow",
    "typeScriptTag": "workflow",
    "description": "Cancel a workflow",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the workflow."
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "message response"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workflow/{id}/job",
    "method": "getJobs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflow",
    "typeScriptTag": "workflow",
    "description": "Get a workflow's jobs",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the workflow."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workflow/{id}/rerun",
    "method": "rerunWorkflow",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflow",
    "typeScriptTag": "workflow",
    "description": "Rerun a workflow",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the workflow."
      },
      {
        "name": "enable_ssh",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "from_failed",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "jobs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "sparse_tree",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A response to rerunning a workflow"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/org/{orgID}/oidc-custom-claims",
    "method": "deleteOrgClaims",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "OIDC Token Management",
    "typeScriptTag": "oidcTokenManagement",
    "description": "Delete org-level claims",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "claims",
        "schema": "string",
        "required": true,
        "description": "comma separated list of claims to delete. Valid values are \"audience\" and \"ttl\"."
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
        "description": ""
      }
    ]
  },
  {
    "url": "/org/{orgID}/oidc-custom-claims",
    "method": "getOrgClaims",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OIDC Token Management",
    "typeScriptTag": "oidcTokenManagement",
    "description": "Get org-level claims",
    "parameters": [
      {
        "name": "orgId",
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
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/org/{orgID}/oidc-custom-claims",
    "method": "updateOrgClaims",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "OIDC Token Management",
    "typeScriptTag": "oidcTokenManagement",
    "description": "Patch org-level claims",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "audience",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ttl",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/org/{orgID}/project/{projectID}/oidc-custom-claims",
    "method": "deleteProjectClaims",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "OIDC Token Management",
    "typeScriptTag": "oidcTokenManagement",
    "description": "Delete project-level claims",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "claims",
        "schema": "string",
        "required": true,
        "description": "comma separated list of claims to delete. Valid values are \"audience\" and \"ttl\"."
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
        "description": ""
      }
    ]
  },
  {
    "url": "/org/{orgID}/project/{projectID}/oidc-custom-claims",
    "method": "getProjectClaims",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OIDC Token Management",
    "typeScriptTag": "oidcTokenManagement",
    "description": "Get project-level claims",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "projectId",
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
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/org/{orgID}/project/{projectID}/oidc-custom-claims",
    "method": "updateProjectClaims",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "OIDC Token Management",
    "typeScriptTag": "oidcTokenManagement",
    "description": "Patch project-level claims",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "audience",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ttl",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/owner/{ownerID}/context/{context}/decision",
    "method": "getDecisionAuditLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Policy Management",
    "typeScriptTag": "policyManagement",
    "description": "Retrieves the owner's decision audit logs.",
    "parameters": [
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "context",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Return decisions matching this decision status."
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "Return decisions made after this date."
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "Return decisions made before this date."
      },
      {
        "name": "branch",
        "schema": "string",
        "required": false,
        "description": "Return decisions made on this branch."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": false,
        "description": "Return decisions made for this project."
      },
      {
        "name": "buildNumber",
        "schema": "string",
        "required": false,
        "description": "Return decisions made for this build number."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Sets the offset when retrieving the decisions, for paging."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/owner/{ownerID}/context/{context}/decision",
    "method": "evaluateInputData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Policy Management",
    "typeScriptTag": "policyManagement",
    "description": "Makes a decision",
    "parameters": [
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "context",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "input",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "metadata",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/owner/{ownerID}/context/{context}/decision/settings",
    "method": "getDecisionSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Policy Management",
    "typeScriptTag": "policyManagement",
    "description": "Get the decision settings",
    "parameters": [
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "context",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/owner/{ownerID}/context/{context}/decision/settings",
    "method": "modifyDecisionSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Policy Management",
    "typeScriptTag": "policyManagement",
    "description": "Set the decision settings",
    "parameters": [
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "context",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "enabled",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/owner/{ownerID}/context/{context}/decision/{decisionID}",
    "method": "getDecisionAuditLogByGivenId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Policy Management",
    "typeScriptTag": "policyManagement",
    "description": "Retrieves the owner's decision audit log by given decisionID",
    "parameters": [
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "context",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "decisionId",
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
    "url": "/owner/{ownerID}/context/{context}/decision/{decisionID}/policy-bundle",
    "method": "getPolicyBundleForDecision",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Policy Management",
    "typeScriptTag": "policyManagement",
    "description": "Retrieves Policy Bundle for a given decision log ID",
    "parameters": [
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "context",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "decisionId",
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
    "url": "/owner/{ownerID}/context/{context}/policy-bundle",
    "method": "getPolicyBundle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Policy Management",
    "typeScriptTag": "policyManagement",
    "description": "Retrieves Policy Bundle",
    "parameters": [
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "context",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/owner/{ownerID}/context/{context}/policy-bundle",
    "method": "createPolicyBundleForContext",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Policy Management",
    "typeScriptTag": "policyManagement",
    "description": "Creates policy bundle for the context",
    "parameters": [
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "context",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "dry",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "policies",
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
        "statusCode": "413",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/owner/{ownerID}/context/{context}/policy-bundle/{policyName}",
    "method": "getDocument",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Policy Management",
    "typeScriptTag": "policyManagement",
    "description": "Retrieves a policy document",
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
    "url": "/context/{context_id}/restrictions",
    "method": "getRestrictions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Context",
    "typeScriptTag": "context",
    "description": "🧪 Get context restrictions",
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/context/{context_id}/restrictions",
    "method": "createRestriction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Context",
    "typeScriptTag": "context",
    "description": "🧪 Create context restriction",
    "parameters": [
      {
        "name": "project_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "restriction_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "restriction_value",
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/context/{context_id}/restrictions/{restriction_id}",
    "method": "deleteRestriction",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Context",
    "typeScriptTag": "context",
    "description": "🧪 Delete context restriction",
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/project/{provider}/{organization}/{project}",
    "method": "createProjectDefaultSettings",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "🧪 Create a project",
    "parameters": [],
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/project/{provider}/{organization}/{project}/settings",
    "method": "getSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "🧪 Get project settings",
    "parameters": [],
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/project/{provider}/{organization}/{project}/settings",
    "method": "updateSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "🧪 Update project settings",
    "parameters": [
      {
        "name": "advanced",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
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
      apiTitle="CircleCI API"
      apiBaseUrl="https://circleci.com/api/v2"
      apiVersion="v2"
      endpoints={55}
      sdkMethods={83}
      schemas={170}
      parameters={195}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/circleci/openapi.yaml"
    />
  );
}
  