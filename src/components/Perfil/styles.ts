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
     width:'100%',
     flexDirection:'row',
     justifyContent:'flex-end',
     right: 20,
    },
    image:{
      width: 40,
      height: 40,
      borderRadius:20,
      borderColor:theme.colors.color,
      borderWidth:1
    }
});
    