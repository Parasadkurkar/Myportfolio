import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/medicine.png";
import editor from "../../Assets/Projects/face.png";
import chatify from "../../Assets/Projects/Elocate.png";
import bitsOfCode from "../../Assets/Projects/ki.png";

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
              imgPath={chatify}
              isBlog={false}
              title="ELocate"
              description="A location-based web application that enables users to find and contact nearby e-waste recycling centers. Users can search by city, category (batteries, electronics, etc.), and view location pins on an interactive map. It encourages responsible e-waste disposal by connecting users with verified facilities. Built using ReactJS, MongoDB, and Leaflet/Google Maps API, with a user-friendly UI and real-time location filtering."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="AI Agent for Reddit"
              description="An AI-powered Reddit bot that intelligently reads posts and automatically responds to comments related to the post content. It uses NLP and context-aware response generation to engage in conversations in subreddits. Ideal for moderation bots and auto-engagement use cases. Built using Python, Reddit API (PRAW), and language models for meaningful reply generation."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Facial Recognition Attendance System"
              description="A secure, real-time attendance system using facial recognition technology to eliminate manual logging. Built with OpenCV, Python, and face recognition libraries, it captures faces via webcam and stores attendance in a CSV or database. Ideal for schools, colleges, and offices to ensure contactless and accurate attendance tracking."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="MedXpert"
              description="A responsive e-commerce platform that enables users to browse and order medicines from nearby pharmacies. Developed as a mini-project using HTML, CSS, PHP, and MySQL, the site includes user login, product listings, order summary, and checkout functionality. Focused on quick local delivery and basic UI for community medical access."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://medxpertbyparas.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
