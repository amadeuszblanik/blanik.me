import React from "react";
import styled from "styled-components";
import { BmeText } from "@/lib/components/index";

interface Props extends React.PropsWithChildren {
  onClick: () => void;
}

const Button = styled.button`
  color: rgb(var(--foreground));
  background: transparent;
  border: none;
  appearance: none;

  &:hover,
  &:active {
    text-decoration: underline;
  }
`;

const Component: React.FC<Props> = ({ onClick, children }) => {
  return (
    <Button onClick={onClick}>
      <BmeText>{children}</BmeText>
    </Button>
  );
};

export default Component;
