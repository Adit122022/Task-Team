const express = require('express');
const router = express.Router();
const {indexController } = require('../controllers/index.controller')
const {userController} = require('../controllers/index.controller')

const userModel = require('../models/user.model');
// middleware to log requests
router.get('/',indexController )

router.get('/users', async (req, res) => {
        const users = await userModel.find(); // Fetch all users
        res.render('card', { users }); // Render the card view with the users data
});

router.post('/register' , userController)

module.exports = router;