import { searchPosts } from 'blog/helpers/search-posts';
import { module, test } from 'qunit';

module('Unit | Helper | search posts');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = searchPosts([42]);
  assert.ok(result);
});
