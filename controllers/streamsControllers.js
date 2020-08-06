const { fetchStreamKeyById } = require("../models/streamsModels")

exports.getStreamKeyById = (req, res, next) => {
    const {stream_id} = req.params
    return fetchStreamKeyById(String(stream_id))
        .then(([{stream_key}]) => {
            res.status(200).send({stream_key})
        })
}