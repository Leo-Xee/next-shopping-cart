import styled from "@emotion/styled";

export const Container = styled.article`
  display: flex;
  padding-top: 20px;
  gap: 70px;
`;

export const Title = styled.h1`
  padding: 20px 0;
  text-align: center;
  font-size: 3rem;
  font-weight: 500;
  border-bottom: 3px solid ${({ theme }) => theme.light.gray_dark};
`;

export const CheckController = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;

  & button {
    padding: 10px 15px;
    border: 1px solid ${({ theme }) => theme.light.gray_light};
  }
`;

export const ListHeader = styled.div`
  padding: 20px 0;
  font-size: 2rem;
  border-bottom: 3px solid ${({ theme }) => theme.light.gray_medium};
`;

export const ListContainer = styled.div`
  flex: 6.5;
`;

export const IndicatorWrapper = styled.div`
  padding-top: 65px;
  flex: 3.5;
`;
