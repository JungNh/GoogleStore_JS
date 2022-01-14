import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function LoginScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white' }}>
      <Image source={require('../../assets/img/logo.png')}
        style={{ width: '70%', height: 150 }} resizeMode='contain' />
      <View style={{
        flexDirection: 'row',
        backgroundColor: '#eee',
        width: '60%',
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',
        justifyContent:'space-between',
        paddingHorizontal: 8,
      }}>
        <Entypo name={'user'} size={20} />
        <TextInput style={{ width: '70%' }} />
        <Entypo name={'user'} size={20} color={'#eee'} />
      </View>
      <View style={{
        flexDirection: 'row',
        backgroundColor: '#eee',
        width: '60%',
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',
        justifyContent:'space-between',
        paddingHorizontal: 8,
      }} >
        <FontAwesome name={'key'} size={20} />
        <TextInput style={{ width: '70%' }} secureTextEntry={true}/>
        <Ionicons name={'eye-off-sharp'} size={20} />
      </View>
      <TouchableOpacity
        style={{
          width: '60%',
          padding: 12,
          backgroundColor: '#00885c',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
          marginTop: 20
        }}
        onPress={()=>navigation.navigate('BottomBar')}>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'white',
          }}>ĐĂNG NHẬP</Text>
      </TouchableOpacity>
    </View>
  )
}
