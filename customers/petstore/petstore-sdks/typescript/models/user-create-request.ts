/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This file is auto generated by Konfig (https://konfigthis.com).
 * Do not edit the class manually.
 */


/**
 * A User who is purchasing from the pet store
 * @export
 * @interface UserCreateRequest
 */
export interface UserCreateRequest {
    /**
     * 
     * @type {number}
     * @memberof UserCreateRequest
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof UserCreateRequest
     */
    'firstName'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserCreateRequest
     */
    'lastName'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserCreateRequest
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserCreateRequest
     */
    'password'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserCreateRequest
     */
    'phone'?: string;
    /**
     * User Status
     * @type {number}
     * @memberof UserCreateRequest
     */
    'userStatus'?: number;
}
