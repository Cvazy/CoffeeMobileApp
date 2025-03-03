import {
  Animated,
  Text,
  Easing,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./styles";
import { BlurView } from "expo-blur";
import { useEffect, useRef } from "react";

interface IProfileMenuProps {
  isOpenProfileMenu: boolean;
  setIsOpenProfileMenu: (
    value: ((prevState: boolean) => boolean) | boolean,
  ) => void;
}

export const ProfileMenu = ({
  isOpenProfileMenu,
  setIsOpenProfileMenu,
}: IProfileMenuProps) => {
  const heightAnim = useRef(new Animated.Value(0)).current;
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isOpenProfileMenu ? 1 : 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [isOpenProfileMenu]);

  useEffect(() => {
    Animated.timing(heightAnim, {
      toValue: isOpenProfileMenu ? 144 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isOpenProfileMenu, heightAnim]);

  const profileMenuOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const handleClickOutside = () => {
    setIsOpenProfileMenu(false);
  };

  return (
    <TouchableWithoutFeedback onPress={handleClickOutside}>
      <Animated.View
        style={{
          ...styles.container,
          opacity: profileMenuOpacity,
          pointerEvents: isOpenProfileMenu ? "auto" : "none",
        }}
      >
        <BlurView intensity={50} style={styles.blurContainer}>
          <TouchableWithoutFeedback>
            <Animated.View
              style={{
                ...styles.menuContainer,
                height: heightAnim,
              }}
            >
              <View style={styles.menuWrapper}>
                <Text style={styles.menuItemText}>Profile</Text>

                <Text style={styles.menuItemText}>Settings</Text>

                <Text style={styles.menuItemText}>Logout</Text>
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
        </BlurView>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
