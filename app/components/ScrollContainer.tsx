"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
import { useScroll } from "../hooks/useScroll";
import { useWindowSize } from "../hooks/useWindowSize";

const AppContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

interface ScrollProps {
  $transform: string;
}

const ScrollWrapper = styled.div.attrs<ScrollProps>(props => ({
  style: {
    transform: props.$transform
  }
}))<ScrollProps>`
  overflow-y: auto;
`;

interface Props {
  children: ReactNode;
}

/** Houses the scroll logic for the app. */
export const ScrollContainer = ({ children }: Props) => {
  const size = useWindowSize();
  const positionY = useScroll();

  const scrollContainer = useRef<HTMLDivElement>(null);

  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer?.current?.getBoundingClientRect().height
    }px`;
  };

  useEffect(() => {
    setBodyHeight();
  }, [size]);

  return (
    <AppContainer>
      <ScrollWrapper
        $transform={`translate3d(0, -${positionY}px, 0)`}
        ref={scrollContainer}
      >
        {children}
      </ScrollWrapper>
    </AppContainer>
  );
};
