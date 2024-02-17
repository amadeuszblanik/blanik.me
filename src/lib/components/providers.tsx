import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { ConfigStore } from "@/lib/context";
import { ConfigContext } from "../context/config.context";
import { ThemeVariants } from "@/lib/model/theme-variants.model";
import { themeDark, themeLight } from "@/styles";

const Component: React.FC<PropsWithChildren> = ({ children }) => (
  <ConfigStore>
    <ConfigContext.Consumer>
      {({ theme }) => (
        <ThemeProvider theme={theme === ThemeVariants.Dark ? themeDark : themeLight}>{children}</ThemeProvider>
      )}
    </ConfigContext.Consumer>
  </ConfigStore>
);

export default Component;
