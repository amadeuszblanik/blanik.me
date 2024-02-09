import React from "react";
import styled from "styled-components";
import { breakpoints } from "@/styles";
import { Breakpoints } from "@/styles/breakpoints";

type TextVariants = "display" | "title" | "header" | "body";

interface TextProps {
  variant?: TextVariants;
  wrap?: boolean;
  fontStyle?: "normal" | "italic" | "oblique";
  mono?: boolean;
}

interface TextVariantStyles {
  fontSize: string;
}

export const TEXT_STYLES: { [key in TextVariants]: { [key2 in Breakpoints]: TextVariantStyles } } = {
  display: {
    [Breakpoints.Mobile]: {
      fontSize: "52px",
    },
    [Breakpoints.MobileXl]: {
      fontSize: "52px",
    },
    [Breakpoints.Tablet]: {
      fontSize: "112px",
    },
    [Breakpoints.Desktop]: {
      fontSize: "112px",
    },
  },
  title: {
    [Breakpoints.Mobile]: {
      fontSize: "52px",
    },
    [Breakpoints.MobileXl]: {
      fontSize: "52px",
    },
    [Breakpoints.Tablet]: {
      fontSize: "80px",
    },
    [Breakpoints.Desktop]: {
      fontSize: "80px",
    },
  },
  header: {
    [Breakpoints.Mobile]: {
      fontSize: "42px",
    },
    [Breakpoints.MobileXl]: {
      fontSize: "42px",
    },
    [Breakpoints.Tablet]: {
      fontSize: "42px",
    },
    [Breakpoints.Desktop]: {
      fontSize: "42px",
    },
  },
  body: {
    [Breakpoints.Mobile]: {
      fontSize: "14px",
    },
    [Breakpoints.MobileXl]: {
      fontSize: "14px",
    },
    [Breakpoints.Tablet]: {
      fontSize: "14px",
    },
    [Breakpoints.Desktop]: {
      fontSize: "14px",
    },
  },
};

const Text = styled.div<TextProps>`
  font-size: ${({ variant }) => TEXT_STYLES[variant ?? "body"].Mobile.fontSize};
  font-style: ${({ fontStyle }) => fontStyle || "normal"};
  font-family: ${({ mono }) => (mono ? "var(--font-mono)" : "var(--font)")};
  white-space: ${({ wrap }) => (wrap === false ? "pre" : "normal")};

  ${({ variant }) =>
    Object.entries(breakpoints).map(
      ([breakpoint, value]) => `
    @media (min-width: ${value}) {
      font-size: ${TEXT_STYLES[variant ?? "body"][breakpoint as Breakpoints].fontSize};
  }`,
    )}
`;

const Component: React.FC<TextProps & React.PropsWithChildren> = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};

export default Component;
