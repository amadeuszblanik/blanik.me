import React from "react";
import { BmeBody, BmeFooter } from "@/lib/components";
import styled from "styled-components";
import { Analytics } from "@vercel/analytics/react";

interface Props extends React.PropsWithChildren {
  gradientBackground?: boolean;
}

const PositionWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
`;

export default function Layout({ children, gradientBackground }: Readonly<Props>) {
  return (
    <BmeBody gradient={gradientBackground}>
      <PositionWrapper>
        <div>{children}</div>
        <BmeFooter />
      </PositionWrapper>
      <Analytics />
    </BmeBody>
  );
}
