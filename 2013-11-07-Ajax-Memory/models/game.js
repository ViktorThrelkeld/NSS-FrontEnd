var mongoose = require('mongoose');
var _ = require('lodash');

var Game = mongoose.Schema({
  player    : String,
  squares   : Number,
  createdAt : {type: Date, default: Date.now}
});

mongoose.model('Game', Game);