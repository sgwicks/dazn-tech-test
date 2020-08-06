const streamsRouter = require('express').Router();
const { getStreamKeyById } = require('../controllers/streamsControllers');

streamsRouter.route('/:user_id/:stream_id')
    .get(getStreamKeyById)

module.exports = streamsRouter