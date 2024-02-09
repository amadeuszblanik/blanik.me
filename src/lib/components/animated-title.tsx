/* eslint-disable no-magic-numbers */

import { BmeText } from "@/lib/components/index";
import styled from "styled-components";
import { useState } from "react";
import { animated, useTransition } from "@react-spring/web";
import { TEXT_STYLES } from "@/lib/components/text";
import { breakpoints } from "@/styles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Slides = styled.div`
  display: flex;
  flex-flow: column;
  height: calc(var(--component-height) * 1.4);
  overflow: hidden;

  --component-height: ${TEXT_STYLES.title.Mobile.fontSize};

  @media (min-width: ${breakpoints.Tablet}) {
    --component-height: ${TEXT_STYLES.title.Tablet.fontSize};
  }
`;

const Slide = styled(animated.div)`
  display: flex;
  flex-flow: row nowrap;
`;

const WrapGroup = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Component = () => {
  const slides = ["IT", "KMM", "Flutter", "React", "Next.JS", "Swift", "React-Native", "Kotlin", "Node.JS", "Nest.JS"];

  const [index, set] = useState(0);
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0, transform: `translateY(-${TEXT_STYLES.title.Tablet.fontSize})` },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: `translateY(${TEXT_STYLES.title.Tablet.fontSize})`, delay: 1250 },
    config: { duration: 450 },
    onRest: (_a, _b, item) => {
      if (index === item) {
        set((state) => (state + 1) % slides.length);
      }
    },
    exitBeforeEnter: true,
  });

  return (
    <Wrapper>
      <WrapGroup>
        <BmeText variant="title">I make&nbsp;</BmeText>
        <Slides>
          {transitions((style, i) => (
            <Slide style={style}>
              <BmeText variant="title" fontStyle="italic" mono>
                {slides[i]}
              </BmeText>
              <BmeText variant="title">&nbsp;</BmeText>
            </Slide>
          ))}
        </Slides>
        <BmeText variant="title">work.</BmeText>
      </WrapGroup>
    </Wrapper>
  );
};

export default Component;
