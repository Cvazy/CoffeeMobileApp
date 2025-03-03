import React, { useState, useRef, useEffect } from "react";
import { View, Text, Pressable, Animated, Easing } from "react-native";
import { styles } from "./styles";
import { SvgIcon } from "../../../shared";
import { BurgerMenu } from "../../BurgerMenu";

export const Header = ({ currentRoute }: { currentRoute: string }) => {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState<boolean>(false);
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isOpenBurgerMenu ? 1 : 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [isOpenBurgerMenu]);

  const topLineRotation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "45deg"],
  });

  const topLineTranslateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 10],
  });

  const middleLineOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const bottomLineRotation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "-45deg"],
  });

  const bottomLineTranslateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -5.75],
  });

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.leftContainer}>
          <Pressable onPress={() => setIsOpenBurgerMenu(!isOpenBurgerMenu)}>
            <View style={{ width: 24, height: 24, position: "relative" }}>
              <Animated.View
                style={{
                  position: "absolute",
                  width: 24,
                  height: 2,
                  backgroundColor: "white",
                  transform: [
                    { translateY: topLineTranslateY },
                    { rotate: topLineRotation },
                  ],
                  top: 4,
                }}
              />

              <Animated.View
                style={{
                  position: "absolute",
                  width: 24,
                  height: 2,
                  backgroundColor: "white",
                  opacity: middleLineOpacity,
                  top: 12,
                }}
              />

              <Animated.View
                style={{
                  position: "absolute",
                  width: 24,
                  height: 2,
                  backgroundColor: "white",
                  transform: [
                    { translateY: bottomLineTranslateY },
                    { rotate: bottomLineRotation },
                  ],
                  top: 20,
                }}
              />
            </View>
          </Pressable>

          <View style={styles.textContainer}>
            <Text style={styles.title}>Kopi Kap</Text>
            <Text style={styles.subtitle}>{currentRoute}</Text>
          </View>
        </View>

        <BurgerMenu isOpen={isOpenBurgerMenu} />

        <Pressable onPress={() => console.log("Header Profile")}>
          <SvgIcon
            whiteCondition={true}
            iconPathCode={
              "M8.22396 25.132C8.55397 24.0336 9.22925 23.0709 10.1496 22.3866C11.07 21.7024 12.1864 21.333 13.3333 21.3333H18.6666C19.815 21.3329 20.9328 21.7032 21.8538 22.389C22.7748 23.0749 23.4499 24.0397 23.7786 25.14M4 16C4 17.5759 4.31039 19.1363 4.91345 20.5922C5.5165 22.0481 6.40042 23.371 7.51472 24.4853C8.62902 25.5996 9.95189 26.4835 11.4078 27.0866C12.8637 27.6896 14.4241 28 16 28C17.5759 28 19.1363 27.6896 20.5922 27.0866C22.0481 26.4835 23.371 25.5996 24.4853 24.4853C25.5996 23.371 26.4835 22.0481 27.0866 20.5922C27.6896 19.1363 28 17.5759 28 16C28 14.4241 27.6896 12.8637 27.0866 11.4078C26.4835 9.95189 25.5996 8.62902 24.4853 7.51472C23.371 6.40042 22.0481 5.5165 20.5922 4.91345C19.1363 4.31039 17.5759 4 16 4C14.4241 4 12.8637 4.31039 11.4078 4.91345C9.95189 5.5165 8.62902 6.40042 7.51472 7.51472C6.40042 8.62902 5.5165 9.95189 4.91345 11.4078C4.31039 12.8637 4 14.4241 4 16ZM12 13.3333C12 14.3942 12.4214 15.4116 13.1716 16.1618C13.9217 16.9119 14.9391 17.3333 16 17.3333C17.0609 17.3333 18.0783 16.9119 18.8284 16.1618C19.5786 15.4116 20 14.3942 20 13.3333C20 12.2725 19.5786 11.2551 18.8284 10.5049C18.0783 9.75476 17.0609 9.33333 16 9.33333C14.9391 9.33333 13.9217 9.75476 13.1716 10.5049C12.4214 11.2551 12 12.2725 12 13.3333Z"
            }
          />
        </Pressable>
      </View>
    </View>
  );
};
