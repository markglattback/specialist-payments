import styled from "styled-components";
import Button from "styled-components/Button";
import Link, { LinkProps } from "next/link";

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
  return (
    <li>
      <NavButtonWrapper>
        <Link {...props}>
          <Button primary>{text}</Button>
        </Link>
      </NavButtonWrapper>
    </li>
  );
}
