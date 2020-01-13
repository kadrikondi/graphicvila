const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes/index')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/', routes)
const port = 3001 || process.env.PORT

app.listen(port, () => {


    if (process.env.NODE_ENV === 'production') {
        mongoose.connect('mongodb+srv://yakubebank:kadzee222.@cluster0-opegc.mongodb.net/test?retryWrites=true&w=majority', {
                useNewUrlParser: true
            })
            .then(() => {

                console.log("mongodb connected online")
            })
            .catch((err) => {
                console.log(err)
            })
    } else {
       mongoose.connect('mongodb://localhost:27017/Graphicvila', {
           useNewUrlParser: true,
           useUnifiedTopology: true
       }).then(() => {

                console.log("mongodb connected offline")
            })
            .catch((err) => {
                console.log(err)
            })

    }
    console.log(`Server spinned up on port ${port}`)
})



module.exports = app;
