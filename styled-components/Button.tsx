import styled from "styled-components";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
}

export default styled.button<Props>`
  display: block;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  margin: var(--padding) 0;
  padding: var(--paddingHalf) var(--padding);
  background: ${({ primary }) =>
    primary ? "var(--brand)" : "var(--brandTint)"};
  color: var(--background);
  border: none;
  cursor: pointer;
  z-index: var(--zIndexFront);
`;
