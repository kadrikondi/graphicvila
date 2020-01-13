'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GraphicService = require('../service/graphics');
var cloudinary = require('cloudinary');

var GraphicController = function () {
    function GraphicController() {
        _classCallCheck(this, GraphicController);
    }

    _createClass(GraphicController, null, [{
        key: 'getAllGraphics',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
                var info;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return GraphicService.getAllGraphics();

                            case 3:
                                info = _context.sent;

                                if (!(info.length > 0)) {
                                    _context.next = 6;
                                    break;
                                }

                                return _context.abrupt('return', res.status(200).json({
                                    info: info
                                }));

                            case 6:
                                return _context.abrupt('return', null);

                            case 9:
                                _context.prev = 9;
                                _context.t0 = _context['catch'](0);
                                return _context.abrupt('return', res.status(500).json({
                                    error: _context.t0.message
                                }));

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 9]]);
            }));

            function getAllGraphics(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return getAllGraphics;
        }()
    }, {
        key: 'userPostNewGraphics',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
                var image, result, imgUrl, id, data, info;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;

                                if (!(!req.body.name || !req.body.ideaname || !req.body.caption)) {
                                    _context2.next = 5;
                                    break;
                                }

                                return _context2.abrupt('return', res.status(400).json({
                                    message: 'Please fill in all fiels'
                                }));

                            case 5:
                                if (!(req.file == undefined || req.file == '')) {
                                    _context2.next = 9;
                                    break;
                                }

                                return _context2.abrupt('return', res.status(400).json({ message: 'Error: No file selected' }));

                            case 9:
                                image = req.file.path;
                                _context2.next = 12;
                                return cloudinary.uploader.upload(image);

                            case 12:
                                result = _context2.sent;
                                imgUrl = result.secure_url;
                                id = req.params.id;
                                data = req.body;
                                _context2.next = 18;
                                return GraphicService.userPostNewGraphics(id, data, imgUrl);

                            case 18:
                                info = _context2.sent;
                                return _context2.abrupt('return', res.status(201).json({
                                    info: info,
                                    message: 'Post uploaded successfully'
                                }));

                            case 20:
                                _context2.next = 25;
                                break;

                            case 22:
                                _context2.prev = 22;
                                _context2.t0 = _context2['catch'](0);
                                return _context2.abrupt('return', res.status(500).json({
                                    error: _context2.t0.message
                                }));

                            case 25:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[0, 22]]);
            }));

            function userPostNewGraphics(_x3, _x4) {
                return _ref2.apply(this, arguments);
            }

            return userPostNewGraphics;
        }()
    }, {
        key: 'getSingleGraphic',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
                var id, info;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.prev = 0;
                                id = req.params.id;
                                _context3.next = 4;
                                return GraphicService.getSingleGraphic(id);

                            case 4:
                                info = _context3.sent;
                                return _context3.abrupt('return', res.status(200).json({
                                    info: info
                                }));

                            case 8:
                                _context3.prev = 8;
                                _context3.t0 = _context3['catch'](0);
                                return _context3.abrupt('return', res.status(500).json({
                                    error: _context3.t0.message
                                }));

                            case 11:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[0, 8]]);
            }));

            function getSingleGraphic(_x5, _x6) {
                return _ref3.apply(this, arguments);
            }

            return getSingleGraphic;
        }()
    }, {
        key: 'updateGraphic',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
                var id, data, info;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.prev = 0;
                                id = req.params.id;
                                data = req.body;
                                _context4.next = 5;
                                return UserService.updateGraphic(id, data);

                            case 5:
                                info = _context4.sent;
                                return _context4.abrupt('return', res.status(200).json({
                                    info: info
                                }));

                            case 9:
                                _context4.prev = 9;
                                _context4.t0 = _context4['catch'](0);
                                return _context4.abrupt('return', res.status(500).json({
                                    error: _context4.t0.message
                                }));

                            case 12:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this, [[0, 9]]);
            }));

            function updateGraphic(_x7, _x8) {
                return _ref4.apply(this, arguments);
            }

            return updateGraphic;
        }()
    }, {
        key: 'deleteGraphic',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
                var id, info;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.prev = 0;
                                id = req.params.id;
                                _context5.next = 4;
                                return UserService.deleteGraphic(id);

                            case 4:
                                info = _context5.sent;
                                _context5.next = 10;
                                break;

                            case 7:
                                _context5.prev = 7;
                                _context5.t0 = _context5['catch'](0);
                                return _context5.abrupt('return', res.status(500).json({
                                    error: _context5.t0.message
                                }));

                            case 10:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this, [[0, 7]]);
            }));

            function deleteGraphic(_x9, _x10) {
                return _ref5.apply(this, arguments);
            }

            return deleteGraphic;
        }()
    }]);

    return GraphicController;
}();

module.exports = GraphicController;
//# sourceMappingURL=graphic.js.map