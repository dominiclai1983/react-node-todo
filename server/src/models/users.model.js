const User = require('./users.mongo');
//this one is the database

async function findUser(filter){
  return await User.findOne(filter);
}

async function findExistUser(email){
  return await findUser({
    email: email,
  });
}

module.exports = {
  findExistUser,
}