import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Indianoil from "./images/indian_oil.jpeg"
import shoptaki from "./images/shoptaki.jpeg"
import Virtusky from "./images/Virtusky.jpeg"

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
       
            <div class="timeline">
                <div class="timeline-box">
                    <div class="timeline-head">
                        <img src={shoptaki}/>
                        <h1 class = "line">Full-stack Developer Intern</h1>
                        <h4 class="no-bold">Shoptaki</h4>
                        <h6 class="no-bold">March 2023 - Present</h6>
                    </div>
                    <div class="timeline-body">
                      < div class = "line1">
                        <p>• Develop innovative smart-chain mobile & web applications using Python to hybridize blockchain management across multiple entities, visualizing complex AI data & building robust platforms using JavaScript to create interconnected AI ecosystem.<br/>
                          • Optimize deployment & scaling of smart-chain applications using Docker, collaborating in agile team of five for process re- engineering, migrating backend server to Arango DB while debugging coding errors to reduce data breaches & enhance system</p>
                    </div>
                    </div>
                </div>
                <div class="timeline-box">
                    <div class="timeline-head">
                        <img src={Indianoil}/>
                        <h1 >Networking Infrastructure Intern</h1>
                        <h4 class="no-bold">Indian Oil Corp Limited </h4>
                        <h6 class="no-bold">Dec 2018 - Jan 2019</h6>
                    </div>
                    <div class="timeline-body">

                        <p>• Created websites using HTML & CSS under guidance of CEO, developing networking infrastructure skills in WAN, LAN, & MAN while
                          hosting React & Next.js front-end & Node.js backend API using AWS Elastic Compute Cloud (EC2).<br/>
                          • Optimized server connectivity by implementing AWS EC2, reducing website loading time by 30% & improving availability to balance
                          higher traffic load by 25%.</p>
                    </div>
                </div>
                <div class="timeline-box">
                  <div class="timeline-head">
                  <img src={Virtusky}/>
                      <h1 class = "line">MERN Stack Web Developer Intern</h1>
                      <h4 class="no-bold">Virtusky IT Private LTD</h4>
                      <h6 class="no-bold">May 2017 - May 2018</h6>
                  </div>
                  <div class="timeline-body">
                  < div class = "line1">
                      <p>• Developed scalable web app for EdTech client using React & Next.js, building user-friendly front-end using HTML, CSS, & Bootstrap, increasing user engagement by 40% & reducing bounce rate by 30%.<br/>
                        • Enforced blockchain algorithms in Python & JavaScript to detect data manipulation, enhancing system security & reducing vulnerabilities by 20%.</p>
                  </div>
                  </div>
              </div>

              
                <div class="timeline-divider">
                  <div class ="timeline-traveler">
                        <i class="fas fa-plane"></i>
                    </div>

                  </div>
                    
                </div>      
            
           
          
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
