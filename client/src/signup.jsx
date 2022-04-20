import React, {useState} from 'react'
import Layout from './component/layout'
import { safeCredentials, handleErrors } from './utils/fetchHelper';

function Signup(){

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});


  const handleSubmit = () => {

    const newUser = {
      username,
      email,
      password
    }
    
      fetch('api/users', safeCredentials({
        method: 'POST',
        body: JSON.stringify({
          user: newUser
        })
      }))
      .then(handleErrors)
      .then(res => {
        if(res.error){
            let errors = {};
            if(res.error === "*Username already exists"){
              errors['username'] = res.error
            }else{
              errors['email'] = res.error
            }
            setErrors(errors);
          }
        })


  };
  

  return (
    <>
      <Layout>
        <h4 className="text-secondary">Create Your Account</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="newInputUserName">Username</label>
            <input type="text" className="form-control" id="exampleUsername" placeholder="username" 
            onChange = {event => {
              event.preventDefault();
              setUsername(event.target.value)}} />
            <small>{errors.hasOwnProperty('username')? errors.username : null}</small>
          </div>

          <div className="form-group">
            <label htmlFor="newInputEmail">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" 
              onChange = {event => {
                event.preventDefault();
                setEmail(event.target.value)}} />
            <small>{errors.hasOwnProperty('email')? errors.email : null}</small>
          </div>

          <div className="form-group">
            <label htmlFor="newInputPassword">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange = {event => {
                event.preventDefault(); 
                setPassword(event.target.value)}} />
            <small>{errors.hasOwnProperty('password')? errors.password : "At latest EIGHT characters"}</small>
          </div>

        <button type="submit" className="btn btn-warning" >Submit</button>
        </form>
      </Layout>
    </>
  )
}

export default Signup;