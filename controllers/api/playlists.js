const PlayList = require('../../models/playlist');

module.exports = {
    create,
    getAll,
    update,
    getDetail
};

async function create(req, res) {
    req.body.user = req.user._id
   const playList = await PlayList.create(req.body)
   console.log(playList)
   res.json(playList)
}

async function getAll(req, res) {
    const playLists = await PlayList.find()
    res.json(playLists)
}
async function update(req, res) {
    const playList = await PlayList.findByIdAndUpdate({_id: req.params.id, user: req.user._id} , req.body, {new: true});
    res.json(playList)
}

async function getDetail(req, res) {
    const playList = await PlayList.findOne({_id: req.params.id})
    res.json(playList)
}