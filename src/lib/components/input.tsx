import React from "react";
import styled from "styled-components";
import { sizes } from "@/styles";
import { TEXT_STYLES } from "@/lib/components/text";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

// @TODO: Change styles
const StyledInput = styled.input`
  margin-right: ${sizes.sm};
  padding: ${sizes.sm} ${sizes.md};
  border: rgba(var(--gray), 0.66) solid 1px;
  border-radius: 100px;
  transform: translateY(0);
  transition: all 450ms;
  appearance: none;
  color: rgb(var(--foreground));
  background: transparent;
  font-size: ${TEXT_STYLES.body.Mobile.fontSize};
  font-weight: ${TEXT_STYLES.body.Mobile.fontWeight};
  text-align: center;

  &:hover,
  &:active {
    background: rgba(var(--gray), 0.33);
  }
`;

const Component: React.FC<Props> = ({ value, onChange }) => (
  <StyledInput value={value} onChange={({ target: { value: nextValue } }) => onChange(nextValue)} />
);

export default Component;
