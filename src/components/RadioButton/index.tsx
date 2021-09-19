import * as React from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { ListDivider } from "../ListDivider";

export function Radio() {
  const [value, setValue] = React.useState("first");
  const [dark, setDark] = React.useState(false);

  return (
    <View style={styles.container}>
      <RadioButton.Group
        onValueChange={(value) => setValue(value)}
        value={value}
      >
        <RadioButton.Item
          label="Autônomo"
          value="primeiro"
          color={theme.colors.color}
        />
        <ListDivider />
        <RadioButton.Item
          // label={<TextIn> Empresa com menos de 10 funcionários </TextIn>}
          label="Empresa com menos de 10 funcionários"
          labelStyle={{
            color: dark ? "#ffffff" : "#000000",
          }}
          value="segundo"
          color={theme.colors.color}
        />
        <ListDivider />
        <RadioButton.Item
          label="Empresa de 10 a 20 funcionários"
          labelStyle={{
            color: dark ? "#ffffff" : "#000000",
          }}
          value="terceiro"
          color={theme.colors.color}
        />
        <ListDivider />
        <RadioButton.Item
          label="Empresa com mais de 20 funcionários"
          labelStyle={{
            color: dark ? "#ffffff" : "#000000",
          }}
          value="quarto"
          color={theme.colors.color}
        />
      </RadioButton.Group>
    </View>
  );
}
