import { Text, View, StyleSheet } from "react-native"

type DayListItem = {
    data: number
};

export default function DayListItem({ data }: DayListItem) {
    return (
        <View style={styles.box}>
        <Text style={styles.text}>{data}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    box: { 
      aspectRatio: 1,
      flex: 1,
      backgroundColor: '#EADFCA',
      
  
      justifyContent: 'center',
      alignItems: 'center',
  
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 20,
    },
    text: {
      color: '#453579',
      fontSize: 100,
      fontFamily: 'AmaticSC_700Bold',
    },
  });
  