import styled from "styled-components";

export default styled.div`
  display: flex;

  button {
    margin-top: 0.5rem;
    margin-bottom: 0;
    padding: var(--padding);
    width: min(100%, 450px);
  }

  button:first-of-type {
    margin-right: var(--padding);
  }

  @media (max-width: 414px) {
    flex-direction: column;

    button:first-of-type {
      margin-right: 0;
    }
  }
`;
