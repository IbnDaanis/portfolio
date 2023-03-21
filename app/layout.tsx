"use client";
import { ReactNode } from "react";
import StyledComponentsRegistry from "./registry";
import { GlobalStyle } from "./styles/globalStyle";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <GlobalStyle />
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
