"use client";

import "./globals.css";
import Providers from "@/app/providers";
import React from "react";
import { BmeFooter } from "@/lib/components";
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

  return (
    <html lang="en">
      <body className={pathname === "/" ? "scheme-dark bg-gradient" : "scheme-light"}>
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
