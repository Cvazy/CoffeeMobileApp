import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RouteConfig } from "../../../../shared";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";

const { Navigator, Screen } = createStackNavigator();

export const RootStack = () => {
  const insets = useSafeAreaInsets();

  const BottomRoutesConfig = Object.values(RouteConfig).filter(
    ({ inBottomTabs }) => inBottomTabs,
  );

  return (
    <View style={{ flex: 1, marginTop: -insets.top }}>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen
          name={RouteConfig.start.name}
          component={RouteConfig.start.component}
        />

        {BottomRoutesConfig.map(({ name, component }) => (
          <Screen key={name} name={name} component={component} />
        ))}
      </Navigator>
    </View>
  );
};
