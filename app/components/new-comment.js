import Ember from 'ember';

export default Ember.Component.extend({
  newComment: false,
  actions: {
    showCommentForm(){
      this.set('newComment', true);
    },
    submitComment(){
      var date = new Date();
      date = date.toString().substring(0,15);
      var params = {
        postId: this.get('postId'),
        post: this.get('post'),
        name: this.get('name'),
        email: this.get('email'),
        date: date,
        text: this.get('text')
      };
      console.log(this.get('content'));
      console.log(this);
      this.set('newComment', false);
      this.sendAction('submitComment', params);
    }
  }
});
