var mongoose = require('mongoose');
var Song = mongoose.model('Song');
var Artist = mongoose.model('Artist');
var Genre = mongoose.model('Genre');


/*
 * GET /artists
 */

exports.index = function(req, res){
  Artist.find(function(err, artists){
    res.render('artists/index', {title: 'Artists', artists: artists});
  });
};

/*
 * GET /artists/new
 */

exports.new = function(req, res){

  Song.find(function(err, songs){
    res.render('artists/new', {title: 'New Artist', songs: songs, artist: new Artist});
  });
};

/*
 * POST /artists
 */

exports.create = function(req, res){
  new Artist(req.body).save(function(err, artist, count){
    res.redirect('/artists');
  });
};

/*
 * GET /artists/:id
 */


exports.show = function(req, res){
  Artist.findById(req.params.id, function(err, artist){
    res.render('artists/show', {title: 'artist.name', artist: artist});
  });
};

/*
 * DELETE /songs/:id
 */


exports.delete = function(req, res){
  Artist.findByIdAndRemove(req.params.id, function(err, post){
    res.redirect('/artists');
  });
};

/*
 * GET /artists/:id/edit
 */

exports.edit = function(req, res){
    Song.find(function(err, songs){

      Artist.findById(req.params.id, function(err, artist){
        res.render('artists/edit', {title: 'Edit artist', artist: artist, songs: songs});
      });
    });
  };

/*
 * PUT /artists
 */

exports.update = function(req, res){
  Artist.findByIdAndUpdate(req.params.id, req.body, function(err, artist){
      res.redirect('/artists');
    });
};
