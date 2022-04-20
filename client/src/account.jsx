import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import LeftNavAccount from './component/leftbaraccount';
import NavBar from './component/navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { safeCredentials, handleErrors, checkStatus, json } from './utils/fetchHelper';

import './account.css';

class Account extends Component{

  constructor(props){
    super(props);
    this.state={
      username: "",
      authenticated: false,
    }
  }

  componentDidMount(){
    this.checkLogin();
  }

  checkLogin = () => {

    fetch('api/authenticated')
    .then(checkStatus)
    .then(json)
    .then(data => {
      if(data.authenticated){
        this.setState({
          username: data.username,
          authenticated: data.authenticated
        }, () => {
          console.log(this.state.username);//ensure the username will be updated, as this states will be used immediately at other place
        })
      }else{
        document.location.href="/";
      }
    })
    .catch(error => {
      console.log(error);
    });

  }

  handLogOut = () => {

    fetch('api/sessions', safeCredentials({
      method: 'DELETE'
    }))
    .then(handleErrors)
    .then(data =>{
      if(data.success){
        document.location.href="/";
      }
    })

  }

  render(){

    const {username, authenticated} = this.state;

    return(
      <>
        <div className={authenticated? null : "d-none"}>
        <NavBar />
          <Container>
            <Row>
              <Col xs={2} md={3} className="mt-4 text-right">
                <LeftNavAccount username={username} onLogOut={this.handLogOut} />
              </Col>
              <Col xs={10} md={9}> 
                <div className="right-side border">
                  Your account
                </div>
              </Col>
            </Row>
          </Container>

        </div>
      </>
    )
  }
}

export default Account; 

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Account />,
    document.body.appendChild(document.createElement('div')),
  )
})
