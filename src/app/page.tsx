"use client";

import { BmeAnimatedTitle, BmeContainer, BmeHeader, BmeText } from "@/lib/components";
import React from "react";

export default function Home() {
  return (
    <>
      <BmeHeader title={<BmeText variant="body">Amadeusz Blanik ⌘ Frontend & Mobile Developer</BmeText>} />
      <BmeContainer as="main">
        <BmeAnimatedTitle />
      </BmeContainer>
    </>
  );
}
