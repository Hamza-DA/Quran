import React from "react";
import styled, { keyframes } from "styled-components";

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const animate = keyframes`
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(0.8);
  }
`;
const Loader = styled.div`
  width: 2rem;
  height: 2rem;
  border: solid 2px #11585b;
  border-radius: 50%;
  animation: ${animate} 0.8s ease infinite;
`;
const Loading = () => {
  return (
    <>
      <LoaderWrapper>
        <Loader></Loader>
      </LoaderWrapper>
    </>
  );
};

export default Loading;
