import React from "react";
import styled from "styled-components";
import { Breakpoints } from "@/styles/breakpoints";
import { breakpoints } from "@/styles";

type TextVariants = "display" | "title" | "header" | "header-small" | "body-large" | "body";

interface TextProps {
  variant?: TextVariants;
  nowrap?: boolean;
  fontStyle?: "normal" | "italic" | "oblique";
  mono?: boolean;
}

interface TextVariantStyles {
  fontSize: string;
  fontWeight: "300" | "400" | "500" | "600" | "700";
  fontStyle?: "normal" | "italic" | "oblique";
  fontFamily?: "var(--font-mono)" | "var(--font)";
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
      fontSize: "3.25rem",
      fontWeight: "300",
    },
    [Breakpoints.Tablet]: {
      fontSize: "7rem",
      fontWeight: "300",
    },
  },
  title: {
    [Breakpoints.Mobile]: {
      fontSize: "3.25rem",
      fontWeight: "500",
    },
    [Breakpoints.Tablet]: {
      fontSize: "5rem",
      fontWeight: "500",
    },
  },
  header: {
    [Breakpoints.Mobile]: {
      fontSize: "3rem",
      fontWeight: "500",
      fontStyle: "italic",
      fontFamily: "var(--font-mono)",
    },
    [Breakpoints.Tablet]: {
      fontSize: "3.75rem",
      fontWeight: "500",
      fontStyle: "italic",
      fontFamily: "var(--font-mono)",
    },
  },
  "header-small": {
    [Breakpoints.Mobile]: {
      fontSize: "1.25rem",
      fontWeight: "700",
    },
  },
  "body-large": {
    [Breakpoints.Mobile]: {
      fontSize: "1.125rem",
      fontWeight: "400",
    },
    [Breakpoints.Tablet]: {
      fontSize: "1.25rem",
      fontWeight: "400",
    },
  },
  body: {
    [Breakpoints.Mobile]: {
      fontSize: "0.875rem",
      fontWeight: "400",
    },
    [Breakpoints.Tablet]: {
      fontSize: "1rem",
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

  ${({ fontStyle, variant, mono }) =>
    Object.entries(TEXT_STYLES[variant ?? "body"])
      .slice(1)
      .map(
        ([breakpoint, value]) => `
    @media (min-width: ${breakpoints[breakpoint as Breakpoints]}) {
      font-size: ${value.fontSize};
      font-weight: ${value.fontWeight};
      font-style: ${fontStyle || value.fontStyle || "normal"};
      font-family: ${value.fontFamily || (mono ? "var(--font-mono)" : "var(--font)")};
  }`,
      )}
`;

const Component: React.FC<TextProps & React.PropsWithChildren> = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};

export default Component;
