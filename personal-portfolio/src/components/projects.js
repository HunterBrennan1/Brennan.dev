import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import Placeholder from '../assets/img/citynight.jpg'



export const Projects = () => {
  return(
    <section className='projects-section' id="projects">
      <Container>
        <Row>
          <Col>
            {/* <div className='project-container'> */}
            <Container className='project-container'>
            <Carousel variant='light'>
      <Carousel.Item>
        <img
          className="d-block w-1 carousel-img"
          src={Placeholder}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={Placeholder}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={Placeholder}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='project-content-container'>
                <h3>Test</h3>
                <p>Lorem</p>
                <p>Lorem</p>
              </div>
              </Container>
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}