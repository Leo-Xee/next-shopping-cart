import styled from "@emotion/styled";

export const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.primary};
  z-index: 100;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.maxWidth};
  min-width: ${({ theme }) => theme.minWidth};
  margin: 0 auto;
  height: 100%;
`;
export const Left = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.white};

  & span {
    position: absolute;
    top: -1px;
    left: 10px;
  }

  & a {
    font-weight: 700;
    margin-left: 60px;
    padding: 5px;
  }
`;
export const Right = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.white};

  & a {
    margin-right: 20px;
    padding: 5px;
  }
`;
