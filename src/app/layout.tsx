"use client";

import "./globals.css";
import Providers from "@/app/providers";
import React from "react";
import { BmeFooter } from "@/lib/components";
import styled from "styled-components";

const PositionWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
`;

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Amadeusz Blanik</title>
      <meta
        name="description"
        content="I am a Frontend Developer with commercial experience. My passion is my work even after hours I used to develop and learn new things. I'm available to hire!"
      />
      <meta name="keywords" content="front-end developer amadeusz blanik frontend" />
      <meta name="author" content="Amadeusz Blanik" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <link rel="apple-touch-icon" sizes="180x180" href="/meta/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/meta/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/meta/favicon-16x16.png" />
      <link rel="icon" href="/meta/favicon.ico" />
      <body>
        <Providers>
          <PositionWrapper>
            <div>{children}</div>
            <BmeFooter />
          </PositionWrapper>
        </Providers>
      </body>
    </html>
  );
}
