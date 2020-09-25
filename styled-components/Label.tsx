import styled from "styled-components";
import { ReactNode } from "react";

const StyledLabel = styled.label`
  display: block;
  font-size: 0.8rem;
`;

type Props = {
  children: ReactNode;
};

export default function Label({ children }: Props) {
  return <StyledLabel>{children}</StyledLabel>;
}
