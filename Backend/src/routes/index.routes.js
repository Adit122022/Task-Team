const express = require('express');
const router = express.Router();
const {indexController, cardController} = require('../controllers/index.controller')
const {registerController} = require('../controllers/index.controller')
const {userController} = require('../controllers/index.controller')
// const {deleteUserController} = require('../controllers/index.controller')
// const {updateUserController} = require('../controllers/index.controller')

// middleware to log requests
router.get('/',indexController )
router.post('/register' , registerController)
router.get('/users' , userController)
router.get('/users/:name', cardController)
// router.post('/submit-form' , updateUserController)
// router.get('/deleteUser' , deleteUserController)
module.exports = router;