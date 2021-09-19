import React from "react";
import { View,Image } from "react-native";
import { Modalize, ModalizeProps } from "react-native-modalize";
import { SubTitle } from "../../screens/CadastroAutonomo/styles";
import { Title } from "../../screens/Login/styles";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Feather,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import { styles } from "./styles";
import { ListDivider } from "../ListDivider";
import { theme } from "../../global/styles/theme";

type Props = ModalizeProps & {
  modalizeRef: any;
};

export function ModalizeModal({ modalizeRef, ...rest }: Props) {
  return (
    <Modalize ref={modalizeRef} disableScrollIfPossible snapPoint={550} modalHeight={700} {...rest}>
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
        <FontAwesome5 name="user" size={28} color={theme.colors.color} />
        <SubTitle style={styles.subTitle}>Conta: Cliente</SubTitle>
      </View>

      <View style={styles.view}>
        <AntDesign name="carryout" size={28} color={theme.colors.color} />
        <SubTitle style={styles.subTitle}>Avaliações: 20</SubTitle>
      </View>

      <View style={styles.view}>
        <Feather name="star" size={28} color={theme.colors.color} />
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
        <AntDesign name="idcard" size={28} color={theme.colors.color} />
        <SubTitle style={styles.subTitle}>CPF: 954.548.658-62</SubTitle>
      </View>

      <View style={styles.view}>
        <MaterialIcons name="date-range" size={28} color={theme.colors.color} />
        <SubTitle style={styles.subTitle}>Aniversario: 21/01/2004</SubTitle>
      </View>

      <View style={styles.view}>
        <MaterialCommunityIcons
          name="google-maps"
          size={28}
          color={theme.colors.color}
        />
        <SubTitle style={styles.subTitle}>Cep: 08466050</SubTitle>
      </View>

      {/* <ListDivider />

        <TouchableOpacity onPress={handleConfigs}>
          <View style={styles.viewConfig}>
            <MaterialCommunityIcons
              name="cog-outline"
              size={28}
              color={theme.colors.color}
            />
            <SubTitle style={styles.subTitle}>Cofigurações</SubTitle>
          </View>
        </TouchableOpacity> */}
    </Modalize>
  );
}
