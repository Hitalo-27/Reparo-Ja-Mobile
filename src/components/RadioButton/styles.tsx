import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

export const TextIn = styled.TextInput`
       color:${props => props.theme.colors.font};
`

export const styles = StyleSheet.create({
    container:{
        marginTop:30
    },
});