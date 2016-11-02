var express = require('express');
var router = express.Router();
var Url = require('../models/url.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);
  var url = req.originalUrl.slice(5, req.originalUrl.length);
  var fullUrl = req.protocol + '://' + req.get('host');

  if (url.match(regex) && (url.indexOf("http://") !== -1 || url.indexOf("https://")  !== -1)) {
    Url.create({url: url}, function(err, newItem){
      console.log(newItem);
      var resObject = {"original_url":url,"short_url":fullUrl + '/' + newItem._id}
      res.send(
        resObject
      );
   });
 } else {
   res.send('Please check your URL');
 }

});

module.exports = router;
