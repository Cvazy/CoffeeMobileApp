import { TextInput, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { COLORS, SvgIcon } from "../../../shared";
import { Circle } from "react-native-svg";

export const SearchingCoffee = () => {
  const [searchPrompt, setSearchPrompt] = useState<string>("");

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.iconContainer}>
          <SvgIcon
            iconPathCode={"M21 21L15 15"}
            whiteCondition={true}
            width={24}
            height={24}
            color={COLORS.primary}
          >
            <Circle
              cx={10}
              cy={10}
              r={7}
              stroke={COLORS.primary}
              strokeWidth={2}
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
            />
          </SvgIcon>
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            value={searchPrompt}
            onChangeText={setSearchPrompt}
            placeholder={"Search Coffee"}
          />
        </View>
      </View>
    </View>
  );
};
