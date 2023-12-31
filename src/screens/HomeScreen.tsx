import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {View, Text, FlatList} from 'react-native'
import { styles } from '../theme/appTheme';
import { MenuItem } from '../interfaces/interfaces';
import { FlatListMenuItem } from '../components/FlatListMenuItem';




const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen'
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen'
  }
]

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets()

  const renderListHeader = () => {
    return(
        <View style={{ marginTop: top + 20, marginBottom: 20 }}>
          <Text style={styles.title }>Opciones de Menu</Text>
        </View>
      )
  }

  const itemSeparator = () => {
    return(
        <View 
          style={{
            borderBottomWidth: 1,
            opacity: 0.4,
            marginVertical: 8
          }}
        />

      )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={ menuItems }
        renderItem={ ({ item }) => <FlatListMenuItem menuItem={ item }/> }
        keyExtractor={ ( item ) => item.name}
        ListHeaderComponent={ renderListHeader }
        ItemSeparatorComponent={ itemSeparator }
      />
    </View>
  
  )
}
