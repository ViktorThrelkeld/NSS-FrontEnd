var mongoose = require('mongoose');

var Song = mongoose.Schema({
  title:    String,
  filename: String,
  duration: Number,
  genres:   [{type: mongoose.Schema.Types.ObjectId, ref: 'Genre'}],
  art:      String,
  lyrics:   String,
  createdAt: {type: Date, default: Date.now}
});

mongoose.model('Song', Song);