import DS from 'ember-data';

export default DS.Model.extend({
  post: DS.belongsTo('post', {async: true}),
  name: DS.attr(),
  email: DS.attr(),
  date: DS.attr(),
  text: DS.attr()
});
