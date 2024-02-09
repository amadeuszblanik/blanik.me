"use client";

import { BmeAnimatedTitle, BmeContainer, BmeHeader, BmeText } from "@/lib/components";
import React, { useEffect } from "react";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    document.body.classList.add("scheme-dark", "bg-gradient");
  }, []);

  return (
    <>
      <Head>
        <body className="scheme-dark bg-gradient" />
      </Head>
      <BmeHeader title={<BmeText variant="body">Amadeusz Blanik ⌘ Frontend & Mobile Developer</BmeText>} />
      <BmeContainer as="main">
        <BmeAnimatedTitle />
      </BmeContainer>
    </>
  );
}
