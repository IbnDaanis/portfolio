"use client";

import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import { theme } from "../styles/globalStyle";
import { Show } from "./Show";

/** Circle cursor which replaces the default curson on desktop. */
export const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({
    pageY: -100,
    pageX: -100
  });
  const { pageY, pageX } = cursorPosition;

  useEffect(() => {
    if (typeof window === "undefined") return;

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

  return (
    <Show when={!isMobile}>
      <Element id="cursor" style={{ top: pageY, left: pageX }} />
    </Show>
  );
};

const Element = styled.div`
  position: fixed;
  z-index: 100;
  display: none;
  width: 40px;
  height: 40px;
  border: 1px solid ${theme.$cursor};
  border-radius: 50%;
  pointer-events: none;
`;
