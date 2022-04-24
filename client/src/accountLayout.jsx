import React from 'react'
import LeftNav from './component/leftbar';
import Input from './user/input';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Outlet } from "react-router-dom";
import axios from 'axios';

import './user.css';

const AccountLayout = () => {

  return (
    <>
      <Container>
        <Row>
          <Col xs={2} md={3} className="mt-4 text-right">
            {/* <LeftNav username={username} onLogOut={this.handLogOut} /> */}
            <LeftNav />
          </Col>
          <Col xs={10} md={9}> {/* marker A*/}
           <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AccountLayout;