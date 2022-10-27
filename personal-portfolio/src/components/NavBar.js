import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navIcon1 from '../assets/img/linkedin1.svg'
import navIcon2 from '../assets/img/github.svg'
import navIcon3 from '../assets/img/twitter.svg'
import { useEffect, useState } from 'react';

const DarkMode = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    }else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme","dark");
      theme = darkTheme;
    }
  };

  return (
    <button
     className={theme === "dark" ? clickedClass : ""}
    id="darkMode"
    onClick={(e) => switchTheme(e)}>  
    </button>
  )
};

export default DarkMode;

export const NavBar = () => {
  const[activeLink, setActiveLink] = useState('home');
  const[scrolled,setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50){
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <body>
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <p className='toggle'>Toggle Theme</p>
        <Navbar.Brand href="#home">
          <DarkMode />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-Link" : "navbar-Link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about-me" className={activeLink === "about-me" ? "active navbar-Link" : "navbar-Link"} onClick={() => onUpdateActiveLink('about-me')}>About Me</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-Link" : "navbar-Link"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-Link" : "navbar-Link"} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === "contact" ? "active navbar-Link" : "navbar-Link"} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href="#"><img src={navIcon1} alt="" /></a>
              <a href="#"><img src={navIcon2} alt="" /></a>
              <a href="#"><img src={navIcon3} alt="" /></a>
            </div>
            <button className='vvd' onClick={() => console.log('connect')}><span>Connect With Me!</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </body>
  );
}
