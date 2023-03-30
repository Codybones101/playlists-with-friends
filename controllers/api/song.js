const Playlist = require('../../models/playlist');

module.exports = {
    create,
    delete: deleteSong,
};

async function create(req, res) {
    req.body.user = req.user._id
    const URL = req.body.link
    if(URL.includes("youtube")) {

    }
   const playList = await Playlist.findById(req.params.id)
   playList.songs.push(req.body)
   await playList.save()
   res.json(playList)

}

async function deleteSong(req, res) {
    const playlist = await Playlist.findOne({"songs._id" : req.params.id})
    playlist.songs.remove(req.params.id)
    await playlist.save()
    res.json(playlist)
    
}
