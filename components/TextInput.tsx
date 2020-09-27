import styled, { StyledComponentProps } from "styled-components";
import Label from "../styled-components/Label";
import {
  ChangeEvent,
  PropsWithoutRef,
  FormEventHandler,
  PropsWithRef,
  forwardRef,
} from "react";

type Props = {
  label: string;
  invalid: boolean;
} & PropsWithoutRef<JSX.IntrinsicElements["input"]>;

const StyledInput = styled.input<Omit<Props, "label">>`
  display: block;
  background: var(--white);
  backdrop-filter: blur(5px);
  color: var(--backgroundShade);
  font-weight: 300;
  width: min(100%, 450px);
  margin: 0.25rem 0 1rem 0;
  padding: 0.75rem 0.5rem;
  border: 1px solid ${({ invalid }) => (invalid ? "red" : "var(--spsShade)")};

  :focus {
    box-shadow: 0 0 0 3px var(--brand);
    outline: none;
  }
`;

export default function TextInput({ label, invalid, ...props }: Props) {
  return (
    <div>
      <Label>
        {label}
        <StyledInput
          type="text"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          invalid={invalid}
          {...props}
        />
      </Label>
    </div>
  );
}
