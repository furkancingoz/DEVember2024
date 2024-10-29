import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>2</Text>
      </View>




      <StatusBar style="auto" />
    </View>
  );
}

//TODO: Add styles  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  box: { 
    backgroundColor: 'red',
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 20,
  },
  text: {
    color: 'yellow',
    fontSize: 50,
  },
});
