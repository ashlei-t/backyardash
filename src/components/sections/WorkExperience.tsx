import '../App.css'
import { workExperience } from '../constants'
import { education } from '../constants'
import { skills } from '../constants'

export default function WorkExperience() {
  return (
    <div className="container-fluid work-experience-section">
      <h2>Work Experience</h2>
      {workExperience.map((company) => (
        <div key={company.company} className="work-experience-item">
          <h4>{company.company} — {company.location}</h4>
          {company.positions.map((position) => (
            <div key={position.title}>
              <h5>{position.title} | {position.period}</h5>
              {position.sections ? (
                position.sections.map((section) => (
                  <div key={section.title}>
                    <h6>{section.title}</h6>
                    <ul>
                      {section.bullets.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <ul>
                  {position.bullets?.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ))}
      <div className="education-section">
        <h3>Education & Training</h3>
        <ul>
          {education.map((edu) => (
            <li key={edu.institution}>
              {edu.degree} — {edu.institution}
              {edu.location && `, ${edu.location}`}, {edu.year}
            </li>
          ))}
        </ul>
      </div>
      <div className="skills-section">
        <h3>Technical Skills</h3>
        {skills.map((skillCategory) => (
          <div key={skillCategory.category} className="skill-category">
            <h6>{skillCategory.category}</h6>
            <p>{skillCategory.items.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
