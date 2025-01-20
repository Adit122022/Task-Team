const userModel = require('../models/user.model')
module.exports.indexController =(req,res)=>{
    res.render('form');
}
module.exports.registerController = async(req,res)=>{
    console.log(req.query);
const { username , email , bio ,profession , imageURL } = req.query;
    const newUser = new userModel({
        username,
        email,
        bio ,
        profession ,
        imageURL,
    });
    await newUser.save();
    res.send(newUser);
}

module.exports.userController = async(req,res)=>{
    // const users = await userModel.find();
    // res.render('card');
    const cards = [
        { image: 'https://i.pinimg.com/736x/bb/65/bd/bb65bdeab14fcb2e332edcdfae569465.jpg', bio: 'sanjana', profession: 'UI/UX Designer' },
        // Add more card objects here
      ];
      res.render('card', { cards }); 
}


module.exports.cardController=async(req,res)=>{
    const name=req.params.name;

    res.render('card')
}



