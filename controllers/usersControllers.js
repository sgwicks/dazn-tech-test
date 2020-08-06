const { incrementStreamCount } = require("../models/streamsModels")

exports.patchStreamCountByUserId = (req, res) => {
    const {user_id} = req.params

    return incrementStreamCount(user_id, -1)
        .then(() => {
            res.sendStatus(200)
        })
} 