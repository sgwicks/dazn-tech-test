const connection = require('../db/connection')

exports.fetchStreamKeyById = (stream_id) => {
    return connection('streams')
        .select('stream_key')
        .where('stream_id', stream_id)
}