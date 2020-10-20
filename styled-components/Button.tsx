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
    primary ? "var(--brand)" : "var(--bodyColor)"};
  color: var(--background);
  border: none;
  cursor: pointer;
  z-index: var(--zIndexFront);
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};

  :not(:disabled):hover {
    background: ${({ primary }) =>
      primary ? "var(--brandShade)" : "var(--bodyColorTint)"};
  }

  :disabled {
    cursor: default;
  }
`;
