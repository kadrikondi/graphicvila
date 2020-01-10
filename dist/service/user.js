'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserService = function () {
    function UserService() {
        _classCallCheck(this, UserService);
    }

    _createClass(UserService, null, [{
        key: 'getAllUsers',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var info;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return _user2.default.find().sort({ "_id": -1 });

                            case 3:
                                info = _context.sent;

                                if (!(info.length > 0)) {
                                    _context.next = 6;
                                    break;
                                }

                                return _context.abrupt('return', info);

                            case 6:
                                return _context.abrupt('return', null);

                            case 9:
                                _context.prev = 9;
                                _context.t0 = _context['catch'](0);
                                throw _context.t0;

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 9]]);
            }));

            function getAllUsers() {
                return _ref.apply(this, arguments);
            }

            return getAllUsers;
        }()
    }, {
        key: 'registerUser',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;
                                _context2.next = 3;
                                return _user2.default.create(data);

                            case 3:
                                return _context2.abrupt('return', _context2.sent);

                            case 6:
                                _context2.prev = 6;
                                _context2.t0 = _context2['catch'](0);
                                throw _context2.t0;

                            case 9:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[0, 6]]);
            }));

            function registerUser(_x) {
                return _ref2.apply(this, arguments);
            }

            return registerUser;
        }()
    }, {
        key: 'loginUser',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(email, password) {
                var user, passwordisValid, token;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.prev = 0;
                                _context3.next = 3;
                                return _user2.default.findOne({ email: email });

                            case 3:
                                user = _context3.sent;

                                if (user) {
                                    _context3.next = 8;
                                    break;
                                }

                                return _context3.abrupt('return', null);

                            case 8:
                                passwordisValid = _bcryptjs2.default.compareSync(user.password, password);

                                if (passwordisValid) {
                                    _context3.next = 13;
                                    break;
                                }

                                return _context3.abrupt('return', null);

                            case 13:
                                _context3.next = 15;
                                return _jsonwebtoken2.default.sign({ _id: user.id, name: user.name }, _config2.default.UserSecret);

                            case 15:
                                token = _context3.sent;
                                return _context3.abrupt('return', token);

                            case 17:
                                _context3.next = 22;
                                break;

                            case 19:
                                _context3.prev = 19;
                                _context3.t0 = _context3['catch'](0);
                                throw _context3.t0;

                            case 22:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[0, 19]]);
            }));

            function loginUser(_x2, _x3) {
                return _ref3.apply(this, arguments);
            }

            return loginUser;
        }()
    }, {
        key: 'getSingleUser',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id) {
                var info;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.prev = 0;
                                _context4.next = 3;
                                return _user2.default.findOne({ _id: id });

                            case 3:
                                info = _context4.sent;

                                if (!info) {
                                    _context4.next = 6;
                                    break;
                                }

                                return _context4.abrupt('return', info);

                            case 6:
                                return _context4.abrupt('return', null);

                            case 9:
                                _context4.prev = 9;
                                _context4.t0 = _context4['catch'](0);
                                throw _context4.t0;

                            case 12:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this, [[0, 9]]);
            }));

            function getSingleUser(_x4) {
                return _ref4.apply(this, arguments);
            }

            return getSingleUser;
        }()
    }, {
        key: 'deleteUser',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id) {
                var info;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.prev = 0;
                                _context5.next = 3;
                                return _user2.default.findOneAndDelete({ _id: id });

                            case 3:
                                info = _context5.sent;

                                if (!info) {
                                    _context5.next = 6;
                                    break;
                                }

                                return _context5.abrupt('return', info);

                            case 6:
                                return _context5.abrupt('return', null);

                            case 9:
                                _context5.prev = 9;
                                _context5.t0 = _context5['catch'](0);
                                throw _context5.t0;

                            case 12:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this, [[0, 9]]);
            }));

            function deleteUser(_x5) {
                return _ref5.apply(this, arguments);
            }

            return deleteUser;
        }()
    }, {
        key: 'updateUser',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(id) {
                var info;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                _context6.prev = 0;
                                _context6.next = 3;
                                return _user2.default.findOne({ _id: id });

                            case 3:
                                info = _context6.sent;

                                if (!info) {
                                    _context6.next = 6;
                                    break;
                                }

                                return _context6.abrupt('return', info);

                            case 6:
                                return _context6.abrupt('return', null);

                            case 9:
                                _context6.prev = 9;
                                _context6.t0 = _context6['catch'](0);
                                throw _context6.t0;

                            case 12:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, this, [[0, 9]]);
            }));

            function updateUser(_x6) {
                return _ref6.apply(this, arguments);
            }

            return updateUser;
        }()
    }]);

    return UserService;
}();

exports.default = UserService;
//# sourceMappingURL=user.js.map