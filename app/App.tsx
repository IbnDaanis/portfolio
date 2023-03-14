"use client";
import { useEffect, useState } from "react";
import { Header, Scroll } from "./components";
import { About, Contact, Hero, Intro, Projects } from "./containers";
import "./styles/index.scss";
import { userAgentMobile } from "./utils/userAgentMobile";

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
        userAgentMobile() ? (
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
      {!userAgentMobile() && (
        <div className="cursor" style={{ top: pageY, left: pageX }}></div>
      )}
    </>
  );
};
