import { CSSProperties } from "react";
import styled from "styled-components";

const StyledSVG = styled.svg<Props>`
  fill: none;
  stroke: ${(props) => props.color || "inherit"};
  stroke-linecap: square;
  stroke-miterlimit: 10;
  stroke-width: 2px;
  transform-origin: center;
  transform: ${(props) => (props.reverse ? "scaleY(-1) translateY(-2px)" : "")};

  &:hover {
    stroke: ${(props) => props.hover || "white"};
  }
`;

type Props = {
  color?: string;
  hover?: string;
  reverse?: boolean;
};

export default function ToggleButton({ color, hover, reverse }: Props) {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      height="1rem"
      width="1rem"
      color={color}
      hover={hover}
      reverse={reverse}
    >
      <polyline points="5 9 10 14 15 9" />
    </StyledSVG>
  );
}
