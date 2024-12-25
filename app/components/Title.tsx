import { gsap, ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useWindowSize } from "../hooks/useWindowSize";
import { theme } from "../styles/globalStyle";

interface Animations {
  [key: string]: number | string;
}

interface Props {
  title: string;
}

/** Titles for the different sections of the website. */
export const Title = ({ title }: Props) => {
  const { width } = useWindowSize();

  const titleEl = useRef<HTMLHeadingElement>(null);
  const lineEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function titleAnimation(
      element: HTMLHeadingElement | HTMLDivElement,
      options: Animations
    ) {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: width < 600 ? "top 80%" : "50% 90%"
        }
      });
      tl.to(element, {
        ...options
      });
    }

    if (!titleEl.current || !lineEl.current) return;

    titleAnimation(titleEl.current, { duration: 1, y: 0, ease: "power3.out" });
    titleAnimation(lineEl.current, {
      delay: -0.8,
      duration: 1.5,
      ease: "power3.out",
      width: "100%"
    });
  }, [width, title]);

  return (
    <Container>
      <TitleHeading
        className={`title title-${title.replace(" ", "")}`}
        ref={titleEl}
      >
        {title}
      </TitleHeading>
      <Line
        className={`title-line title-line-${title.replace(" ", "")}`}
        ref={lineEl}
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  margin: 8rem auto;
  overflow: hidden;

  @media (max-width: 600px) {
    margin: 4rem auto;
  }
`;

const TitleHeading = styled.h2`
  padding-bottom: 1rem;
  transform: translateY(100%);
  font-size: clamp(2rem, calc(40px + 100 * (100vw - 220px) / 1600), 10rem);
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  line-height: 1;
  color: ${theme.$lightPink};

  @media (max-width: 1200px) {
    padding-bottom: 0.5rem;
    text-align: left;
  }

  @media (max-width: 600px) {
    width: fit-content;
    font-size: 10vw;
  }
`;

const Line = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background: ${theme.$lightPink};
`;
