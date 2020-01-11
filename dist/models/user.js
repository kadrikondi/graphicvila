'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = new _mongoose2.default.Schema({
    name: String,
    email: String,
    password: String,
    occupation: String,
    phone: String,
    address: String,
    graphics: [{ type: _mongoose2.default.Schema.Types.ObjectId, ref: 'graphics' }]
});

var exportModel = _mongoose2.default.model('users', userSchema);
exports.default = exportModel;
//# sourceMappingURL=user.js.map