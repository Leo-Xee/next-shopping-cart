import styled from "@emotion/styled";

export const Container = styled.li`
  border: 1px solid #aaaaaa;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-size: 1.8rem;
  background-color: #f6f6f6;

  & button:hover {
    text-decoration: underline;
  }
`;

export const DetailItem = styled.li`
  display: flex;
  padding: 20px;
  border-top: 1px solid #aaaaaa;
`;

export const Anchor = styled.a`
  display: flex;
  flex: 8;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 20px;
`;

export const Name = styled.div`
  font-size: 2rem;
`;

export const Price = styled.div`
  color: #888888;
  font-size: 1.8rem;
`;
export const ButtonWrapper = styled.div`
  width: 200px;
  flex: 2;
`;
