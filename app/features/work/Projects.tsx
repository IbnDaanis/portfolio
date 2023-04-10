import styled from "styled-components";
import { Title } from "../../components/Title";
import { projects } from "../../data/projects";
import { Project } from "./Project";

/** Displays the my projects. */
export const Projects = () => {
  return (
    <Container id="projects" className="projects">
      <Title title="My Projects" />
      <ProjectsContainer>
        {projects.map(project => (
          <Project key={project.title} project={project} />
        ))}
      </ProjectsContainer>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  max-width: 85%;
  width: 1920px;
  margin: 0 auto;
`;

const ProjectsContainer = styled.div`
  width: 1240px;
  max-width: 100%;
  margin: 0 auto;
`;
