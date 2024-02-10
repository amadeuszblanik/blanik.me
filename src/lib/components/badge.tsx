import React from "react";
import styled from "styled-components";
import { sizes } from "@/styles";

const Wrapper = styled.div`
  margin-right: ${sizes.sm};
  padding: ${sizes.sm} ${sizes.md};
  border: rgba(var(--gray), 0.66) solid 1px;
  border-radius: 100px;
  transform: translateY(0);
  transition: all 450ms;
`;

const Component: React.FC<{ children: string }> = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Component;
