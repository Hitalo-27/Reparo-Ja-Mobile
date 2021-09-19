import { StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';
import styled from 'styled-components/native';

export const Modali = styled.View`
  background: ${props => props.theme.colors.background};
  height: 1000px;
  border-radius: 11px;
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
      marginTop:30,
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
    modal:{
      backgroundColor:'#f50',
      borderRadius:12
    }
   
    });
    
    