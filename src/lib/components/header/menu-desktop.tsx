import styled from "styled-components";
import { BmeText } from "@/lib/components";
import Link from "next/link";
import { sizes } from "@/styles";
import React from "react";
import { NAVIGATION_ITEMS } from "@/lib/components/header/index";

const Navigation = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
`;

const NavigationItem = styled(Link)`
  margin-right: ${sizes.sm};
  padding: ${sizes.sm} ${sizes.md};
  background: rgba(var(--gray), 0.33);
  border-radius: 100px;
  transform: translateY(0);
  transition: all 450ms;

  &:hover,
  &:active {
    background: rgba(var(--gray), 0.66);
    transform: translateY(-${sizes.xs2});
  }

  &:last-child {
    margin-right: 0;
  }
`;

const Component: React.FC = () => (
  <Navigation>
    {NAVIGATION_ITEMS.map((item, index) => (
      <NavigationItem key={index} href={item.href}>
        <BmeText>{item.label}</BmeText>
      </NavigationItem>
    ))}
  </Navigation>
);

export default Component;
