import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Placeholder from "../assets/img/citynight.jpg";
import { LoremIpsum } from "react-lorem-ipsum";
import Html5 from "../assets/img/html5.svg";
import Css3 from "../assets/img/css3.svg";
import JS from "../assets/img/Javascript.svg";
import NodeJs from "../assets/img/nodejs.svg";
import Express from "../assets/img/express.svg";
import Jquery from "../assets/img/jquery.svg";
import Reactimg from "../assets/img/reactimg.svg";
import PortImgDark from "../assets/img/portfolio-img-dark.JPG";
import PortImgLight from "../assets/img/portfolio-img-light.JPG";
import PortImgMobile from "../assets/img/portfolio-img-mobile.JPG";
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
                Shopify
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
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-1 carousel-img"
                    src={Placeholder}
                    alt="Second slide"
                  />

                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-1 carousel-img"
                    src={Placeholder}
                    alt="Third slide"
                  />

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
                    src={PortImgLight}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-1 carousel-img"
                    src={PortImgDark}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-1 carousel-img"
                    src={PortImgMobile}
                    alt="Third slide"
                  />

                </Carousel.Item>
              </Carousel>
              <div className="project-content-container">
                <h4>CURRENT PORTFOLIO</h4>
                <div className="proj-desc-btn-wrap">
                  <p className="Project-desc-p">That's right! you are currently viewing this project as my current developer portfolio. This project really helped me understand React.js and other tools.</p>
                  <div>
                    <a href="https://github.com/HunterBrennan1/Brennan.dev" target="_blank" className="proj-btn-link">Repo Code</a>
                    <a href="https://hunterbrennandev.netlify.app" target="_blank" className="proj-btn-link">Deployed App</a>
                  </div>
                </div>
                <div><p>THIS PROJECT WAS BUILT WITH</p>
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
                    <img className="skill-img-proj" src={Reactimg} alt="skill image" />
                  </div>
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
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-1 carousel-img"
                    src={Placeholder}
                    alt="Second slide"
                  />

                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-1 carousel-img"
                    src={Placeholder}
                    alt="Third slide"
                  />

                </Carousel.Item>
              </Carousel>

              {/* DESCRIPTION */}

              <div className="project-content-container">
                <h4>PROJECT 3</h4>
                <LoremIpsum p={1} className="Project-desc-p" />

                <div className="skills skills-proj">
                  <p>THIS PROJECT WAS BUILT WITH</p>
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
