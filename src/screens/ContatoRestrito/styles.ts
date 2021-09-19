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


export const SubTitle = styled.Text`
  color:${props => props.theme.colors.font};
  font-size:15px;
`


export const FooterText = styled.Text`
  color:${props => props.theme.colors.font};
`

export const Cadastrar = styled.Text`
  color:${props => props.theme.colors.color};
`


export const styles = StyleSheet.create({
    header:{
      alignItems: 'center',
    },
   
    title:{
      fontFamily:theme.fonts.title700,
      fontSize:30,
    },
    subTitle:{
      fontFamily:theme.fonts.title500,
      fontSize:25,
    },
    main:{
      marginTop:30,
      alignItems:'center',
      justifyContent:'center'
    },
    textArea:{
      width:'60%',
      height:110,
      borderRadius: 8,
      fontSize: 13,
      borderWidth:1,
      paddingHorizontal:16,
      paddingTop:16,
      textAlignVertical:'top',
      marginTop:30,
    },
    info:{
      flexDirection:'row',
      marginTop:'10%',
    },
    infoIcon:{
      marginLeft:20,
    },
    infoText:{
      marginLeft:10,
    },
    infoFont:{
      fontFamily:theme.fonts.title700,
      fontSize:17,
    },
    button:{
      marginBottom:30,
    }
});
    