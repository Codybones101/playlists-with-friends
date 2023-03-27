const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    artist: {type: String, required: true},
    songTitle: {type: String, required: true},
    link: {type: String, required: true}
});

const playlistSchema = new Schema({
    user: {type: Schema.Types.ObjectId, required: true},
    name: {type: String, required: true},
    songs: [songSchema]
  }, {
    timestamps: true,
  });


module.exports = mongoose.model('Playlist', playlistSchema);