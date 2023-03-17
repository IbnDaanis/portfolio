"use client";

import { useState } from "react";
import { isMobile } from "react-device-detect";
import { Header } from "./components/Header";
import { Cursor } from "./components/Cursor";
import { Show } from "./components/Show";
import { ScrollContainer } from "./components/ScrollContainer";
import { About, Contact, Hero, Intro, Projects } from "./containers";

export const App = () => {
  const [displayApp, setDisplayApp] = useState(false);

  setTimeout(() => {
    if (typeof window === "undefined") return;
    setDisplayApp && setDisplayApp(true);
    document.body.style.background = "#151515";
  }, 1550);

  const [introComplete, setIntroComplete] = useState(false);

  const app = (
    <>
      <Hero introComplete={introComplete} />
      <About />
      <Projects />
      <Contact />
    </>
  );

  return (
    <>
      <Header />
      <Intro setIntroComplete={setIntroComplete} />
      <Show when={displayApp}>
        <Show
          when={isMobile}
          fallback={<ScrollContainer>{app}</ScrollContainer>}
        >
          {app}
        </Show>
      </Show>
      <Cursor />
    </>
  );
};
