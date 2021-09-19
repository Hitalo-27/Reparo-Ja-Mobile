import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { ListDivider } from "../../components/ListDivider";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Feather,
  AntDesign,
} from "@expo/vector-icons";
import { styles, Container, Title, SubTitle } from "./styles";
import { theme } from "../../global/styles/theme";

export function MinhaContaRestrita({ navigation }: { navigation: any }) {
  
  function handleConfigs() {
    navigation.navigate("Configs");
  }

  return (
    <Container>
     
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={{
            uri: "https://github.com/Hitalo-27.png",
          }}
        />
        <View>
          <Title style={styles.title}>Olá, Hitalo</Title>
          <SubTitle style={styles.title2}>
            Muito Obrigado por ultilizar o nosso app
          </SubTitle>
        </View>
      </View>

      <View style={{ alignItems: "center", marginTop: 30 }}>
        <Title style={styles.title}>Seus Dados</Title>
      </View>

      <View style={styles.view}>
        <FontAwesome5 name="user" size={26} color={theme.colors.color} />
        <SubTitle style={styles.subTitle}>Tipo: Cliente</SubTitle>
      </View>

      <View style={styles.view}>
        <AntDesign name="carryout" size={28} color={theme.colors.color} />
        <SubTitle style={styles.subTitle}>Avaliações: 20</SubTitle>
      </View>

      <View style={styles.view}>
        <Feather name="star" size={24} color={theme.colors.color} />
        <SubTitle style={styles.subTitle}>Estrelas: 50</SubTitle>
      </View>

      <View style={styles.view}>
        <MaterialCommunityIcons
          name="email-outline"
          size={28}
          color={theme.colors.color}
        />
        <SubTitle style={styles.subTitle}>Email: hitalo@gmail.com</SubTitle>
      </View>

      <View style={styles.view}>
        <MaterialCommunityIcons
          name="google-maps"
          size={30}
          color={theme.colors.color}
        />
        <SubTitle style={styles.subTitle}>Cep: 08466050</SubTitle>
      </View>

      <ListDivider />

      <TouchableOpacity onPress={handleConfigs}>
        <View style={styles.viewConfig}>
          <MaterialCommunityIcons
            name="cog-outline"
            size={28}
            color={theme.colors.color}
          />
          <SubTitle style={styles.subTitle}>Cofigurações</SubTitle>
        </View>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </Container>
  );
}
