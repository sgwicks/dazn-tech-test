const connection = require('../db/connection')

exports.fetchStreamKeyById = (stream_id) => {
    return connection('streams')
        .select('stream_key')
        .where('stream_id', stream_id)
}

exports.fetchStreamCountByUserId = (user_id) => {
    return connection('users')
        .select('stream_count')
        .where('user_id', user_id)
}

exports.incrementStreamCount = (user_id) => {
    return connection('users')
        .where('user_id', user_id)
        .increment('stream_count', 1)
}