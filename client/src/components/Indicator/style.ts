import styled from "@emotion/styled";

export const Container = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  border: 1px solid ${({ theme }) => theme.gray_light};
`;

export const ResultTitle = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 2.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.gray_light};
`;

export const ResultContainer = styled.div`
  padding: 30px 20px;
`;

export const ResultInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 40px;

  & span {
    box-shadow: inset 0 -10px ${({ theme }) => theme.primary_highlight};
  }
`;
