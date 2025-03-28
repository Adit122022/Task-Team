const userModel = require('../models/user.model');

module.exports.indexController = (req, res) => {
    res.render('form'); // Render the form
};



module.exports.userController = async (req, res) => {
    const { username, email, bio, profession, imageURL } = req.body;
    const newUser = new userModel(
        {    username : username, email : email, bio : bio, profession : profession,  imageURL : imageURL, });
        await newUser.save();
        res.redirect('/users')  
};

