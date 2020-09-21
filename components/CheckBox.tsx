import styled from "styled-components";
import { ChangeEvent } from "react";

type Props<T> = {
  name: T;
  label: string;
  onChange: ChangeHandler;
  value: boolean;
};

type ChangeHandler = {
  (e: ChangeEvent<HTMLInputElement>): void;
};

const CBWrapper = styled.div`
  display: block;
`;

const Label = styled.label`
  font-size: 0.8rem;
  margin-left: var(--paddingHalf);
`;

export default function CheckBox<T extends string>({
  label,
  name,
  onChange,
  value,
}: Props<T>) {
  return (
    <CBWrapper>
      <input type="checkbox" name={name} onChange={onChange} checked={value} />
      <Label htmlFor={name}>{label}</Label>
    </CBWrapper>
  );
}
