import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef } from "react";
import { View, Image, Animated } from "react-native";
import { Footer } from "../../components/Footer";
import { Modalize } from "react-native-modalize";
import { ModalizeModal } from "../../components/Modalize";
import { Perfil } from "../../components/Perfil";
import { Container, Title, Card, TextCard, Scroll } from "./styles";
import { styles } from "./styles";

export function ServicosRestrito({ navigation }: { navigation: any }) {
  const modalizeRef = useRef<Modalize>(null);

  function onOpen() {
    modalizeRef.current?.open();
  }
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
          <View>
            <Title style={styles.title}>Serviços</Title>
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
            <Card style={styles.card}>
              <Image
                source={require("../../assets/eletro.jpg")}
                style={styles.image}
              />

              <TextCard style={styles.textcard}>
                Conserto de Eletrodomesticos
              </TextCard>
            </Card>

            <Card style={styles.card}>
              <Image
                source={require("../../assets/sofa.jpg")}
                style={styles.image}
              />

              <TextCard style={styles.textcard}>
                Conserto de Eletrodomesticos
              </TextCard>
            </Card>

            <Card style={styles.card}>
              <Image
                source={require("../../assets/pintura.jpg")}
                style={styles.image}
              />

              <TextCard style={styles.textcard}>
                Conserto de Eletrodomesticos
              </TextCard>
            </Card>

            <Card style={styles.card}>
              <Image
                source={require("../../assets/encanamento.jpg")}
                style={styles.image}
              />

              <TextCard style={styles.textcard}>
                Conserto de Eletrodomesticos
              </TextCard>
            </Card>

            <Card style={styles.card}>
              <Image
                source={require("../../assets/eletricista.jpg")}
                style={styles.image}
              />

              <TextCard style={styles.textcard}>
                Conserto de Eletrodomesticos
              </TextCard>
            </Card>
          </Animated.View>

          <Footer />

          <StatusBar style="auto" />
        </Container>
      </Scroll>

      <ModalizeModal modalizeRef={modalizeRef} />
    </>
  );
}
