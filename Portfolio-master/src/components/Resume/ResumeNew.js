import React from "react";
import  { useState } from "react";
import { Container, Row , Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../Resume/Shivani_Chavan_Software_Development.pdf"; 
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  return (
    
    <div  fluid className="resume-section">
        
    <div>
      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
        
        <Row style={{ justifyContent: "center", position: "relative" , marginTop: "50px"}}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "200px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        </div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      
        <Row id="contact">
          <div className="section-heading">
            <i className="far fa-address-card"></i>
            <span>Contact</span>
          </div>
          
          <div className="contact-container">
          <div className="contact-form-container">
              <form>
                  <div><input type="text" placeholder="Your Name" className="input-field" required/></div>
                  <div><input type="email" placeholder="Your Email" className="input-field" required/></div>
                  <div><textarea className="input-field" placeholder="Message"></textarea></div>
                  <div><a href="mailto:shivaniviv18@gmail.com"><input type="button" className="white-border-transparent-button" id="submit" value="SEND MESSAGE"/></a></div>
              </form>
          </div>
          </div>
          </Row>
          <Row>
            <div className="address-container">
              <h2>Get in touch</h2>
              <p>
                
              </p>

              <h2>My Address</h2>
              <div>
                <i className="fas fa-map-marker-alt"></i>
                21 Perry st, Jersey City, New Jersey 07306
              </div>
              <div>
                <i className="fas fa-mobile"></i>(+1)551-554-7035
              </div>
              <div>
                <i className="far fa-envelope"></i>shivani.chavan@pace.edu
              </div>
            </div>
      
        
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
       <Particle/>
   
    </div>
  );
}

export default ResumeNew;