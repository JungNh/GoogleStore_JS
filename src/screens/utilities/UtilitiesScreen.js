import React, { useRef, useState } from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import TextTranslate from '../../component/TextTranslate';

export default function UtilitiesScreen() {
    const content = "The onRequestClose callback is called when the user taps the hardware back button on Android or the menu button on Apple TV. Because of this required prop, be aware that BackHandler events will not be emitted as long as the modal is open. On iOS, this callback is called when a Modal is being dismissed using a drag gesture when presentationStyle is pageSheet or formSheet"
    return (
        <SafeAreaView style={{backgroundColor: 'white' }}>
            <TextTranslate content={content} styleView={styles.view} styleText={styles.text} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'black'
    },
    view: {
        paddingHorizontal: 20,
        marginTop: 20
    }
})
