import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { MenuItem } from '../interfaces/interfaces';
import { useNavigation } from '@react-navigation/native';


interface Props {
  menuItem: MenuItem
}


export const FlatListMenuItem = ({ menuItem }: Props) => {
  
  const navigation = useNavigation()
  console.log(navigation)

  return(
        
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={ () => navigation.dispatch('Animation101Screen' as never) }
      
      >
        <View style={ styles.container }>
          <Icon
            name={ menuItem.icon }
            color="gray"
            size={ 23 }
          />
          <Text style={ styles.itemText }> { menuItem.name } </Text>
          <View style={{flex:1}}/>
          <Icon
            name="chevron-forward-outline"
            color="gray"
            size={ 23 }
          />
        </View>

      </TouchableOpacity>
    
  )}

const styles = StyleSheet.create({

  container:{
    flexDirection: 'row'
  },
  itemText:{
    marginLeft: 10,
    fontSize: 19
  }
})