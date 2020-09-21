import styled from "styled-components";
import { ReactChild } from "react";

const StyledLabel = styled.label`
  display: block;
  font-size: 0.8rem;
`;

type Props = {
  htmlFor: string;
  children: ReactChild;
};

export default function Label({ htmlFor, children }: Props) {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
}
