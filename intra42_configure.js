Template.configureLoginServiceDialogForIntra42.helpers({
  siteUrl: function () {
    return Meteor.absoluteUrl('', {secure: true})
  }
})

Template.configureLoginServiceDialogForIntra42.fields = function () {
  return [
    {property: 'clientId', label: 'Client ID'},
    {property: 'secret', label: 'Client Secret'}
  ]
}
