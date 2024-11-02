import { StatusBar } from 'expo-status-bar';
import { FlatList,  StyleSheet, View } from 'react-native';
import  DayListItem  from '@components/core/DayListItem';
import { AmaticSC_700Bold, AmaticSC_400Regular } from '@expo-google-fonts/amatic-sc';

const days = [...Array(24)].map((val,index) => index + 1);


export default function HomeScreen() {
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
