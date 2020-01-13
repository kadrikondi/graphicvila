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
    console.log('Server spinned up on port ' + port);
});

mongoose.connect('mongodb://localhost:27017/Graphicvila', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = app;
//# sourceMappingURL=app.js.map