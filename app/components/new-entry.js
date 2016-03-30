import Ember from 'ember';

export default Ember.Component.extend({
  newBlogPost: false,
  actions: {
    showEntryForm(){
      this.set('newBlogPost', true);
    },
    submitEntry(){
      var blogParams = {
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        body: this.get('body'),
        image: this.get('image')
      };
      this.set('newBlogPost', false);
      this.sendAction('submitEntry', blogParams);
    }
  }
});
