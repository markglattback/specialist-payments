import styled from "styled-components";
import Container from "./Container";

export default styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 7rem;
  margin-bottom: 10rem;

  div.information {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 var(--paddingDouble);
  }

  div.illustration {
    display: flex;
    justify-content: center;
    height: 360px;
    padding: 0 var(--paddingDouble);
  }

  @media (max-width: 414px) {
    grid-template-columns: 1fr;
    margin-top: 3rem;
    margin-bottom: 5rem;

    div.information {
      text-align: left;
      margin: 0 var(--padding);
      margin-bottom: 4rem;
    }

    div.illustration {
      height: 180px;
    }

    button {
      margin: var(--padding) auto;
    }
  }
`;
