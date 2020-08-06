const cors = require('cors')
const app = require('express')()
const { PORT = 9090 } = process.env;
const fs = require('fs')

app.use(cors())

const apiRouter = require('./routes/apiRouter')

app.get('/', (req, res) => {
    res.status(200).send('https://github.com/sgwicks/dazn-tech-test')
})

app.use('/api', apiRouter)

app.listen(PORT, () => console.log(`Listening on ${PORT}...`));

module.exports = app;