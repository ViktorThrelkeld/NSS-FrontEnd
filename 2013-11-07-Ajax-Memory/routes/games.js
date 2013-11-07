var mongoose = require('mongoose');
var colors = require('colors');
var Game = mongoose.model('Game');

// Colors
// bold, italic, underline, inverse, yellow, cyan,
// white, magenta, green, red, grey, blue, rainbow,
// zebra, random

/*
 * GET /
 */

exports.index = function(req, res){
  console.log('games.index'.italic.underline.bold.magenta);
  res.render('games/index', {title: 'Memory'});
};

/*
 * POST /games/start
 */

exports.create = function(req, res){
  new Game(req.body).save(function(err, game){
    res.send(game);
  });
};
