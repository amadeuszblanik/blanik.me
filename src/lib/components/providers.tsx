import React, { PropsWithChildren } from "react";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import { ConfigStore } from "@/lib/context";
import { ConfigContext } from "../context/config.context";
import { ThemeVariants } from "@/lib/model/theme-variants.model";
import { themeDark, themeLight } from "@/styles";
import isPropValid from "@emotion/is-prop-valid";

const Component: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyleSheetManager shouldForwardProp={(propName) => isPropValid(propName)}>
      <ConfigStore>
        <ConfigContext.Consumer>
          {({ theme }) => (
            <ThemeProvider theme={theme === ThemeVariants.Dark ? themeDark : themeLight}>{children}</ThemeProvider>
          )}
        </ConfigContext.Consumer>
      </ConfigStore>
    </StyleSheetManager>
  );
};

export default Component;
