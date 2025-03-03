import { StyleSheet } from "react-native";
import { COLORS } from "../../../shared";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    top: 130,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 20,
    backgroundColor: COLORS.primary,
    overflow: "hidden",
  },

  wrapper: {},
});
