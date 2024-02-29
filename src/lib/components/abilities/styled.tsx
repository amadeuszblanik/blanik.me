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

// Item
export const ItemWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

export const ItemName = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const ItemLevel = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;
