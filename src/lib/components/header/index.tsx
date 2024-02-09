import React, { ReactNode, useState } from "react";
import Container from "@/lib/components/container";
import styled from "styled-components";
import { breakpoints, sizes } from "@/styles";
import { useBreakpoint } from "@/lib/hooks";
import { Breakpoints } from "@/styles/breakpoints";
import MenuButton from "@/lib/components/header/menu-button";
import MenuMobile from "@/lib/components/header/menu-mobile";
import MenuDesktop from "@/lib/components/header/menu-desktop";

export const NAVIGATION_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

interface Props {
  title?: ReactNode | undefined;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: ${sizes.md};
  margin-bottom: ${sizes.xl2};

  @media (min-width: ${breakpoints.Tablet}) {
    justify-content: space-between;
    margin-top: ${sizes.xl};
  }
`;

const Component: React.FC<Props> = ({ title }) => {
  const isTablet = useBreakpoint(Breakpoints.Tablet);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Wrapper>
        {isTablet && title}
        {isTablet && <MenuDesktop />}
        {!isTablet && <MenuButton open={isOpen} onClick={() => setIsOpen(!isOpen)} />}
      </Wrapper>
      {!isTablet && title}
      {!isTablet && <MenuMobile open={isOpen} />}
    </Container>
  );
};

export default Component;
