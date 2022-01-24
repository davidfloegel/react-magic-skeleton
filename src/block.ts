import styled, { keyframes, css } from "styled-components";

const pulse = keyframes`
  0% {
        background-position: 0% 0%;
  }
  100% {
        background-position: -135% 0%;
  }
`;

export const LoadingBlock = styled.div<{ fill?: boolean }>`
  ${({ fill }) => css`
    background: ${fill ? "#ccc" : "transparent"};
    width: 100px;
    height: 10px;
    border-radius: 2px;

    background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
    background-size: 400% 400%;
    animation: ${pulse} 1.2s ease-in-out infinite;
  `}
`;
