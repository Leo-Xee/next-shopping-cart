import styled from "@emotion/styled";

export const Container = styled.div`
  width: 282px;
  box-shadow: 0 0 5px ${({ theme }) => theme.box_shadow_color};

  &:hover {
    .name {
      text-decoration: underline;
    }
  }

  & img {
    transition: transform 0.2s ease-in-out;
  }

  &:hover img {
    transform: scale(1.2);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
`;

export const Info = styled.div`
  flex: 9;
  padding: 10px 0 15px 10px;
`;

export const CartButton = styled.button`
  flex: 1;
  padding: 0 10px 0 5px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Name = styled.div`
  font-size: 1.6rem;
  padding-bottom: 5px;
`;

export const Price = styled.div`
  font-size: 2rem;
  font-weight: 500;
`;
