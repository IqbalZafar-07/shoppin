import React, { useRef, useState } from "react";
import styles from "./style";

const {
  DeckContainer,
  CardStack,
  Card,
  LikeEmote,
  DislikeEmote,
  AddCartEmote,
} = styles;

const SwipeCard = ({
  data = [],
  renderCard,
  onSwipe = () => {},
  icons = {},
}) => {
  const [cards, setCards] = useState(data);
  const [position, setPosition] = useState({ x: 0, y: 0, rotation: 0 });
  const [animating, setAnimating] = useState("none");

  const cardRef = useRef(null);
  const startPoint = useRef({ x: 0, y: 0, time: 0 });

  const handlePointerDown = (e) => {
    if (animating !== "none") return;

    startPoint.current = {
      x: e.clientX || e.touches?.[0]?.clientX,
      y: e.clientY || e.touches?.[0]?.clientY,
      time: Date.now(),
    };

    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerup", handlePointerUp);
  };

  const getDirection = ({
    dx,
    dy,
    dt,
    thresholdVelocity = 0.5,
    thresholdDistance = 100,
  }) => {
    const velocityX = dx / dt;
    const velocityY = dy / dt;

    if (dx > thresholdDistance || velocityX > thresholdVelocity) return "right";
    if (dx < -thresholdDistance || velocityX < -thresholdVelocity)
      return "left";
    if (dy < -thresholdDistance || velocityY < -thresholdVelocity) return "up";

    return null;
  };

  const handlePointerMove = (e) => {
    const currentX = e.clientX || e.touches?.[0]?.clientX;
    const currentY = e.clientY || e.touches?.[0]?.clientY;
    const dx = currentX - startPoint.current.x;
    const dy = currentY - startPoint.current.y;
    const dt = Date.now() - startPoint.current.time;

    const rotation = dx / 5;
    const direction = getDirection({ dx, dy, dt, thresholdVelocity: 0.1 });

    setPosition({ x: dx, y: dy, rotation, direction });
  };

  const mod = (num) => {
    if (num < 0) return -num;
    return num;
  };

  const handlePointerUp = (e) => {
    document.removeEventListener("pointermove", handlePointerMove);
    document.removeEventListener("pointerup", handlePointerUp);

    const currentX = e.clientX || e.changedTouches?.[0]?.clientX;
    const currentY = e.clientY || e.changedTouches?.[0]?.clientY;

    const dx = currentX - startPoint.current.x;
    const dy = currentY - startPoint.current.y;
    const dt = Date.now() - startPoint.current.time;

    const direction = getDirection({ dx, dy, dt });

    const screenWidth = 400;
    const screenHeight = 600;

    if (direction) {
      const finalX =
        mod(dx) > mod(dy)
          ? dx >= 0
            ? screenWidth
            : -screenWidth
          : screenHeight * (dx / mod(dy));
      const finalY =
        mod(dy) > mod(dx)
          ? dy >= 0
            ? screenHeight
            : -screenHeight
          : screenWidth * (dy / mod(dx));

      const finalRotation = dx / 20;

      setAnimating("transform 0.1s ease-out");

      setPosition({ x: finalX, y: finalY, rotation: finalRotation, direction });

      setTimeout(() => {
        const [swipedCard, ...rest] = cards;
        setCards([...rest, swipedCard]); // infinite loop
        onSwipe(swipedCard, direction);
        setPosition({ x: 0, y: 0, rotation: 0 });
        setAnimating("none");
      }, 100);
    } else {
      setAnimating("transform 0.2s ease-out");
      setPosition({ x: 0, y: 0, rotation: 0 });
      setTimeout(() => setAnimating("none"), 200);
    }
  };

  return (
    <DeckContainer>
      <CardStack>
        {cards.map((item, index) => {
          const isTop = index === 0;
          return (
            <Card
              key={item.id || index}
              index={index}
              x={isTop ? position.x : 0}
              y={isTop ? position.y : 0}
              rotation={isTop ? position.rotation : 0}
              animation={animating}
              ref={isTop ? cardRef : null}
              onPointerDown={isTop ? handlePointerDown : undefined}
            >
              {renderCard(item)}
              {isTop && (
                <>
                  {icons?.like && (
                    <LikeEmote
                      rotate={-20}
                      src={icons.like}
                      show={position.direction === "right" ? 1 : 0}
                    />
                  )}
                  {icons?.dislike && (
                    <DislikeEmote
                      rotate={20}
                      src={icons.dislike}
                      show={position.direction === "left" ? 1 : 0}
                    />
                  )}
                  {icons?.superlike && (
                    <AddCartEmote
                      src={icons.superlike}
                      show={position.direction === "up" ? 1 : 0}
                    />
                  )}
                </>
              )}
            </Card>
          );
        })}
      </CardStack>
    </DeckContainer>
  );
};

export default SwipeCard;
