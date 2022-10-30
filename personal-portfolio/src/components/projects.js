import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Placeholder from "../assets/img/citynight.jpg";
import { LoremIpsum } from "react-lorem-ipsum";
import Html5 from "../assets/img/html5.svg";
import Css3 from "../assets/img/css3.svg";
import JS from "../assets/img/Javascript.svg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <Container>
        <Row>
          <Col className="project-col">
            <h3>Projects</h3>

            <div className="sort-bar">
              <a href="#" className="sort-btn">
                All
              </a>
              <a href="#" className="sort-btn">
                React
              </a>
              <a href="#" className="sort-btn">
                JavaScript
              </a>
              <a href="#" className="sort-btn">
                Node.js
              </a>
            </div>

            {/* FIRST PROJECT CAROUSEL */}

            <Container
              className="project-container container-first"
              data-aos="fade-right"
              data-aos-duration="1800"
            >
              <Carousel variant="light">
                <Carousel.Item>
                  <img
                    className="d-block w-1 carousel-img"
                    src={Placeholder}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-1 carousel-img"
                    src={Placeholder}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-1 carousel-img"
                    src={Placeholder}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>

              {/* DESCRIPTION */}

              <div className="project-content-container">
                <h4>PROJECT 1</h4>
                <LoremIpsum p={1} className="Project-desc-p" />
                <p>THIS PROJECT WAS BUILT WITH</p>
                <div className="skills skills-proj">
                  <img
                    className="skill-img-proj"
                    src={Html5}
                    alt="skill image"
                  />
                  <img
                    className="skill-img-proj"
                    src={Css3}
                    alt="skill image"
                  />
                  <img className="skill-img-proj" src={JS} alt="skill image" />

                </div>
              </div>
            </Container>

            {/* SECOND PROJECT CAROUSEL */}

            {/* DESCRIPTION */}

            <Container
              className="project-container proj-lower"
              data-aos="fade-down"
              data-aos-duration="1800"
            >
              <Carousel variant="light">
                <Carousel.Item>
                  <img
                    className="d-block w-1 carousel-img"
                    src={Placeholder}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-1 carousel-img"
                    src={Placeholder}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-1 carousel-img"
                    src={Placeholder}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              <div className="project-content-container">
                <h4>PROJECT 2</h4>
                <LoremIpsum p={1} className="Project-desc-p" />
                <p>THIS PROJECT WAS BUILT WITH</p>
                <div className="skills skills-proj">
                  <img
                    className="skill-img-proj"
                    src={Html5}
                    alt="skill image"
                  />
                  <img
                    className="skill-img-proj"
                    src={Css3}
                    alt="skill image"
                  />
                  <img className="skill-img-proj" src={JS} alt="skill image" />
                </div>
              </div>
            </Container>

            {/* THIRD PROJECT CAROUSEL */}

            <Container
              className="project-container  proj-lower"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              <Carousel variant="light">
                <Carousel.Item>
                  <img
                    className="d-block w-1 carousel-img"
                    src={Placeholder}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-1 carousel-img"
                    src={Placeholder}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-1 carousel-img"
                    src={Placeholder}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>

              {/* DESCRIPTION */}

              <div className="project-content-container">
                <h4>PROJECT 3</h4>
                <LoremIpsum p={1} className="Project-desc-p" />
                <p>THIS PROJECT WAS BUILT WITH</p>
                <div className="skills skills-proj">
                  <img
                    className="skill-img-proj"
                    src={Html5}
                    alt="skill image"
                  />
                  <img
                    className="skill-img-proj"
                    src={Css3}
                    alt="skill image"
                  />
                  <img className="skill-img-proj" src={JS} alt="skill image" />
                </div>
              </div>

              {/* //////////// */}
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
