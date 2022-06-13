import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const moving = keyframes`
0% {
  bottom: -60px;
}
10% {
  bottom: 20px;
}
90% {
  bottom: 20px;
}
100% {
  bottom: -60px;
}
`;

const Container = styled.div<{ duration: number }>`
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  color: white;
  font-size: 1.8rem;
  font-weight: 500;
  z-index: 100;
  animation-name: ${moving};
  animation-duration: ${({ duration }) => `${duration}s`};
  animation-timing-function: ease-in-out;
`;

export default Container;
