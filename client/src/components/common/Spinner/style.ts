import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const moving = keyframes`
  0% {
    transform: translateX(150px);
  }
  100% {
    transform: translateX(-50px);
  }
`;

export const ImageWrapper = styled.div`
  animation: ${moving} 2s ease infinite;
  margin-bottom: 30px;
`;

export const Message = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`;
