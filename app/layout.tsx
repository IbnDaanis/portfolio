"use client";
import { ReactNode } from "react";
import { GlobalStyle } from "./styles/globalStyle";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <GlobalStyle />
      <body>{children}</body>
    </html>
  );
}
