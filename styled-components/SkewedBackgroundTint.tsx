import styled from "styled-components";

export default styled.div`
  position: absolute;
  background: var(--backgroundTint);
  top: 10rem;
  height: calc(100% + 10rem);
  width: 100%;
  transform: skewY(-5deg);

  @media (max-width: 414px) {
    top: 0rem;
    /* height: 100%; */
  }
`;
