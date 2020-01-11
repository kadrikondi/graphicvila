'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _user = require('../service/user');

var _user2 = _interopRequireDefault(_user);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserController = function () {
    function UserController() {
        _classCallCheck(this, UserController);
    }

    _createClass(UserController, null, [{
        key: 'getAllusers',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
                var info;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return _user2.default.getAllUsers();

                            case 3:
                                info = _context.sent;
                                return _context.abrupt('return', res.status(200).json({
                                    info: info
                                }));

                            case 7:
                                _context.prev = 7;
                                _context.t0 = _context['catch'](0);
                                return _context.abrupt('return', res.status(500).json({
                                    error: _context.t0.message
                                }));

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 7]]);
            }));

            function getAllusers(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return getAllusers;
        }()
    }, {
        key: 'getSingleUser',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
                var id, info;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;
                                id = req.params.id;
                                _context2.next = 4;
                                return _user2.default.getSingleUser(id);

                            case 4:
                                info = _context2.sent;
                                return _context2.abrupt('return', res.status(200).json({
                                    info: info
                                }));

                            case 8:
                                _context2.prev = 8;
                                _context2.t0 = _context2['catch'](0);
                                return _context2.abrupt('return', res.status(500).json({
                                    error: _context2.t0.message
                                }));

                            case 11:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[0, 8]]);
            }));

            function getSingleUser(_x3, _x4) {
                return _ref2.apply(this, arguments);
            }

            return getSingleUser;
        }()
    }, {
        key: 'loginUser',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
                var _req$body, email, password, user;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.prev = 0;
                                _req$body = req.body, email = _req$body.email, password = _req$body.password;

                                if (!(!email || !password)) {
                                    _context3.next = 6;
                                    break;
                                }

                                return _context3.abrupt('return', res.status(400).json({
                                    message: 'Please fill all fields'
                                }));

                            case 6:
                                _context3.next = 8;
                                return _user2.default.loginUser(email, password);

                            case 8:
                                user = _context3.sent;

                                if (user) {
                                    _context3.next = 13;
                                    break;
                                }

                                return _context3.abrupt('return', res.status(404).json({
                                    message: 'wrong email/password'
                                }));

                            case 13:
                                return _context3.abrupt('return', res.status(200).json({
                                    message: 'login was successful',
                                    user: user
                                }));

                            case 14:
                                _context3.next = 19;
                                break;

                            case 16:
                                _context3.prev = 16;
                                _context3.t0 = _context3['catch'](0);
                                return _context3.abrupt('return', res.status(500).json({
                                    error: _context3.t0.message
                                }));

                            case 19:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[0, 16]]);
            }));

            function loginUser(_x5, _x6) {
                return _ref3.apply(this, arguments);
            }

            return loginUser;
        }()
    }, {
        key: 'deletUser',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
                var id, info;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.prev = 0;
                                id = req.params.id;
                                _context4.next = 4;
                                return _user2.default.deleteUser(id);

                            case 4:
                                info = _context4.sent;
                                _context4.next = 10;
                                break;

                            case 7:
                                _context4.prev = 7;
                                _context4.t0 = _context4['catch'](0);
                                return _context4.abrupt('return', res.status(500).json({
                                    error: _context4.t0.message
                                }));

                            case 10:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this, [[0, 7]]);
            }));

            function deletUser(_x7, _x8) {
                return _ref4.apply(this, arguments);
            }

            return deletUser;
        }()
    }, {
        key: 'registerUser',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
                var data, hash, info;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.prev = 0;

                                if (!(!req.body.name || !req.body.email || !req.body.password ||  !req.body.gender )) {
                                    _context5.next = 5;
                                    break;
                                }

                                return _context5.abrupt('return', res.status(400).json({
                                    message: 'Please fill in all fields'
                                }));

                            case 5:
                                data = req.body;
                                hash = _bcryptjs2.default.hashSync(req.body.password, 10);
                                _context5.next = 9;
                                return _user2.default.registerUser(data);

                            case 9:
                                info = _context5.sent;

                                info.password = hash;
                                _context5.next = 13;
                                return info.save();

                            case 13:
                                return _context5.abrupt('return', res.status(201).json({
                                    info: info
                                }));

                            case 14:
                                _context5.next = 19;
                                break;

                            case 16:
                                _context5.prev = 16;
                                _context5.t0 = _context5['catch'](0);
                                return _context5.abrupt('return', res.status(500).json({
                                    error: _context5.t0.message
                                }));

                            case 19:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this, [[0, 16]]);
            }));

            function registerUser(_x9, _x10) {
                return _ref5.apply(this, arguments);
            }

            return registerUser;
        }()
    }]);

    return UserController;
}();

exports.default = UserController;
//# sourceMappingURL=user.js.map