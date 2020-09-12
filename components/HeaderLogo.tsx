import styled from "styled-components";
import { useAppContext } from "./AppContext";

const BrandLogo = styled.div<Props>`
  display: flex;
  font-weight: 700;
  font-size: 1rem;
  z-index: var(--zIndexFront);
  height: ${({ mobile }) => (mobile ? "48px" : "60px")};

  ${({ mobile }) => {
    if (mobile)
      return "position: absolute; top:var(--paddingHalf); left:50%; transform: translateX(-75px);";
  }}

  img {
    display: inline-block;
  }
`;

type Props = {
  mobile: boolean;
};

export default function HeaderLogo() {
  const { state } = useAppContext();
  const { mobile } = state;

  return (
    <BrandLogo mobile={mobile}>
      <img src="/sps-logo.svg" alt="Specialist Payments Logo" />
    </BrandLogo>
  );
}
