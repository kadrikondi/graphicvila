'use strict';

var mongoose = require('mongoose');

var graphicSchema = new mongoose.Schema({
    caption: String,
    ideaname: String,
    name: String,

    photo: String
});

var graphicModel = mongoose.model('graphics', graphicSchema);

module.exports = graphicModel;
//# sourceMappingURL=graphic.js.map