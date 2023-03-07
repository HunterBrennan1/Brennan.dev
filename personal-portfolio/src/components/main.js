import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export const MainPage = () => {
  return (
    <section className="MainPage" id="home">
      <Container>
        <Row
          className="align-items-center headerContainer"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <Col className="headerMain" xs={12} md={6} xl={7}>
            <h1 className="headerText">
              {` Hey, I'm Hunter, `}
              <span className="wrap">
                A Full Stack Web Developer from New Jersey
              </span>
            </h1>
            <div>
              <a className="connectBtn" href="#contact">
                Let's connect!
              </a>
            </div>
            <div className="devstage">
              <p>Portfolio Is Currently In A Development Stage, Content Is Subject To Change!</p>
            </div>
          </Col>
          <Col className="cityNightcontainer" xs={12} md={6} xl={5}>
            {/* <img src={CityNight} /> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MainPage;
