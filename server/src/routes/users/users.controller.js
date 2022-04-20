const { 
  postNewUser,
  findExistUser
 } = require('../../models/users.model');

async function httpPostNewUser(req, res){
  const email = req.body.email;

  const existUser = await findExistUser(email);

  if(existUser){
    return re
  }
}