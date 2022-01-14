import React from 'react'
import { View, Text, TextInput, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import { setName, setAge } from '../../redux/actions'
// import UserReducer from '../../redux/reducers/UserReducer'
import { useSelector, useDispatch } from 'react-redux'
export default function ShortVideoScreen() {
    const user = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={{ flex: 1, alignItems:'center',justifyContent:'center' }}>
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
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
