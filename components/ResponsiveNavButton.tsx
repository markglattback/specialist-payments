import { LinkProps } from "next/link";
import NavLink from "./NavLink";
import NavButton from "./NavButton";

interface Props extends LinkProps {
  mobile?: boolean;
  text: string;
}

export default function ResponsiveNavButton({ mobile, text, ...props }: Props) {
  if (mobile) return <NavLink {...props} text={text} />;

  return <NavButton {...props} text={text} />;
}
