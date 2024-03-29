import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './component/layout';
import NavBar from './component/navbar';
import TodoBanner from './component/todobanner';
import AccountLayout from './accountLayout';
import User from './user';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from './login';
import Signup from './signup';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//this above is importing the bootstrap. very important!!!!

const Index = () => {

  
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoBanner />} >
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route path="/user" element={<AccountLayout />} >
            <Route index element={<User />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export const Home = () => (
  <Layout>
    <h5 className="text-secondary">With An Account?</h5>
    <Link to='/login'>
      <button type="button" className="btn btn-warning btn-lg btn-block">Sign in </button>
    </Link>
    
    <h5 className="mt-2 text-secondary">Interested In?</h5>
    <Link to="/signup"> 
    <button type="button" className="btn btn-secondary btn-lg btn-block">Sign Up With Email</button>
    </Link>
  </Layout>
)

export default Home;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Index />,
    document.body.appendChild(document.createElement('div')),
  )
})
