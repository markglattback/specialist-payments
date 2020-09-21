import styled from "styled-components";
import Label from "../styled-components/Label";
import { ChangeEvent } from "react";

type Props = {
  name: string;
  value: string;
  onChange: ChangeHandler;
  label: string;
  placeholder?: string;
  [key: string]: any;
};

type ChangeHandler = {
  (e: ChangeEvent<HTMLInputElement>): void;
};

const StyledInput = styled.input`
  display: block;
  background: var(--white);
  backdrop-filter: blur(5px);
  color: var(--backgroundShade);
  font-weight: 300;
  width: min(100%, 450px);
  margin: 0.25rem 0 1rem 0;
  padding: 0.5rem 0.5rem;
  border: 1px solid var(--spsShade);

  :focus {
    box-shadow: 0 0 0 3px var(--brand);
    outline: none;
  }
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 0.8rem;
  margin: 0;
`;

export default function TextInput({
  name,
  value,
  onChange,
  label,
  placeholder,
  ...props
}: Props) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <StyledInput
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        {...props}
      />
    </div>
  );
}
