import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function BrexOnboardingTypeScriptSdk() {
  return (
    <Sdk
      sdkName="brex-onboarding-typescript-sdk"
      metaDescription="Brex is the AI-powered spend platform. We transform finance teams from reactive no-sayers to proactive growth drivers. With Brex, companies spend with confidence by empowering employees to make smarter financial decisions from anywhere. Brex provides corporate cards, business accounts, and global payments, plus intuitive software for travel and expenses, that make it easy to plan and track all company spend in one place, in real time. Over 20,000 companies from startups to global enterprises — including DoorDash, Flexport, and Compass — use Brex to proactively control spend, reduce costs, and increase efficiency on a global scale."
      company="Brex"
      serviceName="Onboarding"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/onboarding/logo.png"
      clientNameCamelCase="brexOnboarding"
      homepage="brex.com"
      lastUpdated={new Date("2024-03-11T06:43:11.466Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/onboarding/favicon.png"
      contactUrl="https://brex.com"
      contactEmail="developer-access@brex.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/onboarding/imagePreview.jpg"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/v1/referrals",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Referrals",
    "typeScriptTag": "referrals",
    "description": "List referrals",
    "parameters": [
      {
        "name": "cursor",
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
        "description": "Invalid cursor"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/v1/referrals",
    "method": "createNewReferral",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Referrals",
    "typeScriptTag": "referrals",
    "description": "Creates a referral",
    "parameters": [
      {
        "name": "referral_code",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "applicant",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "business",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "contact_preference",
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
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/v1/referrals/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Referrals",
    "typeScriptTag": "referrals",
    "description": "Gets a referral by ID",
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "404",
        "description": "Referral not found"
      }
    ]
  },
  {
    "url": "/v1/referrals/{id}/document_upload",
    "method": "uploadDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Referrals",
    "typeScriptTag": "referrals",
    "description": "Create a new document upload",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": ""
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
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "404",
        "description": "Referral not found"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Onboarding API"
      apiBaseUrl="https://platform.brexapis.com"
      apiVersion="1.0"
      endpoints={3}
      sdkMethods={4}
      schemas={25}
      parameters={8}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/onboarding/openapi.yaml"
    />
  );
}
  