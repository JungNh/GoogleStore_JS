import React, { useRef, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import TextTranslate from '../../component/TextTranslate';

export default function UtilitiesScreen() {
    const myText = useRef()
    const [isVisible, setisVisible] = useState(true)
    const [textIndex, setTextIndex] = useState(-1)
    const [searchWord, setSearchWord] = useState('')
    const content = "The onRequestClose callback is called when the user taps the hardware back button on Android or the menu button on Apple TV. Because of this required prop, be aware that BackHandler events will not be emitted as long as the modal is open. On iOS, this callback is called when a Modal is being dismissed using a drag gesture when presentationStyle is pageSheet or formSheet"
    const words = content.split(' ')

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <TextTranslate content={content} styleView={styles.view} styleText={styles.text} />
        </View>
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
