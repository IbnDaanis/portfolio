"use client";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { Header, Scroll } from "./components";
import { About, Contact, Hero, Intro, Projects } from "./containers";
import "./styles/globalStyle";

export const App = () => {
  const [cursorPosition, setCursorPosition] = useState({
    pageY: -100,
    pageX: -100
  });
  const { pageY, pageX } = cursorPosition;

  useEffect(() => {
    document.addEventListener("mouseleave", () => {
      setCursorPosition({ pageY: -100, pageX: -100 });
    });
    document.addEventListener("mousemove", event => {
      setCursorPosition({
        pageY: event.clientY - 20,
        pageX: event.clientX - 20
      });
    });
  }, []);

  const [displayApp, setDisplayApp] = useState(false);

  setTimeout(() => {
    setDisplayApp && setDisplayApp(true);
    document.body.style.background = "#151515";
  }, 1550);

  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      <Header />
      <Intro setIntroComplete={setIntroComplete} />
      {displayApp ? (
        isMobile ? (
          <>
            <Hero introComplete={introComplete} />
            <About />
            <Projects />
            <Contact />
          </>
        ) : (
          <Scroll>
            <Hero introComplete={introComplete} />
            <About />
            <Projects />
            <Contact />
          </Scroll>
        )
      ) : null}
      {!isMobile && (
        <div className="cursor" style={{ top: pageY, left: pageX }}></div>
      )}
    </>
  );
};
