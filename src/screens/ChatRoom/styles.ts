import { StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${props => props.theme.colors.background};
  flex: 1;
`

export const Mode = styled.Text`
  color:${props => props.theme.colors.font};
`

export const styles = StyleSheet.create({
    teste:{
        color: '#f50',
    }
});
    