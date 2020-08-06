const app = require('express')()

app.get('/', (req, res) => {
    res.status(200).send('Hello world')
})

app.listen(2020, () => {
    console.log("listening on 2020")
})

module.exports = app;