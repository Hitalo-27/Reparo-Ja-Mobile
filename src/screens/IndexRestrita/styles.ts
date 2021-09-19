import { StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

import styled from 'styled-components/native';

export const Scroll = styled.ScrollView`
  background: ${props => props.theme.colors.background};
  flex: 1;
`

export const Container = styled.View`
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
    title:{
      fontFamily:theme.fonts.title700,
      fontSize:30,
      textAlign:'center',
    },
    main:{
      width: "100%",
      alignItems: 'center',
    },
    card:{
      borderRadius:10,
      width: "70%",
      elevation:3,
      marginTop:30,
    },
    image:{
      borderRadius:10,
      width: '100%',
      height: 200,
    },
   
    textcard:{
      marginTop:10,
      marginBottom:10,
      fontSize:15,
      fontFamily:theme.fonts.text400
    },

    botao: {
      alignItems: "center",
      justifyContent: "center",
      padding: 15,
      borderRadius: 7,
    },

   
    });
    