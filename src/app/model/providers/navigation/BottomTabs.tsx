import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteConfig } from "../../../../shared";
import { BottomNavigation } from "../../../../widgets";
import { useIsFocused } from "@react-navigation/native";

const { Navigator, Screen } = createBottomTabNavigator();

export const BottomTabs = () => {
  const [activeRoute, setActiveRoute] = useState<string>("");

  const BottomRoutesConfig = Object.values(RouteConfig).filter(
    ({ inBottomTabs }) => inBottomTabs,
  );

  return (
    <>
      <Navigator screenOptions={{ headerShown: false }}>
        {BottomRoutesConfig.map(({ name, component }) => (
          <Screen
            key={name}
            name={name}
            component={component}
            options={{
              tabBarStyle: { display: "none" },
            }}
          />
        ))}
      </Navigator>

      <BottomNavigation BottomRoutesConfig={BottomRoutesConfig} />
    </>
  );
};
