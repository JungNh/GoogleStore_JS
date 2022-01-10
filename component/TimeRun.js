import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CountdownCircle from 'react-native-countdown-circle'

export default function TimeRun(props) {
    const [time, setTime] = useState(props.duration)
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
    return (
        <>
            <Text style={styles.textTime}>{time}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    textTime: {
        fontSize: 50,
        color: '#000',
        fontWeight: '700'
    },
})