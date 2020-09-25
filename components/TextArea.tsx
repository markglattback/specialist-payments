import styled from "styled-components";
import Label from "../styled-components/Label";
import { ChangeEvent } from "react";

type Props<T> = {
  name: T;
  value: string;
  onChange: ChangeHandler;
  label: string;
  [key: string]: any;
};

type ChangeHandler = {
  (e: ChangeEvent<HTMLTextAreaElement>): void;
};

const StyledTextArea = styled.textarea`
  display: block;
  background: var(--white);
  backdrop-filter: blur(5px);
  color: var(--backgroundShade);
  font-weight: 300;
  width: min(100%, 450px);
  margin: 1rem 0;
  padding: 0.25rem 0.5rem;
  border: 1px solid var(--backgroundShade);

  :focus {
    border: 1px solid var(--background);
    box-shadow: 0 0 0 2px var(--foreground);
    outline: none;
  }
`;

const StyledLabel = styled.label`
  display: block;
`;

export default function TextArea<T extends string>({
  name,
  value,
  onChange,
  label,
  ...props
}: Props<T>) {
  return (
    <div>
      <Label>
        {label}
        <StyledTextArea
          name={name}
          value={value}
          onChange={onChange}
          {...props}
          rows={4}
        />
      </Label>
    </div>
  );
}
