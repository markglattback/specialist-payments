import styled from "styled-components";
import { Dispatch, SetStateAction, useEffect } from "react";

const StyledError = styled.div`
  position: fixed;
  max-width: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--white);
  color: var(--backgroundShade);
  text-align: center;
  padding: var(--paddingDouble);
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 2px 0 5px 0 rgba(0, 0, 0, 0.3);
`;

export default function FormErrorMessage({
  close,
}: {
  close: Dispatch<SetStateAction<boolean>>;
}) {
  useEffect(() => {
    setTimeout(() => {
      close(false);
    }, 5000);
  }, []);

  return (
    <StyledError>
      <p>Something went wrong with your submission, please try again.</p>
      <p>If the problem persists, please contact info@specialistpayments.com</p>
    </StyledError>
  );
}
