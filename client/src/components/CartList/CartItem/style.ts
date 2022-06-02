import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  padding: 20px 0;

  border-bottom: 2px solid #cccccc;
`;

export const Name = styled.div`
  flex: 7;
  padding-left: 20px;
  font-size: 2rem;
`;

export const Controllor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  flex: 3;
  padding-right: 10px;
`;

export const QuantityContainer = styled.div`
  display: flex;
`;

export const Quantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 60px;
  font-size: 2rem;
  border: 1px solid #dddddd;
`;

export const QuantityCotrollor = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2.5rem;

  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 30px;
    border: 1px solid #dddddd;
  }
`;

export const TotalPrice = styled.div`
  font-size: 2rem;
`;
