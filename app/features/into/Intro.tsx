import gsap, { Expo } from "gsap";
import React, { useEffect } from "react";
import styled from "styled-components";

interface Props {
  setIntroComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

/** Intro welcome screen. Shown for a few seconds. */
export const Intro = ({ setIntroComplete }: Props) => {
  useEffect(() => {
    setTimeout(() => {
      document.body.style.overflow = "hidden";
    }, 500);

    const handleComplete = () => {
      setIntroComplete(true);
      setTimeout(() => {
        const cursor = document.querySelector(".cursor") as HTMLDivElement;
        if (cursor) cursor.style.display = "block";
        document.body.style.overflow = "unset";
      }, 1000);
    };

    const tl = gsap.timeline({ onComplete: handleComplete });

    tl.to(".welcome", {
      delay: 1,
      duration: 0.5,
      ease: Expo.easeInOut,
      opacity: 1
    });
    tl.to(".letter", {
      delay: 1.5,
      duration: 1,
      ease: Expo.easeInOut,
      opacity: 0,
      stagger: {
        each: 0.1,
        from: "random"
      }
    });
    tl.to(".back", {
      duration: 1.5,
      ease: Expo.easeInOut,
      y: "-120%"
    });
  }, [setIntroComplete]);

  return (
    <Container>
      <Welcome className="welcome">
        <span className="letter">W</span>
        <span className="letter">e</span>
        <span className="letter">l</span>
        <span className="letter">c</span>
        <span className="letter">o</span>
        <span className="letter">m</span>
        <span className="letter">e</span>
      </Welcome>
      <Back className="back" />
    </Container>
  );
};

const Container = styled.section`
  position: fixed;
  height: 100vh;
  z-index: 10000;
  pointer-events: none;
`;

const Welcome = styled.h1`
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 12000;
  transform: translate(-50%, -100%);
  font-size: clamp(2rem, calc(40px + 100 * (100vw - 220px) / 1600), 7rem);
  font-weight: 600;
  opacity: 0;
`;

const Back = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11000;
  width: 100vw;
  height: 100vh;
  background: #000;
`;
