import { StyleSheet, Text, View,FlatList, TouchableOpacity } from 'react-native';
import { Ionicons} from '@expo/vector-icons';
import React from 'react'

const Projectlist = () => {
  return (
    <View>
      <Text>Projectlist</Text>
    </View>
  )
}

export default Projectlist

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "lightblue"
    },
    icon:{
        padding:5,
        fontSize: 32,
        color: "white"
    }
})