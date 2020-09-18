import styled from "styled-components";

export default styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: var(--maxWidth);
  margin: 0 auto;

  :nth-of-type(1) {
    margin-top: 0;
  }
  :nth-of-type(2) {
    margin-bottom: 0;
  }

  div.article-image {
    margin-left: auto;
    margin-right: auto;
    max-width: 400px;

    img {
      width: 100%;
    }
  }

  div.article-text {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--brand);
      margin-bottom: 1.5rem;
      text-align: left;
    }
  }

  @media (max-width: 414px) {
    margin: 0 var(--paddingDouble);
    grid-template-columns: calc(100%);
    grid-template-rows: repeat(auto);

    div.article-image {
      max-width: calc(100% - 4rem);
      margin: var(--paddingDouble) auto;
    }

    div.article-text {
      text-align: center;

      h2 {
        text-align: center;
      }
    }
  }
`;
