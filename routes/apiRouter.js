const apiRouter = require('express').Router()
const streamsRouter = require('./streamsRouter')

apiRouter.use('/streams', streamsRouter)

module.exports = apiRouter