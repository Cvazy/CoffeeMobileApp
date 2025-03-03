import { StyleSheet } from "react-native";
import { COLORS } from "../../../shared";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    width: "100%",
    borderRadius: 10,
    height: 48,
  },

  wrapper: {
    position: "relative",
    paddingHorizontal: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: 48,
  },

  iconContainer: {
    position: "absolute",
    zIndex: 10,
    left: 10,
    top: 12,
  },

  inputWrapper: {
    width: "100%",
    paddingLeft: 30,
    paddingBottom: 3,
  },

  input: {
    width: "100%",
    fontSize: 16,
    lineHeight: 22,
    color: COLORS.light,
  },
});
