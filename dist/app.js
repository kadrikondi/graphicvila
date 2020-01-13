'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var routes = require('./routes/index');

var path = require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//static decl
app.use(express.static(path.join(__dirname, 'client/build')));
//production mode
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', function (req, res) {
        res.sendfile(path.join(__dirname = 'client/build/index.html'));
    });
}

//build mode
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/client/public/index.html'));
});
app.use('/', routes);
var port = 3001 || process.env.PORT;

app.listen(port, function () {

    if (process.env.NODE_ENV === 'production') {
        mongoose.connect('mongodb+srv://yakubebank:kadzee222.@cluster0-opegc.mongodb.net/test?retryWrites=true&w=majority', {
            useNewUrlParser: true
        }).then(function () {

            console.log("mongodb connected online");
        }).catch(function (err) {
            console.log(err);
        });
    } else {
        mongoose.connect('mongodb://localhost:27017/Graphicvila', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(function () {

            console.log("mongodb connected offline");
        }).catch(function (err) {
            console.log(err);
        });
    }
    console.log('Server spinned up on port ' + port);
});

module.exports = app;
//# sourceMappingURL=app.js.map