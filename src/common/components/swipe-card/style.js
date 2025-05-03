import styled from "styled-components";

const DeckContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardStack = styled.div`
  position: relative;
  width: calc(300px + 2rem);
  max-width: calc(100% + 2rem);
  height: calc(500px + 2rem);
  max-height: calc(100% + 2rem);
`;

const Card = styled.div.attrs(({ x, y, rotation }) => ({
  style: {
    transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`,
  },
}))`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => color};
  transition: ${({ animation }) => animation};
  z-index: ${({ index }) => 100 - index};
  touch-action: none;
  user-select: none;
  overflow: hidden;
  img {
    -webkit-user-drag: none;
  }
`;

const Emote = styled.img`
  position: absolute;
  top: 20px;
  width: 100px;
  object-fit: contain;
  opacity: ${({ show }) => show};
  transform: rotate(${({ rotate }) => rotate}deg);
  transition: opacity 0.2s;
`;

const LikeEmote = styled(Emote)`
  left: 20px;
`;

const DislikeEmote = styled(Emote)`
  right: 20px;
`;

const AddCartEmote = styled(Emote)`
  top: 50%;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default {
  DeckContainer,
  CardStack,
  Card,
  LikeEmote,
  DislikeEmote,
  AddCartEmote,
};
