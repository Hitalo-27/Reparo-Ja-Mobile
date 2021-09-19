import React from "react";
import {View,} from "react-native";
import {FooterText, styles} from "./styles";

export function Footer() {
  return (
        <View style={styles.footer}>
          <FooterText> © 2021 Quazar</FooterText>
        </View>
  );
}
