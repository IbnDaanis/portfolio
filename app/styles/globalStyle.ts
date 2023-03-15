import { createGlobalStyle } from "styled-components";
import { Raleway } from "@next/font/google";

const raleway = Raleway({
  variable: "--raleway-font",
  subsets: ["latin"],
  display: "fallback"
});

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    ${raleway.style}
  }

  body{
    background: red;
  }
`;
