import { ScrollView, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Category } from "../../../entities";

export const CategoriesList = () => {
  const [activeCategory, setActiveCategory] = useState<string | number>(0);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.wrapper}
      >
        <Category
          id={0}
          name={"Cappuccino"}
          isActive={activeCategory === 0}
          setActiveCategory={setActiveCategory}
        />

        <Category
          id={1}
          name={"Macchiato"}
          isActive={activeCategory === 1}
          setActiveCategory={setActiveCategory}
        />

        <Category
          id={2}
          name={"Latte"}
          isActive={activeCategory === 2}
          setActiveCategory={setActiveCategory}
        />

        <Category
          id={3}
          name={"Decaf"}
          isActive={activeCategory === 3}
          setActiveCategory={setActiveCategory}
        />

        <Category
          id={4}
          name={"Espresso"}
          isActive={activeCategory === 4}
          setActiveCategory={setActiveCategory}
        />
      </ScrollView>
    </View>
  );
};
