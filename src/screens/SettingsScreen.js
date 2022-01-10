import React, { useRef, useState } from 'react'
import { View, Text, Dimensions, Alert, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal';

export default function SettingsScreen() {
    const myText = useRef()
    const [isVisible, setisVisible] = useState(true)
    const [textIndex, setTextIndex] = useState(-1)
    const content = "The onRequestClose callback is called when the user taps the hardware back button on Android or the menu button on Apple TV. Because of this required prop, be aware that BackHandler events will not be emitted as long as the modal is open. On iOS, this callback is called when a Modal is being dismissed using a drag gesture when presentationStyle is pageSheet or formSheet"
    const words = content.split(' ')

    return (
        <TouchableOpacity style={{ flex: 1 }} onPress={() => setTextIndex(-1) } activeOpacity={1}>
            <View style={{ marginHorizontal: 20, flexDirection: "row", marginTop: 100 }}>
                <Text>
                    {words.map((word, index) => {
                        return (
                            <View key={index}>
                                <Text onPress={() => {
                                    // alert(word);
                                    setTextIndex(index)
                                }} style={{ fontSize: 20, zIndex:0 }}>{word} </Text>
                                {textIndex == index &&
                                    <View style={{
                                        padding: 10,
                                        borderRadius: 10,
                                        borderWidth: 0.5,
                                        position: 'absolute',
                                        backgroundColor: 'black',
                                        zIndex:1,
                                        top:24
                                    }}><Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>{word}</Text></View>}
                            </View>
                        )
                    })}
                </Text>
                {/* <View><Text style={{fontSize:10}}>hello</Text></View> */}

                {/* <Modal
                    isVisible={isVisible}
                    useNativeDriver
                    style={{ margin: 0 }}
                    animationIn="fadeIn"
                    // coverScreen={true}
                    animationOut="fadeOut"
                    onBackdropPress={() => setisVisible(!isVisible)}
                >
                    <View
                        style={{
                            backgroundColor: 'green',
                            borderRadius: 8,
                            width: '90%',
                            alignSelf: 'center',
                        }}>
                        <Text>hello</Text>
                    </View>
                </Modal> */}
            </View>
        </TouchableOpacity>
    )
}
