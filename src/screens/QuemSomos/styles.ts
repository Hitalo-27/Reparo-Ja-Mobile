import { StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

import styled from 'styled-components/native';

export const Scroll = styled.ScrollView`
  background: ${props => props.theme.colors.background};
  flex: 1;
`
export const Title = styled.Text`
  color:${props => props.theme.colors.color};
`

export const Card = styled.View`
  background: ${props => props.theme.colors.background};
`

export const TextCard = styled.Text`
  color:${props => props.theme.colors.font};
`


export const styles = StyleSheet.create({
    header:{
      left: 12,
      alignItems: 'center',
      width: '95%',
    },
    logo:{
      width: 150,
      height: 150,
      marginBottom: 30,
    },
    title:{
      fontFamily:theme.fonts.title700,
      fontSize: 25
    },
    cabecalho:{
      marginTop:30,
      fontSize:15
    },
    card:{
      borderRadius:10,
      width: "80%",
      elevation:3,
      marginTop:30,
      alignItems:'center'
    },
    image:{
      borderRadius:10,
      width: '70%',
      height: 200,
    },
    imageMissao:{
      borderRadius:10,
      width: '55%',
      height: 180,
    },

    titleCard:{
      fontFamily:theme.fonts.title700,
      fontSize: 20
    },
   
    textcard:{
      marginTop:10,
      marginBottom:10,
      fontSize:15,
      fontFamily:theme.fonts.text400,
      left: 10,
    },
   
    });
    