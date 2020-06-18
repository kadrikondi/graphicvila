const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes/index')
const path = require('path');

const PORT = process.env.PORT ||  3001
mongoose.connect('mongodb+srv://yakubebank:kadzee222.@cluster0-opegc.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

//app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use('/', routes)

//production mode
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next()
  })
  
  
  //if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../client/build')));
  
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    })
 // }


app.listen(PORT, () => {
    console.log(`Application started on port ${PORT}`)
})
// app.listen(port, () => {
//     //happy

//     if (process.env.NODE_ENV === 'production') {
//         mongoose.connect('mongodb+srv://yakubebank:kadzee222.@cluster0-opegc.mongodb.net/test?retryWrites=true&w=majority', {
//                 useNewUrlParser: true
//             })
//             .then(() => {

//                 console.log("mongodb connected online")
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     } else {
//         mongoose.connect('mongodb://localhost:27017/Graphicvila', {
//                 useNewUrlParser: true,
//                 useUnifiedTopology: true
//             }).then(() => {

//                 console.log("mongodb connected offline")
//             })
//             .catch((err) => {
//                 console.log(err)
//             })

//     }
//     console.log(`Server spinned up on port ${port}`)
// })



module.exports = app;

// kondipress and otitoju john graphivila