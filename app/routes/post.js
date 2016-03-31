import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      posts: this.store.findRecord('post', params.post_id)
    });
  },

  actions: {
    submitComment(params){
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(newComment);
      newComment.save().then(function(){
        return post.save();
      });
      this.transitionTo('/post/'+params.postId);
    },
    deleteComment(comment){
      if(confirm("Delete this comment?")){
        comment.destroyRecord();
        this.transitionTo('/post/'+comment.postId);
      }
    }
  }
});
