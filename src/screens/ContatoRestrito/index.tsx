import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef } from "react";
import { View, Animated } from "react-native";
import { Button } from "../../components/Button";
import { Input } from "../../components/TextInput";
import { theme } from "../../global/styles/theme";
import { Container, Scroll, SubTitle, Title } from "./styles";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { Footer } from "../../components/Footer";
import { Perfil } from "../../components/Perfil";
import { Modalize } from "react-native-modalize";
import { ModalizeModal } from "../../components/Modalize";

export function ContatoRestrito({ navigation }: { navigation: any }) {
  const modalizeRef = useRef<Modalize>(null);

  function onOpen() {
    modalizeRef.current?.open();
  }

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [menssagem, setMenssagem] = useState("");

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <>
      <Scroll>
        <Container>
          <Perfil onPress={onOpen} />
          <View style={styles.header}>
            <Title style={styles.title}>Contate-nos</Title>
          </View>

          <Animated.View
            style={[
              styles.main,
              {
                opacity: opacity,
                transform: [{ translateY: offset.y }],
              },
            ]}
          >
            <Title style={styles.subTitle}>Formulario</Title>
            <Input
              placeholder="Nome completo"
              onChangeText={setNome}
              value={nome}
            />

            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              onChangeText={setEmail}
              value={email}
            />
            <Input
              placeholder="Assunto"
              onChangeText={setAssunto}
              value={assunto}
            />
            <Input
              style={styles.textArea}
              placeholder="Messagem"
              multiline={true}
              onChangeText={setMenssagem}
              value={menssagem}
            />

            <Button title="Enviar" />
            <View style={{ flexDirection: "row" }}>
              <View style={styles.info}>
                <View>
                  <MaterialCommunityIcons
                    name="google-maps"
                    size={35}
                    color={theme.colors.color}
                  />
                </View>
                <View style={styles.infoText}>
                  <Title style={styles.infoFont}>Endereço</Title>
                  <SubTitle>
                    {" "}
                    R. Felíciano de Mendonça, {`\n`} 290, Guaianases {`\n`} São
                    Paulo{" "}
                  </SubTitle>
                </View>
              </View>

              <View style={styles.info}>
                <View style={styles.infoIcon}>
                  <Feather
                    name="phone-call"
                    size={32}
                    color={theme.colors.color}
                  />
                </View>
                <View style={styles.infoText}>
                  <Title style={styles.infoFont}>Telefone</Title>
                  <SubTitle>(11)2554-0978</SubTitle>
                </View>
              </View>
            </View>

            <View style={styles.info}>
              <View style={styles.infoIcon}>
                <MaterialCommunityIcons
                  name="email-outline"
                  size={35}
                  color={theme.colors.color}
                />
              </View>
              <View style={styles.infoText}>
                <Title style={styles.infoFont}>Email</Title>
                <SubTitle>reparojaoficial@gmail.com</SubTitle>
              </View>
            </View>
          </Animated.View>

          <Footer />

          <StatusBar style="auto" />
        </Container>
      </Scroll>

      <ModalizeModal modalizeRef={modalizeRef}/>
    </>
  );
}
