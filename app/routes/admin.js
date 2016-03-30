import Ember from 'ember';

export default Ember.Route.extend({
  
  actions: {
    submitEntry(blogParams){
      var newEntry = this.store.createRecord('post', blogParams);
      newEntry.save();
      this.transitionTo('admin');
    }
  }
});
