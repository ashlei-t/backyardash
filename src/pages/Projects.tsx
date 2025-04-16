import React from 'react';
import { projects } from '../constants/copy';
import AnimatedText from '../components/ui/AnimatedText';
import '../App.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-content">
        <AnimatedText text="Projects" tag="h2" animation="slide" className="section-title" />
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card-container">
            <div
              className="project-card"
              style={{
                background: project.theme.background,
                color: project.theme.primary
              }}
            >
              <div className="project-content">
                <AnimatedText
                  text={project.title}
                  tag="h3"
                  animation="slide"
                  direction="up"
                  delay={200}
                  className="project-title"
                />
                <AnimatedText
                  text={project.description}
                  tag="p"
                  animation="fade"
                  delay={400}
                  className="project-description"
                />
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-image-container">
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
