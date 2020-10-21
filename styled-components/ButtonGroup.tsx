import styled from "styled-components";

export default styled.div`
  display: flex;

  button {
    margin-top: 0.5rem;
    margin-bottom: 0;
    padding: var(--padding);
    width: min(100%, 450px);
  }

  button:nth-of-type(2) {
    margin-left: var(--padding);
  }

  @media (max-width: 414px) {
    flex-direction: column;

    button:nth-of-type(2) {
      margin-left: 0;
    }
  }
`;
