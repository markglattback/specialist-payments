import styled from "styled-components";
import MaxContainer from "./MaxContainer";

export default styled(MaxContainer)`
  background: transparent;
  position: relative;
  padding-top: 7rem;
  padding-bottom: 7rem;

  h2 {
    position: relative;
    text-align: center;
    font-size: 1rem;
    z-index: 1;
  }

  p {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
`;
