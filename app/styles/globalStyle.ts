import { Raleway } from "@next/font/google";
import { createGlobalStyle } from "styled-components";

const theme = {
  $textWhite: "#fff",
  $lightPink: "#ffcddd",
  $arrowColor: "#ffc5c0",
  $offWhite: "#e6e6e6",
  $black: "#000",
  $darkBlack: "#151515",
  $highlight: "#ffc5c0",
  $placeholder: "#a0a0a0",
  $cursor: "#afafaf"
};

const raleway = Raleway({
  variable: "--raleway-font",
  subsets: ["latin"],
  display: "fallback"
});

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    ${raleway.style}

    &::-moz-selection {
      color: ${theme.$textWhite}; 
      background: ${theme.$highlight};
      -webkit-text-fill-color: ${theme.$textWhite}; 
    }

    &::selection {
      color: ${theme.$textWhite}; 
      background: ${theme.$highlight};
      -webkit-text-fill-color: ${theme.$textWhite}; 
    }
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    position: relative;
    overflow-x: hidden;
    overscroll-behavior-y: none;
    -ms-overflow-style: none;
    color: ${theme.$textWhite}; 
    background: ${theme.$black};
    scrollbar-width: none;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }

  a {
    text-decoration: none;
    color: unset;
    cursor: none;
  }

  input {
    outline: 0;
    font-size: 16px;
  }

  button {
    outline: 0;
  }

  ul {
    list-style: none;
  }

  .hide {
    display: none !important;
  }

  .cursor {
    position: fixed;
    z-index: 100;
    display: none;
    width: 40px;
    height: 40px;
    border: 1px solid ${theme.$cursor};
    border-radius: 50%;
    pointer-events: none;
  }
`;
