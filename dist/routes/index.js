'use strict';

var express = require('express');
var router = express.Router();
var usercontroller = require('../controllers/user');
var graphicscontroller = require('../controllers/graphic');
var cloudinary = require('cloudinary');
var multer = require('multer');
var config = require('../config/config');

cloudinary.config({
    cloud_name: config.cloud_name,
    api_key: config.api_key,
    api_secret: config.api_secret
});
console.log(config.api_key + ' api key');
var storage = multer.diskStorage({
    filename: function filename(req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

var imageFilter = function imageFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png)$/i)) {
        return cb('Only image files are allowed', false);
    } else {
        cb(null, true);
    }
};
var upload = multer({
    storage: storage,
    fileFilter: imageFilter
});

//user routes
router.get('/api/v1/users', usercontroller.getAllusers);
router.get('/api/v1/user/:id', usercontroller.getSingleUser);
router.post('/api/v1/user/login', usercontroller.loginUser);
router.post('/api/v1/user/register', usercontroller.registerUser);
router.put('/api/v1/user/update/:id', upload.single('photo'), usercontroller.updateUser);
router.delete('/api/v1/user/delete/:id', usercontroller.deletUser);

//graphics routes
router.get('/api/v1/graphics', graphicscontroller.getAllGraphics);
router.get('/api/v1/graphic/:id', graphicscontroller.getSingleGraphic);
router.delete('/api/v1/graphic/delete/:id', graphicscontroller.deleteGraphic);
router.put('/api/v1/graphic/update/:id', graphicscontroller.updateGraphic);
router.post('/api/v1/graphic/post/:id', upload.single('file'), graphicscontroller.userPostNewGraphics);

module.exports = router;
//# sourceMappingURL=index.js.map