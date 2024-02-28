import styled from "styled-components";
import { breakpoints, sizes } from "@/styles";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: ${sizes.lg} 0;

  &:not(:last-child) {
    border-bottom: rgba(var(--gray), 0.33) dotted 1px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: ${sizes.lg};

  @media (min-width: ${breakpoints.Tablet}) {
    flex-flow: row nowrap;
    align-items: center;
  }
`;

export const PositionWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: ${sizes.sm} 0;

  @media (min-width: ${breakpoints.Tablet}) {
    margin: 0 auto 0 ${sizes.md};
  }
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;

  @media (min-width: ${breakpoints.Tablet}) {
    align-items: flex-end;
  }
`;

export const Logo = styled.figure`
  position: relative;
  width: 100%;
  max-height: 120px;
  margin-right: ${sizes.md};
  margin-bottom: ${sizes.md};
  background: rgb(var(--light));

  &::after {
    display: block;
    padding-bottom: 100%;
    content: "";
  }

  img {
    inset: 10% !important;
    max-width: 80%;
    max-height: 80%;
  }

  @media (min-width: ${breakpoints.Tablet}) {
    max-width: 120px;
    margin-bottom: 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;

  @media (min-width: ${breakpoints.Tablet}) {
    flex-flow: row nowrap;
  }
`;
