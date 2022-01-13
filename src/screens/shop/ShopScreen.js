import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

export default function ShopScreen() {
    const user = useSelector(state => state.userReducer)
    return (
        <View>
            <Text>ShopScreen</Text>
            <Text>{user.name}</Text>
        </View>
    )
}
