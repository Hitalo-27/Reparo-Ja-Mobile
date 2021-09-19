import {StyleSheet} from 'react-native';
import { TextInputMask } from "react-native-masked-text";
import styled from 'styled-components/native';

export const Mask = styled(TextInputMask)`
       border-color: ${props => props.theme.colors.font};
       color:${props => props.theme.colors.font};
`
export const styles = StyleSheet.create({
    container:{
        width:'60%',
        height:55,
        borderRadius: 8,
        fontSize: 13,
        borderWidth:1,
        paddingHorizontal:16,
        paddingTop:16,
        textAlignVertical:'top',
        marginTop:30,
    },
});