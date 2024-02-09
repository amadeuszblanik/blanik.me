/* eslint-disable no-magic-numbers */
import styled, { css } from "styled-components";
import { sizes } from "@/styles";
import React from "react";
import { animated, config, useChain, useSpring, useSpringRef } from "@react-spring/web";

interface Props {
  open: boolean;
  onClick: () => void;
}

const Button = styled.button`
  position: relative;
  z-index: 1010;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: ${sizes.md} ${sizes.md2};
  background: transparent;
  border: rgb(var(--foreground)) solid 1px;
  border-radius: 100px;
  appearance: none;
`;

const decoration = css`
  position: absolute;
  left: 50%;
  display: block;
  width: ${sizes.md2};
  height: 2px;
  background: rgb(var(--foreground));
  border-radius: 1px;
`;

const DecorationWrapper = styled.div`
  position: relative;
  display: block;
  width: ${sizes.md2};
  height: ${sizes.md};
`;

const DecorationTop = styled(animated.div)`
  top: 0;

  ${decoration}
`;

const DecorationMiddle = styled(animated.div)`
  top: 50%;

  ${decoration}
`;

const DecorationBottom = styled(animated.div)`
  top: 100%;

  ${decoration}
`;

const Component: React.FC<Props> = ({ open, onClick }) => {
  const topSpringRef = useSpringRef();
  const middleSpringRef = useSpringRef();
  const bottomSpringRef = useSpringRef();

  const { ...topStyle } = useSpring({
    ref: topSpringRef,
    config: config.stiff,
    from: { top: "0%", left: "50%", transform: "rotate(0deg) translateX(-50%)" },
    to: {
      top: open ? "50%" : "0%",
      left: open ? "0%" : "50%",
      transform: open ? "rotate(-45deg) translateX(0%)" : "rotate(0deg) translateX(-50%)",
    },
  });

  const { size: middleSize, ...middleStyle } = useSpring({
    ref: middleSpringRef,
    config: config.stiff,
    from: { size: "16px", left: "100%", opacity: 1, transform: "translate(-100%, -50%)" },
    to: {
      size: open ? "0" : "16px",
      left: open ? "0%" : "100%",
      opacity: open ? 0 : 1,
      transform: open ? "translate(-100%, -50%)" : "translate(-100%, -50%)",
    },
  });

  const { ...bottomStyle } = useSpring({
    ref: bottomSpringRef,
    config: config.stiff,
    from: { top: "100%", left: "50%", transform: "rotate(0deg) translate(-50%, -100%)" },
    to: {
      top: open ? "50%" : "100%",
      left: open ? "0%" : "50%",
      transform: open ? "rotate(45deg) translate(0%, 0%)" : "rotate(0deg) translate(-50%, -100%)",
    },
  });

  useChain(open ? [topSpringRef, middleSpringRef, bottomSpringRef] : [topSpringRef, bottomSpringRef, middleSpringRef], [
    open ? 0 : 0.1,
    open ? 0.1 : 0,
  ]);

  return (
    <Button onClick={onClick}>
      <DecorationWrapper>
        <DecorationTop style={{ ...topStyle }} />
        <DecorationMiddle style={{ width: middleSize, ...middleStyle }} />
        <DecorationBottom style={{ ...bottomStyle }} />
      </DecorationWrapper>
    </Button>
  );
};

export default Component;
