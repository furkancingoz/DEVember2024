import React from 'react';
import { View, Text, StyleSheet,Pressable } from 'react-native';
import { Stack } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Onboarding() {
    return (
        <SafeAreaView style={styles.page}>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.pageContent}>
            
             <MaterialIcons style={styles.image}name="compare-arrows" size={200} />
                <View style={styles.footer}>
                     <Text style={styles.title}>Track every transaction</Text>
                     <Text style={styles.description}>Monitor you are spending and contribution everty penny aling with your familys aspirations</Text>
                        <View style={styles.buttonsRow}>
                            <Text style={styles.buttonText}>Skip</Text>
                            <Pressable style={styles.button}>
                                <Text style={styles.buttonText}>Continue</Text>
                            </Pressable>
                        </View>    
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#15141A',
    },
    pageContent: {
        padding: 20,
        flex: 1,
    },
    footer: {
        marginTop: 'auto',
    },
    title: {
        color: '#FDFDFD',
        fontFamily: 'InterBold',
        fontSize: 50,
        fontWeight: 'bold',
        letterSpacing: 1.3,
        marginVertical: 20,

    },
    description: {
        fontFamily: 'InterRegular',
        color: 'gray',
        fontSize: 20,
        lineHeight: 30,
    },
    image: {
        alignSelf  : 'center',
        margin: 20,
        color: '#CEF202',
    },
    buttonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        gap: 20,
    },
    button: {
        backgroundColor: '#302E38',
        borderRadius: 50,
        alignItems: 'center',
        flex: 1,
    },
    buttonText: {
        color: '#FDFDFD',
        fontFamily: 'InterSemi',
        fontSize: 20,
        padding: 16,
        paddingHorizontal: 20,
    },
   

})