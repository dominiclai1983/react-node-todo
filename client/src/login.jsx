import axios from 'axios';
import React, {useState} from 'react'
import Layout from './component/layout'

function Login(){

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  
  const API_URL = process.env.REACT_APP_API_URL;

  const handleLogin = (event) => {

    event.preventDefault();

    const login = {
      username,
      password
    }

    axios.post(`${API_URL}/api/login`, login)
      .then(res => {
        console.log(res.data)
        if(res.data){
          console.log(res.data);
          const token = JSON.stringify(res.data.data);
          const realToken = token.substring(1,token.length-1);
          localStorage.setItem('Token', realToken);
          window.location.href="/user";
        }
      ;})
      .catch(error => console.error(error));
    
  }

  return (
    <>
      <Layout>
        <h4 className='text-secondary'>Login To Your Account</h4>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail">Username</label>
              <input type="text" className="form-control" id="exampleUsername" placeholder="username" 
                onChange = {event => {
                  event.preventDefault();
                  setUsername(event.target.value);
              }}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                onChange = {event => {
                  event.preventDefault();
                  setPassword(event.target.value);
                }} />
            </div>
          <button type="submit" className="btn btn-warning">Login</button>
          </form>
      </Layout>
    </>
  )
}

export default Login;