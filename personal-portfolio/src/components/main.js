
import 'bootstrap/dist/css/bootstrap.min.css';
import CityNight from '../assets/img/citynight.jpg'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Component } from "react";


export const MainPage = () => {
  return (
    <section className="MainPage" id="home">
      <Container>
        <Row className="align-items-center headerContainer">
          <Col className='headerMain' xs={12} md={6} xl={7}>
            <span className="tagLine">Welcome to my Portfolio!</span>
            <h1 className='headerText'>{` Hey, I'm Hunter `}<span className="wrap">A Full Stack Web Developer From New Jersey</span></h1>
            <button className='connectBtn' onClick={() => console.log('connect')}>Let's connect!</button>
          </Col>
          <Col className='cityNightcontainer' xs={12} md={6} xl={5}>
           <img src={CityNight}/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default MainPage;

