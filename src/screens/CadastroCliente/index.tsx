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
import { Input } from "../../components/TextInput";
import { Container, TitleCadastrar, Title, Olho, styles, Scroll } from "./styles";
import cep from "cep-promise";

import { InputMask } from "../../components/TextInputMask";
import { theme } from "../../global/styles/theme";
import { Footer } from "../../components/Footer";

export function CadastroCliente() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [fone, setFone] = useState("");
  const [cepForm, setCepForm] = useState("");
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

  function cadastrarCliente() {
    if (
      // nome == '' ||
      // email == '' ||
      // fone=='' ||
      cepForm == ""
      // senha=='' ||
      // senha2==''
    ) {
      Alert.alert("Erro 😢 ", "Preencha todos os campos");
    } else {
      // cep(cepForm).then((result) => {
      //   console.log(result.street);
      // });
    }
  }

  return (
    <Scroll>
      <Container>
        <View style={styles.header}>
          <Title style={styles.title}>Cadastrar-me como</Title>
          <Title style={styles.title}>Cliente.</Title>
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
          <TitleCadastrar style={styles.titleCadastrar}>
            Informe os seus dados
          </TitleCadastrar>
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
            placeholderTextColor="#a9a9a9"
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
            placeholderTextColor="#a9a9a9"
            style={styles.inputMask}
            type={"zip-code"}
            onChangeText={setCepForm}
            value={cepForm}
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

          <Button onPress={cadastrarCliente} title="Cadastrar" />
        </Animated.View>

        <Footer />
        <StatusBar style="auto" />
      </Container>
    </Scroll>
  );
}
