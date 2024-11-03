import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

const DaysDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day2" }} />
      <Text style={{ fontFamily: 'AmaticSC_700Bold', fontSize: 100}}>Days Details Day 2</Text>
     
      <Link href="/day2/onboarding" asChild>
      <Button  title="Go to onboarding"/>
      </Link>
    </View> 
  )
}

export default DaysDetailsScreen

const styles = StyleSheet.create({})