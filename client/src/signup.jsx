import React, {useState} from 'react'
import Layout from './component/layout'
import axios from 'axios';
//TODO: re-write in axios for fetch 

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

    const API_URL = 'http://localhost:8000/api'

    axios.post(`${API_URL}/users`, newUser)
      .then(res => {
        console.log(res);
        if(res.data){
          console.log(res.data)
          //document.location.href="/login";
          window.location = '/user'
        }
      })
      .catch(err => {
        console.error(err);
      });
    }

  

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