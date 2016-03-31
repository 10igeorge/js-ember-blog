import Ember from 'ember';
import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
  filesDidChange: function(files) {
    console.log(files[0]);
    const uploader = EmberUploader.Uploader.create({
      url: '/upload',
      type: 'PUT'
    });

    if (!Ember.isEmpty(files)) {
      uploader.upload(files[0]);
    }
  }
});
