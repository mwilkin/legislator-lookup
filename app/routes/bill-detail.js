import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/bills?apikey=b48d5cdb794f4f3398f27b9e50f44340&congress=113&history.enacted=true&bill_id=' + params.bill_id;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
