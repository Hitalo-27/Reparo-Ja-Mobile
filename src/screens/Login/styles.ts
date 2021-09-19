import { StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

import styled from 'styled-components/native';

export const Scroll = styled.ScrollView`
  background: ${props => props.theme.colors.background};
  flex: 1;
`
export const Container = styled.KeyboardAvoidingView`
  background: ${props => props.theme.colors.background};
  flex: 1;
  justify-content:center;
`

export const Title = styled.Text`
  color:${props => props.theme.colors.font};
`

export const TitleCadastrar = styled.Text`
  margin-top:40px;
  color:${props => props.theme.colors.font};
  font-size:15px;
`

export const Cadastrar = styled.Text`
  color:${props => props.theme.colors.color};
`

export const Olho = styled.View`
  border-color: ${props => props.theme.colors.font};
`

export const styles = StyleSheet.create({
    header:{
      marginTop:60,
      justifyContent:'center',
      alignItems: 'center',
    },
    title:{
      fontFamily:theme.fonts.title500,
      fontSize:22
    },
    main:{
      marginTop:30,
      alignItems:'center',
      justifyContent:'center'
    },
    cadastrar:{
      marginTop:13,
      fontFamily:theme.fonts.text500,
      fontSize:15
    },
    viewOlho:{
      flexDirection:'row',
      width:'60%',
      borderRadius:8,
      height:55,
      fontSize: 13,
      alignItems:'center',
      borderWidth:1,
      marginTop:30
    },
    inputOlho:{
      width:'85%',
      height:50,
      padding: 8,
    },
    olho:{
      width:'15%',
      height:50,
      justifyContent:'center',
      alignItems:'center',
    },
  });
  