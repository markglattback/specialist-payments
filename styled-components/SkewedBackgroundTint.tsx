import styled from "styled-components";

export default styled.div`
  position: absolute;
  background: var(--backgroundTint);
  top: 10rem;
  /* left: 50%; */
  height: calc(100% + 10rem);
  width: 100%;
  /* max-width: 1600px; */
  transform: skewY(-5deg);
  clip-path: polygon(
    calc(50% - 1000px) 0,
    calc(50% + 1000px) 0,
    calc(50% + 1000px) 100%,
    calc(50% - 1000px) 100%
  );

  @media screen and (max-width: 480px) {
    top: 0rem;
    /* height: 100%; */
  }
`;
