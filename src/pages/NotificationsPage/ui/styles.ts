import { StyleSheet } from "react-native";
import { COLORS } from "../../../shared";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#060807",
  },

  top: {
    height: "55%",
    overflow: "visible",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    backgroundColor: COLORS.dark,
  },

  topBgImage: {
    flex: 1,
    position: "absolute",
    left: -100,
    width: 650,
    height: 970,
    transform: [{ rotate: "30deg" }],
  },

  bottom: {
    height: "45%",
    backgroundColor: "rgba(27, 174, 118, 0.5)",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },

  bottomWrapper: {
    flex: 1,
    paddingHorizontal: 36,
    paddingVertical: 52,
  },

  bottomTitle: {
    gap: 14,
  },

  title: {
    fontSize: 30,
    color: COLORS.white,
    textAlign: "center",
    fontWeight: "600",
  },

  description: {
    fontSize: 14,
    color: COLORS.white,
    textAlign: "center",
  },
});
