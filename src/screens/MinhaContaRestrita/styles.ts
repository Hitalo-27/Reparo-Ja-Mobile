import { StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${props => props.theme.colors.background};
  flex: 1;
`

export const Title = styled.Text`
  color:${props => props.theme.colors.color};
`

export const SubTitle = styled.Text`
  color:${props => props.theme.colors.font};
`


export const styles = StyleSheet.create({
    header:{
     flexDirection:'row',
     marginLeft:25,
     marginTop:20
    },
    image:{
      width: 65,
      height: 65,
      borderRadius:32.5,
      borderColor:theme.colors.color,
      borderWidth:1
    },
    title:{
      marginLeft:20,
      fontFamily:theme.fonts.title500,
      fontSize:25
    },
    title2:{
      marginLeft:20,
      fontFamily:theme.fonts.text400
    },
    view:{
      height: '6%',
      flexDirection:'row',
      alignItems:'center',
      marginTop:20,
      marginLeft:20,
    },
    viewConfig:{
      height: '6%',
      flexDirection:'row',
      alignItems:'center',
      marginLeft:20,
    },
    subTitle:{
      marginLeft:20,
      fontFamily:theme.fonts.text500,
      fontSize:15
    },
   
    });
    