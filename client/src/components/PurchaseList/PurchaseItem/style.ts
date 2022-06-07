import styled from "@emotion/styled";

export const Container = styled.li`
  display: flex;
  padding: 20px 0;

  border-bottom: 2px solid ${({ theme }) => theme.gray_light};
`;

export const Info = styled.div`
  padding-left: 20px;
  font-size: 2rem;
`;

export const Name = styled.div`
  padding-bottom: 20px;
`;

export const Price = styled.div`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.gray};
`;
