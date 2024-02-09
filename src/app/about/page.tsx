"use client";

import { BmeContainer, BmeHeader, BmeText } from "@/lib/components";
import React from "react";

export default function Home() {
  return (
    <>
      <BmeHeader title={<BmeText variant="title">About me</BmeText>} />
      <BmeContainer as="main">Lorem ipsum dolor sit amet.</BmeContainer>
    </>
  );
}
