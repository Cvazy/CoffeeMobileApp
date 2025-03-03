import { StyleSheet } from "react-native";
import { COLORS } from "../../../shared";

export const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    minHeight: 240,
    height: "auto",
  },

  itemWrapper: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    alignItems: "flex-start",
    gap: 9,
  },

  itemImageContainer: {
    position: "relative",
    borderRadius: 10,
    width: "100%",
    aspectRatio: 1,
    backgroundColor: COLORS.gray,
  },

  itemImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },

  itemInfoContainer: {
    width: "100%",
    alignItems: "flex-start",
    gap: 4,
  },

  itemTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: COLORS.dark,
    fontWeight: "700",
    textAlign: "left",
  },

  itemDescription: {
    fontSize: 12,
    lineHeight: 14,
    color: COLORS.light,
    fontWeight: "300",
    textAlign: "left",
  },

  itemInfo: {
    flexDirection: "row",
  },

  bottomContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 10,
    width: "100%",
  },

  itemPrice: {
    fontSize: 18,
    lineHeight: 21,
    color: COLORS.gray,
    fontWeight: "700",
    textAlign: "left",
  },

  addToCartButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  addToCartButtonWrapper: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
});
