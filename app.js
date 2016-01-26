'use strict';

var Flickr = require('node-flickr');
var key = require('./api_key');
var keys = {"api_key": key};

var flickr = new Flickr(keys);
var urls = require('./controller/urls');

flickr.get("photos.search", {"tags":"cats", "per_page": 10, "page": 1}, function(err, result){
    if (err) return console.error(err);
    urls.makeUrl(result.photos.photo, function(error, photoLink){
      if(error) console.log(error);
      //urls.postUrl(photoLink);
    });
});
