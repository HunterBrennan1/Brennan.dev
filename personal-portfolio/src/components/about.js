import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import PrimaryKeys2 from "../assets/img/Pkrimg2.JPG";
import Gif from "../assets/img/gifimg.gif"
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
                  I'm a <span className="big-bold-text">Full Stack Web Developer</span> with a passion for learning. I'm currently attending a Full Stack Web Development Boot Camp with<span className="school-name"> UC Berkeley Extention</span>, Where I am collecting new skills to add under my belt, like the ones listed above!.</p>
              </div>
              <div>
                <img src={Gif} className="about-img" alt="placeholder" />
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};
