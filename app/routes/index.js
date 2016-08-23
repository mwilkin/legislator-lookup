import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    },
    committees() {
      this.transitionTo('committees');
    },
    billList(){
      this.transitionTo('bill-list');
    }
  }
});
