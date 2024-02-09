"use client";

import { StyledComponentsRegistry } from "@/styles";
import React from "react";

const Providers = (props: React.PropsWithChildren) => (
  <StyledComponentsRegistry>{props.children}</StyledComponentsRegistry>
);

export default Providers;
