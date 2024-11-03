import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Inter_900Black, Inter_600SemiBold, Inter_400Regular} from '@expo-google-fonts/inter';
import { useEffect } from 'react';
import { AmaticSC_700Bold, AmaticSC_400Regular } from '@expo-google-fonts/amatic-sc';
import { Stack } from "expo-router"

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

    const [fontsLoaded,fontError] = useFonts({
        AmaticSC_700Bold,
        AmaticSC_400Regular,
        InterBold: Inter_900Black,
        InterRegular: Inter_400Regular,
        InterSemi: Inter_600SemiBold,

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