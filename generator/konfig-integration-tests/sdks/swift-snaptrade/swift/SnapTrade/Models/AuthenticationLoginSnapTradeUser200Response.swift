//
// AuthenticationLoginSnapTradeUser200Response.swift
//
// Generated by Konfig
// https://konfigthis.com
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public enum AuthenticationLoginSnapTradeUser200Response: Codable, JSONEncodable, Hashable {
    case typeEncryptedResponse(EncryptedResponse)
    case typeLoginRedirectURI(LoginRedirectURI)

    public func encode(to encoder: Encoder) throws {
        var container = encoder.singleValueContainer()
        switch self {
        case .typeEncryptedResponse(let value):
            try container.encode(value)
        case .typeLoginRedirectURI(let value):
            try container.encode(value)
        }
    }

    public init(from decoder: Decoder) throws {
        let container = try decoder.singleValueContainer()
        if let value = try? container.decode(EncryptedResponse.self) {
            self = .typeEncryptedResponse(value)
        } else if let value = try? container.decode(LoginRedirectURI.self) {
            self = .typeLoginRedirectURI(value)
        } else {
            throw DecodingError.typeMismatch(Self.Type.self, .init(codingPath: decoder.codingPath, debugDescription: "Unable to decode instance of AuthenticationLoginSnapTradeUser200Response"))
        }
    }
}
