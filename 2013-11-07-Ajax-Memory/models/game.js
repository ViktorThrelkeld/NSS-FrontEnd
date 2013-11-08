var mongoose = require('mongoose');
var _ = require('lodash');

var Game = mongoose.Schema({
  player    : String,
  squares   : Number,
  cards     : [Number],

// :{type: Number, default: function(){return _.shuffle()}},
  createdAt : {type: Date, default: Date.now}
});

mongoose.model('Game', Game);