/*
 * SnapTrade
 *
 * Connect brokerage accounts to your app for live positions and trading
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@snaptrade.com
 * Generated by: https://konfigthis.com
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = SnapTrade.Net.Client.OpenAPIDateConverter;

namespace SnapTrade.Net.Model
{
    /// <summary>
    /// SymbolsQuotesInner
    /// </summary>
    [DataContract(Name = "SymbolsQuotes_inner")]
    public partial class SymbolsQuotesInner : IEquatable<SymbolsQuotesInner>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SymbolsQuotesInner" /> class.
        /// </summary>
        /// <param name="symbol">symbol.</param>
        /// <param name="bidPrice">bidPrice.</param>
        /// <param name="askPrice">askPrice.</param>
        /// <param name="lastTradePrice">lastTradePrice.</param>
        /// <param name="bidSize">bidSize.</param>
        /// <param name="askSize">askSize.</param>
        public SymbolsQuotesInner(UniversalSymbol symbol = default(UniversalSymbol), double bidPrice = default(double), double askPrice = default(double), double lastTradePrice = default(double), double bidSize = default(double), double askSize = default(double))
        {
            this.Symbol = symbol;
            this.BidPrice = bidPrice;
            this.AskPrice = askPrice;
            this.LastTradePrice = lastTradePrice;
            this.BidSize = bidSize;
            this.AskSize = askSize;
        }

        /// <summary>
        /// Gets or Sets Symbol
        /// </summary>
        [DataMember(Name = "symbol", EmitDefaultValue = false)]
        public UniversalSymbol Symbol { get; set; }

        /// <summary>
        /// Gets or Sets BidPrice
        /// </summary>
        [DataMember(Name = "bid_price", EmitDefaultValue = false)]
        public double BidPrice { get; set; }

        /// <summary>
        /// Gets or Sets AskPrice
        /// </summary>
        [DataMember(Name = "ask_price", EmitDefaultValue = false)]
        public double AskPrice { get; set; }

        /// <summary>
        /// Gets or Sets LastTradePrice
        /// </summary>
        [DataMember(Name = "last_trade_price", EmitDefaultValue = false)]
        public double LastTradePrice { get; set; }

        /// <summary>
        /// Gets or Sets BidSize
        /// </summary>
        [DataMember(Name = "bid_size", EmitDefaultValue = false)]
        public double BidSize { get; set; }

        /// <summary>
        /// Gets or Sets AskSize
        /// </summary>
        [DataMember(Name = "ask_size", EmitDefaultValue = false)]
        public double AskSize { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class SymbolsQuotesInner {\n");
            sb.Append("  Symbol: ").Append(Symbol).Append("\n");
            sb.Append("  BidPrice: ").Append(BidPrice).Append("\n");
            sb.Append("  AskPrice: ").Append(AskPrice).Append("\n");
            sb.Append("  LastTradePrice: ").Append(LastTradePrice).Append("\n");
            sb.Append("  BidSize: ").Append(BidSize).Append("\n");
            sb.Append("  AskSize: ").Append(AskSize).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as SymbolsQuotesInner);
        }

        /// <summary>
        /// Returns true if SymbolsQuotesInner instances are equal
        /// </summary>
        /// <param name="input">Instance of SymbolsQuotesInner to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(SymbolsQuotesInner input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Symbol == input.Symbol ||
                    (this.Symbol != null &&
                    this.Symbol.Equals(input.Symbol))
                ) && 
                (
                    this.BidPrice == input.BidPrice ||
                    this.BidPrice.Equals(input.BidPrice)
                ) && 
                (
                    this.AskPrice == input.AskPrice ||
                    this.AskPrice.Equals(input.AskPrice)
                ) && 
                (
                    this.LastTradePrice == input.LastTradePrice ||
                    this.LastTradePrice.Equals(input.LastTradePrice)
                ) && 
                (
                    this.BidSize == input.BidSize ||
                    this.BidSize.Equals(input.BidSize)
                ) && 
                (
                    this.AskSize == input.AskSize ||
                    this.AskSize.Equals(input.AskSize)
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.Symbol != null)
                {
                    hashCode = (hashCode * 59) + this.Symbol.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.BidPrice.GetHashCode();
                hashCode = (hashCode * 59) + this.AskPrice.GetHashCode();
                hashCode = (hashCode * 59) + this.LastTradePrice.GetHashCode();
                hashCode = (hashCode * 59) + this.BidSize.GetHashCode();
                hashCode = (hashCode * 59) + this.AskSize.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        public IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}