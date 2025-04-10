import { projects } from "../../constants/copy"

export default function Projects() {
  return (
    <div className="container-fluid">
    <h1>Projects</h1>
    {projects.map((project) => (
    <div className={`row project-item ${project.class}`}>
      <div className="col col-6-lg">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
      <div className="col col-6-lg">
        <img
          src={project.image}
          alt={`${project.name} project screenshot`}
          className="project-image"
        />
      </div>
    </div>
    ))}
    </div>
)}
