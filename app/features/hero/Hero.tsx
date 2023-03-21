import gsap, { Expo } from "gsap";
import { useEffect } from "react";
import styled from "styled-components";
import { useScroll } from "../../hooks/useScroll";
import { theme } from "../../styles/globalStyle";

interface Props {
  introComplete: boolean;
}

export const Hero = ({ introComplete }: Props) => {
  const positionY = useScroll();

  useEffect(() => {
    if (introComplete) {
      const tl = gsap.timeline();
      tl.to(".line", {
        duration: 0.8,
        ease: Expo.easeIn,
        y: "100%",
        stagger: { each: 0.4 }
      });
    }
  }, [introComplete]);

  return (
    <Container id="hero">
      <Content>
        <Heading style={{ transform: `translateY(-${positionY * 0.1}px)` }}>
          <span>I&#39;m Ikraam</span>
          <Line className="line" />
        </Heading>
        <SubHeading style={{ transform: `translateY(-${positionY * 0.08}px)` }}>
          <span>
            Front-End Developer. <Line className="line" />
          </span>
          <span>
            Self Taught. From London.
            <Line className="line" />
          </span>
        </SubHeading>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-width: 95%;
  width: 1240px;
  margin: 0 auto;

  @media (max-width: 600px) {
    min-height: 60vh;
    margin-top: 5rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Heading = styled.h1`
  position: relative;
  width: 100%;
  overflow: hidden;
  font-weight: 600;
  font-size: clamp(2.8rem, calc(40px + 120 * (100vw - 420px) / 1600), 8rem);
  color: ${theme.$textWhite};

  span {
    display: inline-block;
    background: -webkit-linear-gradient(#ed9550, #c36d89);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Line = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: ${theme.$darkBlack};
`;

const SubHeading = styled.h2`
  position: relative;
  color: ${theme.$textWhite};
  font-size: clamp(1.8rem, calc(20px + 106 * (100vw - 420px) / 1600), 5rem);
  font-weight: 500;
  line-height: 1.2;

  span {
    position: relative;
    display: block;
    overflow: hidden;
  }
`;
