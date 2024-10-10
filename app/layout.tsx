"use client";

import { Analytics } from "@vercel/analytics/react";
import { ReactNode } from "react";
import StyledComponentsRegistry from "./registry";
import { GlobalStyle } from "./styles/globalStyle";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/favicon.ico" />
      <GlobalStyle />
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
      <Analytics />
    </html>
  );
}
