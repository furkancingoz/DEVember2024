import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const DaysDetailsScreen = () => {
  return (
    <View>
        <Stack.Screen options={{ title: "Day1" }} />
      <Text>DaysDetailsScreen Day 1</Text>
    </View>
  )
}

export default DaysDetailsScreen

const styles = StyleSheet.create({})