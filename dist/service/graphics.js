'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Graphic = require('../models/graphic');
var User = require('../models/user');

var GraphicService = function () {
    function GraphicService() {
        _classCallCheck(this, GraphicService);
    }

    _createClass(GraphicService, null, [{
        key: 'getAllGraphics',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var info;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return Graphic.find().sort({ "_id": -1 });

                            case 3:
                                info = _context.sent;
                                return _context.abrupt('return', info);

                            case 7:
                                _context.prev = 7;
                                _context.t0 = _context['catch'](0);
                                throw _context.t0;

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 7]]);
            }));

            function getAllGraphics() {
                return _ref.apply(this, arguments);
            }

            return getAllGraphics;
        }()
    }, {
        key: 'userPostNewGraphics',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id, data, file) {
                var _this = this;

                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.prev = 0;
                                _context4.next = 3;
                                return User.findOne({ _id: id }, function () {
                                    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(err, user) {
                                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                            while (1) {
                                                switch (_context3.prev = _context3.next) {
                                                    case 0:
                                                        _context3.next = 2;
                                                        return Graphic.create(data, function () {
                                                            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(err, graphic) {
                                                                var graphical;
                                                                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                                                    while (1) {
                                                                        switch (_context2.prev = _context2.next) {
                                                                            case 0:
                                                                                graphical = user.graphics;

                                                                                graphic.photo = file;
                                                                                _context2.next = 4;
                                                                                return graphic.save();

                                                                            case 4:
                                                                                graphical.push(graphic);
                                                                                _context2.next = 7;
                                                                                return user.save();

                                                                            case 7:
                                                                                return _context2.abrupt('return', graphic);

                                                                            case 8:
                                                                            case 'end':
                                                                                return _context2.stop();
                                                                        }
                                                                    }
                                                                }, _callee2, _this);
                                                            }));

                                                            return function (_x6, _x7) {
                                                                return _ref4.apply(this, arguments);
                                                            };
                                                        }());

                                                    case 2:
                                                    case 'end':
                                                        return _context3.stop();
                                                }
                                            }
                                        }, _callee3, _this);
                                    }));

                                    return function (_x4, _x5) {
                                        return _ref3.apply(this, arguments);
                                    };
                                }());

                            case 3:
                                _context4.next = 8;
                                break;

                            case 5:
                                _context4.prev = 5;
                                _context4.t0 = _context4['catch'](0);
                                throw _context4.t0;

                            case 8:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this, [[0, 5]]);
            }));

            function userPostNewGraphics(_x, _x2, _x3) {
                return _ref2.apply(this, arguments);
            }

            return userPostNewGraphics;
        }()
    }, {
        key: 'getSingleGraphic',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id) {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.prev = 0;
                                _context5.next = 3;
                                return Graphic.findOne({ _id: id });

                            case 3:
                                return _context5.abrupt('return', _context5.sent);

                            case 6:
                                _context5.prev = 6;
                                _context5.t0 = _context5['catch'](0);
                                throw _context5.t0;

                            case 9:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this, [[0, 6]]);
            }));

            function getSingleGraphic(_x8) {
                return _ref5.apply(this, arguments);
            }

            return getSingleGraphic;
        }()
    }, {
        key: 'updateGraphic',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(id, data) {
                var info, caption, ideaname, name;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                _context6.prev = 0;
                                _context6.next = 3;
                                return Graphic.findOne({ _id: id });

                            case 3:
                                info = _context6.sent;

                                if (!info) {
                                    _context6.next = 12;
                                    break;
                                }

                                caption = data.caption, ideaname = data.ideaname, name = data.name;

                                info.caption = caption || info.caption;
                                info.ideaname = ideaname || info.ideaname;
                                info.name = name || info.name;
                                _context6.next = 11;
                                return info.save();

                            case 11:
                                return _context6.abrupt('return', info);

                            case 12:
                                return _context6.abrupt('return', null);

                            case 15:
                                _context6.prev = 15;
                                _context6.t0 = _context6['catch'](0);
                                throw _context6.t0;

                            case 18:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, this, [[0, 15]]);
            }));

            function updateGraphic(_x9, _x10) {
                return _ref6.apply(this, arguments);
            }

            return updateGraphic;
        }()
    }, {
        key: 'deleteGraphic',
        value: function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(id) {
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                _context7.prev = 0;
                                _context7.next = 3;
                                return Graphic.findOneAndDelete({ _id: id });

                            case 3:
                                return _context7.abrupt('return', _context7.sent);

                            case 6:
                                _context7.prev = 6;
                                _context7.t0 = _context7['catch'](0);
                                throw _context7.t0;

                            case 9:
                            case 'end':
                                return _context7.stop();
                        }
                    }
                }, _callee7, this, [[0, 6]]);
            }));

            function deleteGraphic(_x11) {
                return _ref7.apply(this, arguments);
            }

            return deleteGraphic;
        }()
    }]);

    return GraphicService;
}();

module.exports = GraphicService;
//# sourceMappingURL=graphics.js.map