const User = require('../models/user.js');

//Get user
const getUser = async (req, res) => {
  console.log('Get user');
  const id = req.params.userID;
  try{
    
    const user = await User.findById(id);

    //Check if there's a user
    if(!user){
      return(
        res.status(404).json({
          uiMessage: "There isn't user with that id, plase try again"
        })
      );
    }
    console.log('User found');
    //Send user
    res.json(user);

  }catch(e){
    return res.status(500)
    .json(
      {
        systemMessage: e.message,
        uiMessage: 'Invalid id, please try again'
      }
    )
  }
}

//Get users
const getUsers = async (req, res) => {
  console.log('Get users');
  try {
    const users = await User.find();
    res.json(users);
  }catch(e){
    return res.status(500).json(
      { 
        systemMessage: error.message,
        uiMessage: 'DDBB error, please try again in 5 min'
      });
  }
}

//Create user
const createUser = async (req,res) =>{
  console.log('Creating new user');
  try{
    //Get user properties
    const {name, lastname, email, password} = req.body;
    console.log(name,lastname,email,password);

    //Create new user
    const newUser = new User({
      name,
      lastname,
      email,
      password
    });

    //Save in DDBB
    await newUser.save();
    console.log('User created successfully');
    res.json('User created successfully');
  }catch(e){
    return res.status(500)
    .json(
      {
        systemMessage: e.message,
        uiMessage: 'The user was not created, please check the user properties'
      }
    )
  }
}

module.exports = {
  getUser,
  getUsers,
  createUser
}