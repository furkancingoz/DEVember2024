import React from 'react';
import { View, Text, StyleSheet,Pressable, } from 'react-native';
import { Stack, Link, router } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureDetector, Gesture, Directions } from 'react-native-gesture-handler';

const onboardingSteps = [{
    title: 'Track every transaction',
    description: 'Monitor you are spending and contribution everty penny alings with your familys aspirations',
    image: 'compare-arrows',
}, {
    title: 'Set your goals',
    description: 'Set your goals and let us help you achieve them with our smart saving and investment options',
    image: 'trending-up',
}, {
    title: 'Get insights',
    description: 'Get insights on your spending and saving habits and make informed decisions',
    image: 'insights',
}]


export default function Onboarding() {
    const [screenIndex,setScreenIndex] = useState(0);
    const data = onboardingSteps[screenIndex]
    const onCountinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1;
        if(isLastScreen) {
            endonboarding();
        } else {
            setScreenIndex(screenIndex + 1);
    }}

    const endonboarding = () => {
        setScreenIndex(0);
        router.back();
    }
    const fling = Gesture.Fling()
    .direction(Directions.LEFT | Directions.RIGHT)
    .onBegin((event) => {
        console.log('Fling begin', event);
    })
    .onEnd((event) => {
        console.log('Fling end', event);
        onCountinue();
    });

    return (
        <SafeAreaView style={styles.page}>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar style="light" />
           
             <View style={styles.stepIndicatorContainer}>
                {onboardingSteps.map((step, index) => (
                <View key={index} style={[styles.stepIndicator, {backgroundColor: index ==  screenIndex ? '#CEF202' : 'grey' }]}/>
                ))}
                
             </View>

             <GestureDetector gesture={fling}>
             <View style={styles.pageContent}>

             <MaterialIcons style={styles.image} name={data.image} size={200} />
                <View style={styles.footer}>
                     <Text style={styles.title}>{data.title}</Text>
                     <Text style={styles.description}>{data.description}</Text>
                        <View style={styles.buttonsRow}>
                             <Text onPress={endonboarding} style={styles.buttonText}>Skip</Text>
                            <Pressable onPress={onCountinue} style={styles.button}>
                                <Text style={styles.buttonText}>Continue</Text>
                            </Pressable>
                        </View>    
                </View>
            </View>
            </GestureDetector>   
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    //Container Styles
    stepIndicatorContainer: {
        flexDirection: 'row',
        padding: 20,
        gap: 10,
    },
    stepIndicator: {
        borderRadius: 25,
        flex: 1, //This will make the stepIndicator take up equal space resizable
        height: 3,
        backgroundColor: 'gray',

    },
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

    //Text Styles
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

    //Image Styles
    image: {
        alignSelf  : 'center',
        margin: 20,
        marginTop: 50,
        color: '#CEF202',
    },

    //Button Styles
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