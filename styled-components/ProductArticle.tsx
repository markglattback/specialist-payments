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
    display: flex;
    justify-content: center;
    max-width: 500px;
    padding: 0 var(--padding);
  }

  div.article-image.reversed {
    padding-left: 0;
    padding-right: var(--paddingDouble);

    @media (max-width: 414px) {
      padding-right: var(--padding);
      grid-row-start: 2;
    }
  }

  div.article-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 var(--paddingDouble);

    h2 {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--brand);
      margin-bottom: 1.5rem;
      text-align: left;
    }
  }

  div.article-details {
    grid-column-start: 1;
    grid-column-end: 3;
    margin-top: 7rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 414px) {
      grid-column-end: 2;
      grid-template-columns: 1fr;
      margin-top: 3rem;
    }

    div.heading {
      grid-column-start: 1;
      grid-column-end: 3;
      text-align: center;

      @media (max-width: 414px) {
        grid-column-end: 1;
      }

      h3 {
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 3rem;
        color: var(--brand);
      }
    }

    div {
      padding: 0 var(--padding);
      @media (max-width: 414px) {
        padding: 0;
      }
    }

    div.text-left {
      text-align: right;

      @media (max-width: 414px) {
        text-align: left;
      }
    }

    div.text-right {
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
      text-align: left;
      padding: 0;

      h2 {
        text-align: center;
      }
    }
  }
`;
