import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import {
  View,
  Alert,
  Animated,
  TouchableOpacity,
} from "react-native";
import { Button } from "../../components/Button";
import { Radio } from "../../components/RadioButton";
import { Input } from "../../components/TextInput";
import { InputMask } from "../../components/TextInputMask";

import {
  Container,
  styles,
  SubTitle,
  TitleCadastrar,
  Title,
  Olho,
  Scroll,
} from "./styles";
import { CheckBox } from "../../components/CheckBox";
import { theme } from "../../global/styles/theme";
import { Footer } from "../../components/Footer";

export function CadastroAutonomo() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [fone, setFone] = useState("");
  const [cep, setCep] = useState("");
  const [senha, setSenha] = useState("");
  const [senha2, setSenha2] = useState("");

  const [hidePass, setHidePass] = useState(true);
  const [hidePass2, setHidePass2] = useState(true);

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

  function cadastrarAutonomo() {
    if (
      nome == "" ||
      email == "" ||
      fone == "" ||
      cep == "" ||
      senha == "" ||
      senha2 == ""
    ) {
      Alert.alert("Erro 😢 ", "Preencha todos os campos");
    } else {
      Alert.alert("Sucesso 😃 ", "Cadastro realizado com sucesso");
    }
  }

  return (
    <Scroll>
      <Container style={styles.container}>
        <View style={styles.header}>
          <Title style={styles.title}>Cadastrar-me como</Title>
          <Title style={styles.title}>autônomo ou empresa.</Title>
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
          <SubTitle style={styles.subTitle}>Informe os seus dados</SubTitle>
          <Input
            placeholder="Digite o seu nome"
            onChangeText={setNome}
            value={nome}
          />
          <Input
            placeholder="Digite o seu e-mail"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
          />

          <InputMask
            placeholder="Digite o seu Telefone"
            style={styles.inputMask}
            type={"cel-phone"}
            options={{
              maskType: "BRL",
              withDDD: true,
              dddMask: "(99)",
            }}
            onChangeText={setFone}
            value={fone}
          />

          <InputMask
            placeholder="Digite o seu Cep"
            style={styles.inputMask}
            type={"zip-code"}
            onChangeText={setCep}
            value={cep}
          />

          <Olho style={styles.viewOlho}>
            <Input
              style={styles.inputOlho}
              placeholder="Digite a sua senha"
              secureTextEntry={hidePass}
              onChangeText={setSenha}
              value={senha}
            />

            <TouchableOpacity
              style={styles.olho}
              onPress={() => setHidePass(!hidePass)}
            >
              {hidePass ? (
                <Ionicons name="eye" color={theme.colors.color} size={20} />
              ) : (
                <Ionicons name="eye-off" color={theme.colors.color} size={20} />
              )}
            </TouchableOpacity>
          </Olho>

          <Olho style={styles.viewOlho}>
            <Input
              style={styles.inputOlho}
              placeholder="Digite a sua senha"
              secureTextEntry={hidePass2}
              onChangeText={setSenha2}
              value={senha2}
            />

            <TouchableOpacity
              style={styles.olho}
              onPress={() => setHidePass2(!hidePass2)}
            >
              {hidePass2 ? (
                <Ionicons name="eye" color={theme.colors.color} size={20} />
              ) : (
                <Ionicons name="eye-off" color={theme.colors.color} size={20} />
              )}
            </TouchableOpacity>
          </Olho>

          <TitleCadastrar
            style={[
              styles.titleCadastrar,
              {
                marginTop: 40,
              },
            ]}
          >
            Indique o tamanho do seu negócio
          </TitleCadastrar>

          <Radio />

          <TitleCadastrar
            style={[
              styles.titleCadastrar,
              {
                marginTop: 40,
              },
            ]}
          >
            Selecione os Serviços Prestados
          </TitleCadastrar>

          <CheckBox />

          <Button onPress={cadastrarAutonomo} title="Cadastrar" />
        </Animated.View>
        <Footer/>
        <StatusBar style="auto" />
      </Container>
    </Scroll>
  );
}
