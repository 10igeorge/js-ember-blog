import Ember from 'ember';

export default Ember.Component.extend({
  newBlogPost: false,
  actions: {
    showEntryForm(){
      this.set('newBlogPost', true);
    },
    submitEntry(){
      console.log(this.get('dropdown'));
      var date = new Date();
      date = date.toString().substring(0,15);
      var blogParams = {
        title: this.get('title'),
        author: this.get('author'),
        date: date,
        tag: this.get('dropdown'),
        body: this.get('body'),
        preview: this.get('body').substring(0,300),
        image: this.get('image')
      };
      this.set('newBlogPost', false);
      this.sendAction('submitEntry', blogParams);
    }
  }
});
