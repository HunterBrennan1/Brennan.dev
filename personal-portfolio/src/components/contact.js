import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <Container>
        <Row>
          <Col>
            <div class="contact-container">
              <form action="eadf720887a6c497cc4838c04d8ee2d4" method="POST">
                <h3 class="form-title">Lets Get In Touch!</h3>
                <input type="text" id="name" placeholder="Your Name" required />
                <input type="email" id="email" placeholder="Email" required />
                <input
                  type="text"
                  id="Phone"
                  placeholder="Phone Number"
                  required
                />
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Let me know how I can help!"
                ></textarea>
                <button class="submit-button" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
