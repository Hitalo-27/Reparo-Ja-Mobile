import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { Text, View, Switch } from "react-native";

import { AuthRoutes } from "./auth.routes";
import { Mode, styles } from "./styles";
import { Container } from "../screens/Login/styles";
import { theme } from "../global/styles/theme";

export type ThemePro = {
  darkModeValue: any;
  onDarkModeChange: any;
};

export function Routes({ darkModeValue, onDarkModeChange }: ThemePro) {
  return (
    <Container>
      <NavigationContainer>
        <View style={styles.switch}>
          <Mode>Dark Mode</Mode>
          <Switch
            value={darkModeValue}
            onValueChange={onDarkModeChange}
            trackColor={{ true: "#9411eb", false: "gray" }}
            thumbColor={theme.colors.color}
          />
        </View>
        <AuthRoutes />
      </NavigationContainer>
    </Container>
  );
}
