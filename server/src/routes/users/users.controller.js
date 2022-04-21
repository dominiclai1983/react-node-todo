const { 
  postNewUser,
  postLoginUser,
  findExistUser
 } = require('../../models/users.model');
const bcrypt = require("bcryptjs");
var cookieParser = require('cookie-parser');
//TODO: remember to remove the console.log

async function httpPostNewUser(req, res){

  try{
    console.log(req.body);

    const {email, password, username} = req.body;
    console.log(username);
    console.log(email);


    if(!(email && password && username)){
      res.status(400).json({
        error: 'Missing required field'
      })
    }

    const existUser = await findExistUser(email);

    if(existUser){
      return res.status(404).json({
        error: 'User Already Exist. Please Login'
      })
    }

    const stringPassword = String(password);

    encryptedPassword = await bcrypt.hash(stringPassword, 10);
    console.log(encryptedPassword);

    const finalUser = {
      username: username,
      email: email,
      password: encryptedPassword
    }

    const newUser = await postNewUser(finalUser);

    res.cookie('nToken', newUser.token, { maxAge: 900000, httpOnly: true });

    return res.status(201).json(finalUser);
  }
  catch (err){
    console.log(err);
  }
}

async function httpPostLoginUser(req, res){

  const {username, password} = req.body;

  if(!(username && password)){
    return res.status(400).json({error: "All input is required"});
  }

  const stringPassword = String(password);

  const user = await postLoginUser(username, stringPassword);

  if(user){
    res.cookie('nToken', user.token, { maxAge: 900000, httpOnly: true });
    console.log(`the cookie is : ${res.cookie}`)
    return res.status(200).json(user);
  }else{
    return res.status(400).json({error: "Invalid Credentials"});
  }
}

function httpGetLogoutUser(req, res){
  res.clearCookie('nToken');
  return res.redirect('/');
}
//TODO: remember to remove the console.log

module.exports = {
  httpPostNewUser,
  httpPostLoginUser,
  httpGetLogoutUser
}