import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "./model";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { COLORS, RouteConfig } from "../shared";
import { BottomNavigation, Header } from "../widgets";
import { styles } from "./styles";

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string | undefined>("Start");

  const BottomRoutesConfig = Object.values(RouteConfig).filter(
    ({ inBottomTabs }) => inBottomTabs,
  );

  return (
    <NavigationContainer
      onStateChange={(state) => {
        if (state) {
          const routeName = state.routes[state.index]?.name;
          setCurrentRoute(routeName);
        }
      }}
    >
      <SafeAreaProvider>
        <View style={styles.container}>
          {currentRoute !== "Start" ? (
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
              <Header currentRoute={currentRoute || ""} />

              <RootStack />

              <BottomNavigation
                BottomRoutesConfig={BottomRoutesConfig}
                currentRoute={currentRoute || ""}
              />
            </SafeAreaView>
          ) : (
            <RootStack />
          )}
        </View>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
