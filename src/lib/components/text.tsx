import React from "react";
import styled from "styled-components";
import { Breakpoints } from "@/styles/breakpoints";
import { breakpoints } from "@/styles";

type TextVariants = "display" | "title" | "header" | "header-medium" | "body-large" | "body";

interface TextProps {
  variant?: TextVariants;
  nowrap?: boolean;
  fontStyle?: "normal" | "italic" | "oblique";
  mono?: boolean;
}

interface TextVariantStyles {
  fontSize: string;
  fontWeight: "300" | "400" | "500" | "600" | "700";
}

interface TextStylesResponsive {
  [Breakpoints.Mobile]: TextVariantStyles;
  [Breakpoints.MobileXl]?: TextVariantStyles;
  [Breakpoints.Tablet]?: TextVariantStyles;
  [Breakpoints.Desktop]?: TextVariantStyles;
}

export const TEXT_STYLES: { [key in TextVariants]: TextStylesResponsive } = {
  display: {
    [Breakpoints.Mobile]: {
      fontSize: "52px",
      fontWeight: "300",
    },
    [Breakpoints.Tablet]: {
      fontSize: "112px",
      fontWeight: "300",
    },
  },
  title: {
    [Breakpoints.Mobile]: {
      fontSize: "52px",
      fontWeight: "500",
    },
    [Breakpoints.Tablet]: {
      fontSize: "80px",
      fontWeight: "500",
    },
  },
  header: {
    [Breakpoints.Mobile]: {
      fontSize: "48px",
      fontWeight: "500",
    },
    [Breakpoints.Tablet]: {
      fontSize: "60px",
      fontWeight: "500",
    },
  },
  "header-medium": {
    [Breakpoints.Mobile]: {
      fontSize: "32px",
      fontWeight: "400",
    },
  },
  "body-large": {
    [Breakpoints.Mobile]: {
      fontSize: "18px",
      fontWeight: "400",
    },
    [Breakpoints.Tablet]: {
      fontSize: "20px",
      fontWeight: "400",
    },
  },
  body: {
    [Breakpoints.Mobile]: {
      fontSize: "14px",
      fontWeight: "400",
    },
  },
};

const Text = styled.div<TextProps>`
  font-size: ${({ variant }) => TEXT_STYLES[variant ?? "body"].Mobile.fontSize};
  font-weight: ${({ variant }) => TEXT_STYLES[variant ?? "body"].Mobile.fontWeight};
  font-style: ${({ fontStyle }) => fontStyle || "normal"};
  font-family: ${({ mono }) => (mono ? "var(--font-mono)" : "var(--font)")};
  white-space: ${({ nowrap }) => (nowrap ? "pre" : "normal")};

  ${({ variant }) =>
    Object.entries(TEXT_STYLES[variant ?? "body"])
      .slice(1)
      .map(
        ([breakpoint, value]) => `
    @media (min-width: ${breakpoints[breakpoint as Breakpoints]}) {
      font-size: ${value.fontSize};
      font-weight: ${value.fontWeight};
  }`,
      )}
`;

const Component: React.FC<TextProps & React.PropsWithChildren> = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};

export default Component;
