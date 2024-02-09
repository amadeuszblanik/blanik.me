/* eslint-disable no-magic-numbers */
import styled from "styled-components";
import { BmeText } from "@/lib/components";
import Link from "next/link";
import Container from "@/lib/components/container";
import { sizes } from "@/styles";
import React from "react";
import { animated, config, useChain, useSpring, useSpringRef, useTrail } from "@react-spring/web";
import { NAVIGATION_ITEMS } from "@/lib/components/header/index";

interface Props {
  open: boolean;
}

const Wrapper = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  background: rgb(var(--background));
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: ${sizes.xl2};
`;

const NavigationItem = styled(animated(Link))`
  width: 100%;
  padding: ${sizes.lg} ${sizes.md};
  border-bottom: rgb(var(--gray)) solid 1px;
`;

const Component: React.FC<Props> = ({ open }) => {
  const wrapperRef = useSpringRef();
  const itemsRef = useSpringRef();

  const { size: wrapperSize, ...wrapperStyle } = useSpring({
    ref: wrapperRef,
    config: config.stiff,
    from: { size: "0%", opacity: 0 },
    to: {
      size: open ? "100%" : "0%",
      opacity: open ? 1 : 0,
    },
  });

  const trail = useTrail(NAVIGATION_ITEMS.length, {
    ref: itemsRef,
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  useChain(open ? [wrapperRef, itemsRef] : [wrapperRef, itemsRef], [open ? 0 : 0.1, open ? 0.1 : 0]);

  return (
    <Wrapper style={{ height: wrapperSize, ...wrapperStyle }}>
      <Container>
        <Navigation>
          {trail.map(({ height, ...style }, index) => (
            <NavigationItem key={index} href={NAVIGATION_ITEMS[index].href} style={style}>
              <BmeText variant="header">{NAVIGATION_ITEMS[index].label}</BmeText>
            </NavigationItem>
          ))}
        </Navigation>
      </Container>
    </Wrapper>
  );
};

export default Component;
