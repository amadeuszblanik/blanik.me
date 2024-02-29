import styled from "styled-components";
import React from "react";

const VALUE_MAX = 5;

interface Props {
  value: number;
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const Component: React.FC<Props> = ({ value }) => {
  return <Wrapper>{Array(value).fill("⭐️")}</Wrapper>;
};

export default Component;
