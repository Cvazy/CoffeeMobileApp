import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RouteConfig } from "../../../../shared";

const { Navigator, Screen } = createStackNavigator();

export const RootStack = () => {
  const BottomRoutesConfig = Object.values(RouteConfig).filter(
    ({ inBottomTabs }) => inBottomTabs,
  );

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name={RouteConfig.start.name}
        component={RouteConfig.start.component}
      />

      {BottomRoutesConfig.map(({ name, component }) => (
        <Screen key={name} name={name} component={component} />
      ))}
    </Navigator>
  );
};
