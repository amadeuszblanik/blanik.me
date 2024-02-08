"use client";

import { ThemeProvider } from "styled-components";
import { StyledComponentsRegistry, theme } from "@/styles";
import React from "react";

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
