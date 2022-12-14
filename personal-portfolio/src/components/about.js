import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Html5 from "../assets/img/html5.svg";
import Css3 from "../assets/img/css3.svg";
import JS from "../assets/img/Javascript.svg";
import Reactimg from "../assets/img/reactimg.svg";
import NodeJs from "../assets/img/nodejs.svg";
import MySQL from "../assets/img/mysql-plain.svg";
import GitImg from "../assets/img/gitimg.svg";
import Jquery from "../assets/img/jquery.svg";
import Express from "../assets/img/express.svg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export const About = () => {
  return (
    <section className="about-section" id="about">
      <Container>
        <Row>
          <Col>
            <div className="about-content-container">
              <div>
                <h3 className="about-header">A Little About Me...</h3>
                <p className="about-me-text">
                  I'm a <span className="big-bold-text">Full Stack Web Developer</span> with a passion for learning. I'm a Bootcamp graduate with<span className="school-name"> UC Berkeley Extention</span>, Where I have completed my Full Stack Web Development Certificate. <br></br> I'm Currently working on personal projects to better myself and continue to learn!</p>
              </div>
              <div>
                <section className="Skills-Page" id="skills">
                  <Container className="skillswrapper">
                    <h2 data-aos="fade-down"
                      data-aos-duration="2000">My Tech Stack and Skills</h2>
                    <div className="skills">
                      <div
                        className="skilldiv"
                        data-aos="fade-down"
                        data-aos-duration="900"
                      >
                        <img className="skill-img" src={Html5} alt="skill image" />
                        <p className="skill-title">HTML5</p>
                      </div>
                      <div
                        className="skilldiv"
                        data-aos="fade-down"
                        data-aos-duration="1100"
                      >
                        <img className="skill-img" src={Css3} alt="skill image" />
                        <p className="skill-title">CSS3</p>
                      </div>
                      <div
                        className="skilldiv"
                        data-aos="fade-down"
                        data-aos-duration="1400"
                      >
                        <img className="skill-img" src={JS} alt="skill image" />
                        <p className="skill-title">JavaScript</p>
                      </div>
                      <div
                        className="skilldiv"
                        data-aos="fade-down"
                        data-aos-duration="1700"
                      >
                        <img className="skill-img" src={Reactimg} alt="skill image" />
                        <p className="skill-title">React.js</p>
                      </div>
                      <div
                        className="skilldiv"
                        data-aos="fade-down"
                        data-aos-duration="2000"
                      >
                        <img className="skill-img" src={NodeJs} alt="skill image" />
                        <p className="skill-title">Node.js</p>
                      </div>
                      <div
                        className="skilldiv"
                        data-aos="fade-down"
                        data-aos-duration="2000"
                      >
                        <img className="skill-img" src={MySQL} alt="skill image" />
                        <p className="skill-title">MySQL</p>
                      </div>

                      <div
                        className="skilldiv"
                        data-aos="fade-down"
                        data-aos-duration="2500"
                      >
                        <img className="skill-img" src={GitImg} />
                        <p className="skill-title">Git</p>
                      </div>
                      <div
                        className="skilldiv"
                        data-aos="fade-down"
                        data-aos-duration="2700"
                      >
                        <img
                          className="skill-img githubimg"
                          src={Jquery}
                          alt="skill image"
                        />
                        <p className="skill-title">Jquery</p>
                      </div>
                      <div
                        className="skilldiv"
                        data-aos="fade-down"
                        data-aos-duration="3000"
                      >
                        <img
                          className="skill-img githubimg"
                          src={Express}
                          alt="skill image"
                        />
                        <p className="skill-title">Express.js</p>
                      </div>
                      {/* <div
            className="skilldiv"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            <img
              className="skill-img githubimg"
              src={Mongodb}
              alt="skill image"
            />
            <p className="skill-title">MongoDB</p>
          </div>
          <div
            className="skilldiv"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            <img
              className="skill-img githubimg"
              src={GraphQL}
              alt="skill image"
            />
            <p className="skill-title">GraphQL</p>
          </div> */}
                    </div>
                  </Container>
                </section>
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};
