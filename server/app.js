const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes/index')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use('/', routes)
const port = 3001 || process.env.PORT

app.listen(port, () => {
    console.log(`Server spinned up on port ${port}`)
})

mongoose.connect('mongodb://localhost:27017/Graphicvila', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = app;