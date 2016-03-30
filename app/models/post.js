import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  body: DS.attr(),
  preview: DS.attr(),
  image: DS.attr(),
  comments: DS.hasMany('comment', {async: true})
});
