'use strict';

var fUrl = require('flickr-urls');

module.exports.makeUrl = function(photos, callback) {
  var params = {
  	server: '',
  	secret: '',
  	id: '',
  	farm: '',
  	size: fUrl.IMG_SIZES.LARGE_1024
  };
  for(var index in photos) {
    params.server = photos[index].server;
    params.secret = photos[index].secret;
    params.id = photos[index].id;
    params.farm = photos[index].farm;
    var url = fUrl.getFarmUrl(params);
    console.log(url);
  }
}
