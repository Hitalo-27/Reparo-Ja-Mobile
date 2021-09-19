import React, { useState } from "react";
import { Text, View } from "react-native";
import { Checkbox } from "react-native-paper";
import { theme } from "../../global/styles/theme";
import { Title } from "../../screens/Login/styles";
import { ListDivider } from "../ListDivider";
import { styles } from "./styles";

export function CheckBox() {
  const [pintura, setPintura] = useState(false);
  const [eletrodomesticos, setEletrodomesticos] = useState(false);
  const [sofa, setSofa] = useState(false);
  const [mercenaria, setMercenaria] = useState(false);
  const [eleticista, setEletricista] = useState(false);
  const [encanamento, setEncanamento] = useState(false);



  return (
    <View style={styles.container}>
      <Checkbox.Item
        label="Pintura"
        status={pintura ? "checked" : "unchecked"}
        color={theme.colors.color}
        onPress={() => {
          setPintura(!pintura);
        }}
      />

      <ListDivider />

      <Checkbox.Item
        label="Eletrodomésticos"
        status={eletrodomesticos ? "checked" : "unchecked"}
        color={theme.colors.color}
        onPress={() => {
          setEletrodomesticos(!eletrodomesticos);
        }}
      />

      <ListDivider />

      <Checkbox.Item
        label="Limpeza de Sofá"
        status={sofa ? "checked" : "unchecked"}
        color={theme.colors.color}
        onPress={() => {
          setSofa(!sofa);
        }}
      />

      <ListDivider />

      <Checkbox.Item
        label="Marcenaria"
        status={mercenaria ? "checked" : "unchecked"}
        color={theme.colors.color}
        onPress={() => {
          setMercenaria(!mercenaria);
        }}
      />

      <ListDivider />

      <Checkbox.Item
        label="Eletricista"
        status={eleticista ? "checked" : "unchecked"}
        color={theme.colors.color}
        onPress={() => {
          setEletricista(!eleticista);
        }}
      />

      <ListDivider />

      <Checkbox.Item
        label="Encanamento"
        status={encanamento ? "checked" : "unchecked"}
        color={theme.colors.color}
        onPress={() => {
          setEncanamento(!encanamento);
        }}
      />
    </View>
  );
}
