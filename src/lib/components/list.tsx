import React from "react";
import { BmeText } from "@/lib/components/index";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const Component: React.FC<React.PropsWithChildren> = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Component;
