import React from "react";
import styled from "styled-components";
import { BmeText } from "@/lib/components/index";

interface Props {
  url: string;
  target?: "_blank";
  noStyledText?: boolean;
}

const Anchor = styled.a`
  &:hover,
  &:active {
    text-decoration: underline;
  }
`;

const Component: React.FC<React.PropsWithChildren<Props>> = ({ url, target, noStyledText, children }) => {
  return (
    <Anchor href={url} target={target}>
      {noStyledText ? children : <BmeText>{children}</BmeText>}
    </Anchor>
  );
};

export default Component;
