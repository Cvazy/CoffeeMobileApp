import React from "react";
import { View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, IRouteConfig, SvgIcon } from "../../../shared";
import { styles } from "./styles";
import Svg, { Path } from "react-native-svg";

export const BottomNavigation = ({
  currentRoute,
  BottomRoutesConfig,
}: {
  currentRoute: string;
  BottomRoutesConfig: IRouteConfig[];
}) => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      {BottomRoutesConfig &&
        BottomRoutesConfig?.map(({ name, iconPathCode }) => {
          return (
            <Pressable
              key={name}
              style={{
                ...styles.linkContainer,
                backgroundColor:
                  currentRoute === name ? COLORS.primary : "white",
                boxShadow:
                  currentRoute === name
                    ? "0px 0px 10px rgba(0, 0, 0, 0.375)"
                    : "",
              }}
              onPress={() => navigate(name)}
            >
              <View style={styles.linkWrapper}>
                <SvgIcon
                  iconPathCode={iconPathCode || ""}
                  whiteCondition={currentRoute === name}
                />
              </View>
            </Pressable>
          );
        })}
    </View>
  );
};
