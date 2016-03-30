import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },

  actions: {
    submitEntry(blogParams){
      var newEntry = this.store.createRecord('post', blogParams);
      newEntry.save();
      this.transitionTo('admin');
    },
    deleteEntry(post){
      if(confirm("Delete entry?")){
        post.destroyRecord();
        this.transitionTo('admin');
      }
    }
  }
});
