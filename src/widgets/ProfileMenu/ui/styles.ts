import { StyleSheet } from "react-native";
import { COLORS } from "../../../shared";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    top: 124,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 30,
    overflow: "hidden",
  },

  blurContainer: {
    flex: 1,
    justifyContent: "flex-start",
    overflow: "hidden",
  },

  menuContainer: {
    backgroundColor: COLORS.white,
    overflow: "hidden",
  },

  menuWrapper: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    gap: 10,
    alignItems: "flex-start",
  },

  menuItemText: {
    color: COLORS.primary,
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 25,
  },
});
