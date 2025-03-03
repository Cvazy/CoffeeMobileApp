import { StyleSheet } from "react-native";
import { COLORS } from "../../../shared";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topContainer: {
    backgroundColor: COLORS.primary,
    width: "100%",
  },

  topContainerWrapper: {
    paddingTop: 10,
    paddingHorizontal: 24,
    paddingBottom: 104,
    position: "relative",
  },

  bannerContainer: {
    position: "absolute",
    zIndex: 10,
    top: 85,
    left: 0,
    right: 0,
    width: "100%",
    paddingHorizontal: 24,
  },

  banner: {
    flexGrow: 1,
    borderRadius: 20,
    height: "auto",
  },

  contentContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    width: "100%",
    paddingTop: 110,
  },

  contentWrapper: {
    flex: 1,
    gap: 24,
  },
});
