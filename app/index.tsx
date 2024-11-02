import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import  DayListItem  from '../src/components/core/DayListItem';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { AmaticSC_700Bold, AmaticSC_400Regular } from '@expo-google-fonts/amatic-sc';

SplashScreen.preventAutoHideAsync();
const days = [...Array(24)].map((val,index) => index + 1);


export default function HomeScreen() {
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

  return (
    <View style={styles.container}>

      <FlatList
      contentContainerStyle={styles.content}
      numColumns={2}
      columnWrapperStyle={styles.column}
        data={days}
        renderItem={({ item }) => 
         <DayListItem day={item}/>
        }
       
        /> 
     </View>  
  );
}

//TODO: Add styles  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    gap: 10,
    padding: 10,
  },
  column:{
    gap:  10,
  },
});
