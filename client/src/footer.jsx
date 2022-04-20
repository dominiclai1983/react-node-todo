import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return(

      <>

      <div className="fixed-bottom">
        <Container>
          <Row className="bg-secondary py-3">
            <Col xs={6} className="d-flex pl-5"><span className="justify-content-center text-white">©Dominic Lai</span></Col>
            <Col xs={6} className="d-flex justify-content-center pr-5">
              <a className="news-icon" href="https://www.twitter.com" target="_blink"><i class="fab fa-twitter"></i></a>
              <a className="news-icon" href="https://www.instagram.com" target="_blink"><i class="fab fa-instagram"></i></a>
              <a className="news-icon" href="https://www.linkedin.com/in/dominiclaihk/" target="_blink"><i class="fab fa-linkedin"></i></a>
              <a className="news-icon" href="https://www.facebook.com" target="_blink"><i class="fab fa-facebook"></i></a>
            </Col>
          </Row>
        </Container>
      </div>
      </>
    );
}

export default Footer;