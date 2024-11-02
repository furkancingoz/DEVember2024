import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import  DayListItem  from './src/components/core/DayListItem';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

const days = [...Array(24)].map((val,index) => index + 1);

export default function App() {
  const [fontsLoaded,fontError] = useFonts({
    Inter_900Black,
  });
  if (!fontsLoaded && !fontError) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }

  return (
    <View style={styles.container}>

      <FlatList
      contentContainerStyle={styles.content}
      numColumns={2}
      columnWrapperStyle={styles.column}
        data={days}
        renderItem={({ item }) => 
         <DayListItem data={item}/>
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
