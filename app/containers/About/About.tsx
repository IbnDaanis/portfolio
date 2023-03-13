import { Title } from "../../components";
import "./About.scss";

export const About = (): JSX.Element => {
  return (
    <section id="about" className="about">
      <div className="container">
        <Title title="About Me" />
        <div className="content">
          <p className="about-content">
            Learning to code has been a tough journey. With the help of{" "}
            <a
              href="https://www.youtube.com/channel/UCSKr_gILoWAETdYpAoCxB0w/channels?view=56&shelf_id=0"
              target="blank"
              rel="noreferrer"
              className="link"
            >
              developers on YouTube,
            </a>{" "}
            I have learnt web development from scratch. I remember once being
            overwhelmed by HTML and SCSS, now I&#39;m creating this website in
            React and TypeScript.
          </p>
          <p className="about-content">
            Through YouTube, Udemy, Scrimba, and other resources, I have learnt
            several technologies. HTML, CSS, SCSS, Styled Components,
            JavaScript, ES6+, React, Redux, NodeJs, Express and MongoDB, just to
            name a few.
          </p>
          <p className="about-content">
            I&#39;m a quick learner and eager to find out new things. I&#39;m
            never satisfied with mediocre. If I do something, I do it with
            perfection. Look below.
          </p>
        </div>
      </div>
    </section>
  );
};
