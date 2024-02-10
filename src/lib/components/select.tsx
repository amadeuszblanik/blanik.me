import React from "react";
import styled from "styled-components";
import { sizes } from "@/styles";
import { TEXT_STYLES } from "@/lib/components/text";

interface Props {
  options: {
    value: string;
    label: string;
  }[];
  value: string;
  onChange: (value: string) => void;
}

const Wrapper = styled.select`
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

const Component: React.FC<Props> = ({ options, value, onChange }) => (
  <Wrapper onChange={({ target }) => onChange(target.value)}>
    {options.map(({ value: optionValue, label }) => (
      <option key={optionValue} value={optionValue} selected={optionValue === value}>
        {label}
      </option>
    ))}
  </Wrapper>
);

export default Component;
