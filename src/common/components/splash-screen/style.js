import styled, { keyframes } from "styled-components";

const fadeInOut = keyframes`
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
`;

const SplashContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #f4faf7, #e0f2ec);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Segoe UI", sans-serif;
  z-index: 1000;
`;

const IconWrapper = styled.div`
  font-size: 5rem;
  color: ${(props) => props.color};
  opacity: ${(props) => (props.fade ? 1 : 0)};
  transform: scale(${(props) => (props.fade ? 1 : 0.8)});
  transition: all 0.3s ease;
`;

const Text = styled.div`
  margin-top: 1.5rem;
  font-size: 1.2rem;
  color: #333;
  animation: ${fadeInOut} 1s ease-in-out;
  text-align: center;
`;

export default {
  SplashContainer,
  IconWrapper,
  Text,
};
