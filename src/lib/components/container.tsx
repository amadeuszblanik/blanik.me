import styled from "styled-components";
import { breakpoints, sizes } from "@/styles";

const Component = styled.div`
  width: 100%;
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
  padding-right: ${sizes.md};
  padding-left: ${sizes.md};

  @media (min-width: ${breakpoints.Tablet}) {
    padding-right: ${sizes.xl};
    padding-left: ${sizes.xl};
  }
`;

export default Component;
