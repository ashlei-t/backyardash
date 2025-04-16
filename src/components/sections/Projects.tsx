import { projects } from "../../constants/copy"

export default function Projects() {
  return (
    <div className="container-fluid">
      <h1>Projects</h1>
      <div className="project-section">
        {projects.map((project) => (
          <div key={project.id} className="row project-item">
            <div className="col-md-6">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={project.image}
                alt={`${project.title} project screenshot`}
                className="project-image"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
