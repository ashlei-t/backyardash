import React from 'react';
import { intro, projects, workExperience, education, skills, navItems } from './constants/copy';
import ParallaxSection from './components/ui/ParallaxSection';
import AnimatedText from './components/ui/AnimatedText';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="portfolio-app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">Ash</div>
        <div className="navbar-links">
          {navItems.map((item, index) => (
            <a key={index} href={item.href} className="navbar-link">
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Intro Section */}
      <section id="intro" className="section intro-section">
        <ParallaxSection speed={0.3} direction="up">
          <div className="intro-content">
            <AnimatedText
              text={intro.greeting}
              tag="h1"
              animation="slide"
              direction="up"
              delay={200}
              className="intro-greeting"
            />
            <div className="animated-waves">
              {/* Waves animation could go here */}
            </div>
            <AnimatedText
              text={intro.tagline}
              tag="p"
              animation="fade"
              delay={600}
              className="intro-tagline"
            />
          </div>
        </ParallaxSection>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <ParallaxSection speed={0.2} direction="up">
          <AnimatedText text="Projects" tag="h2" animation="slide" className="section-title" />
        </ParallaxSection>

        {projects.map((project, index) => (
          <ParallaxSection
            key={project.id}
            speed={0.3}
            direction={index % 2 === 0 ? "up" : "down"}
            className="project-card-container"
          >
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
                <ParallaxSection speed={0.1} direction="up" className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                </ParallaxSection>
              </div>
            </div>
          </ParallaxSection>
        ))}
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="section experience-section">
        <ParallaxSection speed={0.2} direction="up">
          <AnimatedText text="Work Experience" tag="h2" animation="slide" className="section-title" />
        </ParallaxSection>

        {/* Credible Labs */}
        <ParallaxSection speed={0.25} direction="up" className="experience-item">
          <div className="experience-header">
            <AnimatedText
              text={workExperience.credibleLabs.company}
              tag="h3"
              animation="slide"
              direction="left"
              className="company-name"
            />
            <AnimatedText
              text={workExperience.credibleLabs.location}
              tag="span"
              animation="fade"
              className="company-location"
            />
          </div>

          {workExperience.credibleLabs.positions.map((position, index) => (
            <div key={index} className="position-content">
              <AnimatedText
                text={position.title}
                tag="h4"
                animation="slide"
                direction="right"
                delay={200}
                className="position-title"
              />
              <AnimatedText
                text={position.period}
                tag="span"
                animation="fade"
                delay={300}
                className="position-period"
              />
              <ul className="achievements-list">
                {position.achievements.map((achievement, i) => (
                  <li key={i} className="achievement-item">
                    <AnimatedText
                      text={achievement}
                      tag="p"
                      animation="fade"
                      delay={400 + (i * 100)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ParallaxSection>

        {/* California Academy of Sciences */}
        <ParallaxSection speed={0.25} direction="up" className="experience-item">
          <div className="experience-header">
            <AnimatedText
              text={workExperience.calAcademy.company}
              tag="h3"
              animation="slide"
              direction="left"
              className="company-name"
            />
            <AnimatedText
              text={workExperience.calAcademy.location}
              tag="span"
              animation="fade"
              className="company-location"
            />
          </div>

          {workExperience.calAcademy.positions.map((position, index) => (
            <div key={index} className="position-content">
              <AnimatedText
                text={position.title}
                tag="h4"
                animation="slide"
                direction="right"
                delay={200}
                className="position-title"
              />
              <AnimatedText
                text={position.period}
                tag="span"
                animation="fade"
                delay={300}
                className="position-period"
              />
              <ul className="achievements-list">
                {position.achievements.map((achievement, i) => (
                  <li key={i} className="achievement-item">
                    <AnimatedText
                      text={achievement}
                      tag="p"
                      animation="fade"
                      delay={400 + (i * 100)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ParallaxSection>

        {/* Education */}
        <ParallaxSection speed={0.2} direction="up">
          <AnimatedText text="Education" tag="h3" animation="slide" direction="left" className="subsection-title" />
          <div className="education-list">
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <AnimatedText
                  text={edu.degree}
                  tag="h4"
                  animation="fade"
                  delay={200 + (index * 100)}
                  className="degree"
                />
                <AnimatedText
                  text={`${edu.institution}, ${edu.year}`}
                  tag="p"
                  animation="fade"
                  delay={300 + (index * 100)}
                  className="institution"
                />
              </div>
            ))}
          </div>
        </ParallaxSection>

        {/* Skills */}
        <ParallaxSection speed={0.15} direction="up">
          <AnimatedText text="Technical Skills" tag="h3" animation="slide" direction="left" className="subsection-title" />

          <div className="skills-container">
            {Object.entries(skills).map(([category, skillsList], index) => (
              <div key={category} className="skill-category">
                <AnimatedText
                  text={category.charAt(0).toUpperCase() + category.slice(1)}
                  tag="h4"
                  animation="fade"
                  delay={200 + (index * 100)}
                  className="category-title"
                />
                <div className="skills-list">
                  {skillsList.map((skill, i) => (
                    <AnimatedText
                      key={i}
                      text={skill}
                      tag="span"
                      animation="scale"
                      delay={300 + (index * 100) + (i * 50)}
                      className="skill-tag"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ParallaxSection>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <ParallaxSection speed={0.2} direction="up">
          <AnimatedText text="Let's Connect" tag="h2" animation="slide" className="section-title" />
          <div className="contact-content">
            <AnimatedText
              text="Get in touch to discuss opportunities and collaborations."
              tag="p"
              animation="fade"
              delay={200}
              className="contact-message"
            />
            <div className="contact-links">
              <a href="mailto:your-email@example.com" className="contact-link">Email</a>
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
              <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
            </div>
          </div>
        </ParallaxSection>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Ash. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
