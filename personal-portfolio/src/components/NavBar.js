import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navIcon1 from "../assets/img/linkedin1.svg";
import navIcon2 from "../assets/img/github1.svg";
import navIcon3 from "../assets/img/twitter.svg";
import DarkMode from "../Darkmode.js";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("all");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  // OPACITY TOGGLE

  const setFocused = () => {
    localStorage.setItem("opacity", "focused");
    document.documentElement.setAttribute("data-theme", "focused");
  };
  const setUnfocused = () => {
    localStorage.setItem("opacity", "unfocused");
    document.documentElement.setAttribute("data-theme", "unfocused");
  };

  const toggleOpacity = (e) => {
    if (e.target.checked) {
      setFocused();
    } else {
      setUnfocused();
    }
  };

  return (
    <header>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <p className="toggle">Toggle Theme</p>
          <Navbar.Brand href="#home">
            <DarkMode />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#all"
                className={
                  activeLink === "all" ? "active navbar-Link" : "navbar-Link"
                }
                onClick={() => onUpdateActiveLink("all")}
              >
                All
              </Nav.Link>
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-Link" : "navbar-Link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-Link" : "navbar-Link"
                }
                onClick={() => onUpdateActiveLink("skills")}
                onclick={toggleOpacity}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-Link"
                    : "navbar-Link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/hunter-brennan-523000241/"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  <img src={navIcon1} alt="Linkedin" />
                </a>
                <a
                  href="https://github.com/HunterBrennan1"
                  data-aos="fade-down"
                  data-aos-duration="1800"
                >
                  <img src={navIcon2} alt="Github" />
                </a>
                <a
                  href="https://twitter.com/hunterb00733201"
                  data-aos="fade-down"
                  data-aos-duration="2100"
                >
                  <img src={navIcon3} alt="Twitter" />
                </a>
              </div>
              <button className="vvd" onClick={() => console.log("connect")}>
                <span>Connect With Me!</span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
