import { StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

import styled from 'styled-components/native';

export const Scroll = styled.ScrollView`
  background: ${props => props.theme.colors.background};
  flex: 1;
`

export const Container = styled.KeyboardAvoidingView`
  background: ${props => props.theme.colors.background};
`

export const Title = styled.Text`
  color:${props => props.theme.colors.color};
`
export const SubTitle = styled.Text`
  color:${props => props.theme.colors.font};
`

export const TitleCadastrar = styled.Text`
  color:${props => props.theme.colors.color};
`


export const Olho = styled.View`
  border-color: ${props => props.theme.colors.font};
`

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center'

    },
    header:{
      marginTop:30,
      justifyContent:'center',
      alignItems: 'center',
      textAlign:'center'
    },
    image:{
      width: 150,
      height: 150
    },
    main:{
      marginTop:30,
      alignItems:'center',
      justifyContent:'center'
    },
    title:{
      fontFamily:theme.fonts.title700,
      fontSize:30,
    },
    subTitle:{
      fontFamily:theme.fonts.title500,
      fontSize:22
    },
    titleCadastrar:{
      fontFamily:theme.fonts.title500,
      fontSize:22
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
   
    inputMask:{
      width:'60%',
      height:55,
      borderRadius: 8,
      fontSize: 13,
      marginRight:4,
      borderWidth:1,
      paddingHorizontal:16,
      paddingTop:16,
      textAlignVertical:'top',
      marginTop:30,
    }
  });
  