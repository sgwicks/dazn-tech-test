const { fetchStreamKeyById, fetchStreamCountByUserId } = require("../models/streamsModels")

exports.getStreamKeyById = (req, res, next) => {
    const {user_id, stream_id} = req.params
    return fetchStreamCountByUserId(user_id)
        .then(([{stream_count}]) => {
            if (stream_count > 2) res.status(403).send({msg: 'Request denied: too many concurrent streams'})
            else fetchStreamKeyById(stream_id)
            .then(([{stream_key}]) => {
                res.status(200).send({stream_key})
            })
        })
}