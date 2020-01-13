'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var routes = require('./routes/index');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

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