import {StyleSheet} from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width:'60%',
        height:46,
        borderRadius: 8,
        flexDirection:'row',
        alignItems:'center',
        marginTop:30,
        backgroundColor:theme.colors.color
    },

    gradient: {
        width:'60%',
        height:46,
        borderRadius: 8,
        flexDirection:'row',
        alignItems:'center',
    },
    title:{
        flex:1,
        fontSize:15,
        textAlign:'center',
        fontFamily:theme.fonts.text500,
        color: '#ffffff'
    },
});