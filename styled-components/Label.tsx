import styled from "styled-components";
import { ReactNode } from "react";

export const StyledLabel = styled.label`
  display: block;
  font-size: 0.8rem;
  text-align: left;
`;

type Props = {
  children: ReactNode;
  htmlFor: string;
};

export default function Label({ children }: Props) {
  return <StyledLabel>{children}</StyledLabel>;
}
