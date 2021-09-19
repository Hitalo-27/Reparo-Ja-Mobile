import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  TouchableOpacity,
  Alert,
  Animated,
  Keyboard
} from "react-native";
import { Button } from "../../components/Button";
import { Input } from "../../components/TextInput";
import {
  Cadastrar,
  Container,
  Olho,
  Scroll,
  styles,
  Title,
  TitleCadastrar,
} from "./styles";
import { StatusBar } from "expo-status-bar";
import { theme } from "../../global/styles/theme";
import { Footer } from "../../components/Footer";

export function Login({ navigation }: { navigation: any }) { 
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [hidePass, setHidePass] = useState(true);

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 150, y: 150 }));

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", keyboardDidHide);

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

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 80,
        duration: 100,
        useNativeDriver: false,
      }),

      Animated.timing(logo.y, {
        toValue: 80,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 150,
        duration: 100,
        useNativeDriver: false,
      }),

      Animated.timing(logo.y, {
        toValue: 150,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  }

  function handleCliente() {
    navigation.navigate("CadastroCliente");
  }

  function handleAutonomo() {
    navigation.navigate("CadastroAutonomo");
  }

  function handleIndex() {
    navigation.navigate("IndexRestrita");
  }

  function login() {
    if (email == "" || senha == "") {
      Alert.alert("Erro 😢 ", "Preencha todos os campos");
    } else {
      Alert.alert("Sucesso 😃 ", "Cadastro realizado com sucesso");
    }
  }
  return (
    <Scroll>
      <Container>
        <View style={styles.header}>
          <Animated.Image
            source={require("../../assets/logoRoxo.png")}
            style={{
              width: logo.x,
              height: logo.y,
            }}
          />
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
          <Title style={styles.title}>Faça o seu Login</Title>
          <Input
            placeholder="Digite o seu e-mail"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
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

          <Button onPress={handleIndex} title="Entrar" />

          <TitleCadastrar>
            Ainda não está cadastrado no Reparo Já?
          </TitleCadastrar>
          <TouchableOpacity onPress={handleCliente}>
            <Cadastrar style={styles.cadastrar}>
              Cadastrar-me como Cliente
            </Cadastrar>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleAutonomo}>
            <Cadastrar style={styles.cadastrar}>
              Cadastrar-me como Autonomo ou Empresa
            </Cadastrar>
          </TouchableOpacity>
        </Animated.View>

       <Footer />
        <StatusBar style="auto" />
      </Container>
    </Scroll>
  );
}
