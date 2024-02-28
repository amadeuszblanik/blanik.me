import React from "react";
import styled, { css } from "styled-components";
import sizes from "@/styles/sizes";

interface Paddings {
  padding?: keyof typeof sizes;
  paddingVertical?: keyof typeof sizes;
  paddingHorizontal?: keyof typeof sizes;
  paddingTop?: keyof typeof sizes;
  paddingRight?: keyof typeof sizes;
  paddingBottom?: keyof typeof sizes;
  paddingLeft?: keyof typeof sizes;
}

const mixinPadding = ({
  padding,
  paddingVertical,
  paddingHorizontal,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
}: Paddings) => css`
  ${padding && `padding: ${sizes[padding]};`}
  ${paddingVertical && `padding-top: ${sizes[paddingVertical]}; padding-bottom: ${sizes[paddingVertical]};`}
  ${paddingHorizontal && `padding-top: ${sizes[paddingHorizontal]}; padding-bottom: ${sizes[paddingHorizontal]};`}
  ${paddingTop && `padding-top: ${sizes[paddingTop]};`}
  ${paddingRight && `padding-right: ${sizes[paddingRight]};`}
  ${paddingBottom && `padding-bottom: ${sizes[paddingBottom]};`}
  ${paddingLeft && `padding-left: ${sizes[paddingLeft]};`}
`;

const Box = styled.div<Paddings>`
  ${(props) => mixinPadding(props)}
`;

const Component: React.FC<React.PropsWithChildren<Paddings>> = ({ children, ...props }) => (
  <Box {...props}>{children}</Box>
);

export default Component;
