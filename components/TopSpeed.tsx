import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { locationPins } from './StoreLocation'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const TopSpeed = () => {
  return (
    <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
        <MaterialCommunityIcons name="lightning-bolt" size={16} color="white" />
        <Text style={{color:'white', fontSize: 16}}>Top Spd</Text>
        </View>
      <Text style={{color: "#da2525", fontSize: 24}}>0</Text>
    </View>
  )
}

export default TopSpeed

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 20,
      backgroundColor: "#101726",
      borderRadius: 15,
      gap: 2,
    },
  });
  