const Playlist = require('../../models/playlist');

module.exports = {
    create,
};

async function create(req, res) {
    req.body.user = req.user._id
   const playList = await Playlist.findById(req.params.id)
   playList.songs.push(req.body)
   await playList.save()
   res.json(playList)

}
