import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export const About = () => {
  return (
    <section className="about-section" id="about">
      <Container>
        <Row>
          <Col>
            <div>
              <h3>A Little About Me...</h3>
              <p className="about-me-text">
                <span>&#8226;</span>I was born in Jupiter Florida, and moved to
                New Jersey with my family.
              </p>
              <p className="about-me-text">
                <span>&#8226;</span>When im not coding, I spend a lot of time
                with friends and love to experience new things.
              </p>
              <p className="about-me-text">
                <span>&#8226;</span>Passioniate about Body And Mental
                Improvement
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
