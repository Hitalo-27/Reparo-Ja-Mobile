import { StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${props => props.theme.colors.background};
  flex: 1;
`

export const Title = styled.Text`
  color:${props => props.theme.colors.font};
`

export const styles = StyleSheet.create({
    header:{
      height: 70,
      flexDirection:'row',
      marginTop:30,
      alignItems: 'center',
      backgroundColor:theme.colors.color,
    },
    image:{
      width: 50,
      height: 50,
      borderRadius: 25,
      marginLeft:15
    },
    title:{
      fontFamily:theme.fonts.text500,
      fontSize:15,
      marginLeft:15,
      
    },

    });
    