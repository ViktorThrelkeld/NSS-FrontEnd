var mongoose = require('mongoose');
var colors = require('colors');
var Game = mongoose.model('Game');
var _ = require('lodash');


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
  // new Game(req.body).save(function(err, game){
    var game = new Game(req.body);
    for(var i = 0; i < req.body.squares; i++){
      game.cards.push(i);
      game.cards.push(i);
      // console.log(req.body);
      // console.log(game);
    }
    game.cards = _.shuffle(game.cards);
    game.save(function(err, game){
      res.send(game);
    });
  };