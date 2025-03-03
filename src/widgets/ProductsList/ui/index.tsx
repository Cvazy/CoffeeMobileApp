import { View } from "react-native";
import { styles } from "./styles";
import { Product } from "../../../entities";

export const ProductsList = () => {
  return (
    <View style={styles.container}>
      <Product />

      <Product />

      <Product />

      <Product />

      <Product />
    </View>
  );
};
