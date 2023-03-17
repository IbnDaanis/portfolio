import { Project } from "../../components/Project/Project";
import { Title } from "../../components/Title";
import { projects } from "../../data/projects";
import "./Projects.scss";

export const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <Title title="My Projects" />
        <div className="projects">
          {projects.map(project => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
