import React, { useRef, useState } from 'react'
import { View, Text, Dimensions, Alert, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal';

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
        <View style={[{ flexDirection: "row" }, styleView]}>
            <Text>
                {words.map((word, index) => {
                    return (
                        <View key={index}>
                            <Text onPress={() => {
                                // alert(word);
                                setTextIndex(index);
                                setisVisible(!isVisible);
                                setSearchWord(word)
                            }} style={styleText}>{word} </Text>
                            {/* {textIndex == index &&
                                <View style={{
                                    padding: 10,
                                    borderRadius: 10,
                                    borderWidth: 0.5,
                                    position: 'absolute',
                                    backgroundColor: 'black',
                                    zIndex: 1,
                                    top: 24
                                }}><Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{word}</Text></View>} */}
                        </View>
                    )
                })}
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
                    <Text>Tra cứu từ <Text style={{color:'blue'}}>{searchWord}</Text></Text>
                </View>
            </Modal>
        </View>
    )
}

export default TextTranslate;