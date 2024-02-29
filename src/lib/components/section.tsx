import React from "react";
import styled from "styled-components";
import { sizes } from "@/styles";
import { BmeBox, BmeText } from "@/lib/components/index";

interface Props {
  header: string;
}

const Wrapper = styled.section`
  padding: ${sizes.md2} 0;
`;

const Component: React.FC<React.PropsWithChildren<Props>> = ({ header, children }) => (
  <Wrapper>
    <BmeBox paddingBottom="md">
      <BmeText variant="header">#{header}</BmeText>
    </BmeBox>
    {children}
  </Wrapper>
);

export default Component;
