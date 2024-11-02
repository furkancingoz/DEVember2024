import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { useEffect } from 'react';
import { AmaticSC_700Bold, AmaticSC_400Regular } from '@expo-google-fonts/amatic-sc';
import { Stack } from "expo-router"

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

    const [fontsLoaded,fontError] = useFonts({
        AmaticSC_700Bold,
        AmaticSC_400Regular,
        Inter_900Black,
      });
      useEffect(() => { 
        if (fontsLoaded || fontError) {
          SplashScreen.hideAsync();
       }
      }, [fontsLoaded, fontError]);
      if (!fontsLoaded && !fontError) {
        return null;
      }
        return <Stack>
        <Stack.Screen name="index" options={{ title: "DEVember" }} />
        </Stack>
}