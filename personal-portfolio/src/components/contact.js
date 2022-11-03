import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import React, { useRef } from 'react';

AOS.init();



export const Contact = () => {
  const form = useRef();


  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3zmx1hk', 'template_wqr5g4u', e.target, '5n3gU0Yb_uRhoED6v')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
    showResult(true);
  };

  return (
    <section className="contact-section" id="contact">
      <Container data-aos="fade-down" data-aos-duration="1800">
        <Row>
          <Col>
            <div class="contact-container">
              <form name="contact-v1" method="POST" onSubmit={sendEmail}>
                <h3 class="form-title">Lets Get In Touch!</h3>

                <input type="text" id="name" name="user_name" placeholder="Your Name" required />
                <input type="email" id="email" name="user_email" placeholder="Email" required />
                <input
                  type="text"
                  name="user_phone"
                  placeholder="Phone Number"
                  required
                />
                <textarea name="message"
                  rows="4"
                  placeholder="Let me know how I can help!"
                ></textarea>
                <button class="submit-button" type="submit">
                  Submit
                </button>
                <div>
                  {
                    result ? <result /> : null
                  }
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

