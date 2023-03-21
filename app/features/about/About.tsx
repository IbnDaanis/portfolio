import styled from "styled-components";
import { Title } from "../../components/Title";
import { theme } from "../../styles/globalStyle";

/** Section where I talk about my story. */
export const About = () => {
  return (
    <Container id="about">
      <Title title="About Me" />
      <Content>
        <AboutContent>
          Learning to code has been a tough journey. With the help of{" "}
          <Link
            href="https://www.youtube.com/channel/UCSKr_gILoWAETdYpAoCxB0w/channels?view=56&shelf_id=0"
            target="blank"
            rel="noreferrer"
            className="link"
          >
            developers on YouTube,
          </Link>{" "}
          I have learnt web development from scratch. I remember once being
          overwhelmed by HTML and SCSS, now I&#39;m creating this website in
          React and TypeScript.
        </AboutContent>
        <AboutContent>
          Through YouTube, Udemy, Scrimba, and other resources, I have learnt
          several technologies. HTML, CSS, SCSS, Styled Components, JavaScript,
          ES6+, React, Redux, NodeJs, Express and MongoDB, just to name a few.
        </AboutContent>
        <AboutContent>
          I&#39;m a quick learner and eager to find out new things. I&#39;m
          never satisfied with mediocre. If I do something, I do it with
          perfection. Look below.
        </AboutContent>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1240px;
  max-width: 85%;
  margin: 0 auto 8rem;

  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const AboutContent = styled.p`
  margin-bottom: 4rem;
  color: ${theme.$textWhite};
  font-size: clamp(1.8rem, calc(20px + 100 * (40vw - 100px) / 1600), 2.5rem);
  font-weight: 500;
  line-height: 1.2;

  @media (max-width: 600px) {
    margin-bottom: 2rem;
    font-size: 4.8vw;
  }
`;

const Link = styled.a`
  color: ${theme.$lightPink};
  font-weight: 500;
  transition: 0.2s ease-in-out;

  &:hover {
    background: #ff0000;
    padding: 2px 8px;
    border-radius: 10px;
    color: ${theme.$textWhite};
  }
`;
