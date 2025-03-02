import React from "react";
import { View, Text, Pressable } from "react-native";
import {
  useNavigation,
  useNavigationState,
  useRoute,
} from "@react-navigation/native";
import { COLORS, IRouteConfig } from "../../../shared";
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
                <Svg
                  style={styles.linkIcon}
                  viewBox={"0 0 32 32"}
                  fill={"none"}
                  xmlns={"http://www.w3.org/2000/svg"}
                >
                  <Path
                    d={iconPathCode}
                    stroke={currentRoute === name ? "white" : "#464646"}
                    strokeWidth={2}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                  />
                </Svg>
              </View>
            </Pressable>
          );
        })}
    </View>
  );
};
