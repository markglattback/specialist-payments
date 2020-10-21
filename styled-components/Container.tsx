import styled from "styled-components";

export default styled.div`
  position: relative;
  max-width: var(--maxWidth);
  margin: 0 auto;

  @media (max-width: 1000px) {
    padding: 0 var(--padding);
  }

  @media (max-width: 414px) {
    padding: 0;
  }
`;
