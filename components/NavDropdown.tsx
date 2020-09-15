import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import {
  SyntheticEvent,
  useRef,
  useState,
  useEffect,
  MouseEvent as ReactMouseEvent,
  ReactChild,
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
  :hover display.nav-dropdown {
    display: block;
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
    top: 1rem;
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
  const [open, setOpen] = useState(false);
  const [categoryZone, setCategoryZone] = useState({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });
  const [dropdownZone, setDropdownZone] = useState({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  });

  function getTransitionCorridor() {
    const { top, right, bottom, left } = categoryZone;
    const {
      top: dropdownTop,
      right: dropdownRight,
      bottom: dropdownBottom,
      left: dropdownLeft,
    } = dropdownZone;

    return {
      top: bottom,
      left,
      right,
      bottom: dropdownTop,
    };
  }

  function handleMouseMove(e: MouseEvent) {
    const { pageX, pageY } = e;
    const transitionCorridor = getTransitionCorridor();

    function removeEventListener() {
      document.removeEventListener("mousemove", handleMouseMove);
    }

    // if still within corridor on x axis
    if (pageX >= transitionCorridor.left && pageX <= transitionCorridor.right) {
      if (pageY < transitionCorridor.top || pageY > transitionCorridor.bottom) {
        // cancel event listener
        removeEventListener();
      }
      return;
    } else {
      setOpen(false);
      removeEventListener();
    }
  }

  function handleMouseEnter(e: ReactMouseEvent) {
    if (!open) setOpen(true);
  }

  function handleMouseLeave(e: ReactMouseEvent) {
    const { pageX, pageY } = e;
    const { top, right, bottom, left } = categoryZone;
    const {
      top: dropdownTop,
      right: dropdownRight,
      bottom: dropdownBottom,
      left: dropdownLeft,
    } = dropdownZone;

    const transitionCorridor = {
      top: bottom,
      left,
      right,
      bottom: dropdownTop,
    };

    // check if heading into transition corridor
    if (pageX >= transitionCorridor.left && pageX <= transitionCorridor.right) {
      if (
        pageY >= transitionCorridor.top &&
        pageY <= transitionCorridor.bottom
      ) {
        // heading towards transition corridor, leave open
        // register event listener to check when mouse leaves corridor sideways
        document.addEventListener("mousemove", handleMouseMove);
        return;
      }
    }

    return setOpen(false);
  }

  // update bounds on window resize
  useEffect(() => {
    // get category elem dimensions
    const bounds = categoryRef.current?.getBoundingClientRect();
    const dropdownBounds = dropdownRef.current?.getBoundingClientRect();

    function calcDimensions() {
      setCategoryZone({
        top: bounds?.top || 0,
        left: bounds?.left || 0,
        right: bounds?.right || 0,
        bottom: bounds?.bottom || 0,
      });

      setDropdownZone({
        top: dropdownBounds?.top || 0,
        right: dropdownBounds?.right || 0,
        bottom: dropdownBounds?.bottom || 0,
        left: dropdownBounds?.left || 0,
      });
    }

    calcDimensions();

    window.addEventListener("resize", calcDimensions);

    return () => {
      window.removeEventListener("resize", calcDimensions);
    };
  }, [mobile]);

  // update dropdown bounds when open
  useEffect(() => {
    const dropdownBounds = dropdownRef.current?.getBoundingClientRect();

    setDropdownZone({
      top: dropdownBounds?.top || 0,
      right: dropdownBounds?.right || 0,
      bottom: dropdownBounds?.bottom || 0,
      left: dropdownBounds?.left || 0,
    });
  }, [open]);

  const navContext = useNavContext();
  const { state, dispatch } = navContext;

  function closeMenu(e: ReactMouseEvent) {
    dispatch({ type: "CLOSE" });
  }

  return (
    <li
      ref={categoryRef}
      // onMouseEnter={!mobile ? handleMouseEnter : undefined}
      // onMouseLeave={!mobile ? handleMouseLeave : undefined}
    >
      <CategoryWrapper mobile={mobile}>
        <span>{category}</span>
        <div
          className={!open ? "nav-dropdown" : "nav-dropdown nav-dropdown--open"}
          ref={dropdownRef}
          // onMouseLeave={!mobile ? handleMouseLeave : undefined}
        >
          {links.map((link, index) => (
            <Link href={link.href} key={`${index}-link`}>
              <a onClick={closeMenu}>{link.text}</a>
            </Link>
          ))}
        </div>
      </CategoryWrapper>
    </li>
  );
}
