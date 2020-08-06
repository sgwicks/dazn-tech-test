const cors = require('cors')
const app = require('express')()
const { PORT = 9090 } = process.env;

app.use(cors())

const apiRouter = require('./routes/apiRouter')

app.get('/', (req, res) => {
    res.status(200).send('Hello world')
})

app.use('/api', apiRouter)

app.listen(PORT, () => console.log(`Listening on ${PORT}...`));

module.exports = app;