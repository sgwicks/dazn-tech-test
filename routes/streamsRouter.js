const streamsRouter = require('express').Router();
const { getStreamKeyById } = require('../controllers/streamsControllers');

streamsRouter.route('/:stream_id')
    .get(getStreamKeyById)

module.exports = streamsRouter