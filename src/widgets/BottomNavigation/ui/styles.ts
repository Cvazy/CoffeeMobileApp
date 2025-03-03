import { StyleSheet } from "react-native";
import { COLORS } from "../../../shared";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 10,
    bottom: 32,
    left: 21,
    right: 21,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    backgroundColor: COLORS.white,
    borderRadius: 20,
  },

  linkContainer: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },

  linkWrapper: {
    paddingVertical: 24,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
