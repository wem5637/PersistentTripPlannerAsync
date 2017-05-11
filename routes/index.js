var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');
var Day = require('../models/day');

router.get('/', function(req, res, next) {

    res.render('index')
});


router.route('/api/hotels').get(function(req, res, next){
  var arr;
  Hotel.findAll()
  .then(function(hotels){
    arr = hotels;
    res.json(arr);
  })
})

router.route('/api/restaurants').get(function(req, res, next){
  var arr;
  Restaurant.findAll()
  .then(function(restaurants){
    arr = restaurants;
    res.json(arr);
  })
})

router.route('/api/activities').get(function(req, res, next){
  var arr;
  Activity.findAll()
  .then(function(activities){
    arr = activities;
    res.json(arr);
  })
})

router.route('/api/day').get(function(req,res,next){
  var arr;
  Day.findAll()
  .then(function(days){
    arr = days;
    res.json(arr);
  });
});

router.route('/api/day/:id').post(function(req,res,next){
  //form day Instance
  var resobj = {};
  resobj.id = req.params.id;
  resobj.day = Day.create( {name:req.params.id,});
  res.json(resobj);
});


module.exports = router;

















