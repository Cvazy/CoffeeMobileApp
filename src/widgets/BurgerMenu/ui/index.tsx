import React, { useEffect, useRef } from "react";
import { Dimensions, Animated } from "react-native";
import { styles } from "./styles";

export const BurgerMenu = ({ isOpen }: { isOpen: boolean }) => {
  const windowDimensions = Dimensions.get("window");
  const heightAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(heightAnim, {
      toValue: isOpen ? windowDimensions.height : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isOpen, heightAnim, windowDimensions.height]);

  return (
    <Animated.View
      style={{
        ...styles.container,
        height: heightAnim,
      }}
    ></Animated.View>
  );
};
