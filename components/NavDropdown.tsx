import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import {
  useRef,
  useState,
  useEffect,
  MouseEvent as ReactMouseEvent,
} from "react";
import { useNavContext } from "context/NavContext";

type Props = {
  category: string;
  links: Links[];
  mobile?: boolean;
};

type Links = {
  text: string;
  href: string;
};

const DropdownWrapper = styled.li`
  @media (min-width: 415px) {
    :hover div.nav-dropdown {
      display: block;
    }
  }
`;

const CategoryWrapper = styled.div<{ mobile?: boolean }>`
  display: inline-block;
  position: relative;
  font-size: inherit;
  margin: 0 calc(var(--padding) * 2);
  cursor: default;

  div.nav-dropdown {
    display: none;
    position: absolute;
    top: 0.5rem;
    left: -1rem;
    transform: translateX(-(var(--padding)));
    margin-top: 1rem;
    padding: var(--padding);
    background: var(--white);
    color: var(--background);
    border-radius: var(--paddingHalf);
  }

  div.nav-dropdown--open {
    display: block;
  }

  a {
  }

  @media (max-width: 414px) {
    display: flex;
    flex-direction: column;
    text-align: left;

    div.nav-dropdown {
      display: flex;
      flex-direction: column;
      position: static;
      background: transparent;
      padding: 0;
      color: var(--white);
    }

    span {
      color: var(--brand);
      font-weight: 700;
      text-transform: uppercase;
      font-size: 13px;
    }

    a {
      font-weight: 300;
    }
  }
`;

export default function NavDropdown({ category, links, mobile }: Props) {
  const categoryRef = useRef<HTMLLIElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navContext = useNavContext();
  const { state, dispatch } = navContext;

  function closeMenu(e: ReactMouseEvent) {
    dispatch({ type: "CLOSE" });
  }

  return (
    <DropdownWrapper ref={categoryRef}>
      <CategoryWrapper mobile={mobile}>
        <span>{category}</span>
        <div
          className={
            !state.open ? "nav-dropdown" : "nav-dropdown nav-dropdown--open"
          }
          ref={dropdownRef}
        >
          {links.map((link, index) => (
            <Link href={link.href} key={`${index}-link`}>
              <a onClick={closeMenu}>{link.text}</a>
            </Link>
          ))}
        </div>
      </CategoryWrapper>
    </DropdownWrapper>
  );
}
