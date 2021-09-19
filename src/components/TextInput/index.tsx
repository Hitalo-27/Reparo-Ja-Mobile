import React from "react";
import { TextInputProps } from "react-native";
import { styles, TextIn } from "./styles";

export function Input({ ...rest }: TextInputProps | any) { 
  return (
    <TextIn placeholderTextColor="#a9a9a9" autoCorrect={false} style={styles.container} {...rest} />
  );
}
