import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Html5 from "../assets/img/html5.svg";
import Css3 from "../assets/img/css3.svg";
import JS from "../assets/img/Javascript.svg";
import Reactimg from "../assets/img/reactimg.svg";
import NodeJs from "../assets/img/nodejs.svg";
import MySQL from "../assets/img/mysql-plain.svg";
import GitImg from "../assets/img/gitimg.svg";
import Jquery from "../assets/img/jquery.svg";
import Express from "../assets/img/express.svg";
import Mongodb from "../assets/img/mongodb.svg";
import GraphQL from "../assets/img/graphql-plain.svg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export const SkillsPage = () => {
  return (
    <section className="Skills-Page" id="skills">
      <Container className="skillswrapper">
        <h2>My Tech Stack and Skills</h2>
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
          {/* <div
            className="skilldiv"
            data-aos="fade-down"
            data-aos-duration="2300"
          >
            <img className="skill-img githubimg" src={Mongodb} />
            <p className="skill-title">MongoDB</p>
          </div> */}
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
          <div
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
          </div>
        </div>
      </Container>
    </section>
  );
};
