import styled from "styled-components";

const ErrorWrapper = styled.div`
  height: 1.25rem;
  font-size: 13px;
  margin-bottom: 0rem;
  color: red;
`;

type Props = {
  touched: boolean | undefined;
  errors: string | undefined;
};

export default function ErrorMessage({ errors, touched }: Props) {
  return <ErrorWrapper>{touched && (errors || "")}</ErrorWrapper>;
}
