'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('../controllers/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


//user routes
router.get('/api/v1/users', _user2.default.getAllusers);
router.get('/api/v1/user/:id', _user2.default.getSingleUser);
router.post('/api/v1/user/login', _user2.default.loginUser);
router.post('/api/v1/user/register', _user2.default.registerUser);
// router.post('/api/v1/user/login', _user2.default.loginUser);

exports.default = router;
//# sourceMappingURL=index.js.map