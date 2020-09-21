import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { useNavContext } from "context/NavContext";
import { MouseEvent as ReactMouseEvent } from "react";

/* TYPES */
interface NavLinkProps extends LinkProps {
  text: string;
}

/* Components */
export default function NavLink({ text, ...props }: NavLinkProps) {
  const router = useRouter();

  const active = router.pathname === `/${props.href}` ? "true" : undefined;

  const navContext = useNavContext();
  const { state, dispatch } = navContext;

  function closeMenu(e: ReactMouseEvent) {
    dispatch({ type: "CLOSE" });
  }

  return (
    <li className={active && "active"}>
      <Link {...props}>
        <a onClick={closeMenu}>{text}</a>
      </Link>
    </li>
  );
}
