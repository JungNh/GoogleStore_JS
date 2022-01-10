import React, { useState, useMemo, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native'
import TimeRun from './TimeRun'

export default function CounDownScreen() {

    const [show, setShowTime] = useState(false)
    const [time, setTime] = useState(60)
    useEffect(() => {
        const tr = setTimeout(() => {
            setTime(time - 1)
        }, 1000)
        if (time == 0) {
            return clearTimeout(tr)
        }
        return () => {
            return clearTimeout(tr)
        }
    }, [time])


    let spinValue = new Animated.Value(0);

    // First set up animation 
    Animated.timing(
        spinValue,
        {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear, // Easing is an additional import from react-native
            useNativeDriver: true  // To make use of native driver for performance
        }
    ).start()

    // Next, interpolate beginning and end values (in this case 0 and 1)
    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    Animated.loop(
        Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true
            }
        )
    ).start();

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.spaceNum, { transform: [{ rotate: spin }] }]}>
            </Animated.View>
                    <Text style={styles.textTime}>{time}</Text>
            {/* <TouchableOpacity style={styles.btnTime} onPress={() => {
                setShowTime(!show)
                // startRotate()
            }}>
                <Text>
                    CoundownTime
                </Text>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTime: {
        fontSize: 20,
        color: '#000',
        fontWeight: '700',
        position:'absolute'
    },
    btnTime: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginTop: 20,
        backgroundColor: '#eee',
        borderRadius: 5
    },
    spaceNum: {
        width: 100,
        height: 100,
        backgroundColor: '#eee',
        borderRadius: 50,
        borderWidth: 10,
        borderBottomColor: 'green',
        borderLeftColor: 'transparent',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    }
})