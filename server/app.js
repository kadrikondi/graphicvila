const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes/index')

const path = require('path');

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
//static decl
app.use(express.static(path.join(__dirname, '../client/build')));
//production mode
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname = '../client/build/index.html'));
    })
}

//   //build mode
//   app.get('*', (req, res) => {  res.sendFile(path.join(__dirname+'../client/public/index.html'));})
app.use('/', routes)
const port = 3001 || process.env.PORT

app.listen(port, () => {
    //happy

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