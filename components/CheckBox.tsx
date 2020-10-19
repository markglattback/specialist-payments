import styled from "styled-components";
import { ChangeEvent, PropsWithoutRef } from "react";

type Props = {
  id: string;
  name: string;
  label: string;
  value: boolean;
} & PropsWithoutRef<JSX.IntrinsicElements["input"]>;

const CBWrapper = styled.div`
  display: block;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-left: var(--paddingHalf);
`;

export default function CheckBox<T extends string>({
  id,
  label,
  name,
  value,
  ...props
}: Props) {
  return (
    <CBWrapper>
      <input id={id} type="checkbox" name={name} checked={value} {...props} />
      <Label htmlFor={id}>{label}</Label>
    </CBWrapper>
  );
}
