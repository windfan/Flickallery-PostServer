'use strict';

var Flickr = require('node-flickr');
var key = require('./api_key');
var keys = {"api_key": key};

var flickr = new Flickr(keys);
var urls = require('./controller/urls');

(function _request () {
  flickr.get("photos.search", {"tags":"cats", "per_page": 1, "page": Math.floor((Math.random() * 1000) + 1)}, function(err, result){
      if (err) return console.error(err);
      urls.makeUrl(result.photos.photo, function(error, photoLinks){
        if(error) console.log(error);
        urls.postUrl(photoLinks, function(error){
          if(error) console.log(error);
        });
      });
  });
  setTimeout(_request, 5000);
})();
