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
  @media (min-width: 414px) {
    :hover div.dropdown-wrapper {
      display: block;
    }
  }
`;

const CategoryWrapper = styled.div<{ mobile?: boolean }>`
  display: inline-block;
  position: relative;
  font-size: inherit;
  margin: 0 var(--padding);
  cursor: default;

  div.dropdown-wrapper {
    background: transparent;
    display: none;
    position: absolute;
    padding: 0.5rem 0;
    transform: translateX(calc(-25% - var(--padding)));
  }

  div.nav-dropdown {
    padding: var(--padding) var(--paddingDouble);
    background: var(--background);
    color: var(--white);
    border-radius: var(--padding);
    box-shadow: 0 0 0 2px var(--brand), 0 0 10px 0 var(--backgroundShade);
    text-align: center;

    a {
      margin: 0.25rem 0;
      border: 0;
    }

    a:hover {
      color: var(--brand);
    }
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    text-align: left;

    div.dropdown-wrapper {
      display: block;
      position: static;
      background: transparent;
      padding: 0;
      transform: translateX(0);
    }

    div.nav-dropdown {
      display: flex;
      flex-direction: column;
      border: 0;
      padding: var(--padding) 0 0 0;
      color: var(--white);
      text-align: left;
      background: transparent;
      box-shadow: none;
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
        <div className="dropdown-wrapper">
          <div className="nav-dropdown" ref={dropdownRef}>
            {links.map((link, index) => (
              <Link href={link.href} key={`${index}-link`}>
                <a onClick={closeMenu}>{link.text}</a>
              </Link>
            ))}
          </div>
        </div>
      </CategoryWrapper>
    </DropdownWrapper>
  );
}
