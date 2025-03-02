import { Pressable, Text, StyleSheet, ButtonProps } from "react-native";
import { COLORS } from "../../../design";

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

interface IButtonProps extends Partial<ButtonProps> {
  inversion: boolean;
  height: number;
  rounded: number;
}

export const Button = ({
  inversion,
  height,
  rounded,
  onPress,
}: IButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: inversion ? COLORS.primary : COLORS.white,
        height: height,
        borderRadius: rounded,
        ...styles.wrapper,
      }}
    >
      <Text
        style={{
          color: inversion ? COLORS.white : COLORS.gray,
          ...styles.text,
        }}
      >
        Get Started
      </Text>
    </Pressable>
  );
};
