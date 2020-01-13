const express = require('express')
const router = express.Router()
const usercontroller = require('../controllers/user')
const graphicscontroller = require('../controllers/graphic')
const cloudinary = require('cloudinary')
const multer = require('multer')
const config = require('../config/config')

cloudinary.config({
    cloud_name: config.cloud_name,
    api_key : config.api_key,
    api_secret : config.api_secret
})
console.log(config.api_key + ' api key')
const storage = multer.diskStorage({
    filename:function(req, file, cb){
        cb(null, Date.now()+file.originalname)
    }
})

const imageFilter = function(req, file, cb){
    if(!file.originalname.match(/\.(jpeg|jpg|png)$/i)){
        return cb('Only image files are allowed', false)
    }
    else{
        cb(null,true)
    }
}
const upload = multer({
    storage:storage,
    fileFilter:imageFilter
})

//user routes
router.get('/api/v1/users', usercontroller.getAllusers)
router.get('/api/v1/user/:id', usercontroller.getSingleUser)
router.post('/api/v1/user/login', usercontroller.loginUser)
router.post('/api/v1/user/register', usercontroller.registerUser)
router.put('/api/v1/user/update/:id', upload.single('photo'), usercontroller.updateUser)
router.delete('/api/v1/user/delete/:id', usercontroller.deletUser)

//graphics routes
router.get('/api/v1/graphics', graphicscontroller.getAllGraphics)
router.get('/api/v1/graphic/:id', graphicscontroller.getSingleGraphic)
router.delete('/api/v1/graphic/delete/:_id', graphicscontroller.deleteGraphic)
router.put('/api/v1/graphic/update/:id', graphicscontroller.updateGraphic)
router.post('/api/v1/graphic/post/:id', upload.single('photo'), graphicscontroller.userPostNewGraphics)


module.exports = router;
