const express = require('express')
const router = express.Router()
const usercontroller = require('../controllers/user')

//user routes
router.get('/api/v1/users', usercontroller.getAllusers)
router.get('/api/v1/user/:id', usercontroller.getSingleUser)
router.post('/api/v1/user/login', usercontroller.loginUser)
router.post('/api/v1/user/register', usercontroller.registerUser)
router.put('/api/v1/user/update/:id', usercontroller.updateUser)
router.delete('/api/v1/user/delete/:id', usercontroller.deletUser)

module.exports = router;
