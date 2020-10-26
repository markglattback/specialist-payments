import styled from "styled-components";

const BenefitWrapper = styled.div`
  display: flex;
  max-width: 800px;
  margin: 0 auto;
  justify-content: flex-start;
  align-items: flex-start;
  padding: var(--padding);

  div.icon {
    width: 60px;
    height: 60px;
    margin-right: 1rem;

    img {
      display: inline-block;
    }

    @media screen and (max-width: 480px) {
      width: 30px;
      height: 30px;
    }
  }

  div.text {
    display: flex;
    flex-direction: column;

    h3 {
      margin: 0;
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }

    p {
      margin: 0;
      font-size: 16px;
      color: var(--bodyColor);
    }
  }
`;

type Props = {
  icon: string;
  title: string;
  details: string;
};

export default function Benefit(props: Props) {
  return (
    <BenefitWrapper>
      <div className="icon">
        <img src={props.icon} alt={props.title} height="100%" />
      </div>
      <div className="text">
        <h3>{props.title}</h3>
        <p>{props.details}</p>
      </div>
    </BenefitWrapper>
  );
}
