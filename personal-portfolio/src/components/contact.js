import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <Container data-aos="fade-down" data-aos-duration="1800">
        <Row>
          <Col>
            <div class="contact-container">
              <form name="contact v1" method="POST" data-netlify="true" onSubmit="submit">
                <input type="hidden" name="form-name" value="contact v1" />
                <h3 class="form-title">Lets Get In Touch!</h3>
                <input type="text" id="name" name="first-name" placeholder="Your Name" required />
                <input type="email" id="email" name="email" placeholder="Email" required />
                <input
                  type="text"
                  id="Phone"
                  placeholder="Phone Number"
                  required
                />
                <textarea name="comments"
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
