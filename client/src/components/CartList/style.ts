import styled from "@emotion/styled";

export const DefaultListHeader = styled.div`
  padding: 20px 0;
  font-size: 2rem;
  font-weight: 500;
  border-bottom: 3px solid ${({ theme }) => theme.gray};
`;

export const Container = styled.article`
  display: flex;
  padding-top: 40px;
  gap: 70px;
`;

export const CheckController = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
`;

export const ListHeader = styled(DefaultListHeader)``;

export const ListContainer = styled.div`
  flex: 6.5;
`;

export const IndicatorWrapper = styled.div`
  padding-top: 65px;
  flex: 3.5;
`;
