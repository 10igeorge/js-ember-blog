import Ember from 'ember';

export default Ember.Component.extend({
  newComment: false,
  actions: {
    showCommentForm(){
      this.set('newComment', true);
    },
    submitComment(){
      var params = {
        id: this.get('id'),
        name: this.get('name'),
        email: this.get('email'),
        date: this.get('date'),
        text: this.get('text')
      };
      console.log(this.get('content'));
      console.log(this);
      this.set('newComment', false),
      this.sendAction('submitComment', params);
    }
  }
});
