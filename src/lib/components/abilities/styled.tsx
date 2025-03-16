import styled from "styled-components";
import { breakpoints, sizes } from "@/styles";

export const Wrapper = styled.article`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: ${sizes.md2};
  grid-template:
    "technologies technologies"
    "languages languages"
    "others others";

  @media screen and (min-width: ${breakpoints.Tablet}) {
    grid-template:
      "technologies languages"
      "technologies others";
  }
`;

export const GridItem = styled.div<{ name: string }>`
  grid-area: ${({ name }) => name};
`;

// Section
export const SectionWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: ${sizes.md2} 0;

  @media screen and (min-width: ${breakpoints.Tablet}) {
    padding: ${sizes.xl} 0;
  }
`;

export const SectionContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: ${sizes.sm} 0;

  @media screen and (min-width: ${breakpoints.Tablet}) {
    padding: ${sizes.md} 0;
  }
`;

// Item
export const ItemWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: ${sizes.sm} ${sizes.md};
  border: 2px solid ${({ theme }) => theme.palette.content2};
  border-radius: ${sizes.xl2};
  transition: all 125ms;
  will-change: background, background-color;

  &:hover,
  &:active {
    background: ${({ theme }) => theme.palette.content2};
  }
`;

export const ItemLogo = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin-right: ${sizes.md};
  height: 32px;

  & > img {
    max-height: 32px;
  }
`;

export const ItemName = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  min-height: 32px;
`;
