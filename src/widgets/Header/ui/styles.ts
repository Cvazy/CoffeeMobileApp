import { StyleSheet } from "react-native";
import { COLORS } from "../../../shared";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    width: "100%",
  },

  wrapper: {
    paddingHorizontal: 24,
    paddingVertical: 11,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    width: "100%",
  },

  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  textContainer: {
    alignItems: "flex-start",
    gap: 0,
  },

  title: {
    fontSize: 22,
    color: COLORS.white,
    textAlign: "left",
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 14,
    color: COLORS.white,
    textAlign: "left",
    fontWeight: "normal",
  },
});
