import Ember from 'ember';

export default Ember.Component.extend({
  editEntryForm: false,
  actions: {
    editEntryForm() {
      this.set('editEntryForm', true);
    },
    editEntry(post) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        body: this.get('body'),
        image: this.get('image')
      };
      this.set('editEntryForm', false);
      this.sendAction('editEntry', post, params);
    }
  }
});
