/*
 * SnapTrade
 *
 * Connect brokerage accounts to your app for live positions and trading
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@snaptrade.com
 * Generated by: https://konfigthis.com
 */


using SnapTrade.Net.Api;

namespace SnapTrade.Net.Client
{
    /// <summary>
    ///  SDK client
    /// </summary>
    public class Snaptrade
    {
        /// <summary>
        /// API instance
        /// </summary>
        public AccountInformationApi AccountInformation { get; private set; }

        /// <summary>
        /// API instance
        /// </summary>
        public APIStatusApi APIStatus { get; private set; }

        /// <summary>
        /// API instance
        /// </summary>
        public AuthenticationApi Authentication { get; private set; }

        /// <summary>
        /// API instance
        /// </summary>
        public ConnectionsApi Connections { get; private set; }

        /// <summary>
        /// API instance
        /// </summary>
        public ErrorLogsApi ErrorLogs { get; private set; }

        /// <summary>
        /// API instance
        /// </summary>
        public OptionsApi Options { get; private set; }

        /// <summary>
        /// API instance
        /// </summary>
        public ReferenceDataApi ReferenceData { get; private set; }

        /// <summary>
        /// API instance
        /// </summary>
        public TradingApi Trading { get; private set; }

        /// <summary>
        /// API instance
        /// </summary>
        public TransactionsAndReportingApi TransactionsAndReporting { get; private set; }

        /// <summary>
        /// Configuration instance
        /// </summary>
        public readonly Configuration Configuration;

        /// <summary>
        /// Constructor
        /// </summary>
        public Snaptrade()
        {
            Configuration = new Configuration();
            init();
        }

        private void init()
        {
            AccountInformation = new AccountInformationApi(Configuration);
            APIStatus = new APIStatusApi(Configuration);
            Authentication = new AuthenticationApi(Configuration);
            Connections = new ConnectionsApi(Configuration);
            ErrorLogs = new ErrorLogsApi(Configuration);
            Options = new OptionsApi(Configuration);
            ReferenceData = new ReferenceDataApi(Configuration);
            Trading = new TradingApi(Configuration);
            TransactionsAndReporting = new TransactionsAndReportingApi(Configuration);
        }

        /// <summary>
        /// Setter for base path
        /// </summary>
        public Snaptrade SetBasePath(string basePath)
        {
            Configuration.BasePath = basePath;
            init();
            return this;
        }

        /// <summary>
        /// Setter for verify SSL configuration. Set to false when you want to disable SSL verification.
        /// </summary>
        public Snaptrade SetVerifySsl(bool verifySsl)
        {
            Configuration.VerifySsl = verifySsl;
            init();
            return this;
        }

        /// <summary>
        /// Setter for Username
        /// </summary>
        public Snaptrade SetUsername(string username)
        {
            Configuration.Username = username;
            init();
            return this;
        }

        /// <summary>
        /// Setter for Password
        /// </summary>
        public Snaptrade SetPassword(string password)
        {
            Configuration.Password = password;
            init();
            return this;
        }

        /// <summary>
        /// Setter for Access Token
        /// </summary>
        public Snaptrade SetAccessToken(string accessToken)
        {
            Configuration.AccessToken = accessToken;
            init();
            return this;
        }

        /// <summary>
        /// Setter for API Key
        /// </summary>
        public Snaptrade SetClientId(string apiKey)
        {
            Configuration.ApiKey["clientId"] = apiKey;
            init();
            return this;
        }

        /// <summary>
        /// Setter for API Key
        /// </summary>
        public Snaptrade SetSignature(string apiKey)
        {
            Configuration.ApiKey["Signature"] = apiKey;
            init();
            return this;
        }

        /// <summary>
        /// Setter for API Key
        /// </summary>
        public Snaptrade SetTimestamp(string apiKey)
        {
            Configuration.ApiKey["timestamp"] = apiKey;
            init();
            return this;
        }

        /// <summary>
        /// Setter for "ConsumerKey" client state
        /// </summary>
        public Snaptrade SetConsumerKey(string consumerKey)
        {
            Configuration.ConsumerKey = consumerKey;
            init();
            return this;
        }
    }
}