const apiRouter = require('express').Router()
const streamsRouter = require('./streamsRouter')
const usersRouter = require('./usersRouter')

apiRouter.use('/streams', streamsRouter)
apiRouter.use('/users', usersRouter)

module.exports = apiRouter