import styled from "@emotion/styled";

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.gray_light};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-size: 1.8rem;
  background-color: ${({ theme }) => theme.gray_lightest};

  & button:hover {
    text-decoration: underline;
  }
`;

export const DetailItem = styled.li`
  display: flex;
  padding: 20px;
  border-top: 1px solid ${({ theme }) => theme.gray_light};
`;

export const LinkedItem = styled.div`
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
  color: ${({ theme }) => theme.gray};
  font-size: 1.8rem;
`;
export const ButtonWrapper = styled.div`
  width: 200px;
  flex: 2;
`;
