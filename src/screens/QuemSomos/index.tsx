import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef } from "react";
import { View, Animated, Image } from "react-native";
import { Modalize } from "react-native-modalize";
import { Perfil } from "../../components/Perfil";
import { ModalizeModal } from "../../components/Modalize";
import { styles, Title, Card, TextCard, Scroll } from "./styles";
import { Footer } from "../../components/Footer";

export function QuemSomos() {
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
        <Perfil onPress={onOpen} />

        <Animated.View
          style={[
            styles.header,
            {
              opacity: opacity,
              transform: [{ translateY: offset.y }],
            },
          ]}
        >
          <Image
            source={require("../../assets/logoRoxo.png")}
            style={styles.logo}
          />

          <Title style={styles.title}>Conheça mais sobre a Reparo Já</Title>

          <TextCard style={styles.cabecalho}>
            Reparo já é um novo projeto da empresa Quazar. A empresa Quazar visa
            o desenvolvimento de software para solucionar os problemas do seu
            cotidiano. Empresa fundada em fevereiro de 2021 em parceria com a
            ETEC de Guaianazes.Trabalhamos para tornar a sua conectividade
            acessível ao maior número possível de brasileiro, o número de
            brasileiros desempregado tem crescido e com a responsabilidade de
            ajudarmos nessa área criamos algo para facilitar a prestação de
            serviços de profissionais autônomos, segundo avaliação técnica,
            geolocalização entre outros.
          </TextCard>

          <TextCard style={styles.cabecalho}>
            Reparo já foi desenvolvido depois da percepção dos fundadores da
            empresa Quazar na debilidade entre segurança e serviço de qualidade.
            Estamos trabalhando com tecnologia de ponta para facilitar seu
            cotidiano, tornando mais rápido aquilo que demandaria um tempo de
            busca e análise da partes dos usuários, nós nos diferenciamos pela
            agilidade no processo de interação e comunicação com o profissional
            autônomo e o cliente, deixando assim o sistema mais dinâmico para o
            público, fazendo ter econômia de tempo, por uma pesquisa da empresa
            Quazar, observamos que 78% das pessoas procuram concertar os
            eletrodomésticos, pelo cotidiano corrido do dia a dia, não procuram
            um técnico de confiança e de qualidade.
          </TextCard>

          <Title style={[styles.title, { marginTop: 30 }]}>
            Principios da empresa Quazar
          </Title>

          <Card style={styles.card}>
            <Image
              source={require("../../assets/icone-valores.png")}
              style={styles.image}
            />

            <Title style={styles.titleCard}>Valores</Title>
            <TextCard style={styles.textcard}>
              Reparo já tem por objetivo contribuir para empregabilidade de
              sujeitos autônomos e segurança aos cidadãos no momento de
              solicitar um profissional em reparos domésticos..
            </TextCard>
          </Card>

          <Card style={styles.card}>
            <Image
              source={require("../../assets/icone-vision.png")}
              style={styles.image}
            />
            <Title style={styles.titleCard}>Visão</Title>
            <TextCard style={styles.textcard}>
              Atender as necessidade do público, adaptando-se as condição da
              sociedade.
            </TextCard>
          </Card>

          <Card style={styles.card}>
            <Image
              source={require("../../assets/icone-missao.png")}
              style={styles.imageMissao}
            />
            <Title style={styles.titleCard}>Missão</Title>

            <TextCard style={styles.textcard}>
              Reparo já tem por objetivo contribuir para empregabilidade de
              sujeitos autônomos e segurança aos cidadãos no momento de
              solicitar um profissional em reparos domésticos.
            </TextCard>
          </Card>
        </Animated.View>

        <Footer />

        <StatusBar style="auto" />
      </Scroll>

      <ModalizeModal
        modalizeRef={modalizeRef}
      />
    </>
  );
}
