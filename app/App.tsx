"use client";

import { useState } from "react";
import { isMobile } from "react-device-detect";
import { Cursor } from "./components/Cursor";
import { Header } from "./components/Header";
import { ScrollContainer } from "./components/ScrollContainer";
import { Show } from "./components/Show";
import { About } from "./features/about/About";
import { Contact } from "./features/contact/Contact";
import { Hero } from "./features/hero/Hero";
import { Intro } from "./features/into/Intro";
import { Projects } from "./features/work/Projects";

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
