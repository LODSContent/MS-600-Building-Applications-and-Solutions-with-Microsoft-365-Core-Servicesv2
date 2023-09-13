@secure()
param provisionParameters object

// Resources for application insights
module appInsightProvision './provision/appinsight.bicep' = {
  name: 'appInsightProvision'
}

output appInsightOutput object = {
  teamsFxPluginId: 'fx-resource-app-insight'
  connectionString: appInsightProvision.outputs.connectionString
  instrumentationKey: appInsightProvision.outputs.instrumentationKey
}

// Resources for frontend hosting
module frontendHostingProvision './provision/frontendHosting.bicep' = {
  name: 'frontendHostingProvision'
  params: {
    provisionParameters: provisionParameters
  }
}

output frontendHostingOutput object = {
  teamsFxPluginId: 'fx-resource-frontend-hosting'
  domain: frontendHostingProvision.outputs.domain
  endpoint: frontendHostingProvision.outputs.endpoint
  indexPath: frontendHostingProvision.outputs.indexPath
  storageResourceId: frontendHostingProvision.outputs.resourceId
}
// Resources for identity
module userAssignedIdentityProvision './provision/identity.bicep' = {
  name: 'userAssignedIdentityProvision'
  params: {
    provisionParameters: provisionParameters
  }
}

output identityOutput object = {
  teamsFxPluginId: 'fx-resource-identity'
  identityName: userAssignedIdentityProvision.outputs.identityName
  identityResourceId: userAssignedIdentityProvision.outputs.identityResourceId
  identityClientId: userAssignedIdentityProvision.outputs.identityClientId
}
