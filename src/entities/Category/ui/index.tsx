import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { ICategory } from "../model";
import { COLORS } from "../../../shared";

interface ICategoryProps extends ICategory {
  isActive: boolean;
  setActiveCategory: (
    value: ((prevState: string | number) => string | number) | string | number,
  ) => void;
}

export const Category = ({
  id,
  name,
  setActiveCategory,
  isActive,
}: ICategoryProps) => {
  return (
    <Pressable
      style={{
        ...styles.container,
        backgroundColor: isActive ? COLORS.primary : COLORS.white,
      }}
      onPress={() => setActiveCategory(id)}
    >
      <View style={styles.wrapper}>
        <Text
          style={{
            ...styles.text,
            color: isActive ? COLORS.white : COLORS.gray,
            fontWeight: isActive ? "700" : "regular",
          }}
        >
          {name}
        </Text>
      </View>
    </Pressable>
  );
};
