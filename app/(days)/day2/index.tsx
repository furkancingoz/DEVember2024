import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack, router } from 'expo-router';

const DaysDetailsScreen = () => {
  const goToOnboarding = () => {
    router.push("/day2/onboarding");
  };

  return (
    <View>
      <Stack.Screen options={{ title: "Day2" }} />
      <Text style={{ fontFamily: 'AmaticSC_700Bold', fontSize: 100 }}>Days Details Day 2</Text>
      
      <Pressable onPress={goToOnboarding} style={styles.button}>
        <Text style={styles.buttonText}>Go to onboarding</Text>
      </Pressable>
    </View> 
  );
};

export default DaysDetailsScreen;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});