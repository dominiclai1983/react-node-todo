import React, {useState} from 'react'
import Layout from './component/layout'
import { safeCredentials, handleErrors } from './utils/fetchHelper';

function Login(){

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = {
    username,
    password
  }

  const handleLogin = (login) => {

    fetch('api/sessions', safeCredentials({
      method: 'POST',
      body: JSON.stringify({
        user: login
      })
    }))
    .then(handleErrors)
    .then(res => {
      console.log(res);
    })

  }

  return (
    <>
      <Layout>
        <h4 className='text-secondary'>Login To Your Account</h4>
          <form onSubmit={() => {handleLogin(login)}}>
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