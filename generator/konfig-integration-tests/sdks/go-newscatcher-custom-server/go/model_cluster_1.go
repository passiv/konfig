/*
NewsCatcher-V3 Production API

<img src='https://uploads-ssl.webflow.com/6429857b17973b636c2195c5/646c6f1eb774ff2f2997bec5_newscatcher_.svg' width='286' height='35' /> <br>  <br>Visit our website  <a href='https://newscatcherapi.com'>https://newscatcherapi.com</a>

API version: 3.2.16
Contact: maksym@newscatcherapi.com
*/

// Code generated by Konfig (https://konfigthis.com); DO NOT EDIT.

package newscatcherapi

import (
	"encoding/json"
)

// Cluster1 Cluster DTO class.
type Cluster1 struct {
	ClusterId string `json:"cluster_id"`
	ClusterSize int32 `json:"cluster_size"`
	Articles []map[string]interface{} `json:"articles"`
}

// NewCluster1 instantiates a new Cluster1 object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCluster1(clusterId string, clusterSize int32, articles []map[string]interface{}) *Cluster1 {
	this := Cluster1{}
	this.ClusterId = clusterId
	this.ClusterSize = clusterSize
	this.Articles = articles
	return &this
}

// NewCluster1WithDefaults instantiates a new Cluster1 object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCluster1WithDefaults() *Cluster1 {
	this := Cluster1{}
	return &this
}

// GetClusterId returns the ClusterId field value
func (o *Cluster1) GetClusterId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.ClusterId
}

// GetClusterIdOk returns a tuple with the ClusterId field value
// and a boolean to check if the value has been set.
func (o *Cluster1) GetClusterIdOk() (*string, bool) {
	if o == nil {
    return nil, false
	}
	return &o.ClusterId, true
}

// SetClusterId sets field value
func (o *Cluster1) SetClusterId(v string) {
	o.ClusterId = v
}

// GetClusterSize returns the ClusterSize field value
func (o *Cluster1) GetClusterSize() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.ClusterSize
}

// GetClusterSizeOk returns a tuple with the ClusterSize field value
// and a boolean to check if the value has been set.
func (o *Cluster1) GetClusterSizeOk() (*int32, bool) {
	if o == nil {
    return nil, false
	}
	return &o.ClusterSize, true
}

// SetClusterSize sets field value
func (o *Cluster1) SetClusterSize(v int32) {
	o.ClusterSize = v
}

// GetArticles returns the Articles field value
func (o *Cluster1) GetArticles() []map[string]interface{} {
	if o == nil {
		var ret []map[string]interface{}
		return ret
	}

	return o.Articles
}

// GetArticlesOk returns a tuple with the Articles field value
// and a boolean to check if the value has been set.
func (o *Cluster1) GetArticlesOk() ([]map[string]interface{}, bool) {
	if o == nil {
    return nil, false
	}
	return o.Articles, true
}

// SetArticles sets field value
func (o *Cluster1) SetArticles(v []map[string]interface{}) {
	o.Articles = v
}

func (o Cluster1) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["cluster_id"] = o.ClusterId
	}
	if true {
		toSerialize["cluster_size"] = o.ClusterSize
	}
	if true {
		toSerialize["articles"] = o.Articles
	}
	return json.Marshal(toSerialize)
}

type NullableCluster1 struct {
	value *Cluster1
	isSet bool
}

func (v NullableCluster1) Get() *Cluster1 {
	return v.value
}

func (v *NullableCluster1) Set(val *Cluster1) {
	v.value = val
	v.isSet = true
}

func (v NullableCluster1) IsSet() bool {
	return v.isSet
}

func (v *NullableCluster1) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCluster1(val *Cluster1) *NullableCluster1 {
	return &NullableCluster1{value: val, isSet: true}
}

func (v NullableCluster1) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCluster1) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

