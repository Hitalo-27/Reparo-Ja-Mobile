import { StyleSheet} from 'react-native';

import styled from 'styled-components/native';

export const FooterText = styled.Text`
  color:${props => props.theme.colors.font};
`

export const styles = StyleSheet.create({
    footer:{
      flex: 1,
      marginTop:50,
      alignItems:'center',
      justifyContent:'flex-end',
      marginBottom:20,
    },
  });
  