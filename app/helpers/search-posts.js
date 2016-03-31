import Ember from 'ember';

export function searchPosts(params) {
  if(params[0].get('tag') === params[1]){
    return true;
  } else {
    return false;
  }
}

export default Ember.Helper.helper(searchPosts);
