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
      backgroundColor: '#EADDCA',
      
  
      justifyContent: 'center',
      alignItems: 'center',
  
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 20,
    },
    text: {
      color: '#967579',
      fontSize: 50,
    },
  });
  