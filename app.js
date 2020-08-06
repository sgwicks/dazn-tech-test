const app = require('express')()
const apiRouter = require('./routes/apiRouter')

app.get('/', (req, res) => {
    res.status(200).send('Hello world')
})

app.use('/api', apiRouter)

app.listen(2020, () => {
    console.log("listening on 2020")
})

module.exports = app;