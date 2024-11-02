import { Text, View, StyleSheet, Pressable } from "react-native"
import { Link } from "expo-router";

type DayListItem = {
    day: number
};

export default function DayListItem({ day }: DayListItem) {
    return (
      <Link href={`/(days)/day${day}`} asChild>
        <Pressable  style={styles.box}>
        <Text style={styles.text}>{day}</Text>
      </Pressable>
      </Link>
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
  