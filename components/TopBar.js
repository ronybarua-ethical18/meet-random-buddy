import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {FontAwesome5, FontAwesome} from '@expo/vector-icons'

export default function TopBar() {
    return (
        <View style={styles.container}>
            <FontAwesome5 name="fire" size={27} color="#eee1e1" />
            <FontAwesome name="comments" size={27} color="#d2c5c5" />
            <FontAwesome name="user" size={27} color="#d2c5c5" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 15,
      backgroundColor: 'gray',
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 10,
      },
      shadowOpacity: 0.12,
      shadowRadius: 5.46,
      elevation: 9,
    },
  });
