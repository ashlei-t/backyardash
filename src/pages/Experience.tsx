import React from 'react';
import { workExperience, education, skills } from '../constants/copy';
import AnimatedText from '../components/ui/AnimatedText';
import '../App.css';

const Experience: React.FC = () => {
  return (
    <div className="experience-page">
      {/* Work Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="section-content">
          <AnimatedText text="Work Experience" tag="h2" animation="slide" className="section-title" />
        </div>

        {/* Credible Labs */}
        <div className="experience-item">
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
        </div>

        {/* California Academy of Sciences */}
        <div className="experience-item">
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
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section education-section">
        <div className="section-content">
          <AnimatedText text="Education" tag="h2" animation="slide" className="section-title" />
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
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="section-content">
          <AnimatedText text="Technical Skills" tag="h2" animation="slide" className="section-title" />
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
        </div>
      </section>
    </div>
  );
};

export default Experience;
