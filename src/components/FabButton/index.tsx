import React from 'react';
import {Entypo} from '@expo/vector-icons';
import {
  View,
  StyleSheet
} from 'react-native';
import { theme } from '../../global/styles/theme';

type Props = {
  size:number,
  color:string,
  focused:boolean,

}

export function FabButton({focused,size,color} : Props){
  return(
  <View style={[styles.container, {backgroundColor: focused?'#820ad1' : '#9411eb'}]}>
    <Entypo name="plus" color={'#fff'} size={size}/>
  </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: 60,
    height: 60,
    borderRadius:30,
    backgroundColor:theme.colors.color,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:20,
  }
})