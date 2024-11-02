import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const DaysDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day2" }} />
      <Text style={{ fontFamily: 'AmaticSC_700Bold', fontSize: 100}}>Days Details Day 2</Text>
    </View> 
  )
}

export default DaysDetailsScreen

const styles = StyleSheet.create({})