'use strict';

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    gender: String,
    phone: String,
    address: String,
    photo: String,
    graphics: [{ type: mongoose.Schema.Types.ObjectId, ref: 'graphics' }]
});

var exportModel = mongoose.model('users', userSchema);

module.exports = exportModel;
//# sourceMappingURL=user.js.map