/*
 * splitit-web-api-v3
 *
 * Splitit's Web API
 *
 * The version of the OpenAPI document: 1.0.0
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
using OpenAPIDateConverter = CsharpSplitit.Net.Client.OpenAPIDateConverter;

namespace CsharpSplitit.Net.Model
{
    /// <summary>
    /// CardData
    /// </summary>
    [DataContract(Name = "CardData")]
    public partial class CardData : IEquatable<CardData>, IValidatableObject
    {

        /// <summary>
        /// Gets or Sets CardBrand
        /// </summary>
        [DataMember(Name = "CardBrand", EmitDefaultValue = false)]
        public CardBrand? CardBrand { get; set; }

        /// <summary>
        /// Gets or Sets CardType
        /// </summary>
        [DataMember(Name = "CardType", EmitDefaultValue = false)]
        public CardType? CardType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="CardData" /> class.
        /// </summary>
        /// <param name="cardHolderFullName">cardHolderFullName.</param>
        /// <param name="cardNumber">cardNumber.</param>
        /// <param name="cardExpYear">cardExpYear.</param>
        /// <param name="cardExpMonth">cardExpMonth.</param>
        /// <param name="cardCvv">cardCvv.</param>
        /// <param name="cardBrand">cardBrand.</param>
        /// <param name="cardType">cardType.</param>
        public CardData(string cardHolderFullName = default(string), string cardNumber = default(string), string cardExpYear = default(string), string cardExpMonth = default(string), string cardCvv = default(string), CardBrand? cardBrand = default(CardBrand?), CardType? cardType = default(CardType?))
        {
            this.CardHolderFullName = cardHolderFullName;
            this.CardNumber = cardNumber;
            this.CardExpYear = cardExpYear;
            this.CardExpMonth = cardExpMonth;
            this.CardCvv = cardCvv;
            this.CardBrand = cardBrand;
            this.CardType = cardType;
        }

        /// <summary>
        /// Gets or Sets CardHolderFullName
        /// </summary>
        [DataMember(Name = "CardHolderFullName", EmitDefaultValue = false)]
        public string CardHolderFullName { get; set; }

        /// <summary>
        /// Gets or Sets CardNumber
        /// </summary>
        [DataMember(Name = "CardNumber", EmitDefaultValue = false)]
        public string CardNumber { get; set; }

        /// <summary>
        /// Gets or Sets CardExpYear
        /// </summary>
        [DataMember(Name = "CardExpYear", EmitDefaultValue = false)]
        public string CardExpYear { get; set; }

        /// <summary>
        /// Gets or Sets CardExpMonth
        /// </summary>
        [DataMember(Name = "CardExpMonth", EmitDefaultValue = false)]
        public string CardExpMonth { get; set; }

        /// <summary>
        /// Gets or Sets CardCvv
        /// </summary>
        [DataMember(Name = "CardCvv", EmitDefaultValue = false)]
        public string CardCvv { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CardData {\n");
            sb.Append("  CardHolderFullName: ").Append(CardHolderFullName).Append("\n");
            sb.Append("  CardNumber: ").Append(CardNumber).Append("\n");
            sb.Append("  CardExpYear: ").Append(CardExpYear).Append("\n");
            sb.Append("  CardExpMonth: ").Append(CardExpMonth).Append("\n");
            sb.Append("  CardCvv: ").Append(CardCvv).Append("\n");
            sb.Append("  CardBrand: ").Append(CardBrand).Append("\n");
            sb.Append("  CardType: ").Append(CardType).Append("\n");
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
            return this.Equals(input as CardData);
        }

        /// <summary>
        /// Returns true if CardData instances are equal
        /// </summary>
        /// <param name="input">Instance of CardData to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CardData input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.CardHolderFullName == input.CardHolderFullName ||
                    (this.CardHolderFullName != null &&
                    this.CardHolderFullName.Equals(input.CardHolderFullName))
                ) && 
                (
                    this.CardNumber == input.CardNumber ||
                    (this.CardNumber != null &&
                    this.CardNumber.Equals(input.CardNumber))
                ) && 
                (
                    this.CardExpYear == input.CardExpYear ||
                    (this.CardExpYear != null &&
                    this.CardExpYear.Equals(input.CardExpYear))
                ) && 
                (
                    this.CardExpMonth == input.CardExpMonth ||
                    (this.CardExpMonth != null &&
                    this.CardExpMonth.Equals(input.CardExpMonth))
                ) && 
                (
                    this.CardCvv == input.CardCvv ||
                    (this.CardCvv != null &&
                    this.CardCvv.Equals(input.CardCvv))
                ) && 
                (
                    this.CardBrand == input.CardBrand ||
                    this.CardBrand.Equals(input.CardBrand)
                ) && 
                (
                    this.CardType == input.CardType ||
                    this.CardType.Equals(input.CardType)
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
                if (this.CardHolderFullName != null)
                {
                    hashCode = (hashCode * 59) + this.CardHolderFullName.GetHashCode();
                }
                if (this.CardNumber != null)
                {
                    hashCode = (hashCode * 59) + this.CardNumber.GetHashCode();
                }
                if (this.CardExpYear != null)
                {
                    hashCode = (hashCode * 59) + this.CardExpYear.GetHashCode();
                }
                if (this.CardExpMonth != null)
                {
                    hashCode = (hashCode * 59) + this.CardExpMonth.GetHashCode();
                }
                if (this.CardCvv != null)
                {
                    hashCode = (hashCode * 59) + this.CardCvv.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.CardBrand.GetHashCode();
                hashCode = (hashCode * 59) + this.CardType.GetHashCode();
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