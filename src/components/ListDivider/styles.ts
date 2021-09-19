
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';


export const Container = styled.View`
  background: ${props => props.theme.colors.color};
`

export const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:1,
    }
})