import { CSSProperties } from "react";
import styled from "styled-components";

const StyledSVG = styled.svg<Props>`
  fill: none;
  stroke: ${(props) => props.color || "inherit"};
  stroke-linecap: square;
  stroke-miterlimit: 10;
  stroke-width: 2px;

  &:hover {
    stroke: ${(props) => props.hover || "white"};
  }
`;

type Props = {
  color: string;
  hover: string;
};

export default function Clear({ color, hover }: Props) {
  const styles: CSSProperties = {
    fill: "none",
    stroke: color || "inherit",
    strokeLinecap: "square",
    strokeMiterlimit: 10,
    strokeWidth: "2px",
  };

  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      height="1rem"
      width="1rem"
      color={color}
      hover={hover}
    >
      {/* <line style={styles} x1="6" y1="6" x2="14" y2="14" />
      <line style={styles} x1="6" y1="14" x2="14" y2="6" /> */}
      <line x1="6" y1="6" x2="14" y2="14" />
      <line x1="6" y1="14" x2="14" y2="6" />
    </StyledSVG>
  );
}
