import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import  Html5 from "../assets/img/html5.svg"
import  Css3 from "../assets/img/css3.svg"
import  JS from "../assets/img/Javascript.svg"
import  Reactimg from "../assets/img/reactimg.svg"
import  NodeJs from "../assets/img/nodejs.svg"
import  GithubImg from "../assets/img/githubimg.svg"
import  GitImg from "../assets/img/gitimg.svg"
import  Jquery from "../assets/img/jquery.svg"
import  Express from "../assets/img/express.svg"


export const SkillsPage = () => {
  return(
    <section className='Skills-Page' id="skills">
      <Container>
        <h2>My Tech Stack and Skills</h2>
            <div className='skills'>
              <div className='skilldiv'> 
                <img className='skill-img' src={Html5} />
                <p className='skill-title'>HTML5</p>
              </div>
              <div className='skilldiv'> 
                <img className='skill-img' src={Css3} />
                <p className='skill-title'>CSS3</p>
              </div>
              <div className='skilldiv'> 
                <img className='skill-img' src={JS} />
                <p className='skill-title'>JavaScript</p>
              </div>
              <div className='skilldiv'> 
                <img className='skill-img' src={Reactimg} />
                <p className='skill-title'>React.js</p>
              </div>
              <div className='skilldiv'> 
                <img className='skill-img' src={NodeJs} />
                <p className='skill-title'>Node.js</p>
              </div>
              <div className='skilldiv'> 
                <img className='skill-img githubimg' src={GithubImg} />
                <p className='skill-title'>GitHub</p>
              </div>
              <div className='skilldiv'> 
                <img className='skill-img' src={GitImg} />
                <p className='skill-title'>Git</p>
              </div>
              <div className='skilldiv'> 
                <img className='skill-img githubimg' src={Jquery} />
                <p className='skill-title'>Jquery</p>
              </div>
              <div className='skilldiv'> 
                <img className='skill-img githubimg' src={Express} />
                <p className='skill-title'>Express.js</p>
              </div>
            </div>
      </Container>
    </section>
  );
}