"use client";

// @TODO: Remove classNames - Just for development purposes

import "./globals.css";
import Providers from "@/app/providers";
import React from "react";
import { BmeFooter, BmeHead } from "@/lib/components";
import styled from "styled-components";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <html lang="en">
      <head>
        <title>Amadeusz Blanik</title>
        <BmeHead />
      </head>
      <body className={isHome ? "scheme-dark bg-gradient" : "scheme-light"}>
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
