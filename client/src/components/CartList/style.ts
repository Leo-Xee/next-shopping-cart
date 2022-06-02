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
  border-bottom: 3px solid #333333;
`;

export const CheckController = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;

  & button {
    padding: 10px 15px;
    border: 1px solid #bbbbbb;
  }
`;

export const ListHeader = styled.div`
  padding: 20px 0;
  font-size: 2rem;
  border-bottom: 3px solid #aaaaaa;
`;

export const List = styled.div`
  flex: 6.5;
`;

export const Indicator = styled.div`
  flex: 3.5;
  height: fit-content;
  border: 1px solid #bbbbbb;

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
  border-bottom: 1px solid #bbbbbb;
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
    box-shadow: inset 0 -10px rgba(42, 193, 188, 0.5);
  }
`;
