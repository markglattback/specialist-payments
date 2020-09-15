import styled from "styled-components";
import { HTMLAttributes, MouseEvent as ReactMouseEvent } from "react";
import { useNavContext } from "context/NavContext";

const Toggle = styled.div`
  display: none;
  height: 48px;
  width: 48px;
  position: relative;
  background: transparent;
  cursor: pointer;
  z-index: var(--zIndexFront);

  @media (max-width: 414px) {
    display: block;
    margin: 0 var(--paddingHalf) 0 auto;
  }

  span {
    display: block;
    position: relative;
    top: 23px;
    left: 12px;
    height: 2px;
    width: 24px;
    background: var(--white);
    transition: all 0.15s ease-in-out 0.15s;
  }

  span:before,
  span:after {
    content: "";
    display: block;
    position: absolute;
    height: 2px;
    width: 24px;
    background: var(--white);
    transition: all 0.3s ease-in-out;
  }

  span:before {
    top: -8px;
  }

  span:after {
    top: 8px;
  }

  span.open {
    background: transparent;
    transition: all 0.15s ease-in-out;
  }

  span.open:before {
    width: 24px;
    transform: translateY(8px) rotate(315deg);
  }

  span.open:after {
    width: 24px;
    transform: translateY(-8px) rotate(-315deg);
  }
`;

interface Props extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
}

export default function NavToggle() {
  const navContext = useNavContext();
  const { state, dispatch } = navContext;

  function toggleMenu(e: ReactMouseEvent) {
    e.preventDefault();
    if (state.open) {
      dispatch({ type: "CLOSE" });
    } else {
      dispatch({ type: "OPEN" });
    }
  }

  return (
    <Toggle onClick={toggleMenu}>
      <span className={state.open ? "open" : undefined}></span>
    </Toggle>
  );
}
