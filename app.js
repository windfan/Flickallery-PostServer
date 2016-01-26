'use strict';

var Flickr = require('node-flickr');
var key = require('./api_key');
var keys = {"api_key": key};

var flickr = new Flickr(keys);

flickr.get("photos.search", {"tags":"cat", "per_page": 10, "page": 10}, function(err, result){
    if (err) return console.error(err);
    console.log(result.photos);
});
