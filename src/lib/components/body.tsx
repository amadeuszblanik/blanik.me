import styled from "styled-components";

interface Props {
  gradient?: boolean;
}

const Component = styled.div<Props>`
  min-height: 100vh;
  background: ${({ theme, gradient }) =>
    gradient
      ? `linear-gradient(
    333deg,
    ${theme.palette.backgroundEnd} 0%,
    ${theme.palette.backgroundMid} 18%,
    ${theme.palette.backgroundStart} 88%,
    ${theme.palette.backgroundStart} 100%
  )`
      : theme.palette.background};
`;

export default Component;
