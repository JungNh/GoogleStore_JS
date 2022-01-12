import React, { useRef, useState } from 'react'
import { View, Text, Dimensions, Alert, TouchableOpacity, StyleSheet } from 'react-native'
import Modal from 'react-native-modal';

function convertText(word) {
    let res = word.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '');
    return res.toLowerCase();
}

const TextTranslate = (props) => {
    const myText = useRef()
    const [isVisible, setisVisible] = useState(false)
    const [textIndex, setTextIndex] = useState(-1)
    const [searchWord, setSearchWord] = useState('')
    const content = props.content
    const styleText = props.styleText
    const styleView = props.styleView
    const words = content.split(' ')

    return (
        <>
            <View style={[{ flexDirection: "row" }, styleView]}>
                <Text>
                    {words.map((word, index) => (
                        <View key={index} style={{
                            backgroundColor: textIndex == index ? '#00885c' : '#fff',
                            borderRadius: 5,
                        }}>
                            <Text onPress={() => {
                                // alert(word);
                                setTextIndex(index);
                                // setisVisible(!isVisible);
                                setSearchWord(word)
                            }} style={[styleText, {
                                color: textIndex == index ? '#fff' : '#000',
                                textAlign: 'center'
                            }]}>{word} </Text>
                            {/* {textIndex == index &&
                                <TouchableOpacity style={{
                                    padding: 10,
                                    borderRadius: 10,
                                    position: 'absolute',
                                    backgroundColor: '#00885c',
                                    zIndex: 1,
                                    top: 24
                                }}><Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{word}</Text></TouchableOpacity>} */}
                        </View>
                    ))}
                </Text>
                <Modal
                    isVisible={isVisible}
                    useNativeDriver
                    style={{ margin: 0 }}
                    animationIn="fadeIn"
                    // coverScreen={true}
                    animationOut="fadeOut"
                    onBackdropPress={() => setisVisible(!isVisible)}
                    animationType='slide'
                >
                    <View
                        style={{
                            backgroundColor: 'white',
                            borderRadius: 10,
                            width: '90%',
                            height: 200,
                            padding: 20,
                            alignSelf: 'center',
                        }}>
                        <Text>Tra cứu từ <Text style={{ color: 'blue' }}>{convertText(searchWord)}</Text></Text>
                    </View>
                </Modal>
            </View>
            {textIndex >= 0 && <View style={{ flexDirection: 'row', width: '40%', alignSelf: 'center' }}>
                <TouchableOpacity style={styles.buttonTran} onPress={() => {
                    setisVisible(true);
                    setTextIndex(-1)
                }}><Text>Anh - Anh</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttonTran} onPress={() => {
                    setisVisible(true);
                    setTextIndex(-1)
                }}><Text>Anh - Viet</Text></TouchableOpacity>
            </View>}
        </>
    )
}

export default TextTranslate;

const styles = StyleSheet.create({
    buttonTran: {
        height: 30,
        flex: 1,
        backgroundColor: '#00885c',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    }
})