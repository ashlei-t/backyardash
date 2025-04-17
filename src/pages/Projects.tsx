import React, { useState } from 'react';
import { projects } from '../constants/copy';
import AnimatedText from '../components/ui/AnimatedText';
import '../App.css';

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="section-content">
        <AnimatedText text="Projects" tag="h2" animation="slide" className="section-title" />
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div
              className="project-header"
              onClick={() => toggleProject(project.id)}
            >
              <AnimatedText
                text={project.title}
                tag="h3"
                animation="slide"
                direction="up"
                delay={200}
                className="project-title"
              />
              <span className="toggle-icon">
                {expandedProject === project.id ? '−' : '+'}
              </span>
            </div>

            <div className={`project-content ${expandedProject === project.id ? 'expanded' : ''}`}>
              <div className="project-details">
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

              <div className="project-gallery">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                {/* Add more images here if available */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
