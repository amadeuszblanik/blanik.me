import React from "react";
import { BmeAnimatedTitle, BmeContainer, BmeHeader, BmeText } from "@/lib/components";
import { LayoutMain } from "@/layout";

export default function Page() {
  return (
    <LayoutMain gradientBackground>
      <BmeHeader title={<BmeText variant="body">Amadeusz Blanik ⌘ Frontend & Mobile Developer</BmeText>} />
      <BmeContainer as="main">
        <BmeAnimatedTitle />
      </BmeContainer>
    </LayoutMain>
  );
}
