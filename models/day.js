/* eslint-disable camelcase */
var Sequelize = require('sequelize');
var db = require('./_db');
//var Place = require('./place');

var Day = db.define('day', {
  name: Sequelize.INTEGER,
});

module.exports = Day;
