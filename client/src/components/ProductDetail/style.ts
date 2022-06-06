import styled from "@emotion/styled";

export const Container = styled.article`
  width: fit-content;
  margin: 0 auto;
`;

export const Name = styled.div`
  padding: 20px 10px;
  font-size: 2.5rem;
  font-weight: 700;
  border-bottom: 4px solid ${({ theme }) => theme.gray};
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 10px;
  font-size: 2rem;
  font-weight: 500;
`;

export const CartButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 3rem;
  font-weight: 500;
  background-color: ${({ theme }) => theme.brown};
  color: ${({ theme }) => theme.white};
`;
