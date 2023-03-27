const PlayList = require('../../models/playlist');

module.exports = {
    create,
};

async function create(req, res) {
    req.body.user = req.user._id
   const playList = await PlayList.create(req.body)
   console.log(playList)
   res.json(playList)
}