import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function TicketmasterDiscoveryTypeScriptSdk() {
  return (
    <Sdk
      sdkName="ticketmaster-typescript-sdk"
      metaDescription="Tap into the Ticketmaster open developer network which gives you the flexibility and scale to bring unforgettable live events to fans. It’s our technology – your way."
      company="Ticketmaster"
      serviceName="Discovery"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ticketmaster/discovery/logo.png"
      clientNameCamelCase="ticketmaster"
      homepage="developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/"
      lastUpdated={new Date("2024-02-02T23:02:23.295Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ticketmaster/discovery/favicon.ico"
      contactUrl="http://developer.ticketmaster.com/support/contact-us/"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ticketmaster/discovery/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/discovery/v2/attractions",
    "method": "searchAttractions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v2",
    "typeScriptTag": "v2",
    "description": "Attraction Search",
    "parameters": [
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sorting order of the search result. Allowable Values : 'name,asc', 'name,desc', 'relevance,asc', 'relevance,desc'"
      },
      {
        "name": "classificationName",
        "schema": "array",
        "required": false,
        "description": "Filter attractions by classification name: name of any segment, genre, sub-genre, type, sub-type"
      },
      {
        "name": "classificationId",
        "schema": "array",
        "required": false,
        "description": "Filter attractions by classification id: id of any segment, genre, sub-genre, type, sub-type"
      },
      {
        "name": "keyword",
        "schema": "string",
        "required": false,
        "description": "Keyword to search on"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "Filter entities by its id"
      },
      {
        "name": "source",
        "schema": "string",
        "required": false,
        "description": "Filter entities by its source name"
      },
      {
        "name": "includeTest",
        "schema": "string",
        "required": false,
        "description": "True if you want to have entities flag as test in the response. Only, if you only wanted test entities"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "Page number"
      },
      {
        "name": "size",
        "schema": "string",
        "required": false,
        "description": "Page size of the response"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') "
      },
      {
        "name": "includeLicensedContent",
        "schema": "string",
        "required": false,
        "description": "Yes if you want to display licensed content"
      },
      {
        "name": "includeSpellcheck",
        "schema": "string",
        "required": false,
        "description": "yes, to include spell check suggestions in the response."
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
    "url": "/discovery/v2/attractions/{id}",
    "method": "getAttractionDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v2",
    "typeScriptTag": "v2",
    "description": "Get Attraction Details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the attraction"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') "
      },
      {
        "name": "includeLicensedContent",
        "schema": "string",
        "required": false,
        "description": "True if you want to display licensed content"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Attraction"
      }
    ]
  },
  {
    "url": "/discovery/v2/classifications",
    "method": "searchClassifications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v2",
    "typeScriptTag": "v2",
    "description": "Classification Search",
    "parameters": [
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sorting order of the search result"
      },
      {
        "name": "keyword",
        "schema": "string",
        "required": false,
        "description": "Keyword to search on"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "Filter entities by its id"
      },
      {
        "name": "source",
        "schema": "string",
        "required": false,
        "description": "Filter entities by its source name"
      },
      {
        "name": "includeTest",
        "schema": "string",
        "required": false,
        "description": "True if you want to have entities flag as test in the response. Only, if you only wanted test entities"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "Page number"
      },
      {
        "name": "size",
        "schema": "string",
        "required": false,
        "description": "Page size of the response"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') "
      },
      {
        "name": "includeLicensedContent",
        "schema": "string",
        "required": false,
        "description": "Yes if you want to display licensed content"
      },
      {
        "name": "includeSpellcheck",
        "schema": "string",
        "required": false,
        "description": "yes, to include spell check suggestions in the response."
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
    "url": "/discovery/v2/classifications/genres/{id}",
    "method": "getGenreDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v2",
    "typeScriptTag": "v2",
    "description": "Get Genre Details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the genre"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') "
      },
      {
        "name": "includeLicensedContent",
        "schema": "string",
        "required": false,
        "description": "True if you want to display licensed content"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Secondary Genre"
      }
    ]
  },
  {
    "url": "/discovery/v2/classifications/segments/{id}",
    "method": "getSegmentDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v2",
    "typeScriptTag": "v2",
    "description": "Get Segment Details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the segment"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') "
      },
      {
        "name": "includeLicensedContent",
        "schema": "string",
        "required": false,
        "description": "True if you want to display licensed content"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Segment"
      }
    ]
  },
  {
    "url": "/discovery/v2/classifications/subgenres/{id}",
    "method": "getSubgenreDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v2",
    "typeScriptTag": "v2",
    "description": "Get Sub-Genre Details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the subgenre"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') "
      },
      {
        "name": "includeLicensedContent",
        "schema": "string",
        "required": false,
        "description": "True if you want to display licensed content"
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
    "url": "/discovery/v2/classifications/{id}",
    "method": "getClassificationDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v2",
    "typeScriptTag": "v2",
    "description": "Get Classification Details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the segment, genre, or sub-genre"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') "
      },
      {
        "name": "includeLicensedContent",
        "schema": "string",
        "required": false,
        "description": "True if you want to display licensed content"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Classification"
      }
    ]
  },
  {
    "url": "/discovery/v2/events",
    "method": "eventSearch",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v2",
    "typeScriptTag": "v2",
    "description": "Event Search",
    "parameters": [
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sorting order of the search result. Allowable values : 'name,asc', 'name,desc', 'date,asc', 'date,desc', 'relevance,asc', 'relevance,desc', 'distance,asc', 'name,date,asc', 'name,date,desc', 'date,name,asc', 'date,name,desc','onsaleStartDate,asc', 'id,asc'"
      },
      {
        "name": "startDateTime",
        "schema": "string",
        "required": false,
        "description": "Filter events with a start date after this date"
      },
      {
        "name": "endDateTime",
        "schema": "string",
        "required": false,
        "description": "Filter events with a start date before this date"
      },
      {
        "name": "onsaleStartDateTime",
        "schema": "string",
        "required": false,
        "description": "Filter events with onsale start date after this date"
      },
      {
        "name": "onsaleOnStartDate",
        "schema": "string",
        "required": false,
        "description": "Filter events with onsale start date on this date"
      },
      {
        "name": "onsaleOnAfterStartDate",
        "schema": "string",
        "required": false,
        "description": "Filter events with onsale range within this date"
      },
      {
        "name": "onsaleEndDateTime",
        "schema": "string",
        "required": false,
        "description": "Filter events with onsale end date before this date"
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": "Filter events by city"
      },
      {
        "name": "countryCode",
        "schema": "string",
        "required": false,
        "description": "Filter events by country code"
      },
      {
        "name": "stateCode",
        "schema": "string",
        "required": false,
        "description": "Filter events by state code"
      },
      {
        "name": "postalCode",
        "schema": "string",
        "required": false,
        "description": "Filter events by postal code / zipcode"
      },
      {
        "name": "venueId",
        "schema": "string",
        "required": false,
        "description": "Filter events by venue id"
      },
      {
        "name": "attractionId",
        "schema": "string",
        "required": false,
        "description": "Filter events by attraction id"
      },
      {
        "name": "segmentId",
        "schema": "string",
        "required": false,
        "description": "Filter events by segment id"
      },
      {
        "name": "segmentName",
        "schema": "string",
        "required": false,
        "description": "Filter events by segment name"
      },
      {
        "name": "classificationName",
        "schema": "array",
        "required": false,
        "description": "Filter events by classification name: name of any segment, genre, sub-genre, type, sub-type"
      },
      {
        "name": "classificationId",
        "schema": "array",
        "required": false,
        "description": "Filter events by classification id: id of any segment, genre, sub-genre, type, sub-type"
      },
      {
        "name": "marketId",
        "schema": "string",
        "required": false,
        "description": "Filter events by market id"
      },
      {
        "name": "promoterId",
        "schema": "string",
        "required": false,
        "description": "Filter events by promoter id"
      },
      {
        "name": "dmaId",
        "schema": "string",
        "required": false,
        "description": "Filter events by dma id"
      },
      {
        "name": "includeTba",
        "schema": "string",
        "required": false,
        "description": "True, to include events with date to be announce (TBA)"
      },
      {
        "name": "includeTbd",
        "schema": "string",
        "required": false,
        "description": "True, to include event with a date to be defined (TBD)"
      },
      {
        "name": "clientVisibility",
        "schema": "string",
        "required": false,
        "description": "Filter events by clientName"
      },
      {
        "name": "latlong",
        "schema": "string",
        "required": false,
        "description": "Filter events by latitude and longitude, this filter is deprecated and maybe removed in a future release, please use geoPoint instead"
      },
      {
        "name": "radius",
        "schema": "string",
        "required": false,
        "description": "Radius of the area in which we want to search for events."
      },
      {
        "name": "unit",
        "schema": "string",
        "required": false,
        "description": "Unit of the radius"
      },
      {
        "name": "geoPoint",
        "schema": "string",
        "required": false,
        "description": "filter events by geoHash"
      },
      {
        "name": "keyword",
        "schema": "string",
        "required": false,
        "description": "Keyword to search on"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "Filter entities by its id"
      },
      {
        "name": "source",
        "schema": "string",
        "required": false,
        "description": "Filter entities by its source name"
      },
      {
        "name": "includeTest",
        "schema": "string",
        "required": false,
        "description": "True if you want to have entities flag as test in the response. Only, if you only wanted test entities"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "Page number"
      },
      {
        "name": "size",
        "schema": "string",
        "required": false,
        "description": "Page size of the response"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') "
      },
      {
        "name": "includeLicensedContent",
        "schema": "string",
        "required": false,
        "description": "Yes if you want to display licensed content"
      },
      {
        "name": "includeSpellcheck",
        "schema": "string",
        "required": false,
        "description": "yes, to include spell check suggestions in the response."
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
    "url": "/discovery/v2/events/{id}",
    "method": "getEventDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v2",
    "typeScriptTag": "v2",
    "description": "Get Event Details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the event"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') "
      },
      {
        "name": "includeLicensedContent",
        "schema": "string",
        "required": false,
        "description": "True if you want to display licensed content"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Event"
      }
    ]
  },
  {
    "url": "/discovery/v2/events/{id}/images",
    "method": "getEventImages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v2",
    "typeScriptTag": "v2",
    "description": "Get Event Images",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the event"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') "
      },
      {
        "name": "includeLicensedContent",
        "schema": "string",
        "required": false,
        "description": "True if you want to display licensed content"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This class defines an Event with only images view on the Discovery API"
      }
    ]
  },
  {
    "url": "/discovery/v2/suggest",
    "method": "findSuggest",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v2",
    "typeScriptTag": "v2",
    "description": "Find Suggest",
    "parameters": [
      {
        "name": "keyword",
        "schema": "string",
        "required": false,
        "description": "Keyword to search on"
      },
      {
        "name": "source",
        "schema": "string",
        "required": false,
        "description": "Filter entities by its source name"
      },
      {
        "name": "latlong",
        "schema": "string",
        "required": false,
        "description": "Filter events by latitude and longitude, this filter is deprecated and maybe removed in a future release, please use geoPoint instead"
      },
      {
        "name": "radius",
        "schema": "string",
        "required": false,
        "description": "Radius of the area in which we want to search for events."
      },
      {
        "name": "unit",
        "schema": "string",
        "required": false,
        "description": "Unit of the radius"
      },
      {
        "name": "size",
        "schema": "string",
        "required": false,
        "description": "Size of every entity returned in the response"
      },
      {
        "name": "includeFuzzy",
        "schema": "string",
        "required": false,
        "description": "yes, to include fuzzy matches in the search. This has performance impact."
      },
      {
        "name": "clientVisibility",
        "schema": "string",
        "required": false,
        "description": "Filter events to clientName"
      },
      {
        "name": "countryCode",
        "schema": "string",
        "required": false,
        "description": "Filter suggestions by country code"
      },
      {
        "name": "includeTba",
        "schema": "string",
        "required": false,
        "description": "True, to include events with date to be announce (TBA)"
      },
      {
        "name": "includeTbd",
        "schema": "string",
        "required": false,
        "description": "True, to include event with a date to be defined (TBD)"
      },
      {
        "name": "segmentId",
        "schema": "string",
        "required": false,
        "description": "Filter suggestions by segment id"
      },
      {
        "name": "geoPoint",
        "schema": "string",
        "required": false,
        "description": "filter events by geoHash"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') "
      },
      {
        "name": "includeLicensedContent",
        "schema": "string",
        "required": false,
        "description": "Yes if you want to display licensed content"
      },
      {
        "name": "includeSpellcheck",
        "schema": "string",
        "required": false,
        "description": "yes, to include spell check suggestions in the response."
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
    "url": "/discovery/v2/venues",
    "method": "findVenues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v2",
    "typeScriptTag": "v2",
    "description": "Venue Search",
    "parameters": [
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sorting order of the search result. Allowable Values: 'name,asc', 'name,desc', 'relevance,asc', 'relevance,desc', 'distance,asc', 'distance,desc'"
      },
      {
        "name": "stateCode",
        "schema": "string",
        "required": false,
        "description": "Filter venues by state / province code"
      },
      {
        "name": "countryCode",
        "schema": "string",
        "required": false,
        "description": "Filter venues by country code"
      },
      {
        "name": "latlong",
        "schema": "string",
        "required": false,
        "description": "Filter events by latitude and longitude, this filter is deprecated and maybe removed in a future release, please use geoPoint instead"
      },
      {
        "name": "radius",
        "schema": "string",
        "required": false,
        "description": "Radius of the area in which we want to search for events."
      },
      {
        "name": "unit",
        "schema": "string",
        "required": false,
        "description": "Unit of the radius"
      },
      {
        "name": "geoPoint",
        "schema": "string",
        "required": false,
        "description": "filter events by geoHash"
      },
      {
        "name": "keyword",
        "schema": "string",
        "required": false,
        "description": "Keyword to search on"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "Filter entities by its id"
      },
      {
        "name": "source",
        "schema": "string",
        "required": false,
        "description": "Filter entities by its source name"
      },
      {
        "name": "includeTest",
        "schema": "string",
        "required": false,
        "description": "True if you want to have entities flag as test in the response. Only, if you only wanted test entities"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "Page number"
      },
      {
        "name": "size",
        "schema": "string",
        "required": false,
        "description": "Page size of the response"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') "
      },
      {
        "name": "includeLicensedContent",
        "schema": "string",
        "required": false,
        "description": "Yes if you want to display licensed content"
      },
      {
        "name": "includeSpellcheck",
        "schema": "string",
        "required": false,
        "description": "yes, to include spell check suggestions in the response."
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
    "url": "/discovery/v2/venues/{id}",
    "method": "getVenueDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v2",
    "typeScriptTag": "v2",
    "description": "Get Venue Details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the venue"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') "
      },
      {
        "name": "includeLicensedContent",
        "schema": "string",
        "required": false,
        "description": "True if you want to display licensed content"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Venue"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Discovery API"
      apiBaseUrl="//www.ticketmaster.com/discovery/v2"
      apiVersion="v2"
      endpoints={13}
      sdkMethods={13}
      schemas={65}
      parameters={114}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ticketmaster/discovery/openapi.yaml"
    />
  );
}
  