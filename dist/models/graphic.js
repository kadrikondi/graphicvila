'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var graphicSchema = new _mongoose2.default.Schema({
    caption: String,
    ideaname: String,
    name: String
});

var graphicModel = _mongoose2.default.model('graphics', graphicSchema);

exports.default = graphicModel;
//# sourceMappingURL=graphic.js.map