var mongoose = require('mongoose');

var Artist = mongoose.Schema({
  name:      {type: String,
              required: [true, 'Nmae is required'],
              match: [/^[a-zA-Z]+[]/]},
  photo:     String,
  website:   String,
  bio:       String,
  songs:     [{type: mongoose.Schema.Types.ObjectId, ref: 'Song'}],
  // genres:   [{type: mongoose.Schema.Types.ObjectId, ref: 'Genre'}],
  createdAt: {type: Date, default: Date.now}
});

mongoose.model('Artist', Artist);