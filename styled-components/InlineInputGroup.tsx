import styled from "styled-components";

export default styled.div`
  display: grid;
  max-width: 450px;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: var(--padding);

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0;
  }
`;
