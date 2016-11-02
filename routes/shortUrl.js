var express = require('express');
var router = express.Router();
var Url = require('../models/url');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var url = req.originalUrl.slice(1);
  Url.findOne({_id: url}, function(err,obj) {
    if(err){
      res.render(err);
    } else {
      res.redirect(obj.url);
    }
  });

});

module.exports = router;
