import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/StressOut(Logo).png";
import editor from "../../Assets/Projects/codeEditor.png";
import Ipl from "../../Assets/Projects/Picture 1.png";
import cnn from "../../Assets/Projects/pytoch-cnn.jpg"
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Stress-out App"
              description="This system uses Naive Bayes for depression detection through quizzes and employs CNN with a unique dataset for identifying depression from images and videos. It categorizes depression types and recommends clinic visits. It combines human emotions with technology. Python is used, with React.js, HTML, CSS, and JavaScript on the frontend, and MySQL on the backend via Django."
              ghLink="https://github.com/ShivaniChavan-tech/StressOutApp-2"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ipl}
              isBlog={false}
              title="Data Analysis on Indian Premier League"
              description="Statistical analysis on two separate datasets to see what characteristics may influence a team's ability to win. The parameters I selected to examine are as follows: win rate, number of games played, pre-game coin toss result. I was also interested about other criteria, such as the individual statistics. "
              ghLink="https://github.com/ShivaniChavan-tech/Data-Analysis"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cnn}
              isBlog={false}
              title="Image Recognition Classifier"
              description="Building a Deep Learning model (based on Neural Networks) that provides reliable and improved accuracy of an Image Recognition Classifier based on Convolution Neural Networks (CNNs). For comparing and contrasting, device two CNNs models"
              ghLink="https://github.com/ShivaniChavan-tech/improved-accuracy-of-an-Image-Recognition-Classifier-based-on-Convolution-Neural-Networks-CNNs-."
                            
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
