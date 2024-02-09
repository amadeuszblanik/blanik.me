import React from "react";
import styled from "styled-components";
import { BmeText } from "@/lib/components/index";

interface Props {
  url: string;
  children: string;
}

const Anchor = styled.a`
  &:hover,
  &:active {
    text-decoration: underline;
  }
`;

const Component: React.FC<Props> = ({ url, children }) => {
  return (
    <Anchor href={url}>
      <BmeText>{children}</BmeText>
    </Anchor>
  );
};

export default Component;
