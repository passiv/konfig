/*
Carbon

Connect external data to LLMs, no matter the source.

API version: 1.0.0
*/

// Code generated by Konfig (https://konfigthis.com); DO NOT EDIT.

package carbon

import (
	"encoding/json"
)

// DocumentResponseList struct for DocumentResponseList
type DocumentResponseList struct {
	Documents []DocumentResponse `json:"documents"`
}

// NewDocumentResponseList instantiates a new DocumentResponseList object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDocumentResponseList(documents []DocumentResponse) *DocumentResponseList {
	this := DocumentResponseList{}
	this.Documents = documents
	return &this
}

// NewDocumentResponseListWithDefaults instantiates a new DocumentResponseList object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDocumentResponseListWithDefaults() *DocumentResponseList {
	this := DocumentResponseList{}
	return &this
}

// GetDocuments returns the Documents field value
func (o *DocumentResponseList) GetDocuments() []DocumentResponse {
	if o == nil {
		var ret []DocumentResponse
		return ret
	}

	return o.Documents
}

// GetDocumentsOk returns a tuple with the Documents field value
// and a boolean to check if the value has been set.
func (o *DocumentResponseList) GetDocumentsOk() ([]DocumentResponse, bool) {
	if o == nil {
    return nil, false
	}
	return o.Documents, true
}

// SetDocuments sets field value
func (o *DocumentResponseList) SetDocuments(v []DocumentResponse) {
	o.Documents = v
}

func (o DocumentResponseList) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["documents"] = o.Documents
	}
	return json.Marshal(toSerialize)
}

type NullableDocumentResponseList struct {
	value *DocumentResponseList
	isSet bool
}

func (v NullableDocumentResponseList) Get() *DocumentResponseList {
	return v.value
}

func (v *NullableDocumentResponseList) Set(val *DocumentResponseList) {
	v.value = val
	v.isSet = true
}

func (v NullableDocumentResponseList) IsSet() bool {
	return v.isSet
}

func (v *NullableDocumentResponseList) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDocumentResponseList(val *DocumentResponseList) *NullableDocumentResponseList {
	return &NullableDocumentResponseList{value: val, isSet: true}
}

func (v NullableDocumentResponseList) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDocumentResponseList) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

