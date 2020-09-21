import styled from "styled-components";
import { ReactNode } from "react";

const StyledCBGroup = styled.div`
  padding: 0.5rem 0 1rem 0;
`;

export default function CheckBoxGroup({ children }: { children: ReactNode }) {
  return <StyledCBGroup>{children}</StyledCBGroup>;
}
