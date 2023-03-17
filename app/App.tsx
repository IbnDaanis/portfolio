"use client";

import { useState } from "react";
import { isMobile } from "react-device-detect";
import { Header, Scroll } from "./components";
import { Cursor } from "./components/Cursor";
import { About, Contact, Hero, Intro, Projects } from "./containers";
import "./styles/globalStyle";

export const App = () => {
  const [displayApp, setDisplayApp] = useState(false);

  setTimeout(() => {
    if (typeof window === "undefined") return;
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
      <Cursor />
    </>
  );
};
