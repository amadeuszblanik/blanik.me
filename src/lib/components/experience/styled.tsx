import styled from "styled-components";
import { breakpoints, sizes } from "@/styles";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
`;

export const WrapperContent = styled.div`
  position: relative;
  z-index: 1000;
`;

// Line
export const WrapperLine = styled.div`
  position: absolute;
  inset: 0;
`;

export const LineItem = styled.div`
  margin-left: calc(${sizes.sm} - 1px);

  @media screen and (min-width: ${breakpoints.Tablet}) {
    grid-column-start: 2;
  }
`;

export const LineDecoration = styled.div`
  width: ${sizes.xs};
  height: 100%;
  background: ${({ theme }) => theme.palette.gray};
`;

// Item
export const ItemGrid = styled.article<{ height?: string }>`
  display: grid;
  grid-gap: ${sizes.md};
  width: 100%;
  height: ${({ height }) => (height ? height : "initial")};
  padding-bottom: ${sizes.xl};

  @media screen and (min-width: ${breakpoints.Tablet}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const ItemDate = styled.div`
  display: none;
  text-align: right;

  @media screen and (min-width: ${breakpoints.Tablet}) {
    display: block;
  }
`;

export const ItemDateMobile = styled.div`
  display: block;

  @media screen and (min-width: ${breakpoints.Tablet}) {
    display: none;
  }
`;

export const ItemDecoration = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: ${sizes.md};
  height: ${sizes.md};
  background: ${({ theme }) => theme.palette.background};
  border: ${({ theme }) => theme.palette.gray} solid 2px;
  border-radius: ${sizes.xl2};
`;

export const ItemContent = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  grid-column: span 2 / span 2;
  padding-left: ${sizes.xl};
`;

export const SummaryWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  padding-bottom: ${sizes.xl};

  & > div {
    margin: ${sizes.md} 0;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: ${breakpoints.Tablet}) {
    flex-flow: row nowrap;
    justify-content: space-between;

    & > div {
      margin: 0 ${sizes.md};

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;
