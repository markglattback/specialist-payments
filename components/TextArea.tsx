import styled from "styled-components";
import Label from "../styled-components/Label";
import { ChangeEvent, PropsWithoutRef } from "react";
import ErrorMessage from "./ErrorMessage";

type Props = {
  label: string;
  optional: boolean | undefined;
  errors: string | undefined;
  touched: boolean | undefined;
  id: string;
} & PropsWithoutRef<JSX.IntrinsicElements["textarea"]>;

type OmittableProps = "label" | "errors" | "touched" | "id" | "optional";

type StyledProps = Omit<Props, OmittableProps> & { showErrorState: boolean };

const StyledTextArea = styled.textarea<StyledProps>`
  display: block;
  background: var(--white);
  backdrop-filter: blur(5px);
  color: var(--backgroundShade);
  font-weight: 700;
  width: min(100%, 450px);
  margin: 0.25rem 0;
  padding: 0.75rem 0.5rem;
  border: 1px solid var(--backgroundShade);
  box-shadow: ${({ showErrorState }) =>
    showErrorState ? "0 0 0 3px red" : "none"};

  :focus {
    box-shadow: 0 0 0 3px var(--brand);
    outline: none;
  }

  ::placeholder {
    color: var(--backgroundShade);
  }
`;

const BlockWrapper = styled.div`
  div.errors {
    height: 1.25rem;
    font-size: 13px;
    margin-bottom: 0rem;
    color: red;
  }

  span.optional {
    color: var(--bodyColor);
    margin-left: var(--paddingHalf);
  }
`;

export default function TextArea({
  label,
  optional,
  errors,
  touched,
  id,
  ...props
}: Props) {
  const showErrorState = touched && errors ? true : false;

  return (
    <BlockWrapper>
      <div className="input">
        <Label htmlFor="is">
          {label}
          {optional && <span className="optional">(optional)</span>}
          <StyledTextArea
            id={id}
            showErrorState={showErrorState}
            {...props}
            rows={4}
          />
        </Label>
      </div>
      <ErrorMessage errors={errors} touched={touched} />
    </BlockWrapper>
  );
}
