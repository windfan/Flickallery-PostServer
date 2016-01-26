'use strict';

var fUrl = require('flickr-urls');
var http = require('http');
var request = require('request');
/* make urls based on the photos array
 * @param: {Array} photos
 * @param: {Function} callback
 */
module.exports.makeUrl = function(photos, callback) {
  var urlArr = [];
  var params = { server: '', secret: '', id: '', farm: '', size: fUrl.IMG_SIZES.LARGE_1024 };
  for(var index in photos) {
    params.server = photos[index].server;
    params.secret = photos[index].secret;
    params.id = photos[index].id;
    params.farm = photos[index].farm;
    var url = fUrl.getFarmUrl(params);
    var obj = {"photo_id": url};
    urlArr.push(obj);
  }
  //console.log(urlArr);
  return callback(null, urlArr);
}

/* post urls based on the photos array
 * @param: {Array} photoLinks
 * @param: {Function} callback
 */
module.exports.postUrl = function(photoLinks, callback2) {
  var requestObj = {
    json: photoLinks,
    method: "POST",
    url: "http://localhost:8000"
  }

	request(requestObj, function(err){
		if (err) console.log(err);
	});
}
