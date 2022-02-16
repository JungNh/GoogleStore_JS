import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Dimensions } from 'react-native'
import { setName, setAge } from '../../redux/actions'
import ViewImage from '../../component/ViewImage'
import { useSelector, useDispatch } from 'react-redux'
const { width, height } = Dimensions.get('window')

export default function ShortVideoScreen({ navigation }) {
    const user = useSelector(state => state.userReducer)
    const [showImg, setShowImg] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        // console.log('navigation')
        return () => {
            console.log('back navigation')
        }
    }, [navigator])
    return (
        <SafeAreaView style={{ flex: 1}}>
            <KeyboardAvoidingView style={{ flex: 1 }}
                behavior="padding"
                enabled >
                <Text>ShortVideoScreen</Text>
                <Text>{user.name}</Text>
                <TextInput style={{ borderWidth: 0.5 }}
                    placeholder='Nhập tên người dùng'
                    onChangeText={(text) => {
                        dispatch(setName(text))
                    }}
                />
                <TouchableOpacity onPress={() => setShowImg(true)}><Text style={{ color: 'black' }}>ShowImage</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()}><Text style={{ color: 'black' }}>BackHome</Text></TouchableOpacity>
                <View style={{ position: 'absolute', top: (height - 300) / 2, left:(width-300)/2}}>
                    {showImg && <ViewImage callBack={() => setShowImg(false)} />}
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
