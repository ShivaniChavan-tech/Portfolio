import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myAvatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./style1.css";

function Home2() {
  return (
    <Container  className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Hi Everyone, I am <span className="purple">Shiavni Chavan </span>
              <br />
              <br />from <span className="purple"> Maharashtra, India.</span>
              <i>
              I am a dedicated and innovative <span className="purple">computer science professional </span>with a genuine passion for technology and its transformative potential. My journey in the world of computer science began with a <span className="purple">Bachelor of Computer Engineering degree</span>, where I honed my foundational skills and developed a strong academic record at Savitribai Phule University in Pune, India.
              </i>
              <br />
              <br /><i>
              This solid educational foundation provided me with a comprehensive understanding of computer engineering, and my concentration in Computer Science allowed me to delve deeper into the realm of <span className="purple">software development, algorithms, and computing theory</span>. During this period, I achieved a commendable <span className="purple">GPA of 8/10</span>, reflecting my commitment to academic excellence.
              </i>
              <br />
              <br />
              <i>
              Building upon my undergraduate education, I pursued a <span className="purple"> Master of Science (MS) in Computer Science</span> with a specialization in <snap className="purple">Software Engineering at Pace University's prestigious Seidenberg School of Computer Science and Information Systems in New York City.</snap> My graduate studies not only enriched my technical knowledge but also nurtured my ability to think critically, solve complex problems, and collaborate effectively in a diverse and dynamic academic environment. Graduating with a <span  className="purple" >GPA of 3.83</span><span></span> in December 2023, I am proud of the rigorous academic journey I undertook.
              </i>
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ShivaniChavan-tech"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/shivaniviv18"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shivani-chavan-a65860109/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/shivaniviv18"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
