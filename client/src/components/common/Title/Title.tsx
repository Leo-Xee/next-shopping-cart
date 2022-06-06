import styled from "@emotion/styled";

export const StyledTitle = styled.h1`
  padding: 20px 0;
  text-align: center;
  font-size: 3rem;
  font-weight: 500;
  border-bottom: 3px solid ${({ theme }) => theme.gray_dark};
`;

type TitleProps = {
  title: string;
};

function Title({ title }: TitleProps) {
  return <StyledTitle>{title}</StyledTitle>;
}

export default Title;
