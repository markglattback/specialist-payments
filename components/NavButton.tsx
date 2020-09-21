import styled from "styled-components";
import Button from "styled-components/Button";
import Link, { LinkProps } from "next/link";
import { useNavContext } from "context/NavContext";
import { MouseEvent as ReactMouseEvent } from "react";

const NavButtonWrapper = styled.div`
  button {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

interface Props extends LinkProps {
  text: string;
}

export default function NavButton({ text, ...props }: Props) {
  const navContext = useNavContext();
  const { state, dispatch } = navContext;

  function closeMenu(e: ReactMouseEvent) {
    dispatch({ type: "CLOSE" });
  }

  return (
    <li>
      <NavButtonWrapper>
        <Link {...props}>
          <Button primary onClick={closeMenu}>
            {text}
          </Button>
        </Link>
      </NavButtonWrapper>
    </li>
  );
}
