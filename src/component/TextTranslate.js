import React, { useRef, useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
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
            <TouchableOpacity
                style={[{ flexDirection: "row" }, styleView]}
                activeOpacity={1}
                onPress={() => {
                    setTextIndex(-1)

                }}>
                <Text>
                    {words.map((word, index) => (
                        <View key={index} style={{
                            // backgroundColor: textIndex == index ? '#00885c' : '#fff',
                            borderRadius: 5,
                        }}>
                            <Text onPress={() => {
                                // alert(word);
                                setTextIndex(index);
                                // setisVisible(!isVisible);
                                setSearchWord(word)
                            }} style={[styleText, {
                                color: textIndex == index ? '#00885c' : '#000',
                                textAlign: 'center'
                            }]}>{word} </Text>
                            {textIndex == index &&
                                <View style={styles.view_tran}>
                                    <TouchableOpacity
                                        style={[styles.buttonTran, styles.letf_tran]}
                                        onPress={() => {
                                            setisVisible(true);
                                            setTextIndex(-1)
                                        }}
                                        activeOpacity={0.5}><Text style={styles.text_button}>Anh - Anh</Text></TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.buttonTran, styles.right_tran]}
                                        onPress={() => {
                                            setisVisible(true);
                                            setTextIndex(-1)
                                        }}
                                        activeOpacity={0.5}><Text style={styles.text_button}>Anh - Viet</Text></TouchableOpacity>
                                </View>}
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
            </TouchableOpacity>


        </>
    )
}

export default TextTranslate;

const styles = StyleSheet.create({
    buttonTran: {
        // height: 30,
        flex: 1,
        backgroundColor: '#00885c',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8, shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    letf_tran: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderRightWidth: 2,
        borderColor: '#fff',

    },
    right_tran: {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    text_button: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white'
    },
    view_tran:{ 
        flexDirection: 'row', 
        alignSelf: 'center', 
        position: 'absolute', 
        bottom: 24 ,
    }
})