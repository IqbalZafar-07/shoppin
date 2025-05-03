import React, { useEffect, useState } from "react";
import styles from "./style";

const { SplashContainer, IconWrapper, Text } = styles;

import { FaTshirt, FaHatCowboy, FaSocks, FaShoePrints } from "react-icons/fa";
import { GiArmoredPants } from "react-icons/gi";

const colors = ["#00d672", "#FF7043", "#2979FF", "#ffa600", "#00B8D4"];
const iconList = [FaTshirt, FaHatCowboy, FaSocks, GiArmoredPants, FaShoePrints];

const SplashScreen = () => {
  const [currentIcon, setCurrentIcon] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentIcon((prev) => (prev + 1) % iconList.length);
        setFade(true);
      }, 200);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = iconList[currentIcon];

  return (
    <SplashContainer>
      <IconWrapper fade={fade} color={colors[currentIcon]}>
        <CurrentIcon />
      </IconWrapper>
      <Text>Getting things ready for you...</Text>
    </SplashContainer>
  );
};

export default SplashScreen;
