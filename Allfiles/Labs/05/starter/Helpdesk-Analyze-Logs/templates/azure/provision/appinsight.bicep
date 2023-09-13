var appinsightName = 'appinsight${uniqueString(resourceGroup().id)}'

resource appinsight 'Microsoft.Insights/components@2020-02-02' = {
  name: appinsightName
  location: resourceGroup().location
  kind: 'web'
  properties: {
    Application_Type: 'web'
    Flow_Type: 'Redfield'
    IngestionMode: 'ApplicationInsights'
    publicNetworkAccessForIngestion: 'Enabled'
    publicNetworkAccessForQuery: 'Enabled'
    Request_Source: 'IbizaAIExtension'
    RetentionInDays: 90
  }

}

output instrumentationKey string = appinsight.properties.InstrumentationKey
output connectionString string = appinsight.properties.ConnectionString

