import styled from "@emotion/styled";

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.light.gray_light};

  & button {
    padding: 20px 10px;
    width: 100%;
    background-color: ${({ theme }) => theme.light.primary};
    color: ${({ theme }) => theme.light.white};
    font-size: 2rem;
    font-weight: 500;
  }
`;

export const ResultTitle = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 2.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.light.gray_light};
`;

export const ResultContainer = styled.div`
  padding: 30px 20px;
`;

export const ResultInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  font-weight: 700;
  padding-bottom: 60px;

  & span {
    box-shadow: inset 0 -10px ${({ theme }) => theme.light.primary_light};
  }
`;
