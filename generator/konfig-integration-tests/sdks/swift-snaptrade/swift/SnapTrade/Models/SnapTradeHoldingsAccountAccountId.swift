//
// SnapTradeHoldingsAccountAccountId.swift
//
// Generated by Konfig
// https://konfigthis.com
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** Holdings with account ID */
public struct SnapTradeHoldingsAccountAccountId: Codable, JSONEncodable, Hashable {

    public var id: String?
    public var brokerageAuthorization: String?
    public var portfolioGroup: String?
    public var name: String?
    public var number: String?
    public var institutionName: String?
    public var meta: [String: AnyCodable]?
    public var cashRestrictions: [CashRestriction]?
    /** Time */
    public var createdDate: String?

    public init(id: String? = nil, brokerageAuthorization: String? = nil, portfolioGroup: String? = nil, name: String? = nil, number: String? = nil, institutionName: String? = nil, meta: [String: AnyCodable]? = nil, cashRestrictions: [CashRestriction]? = nil, createdDate: String? = nil) {
        self.id = id
        self.brokerageAuthorization = brokerageAuthorization
        self.portfolioGroup = portfolioGroup
        self.name = name
        self.number = number
        self.institutionName = institutionName
        self.meta = meta
        self.cashRestrictions = cashRestrictions
        self.createdDate = createdDate
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case id
        case brokerageAuthorization = "brokerage_authorization"
        case portfolioGroup = "portfolio_group"
        case name
        case number
        case institutionName = "institution_name"
        case meta
        case cashRestrictions = "cash_restrictions"
        case createdDate = "created_date"
    }

    public var additionalProperties: [String: AnyCodable] = [:]

    public subscript(key: String) -> AnyCodable? {
        get {
            if let value = additionalProperties[key] {
                return value
            }
            return nil
        }

        set {
            additionalProperties[key] = newValue
        }
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(id, forKey: .id)
        try container.encodeIfPresent(brokerageAuthorization, forKey: .brokerageAuthorization)
        try container.encodeIfPresent(portfolioGroup, forKey: .portfolioGroup)
        try container.encodeIfPresent(name, forKey: .name)
        try container.encodeIfPresent(number, forKey: .number)
        try container.encodeIfPresent(institutionName, forKey: .institutionName)
        try container.encodeIfPresent(meta, forKey: .meta)
        try container.encodeIfPresent(cashRestrictions, forKey: .cashRestrictions)
        try container.encodeIfPresent(createdDate, forKey: .createdDate)
        var additionalPropertiesContainer = encoder.container(keyedBy: String.self)
        try additionalPropertiesContainer.encodeMap(additionalProperties)
    }

    // Decodable protocol methods

    public init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)

        id = try container.decodeIfPresent(String.self, forKey: .id)
        brokerageAuthorization = try container.decodeIfPresent(String.self, forKey: .brokerageAuthorization)
        portfolioGroup = try container.decodeIfPresent(String.self, forKey: .portfolioGroup)
        name = try container.decodeIfPresent(String.self, forKey: .name)
        number = try container.decodeIfPresent(String.self, forKey: .number)
        institutionName = try container.decodeIfPresent(String.self, forKey: .institutionName)
        meta = try container.decodeIfPresent([String: AnyCodable].self, forKey: .meta)
        cashRestrictions = try container.decodeIfPresent([CashRestriction].self, forKey: .cashRestrictions)
        createdDate = try container.decodeIfPresent(String.self, forKey: .createdDate)
        var nonAdditionalPropertyKeys = Set<String>()
        nonAdditionalPropertyKeys.insert("id")
        nonAdditionalPropertyKeys.insert("brokerage_authorization")
        nonAdditionalPropertyKeys.insert("portfolio_group")
        nonAdditionalPropertyKeys.insert("name")
        nonAdditionalPropertyKeys.insert("number")
        nonAdditionalPropertyKeys.insert("institution_name")
        nonAdditionalPropertyKeys.insert("meta")
        nonAdditionalPropertyKeys.insert("cash_restrictions")
        nonAdditionalPropertyKeys.insert("created_date")
        let additionalPropertiesContainer = try decoder.container(keyedBy: String.self)
        additionalProperties = try additionalPropertiesContainer.decodeMap(AnyCodable.self, excludedKeys: nonAdditionalPropertyKeys)
    }
}

