const express = require('express')
const router = express.Router()
const usercontroller = require('../controllers/user')
const graphicscontroller = require('../controllers/graphic')

//user routes
router.get('/api/v1/users', usercontroller.getAllusers)
router.get('/api/v1/user/:id', usercontroller.getSingleUser)
router.post('/api/v1/user/login', usercontroller.loginUser)
router.post('/api/v1/user/register', usercontroller.registerUser)
router.put('/api/v1/user/update/:id', usercontroller.updateUser)
router.delete('/api/v1/user/delete/:id', usercontroller.deletUser)

//graphics routes
router.get('/api/v1/graphics', graphicscontroller.getAllGraphics)
router.get('/api/v1/graphic/:id', graphicscontroller.getSingleGraphic)
router.delete('/api/v1/graphic/delete/:id', graphicscontroller.deleteGraphic)
router.put('/api/v1/graphic/update/:id', graphicscontroller.updateGraphic)
router.post('/api/v1/graphic/post/:id', graphicscontroller.userPostNewGraphics)


module.exports = router;
