import React, { useEffect, useRef } from "react";
import { Dimensions, Animated } from "react-native";
import { styles } from "./styles";

const { height } = Dimensions.get("window");

export const BurgerMenu = ({ isOpen }: { isOpen: boolean }) => {
  const heightAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(heightAnim, {
      toValue: isOpen ? height : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isOpen, heightAnim, height]);

  return (
    <Animated.View
      style={{
        ...styles.container,
        height: heightAnim,
      }}
    ></Animated.View>
  );
};
