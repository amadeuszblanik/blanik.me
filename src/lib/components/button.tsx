import React from "react";
import styled from "styled-components";
import { sizes } from "@/styles";

interface Props {
  onClick: () => void;
}

const Wrapper = styled.button`
  margin-right: ${sizes.sm};
  padding: ${sizes.sm} ${sizes.md};
  border: rgba(var(--gray), 0.66) solid 1px;
  border-radius: 100px;
  transform: translateY(0);
  transition: all 450ms;
  appearance: none;
  color: rgb(var(--foreground));
  background: transparent;

  &:hover,
  &:active {
    background: rgba(var(--gray), 0.33);
  }
`;

const Component: React.FC<React.PropsWithChildren<Props>> = ({ onClick, children }) => (
  <Wrapper onClick={onClick}>{children}</Wrapper>
);

export default Component;
