import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles, Container} from "./styles";

export function Perfil({...rest} : TouchableOpacityProps) {
  return (
    <Container>
      <TouchableOpacity style={styles.header} {...rest}>
        <Image
          style={styles.image} 
          source={{
            uri: "https://github.com/Hitalo-27.png",
          }}
        />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </Container>
  );
}
