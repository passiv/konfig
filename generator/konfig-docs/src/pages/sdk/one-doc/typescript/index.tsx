import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function OneDocTypeScriptSdk() {
  return (
    <Sdk
      sdkName="one-doc-typescript-sdk"
      metaDescription="Onedoc is an innovative API solution for developers, offering a simple and secure way to create and manage PDF documents using familiar technologies like React."
      company="OneDoc"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/onedoc/logo.png"
      clientNameCamelCase="oneDoc"
      homepage="onedoc.com"
      lastUpdated={new Date("2024-03-11T16:54:22.452Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/onedoc/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/onedoc/imagePreview.webp"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/api/docs/generate",
    "method": "generatePdfFromBucket",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Generates a PDF from a specified bucket.",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "bucket",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "test",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "save",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "expiresIn",
        "schema": "integer",
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
        "description": "Bad request, missing or incorrect data."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized, no API key found or invalid API key."
      },
      {
        "statusCode": "404",
        "description": "Bucket not found."
      },
      {
        "statusCode": "500",
        "description": "Server error or unable to process the request."
      }
    ]
  },
  {
    "url": "/api/docs/initiate",
    "method": "renderingBucket",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Initiates a document's rendering",
    "parameters": [
      {
        "name": "assets",
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
        "statusCode": "401",
        "description": "Unauthorized, no API key found or invalid API key."
      },
      {
        "statusCode": "500",
        "description": "Server error or unable to process the request."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="API Doc"
      apiBaseUrl="https://app.onedoclabs.com"
      apiVersion="1.0"
      endpoints={2}
      sdkMethods={2}
      schemas={4}
      parameters={8}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/onedoc/openapi.yaml"
    />
  );
}
  