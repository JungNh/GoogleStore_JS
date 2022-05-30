// import React, { useEffect, useState } from 'react'
// import { View, Text, TextInput, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Dimensions } from 'react-native'
// import { setName, setAge } from '../../redux/actions'
// import ViewImage from '../../component/ViewImage'
// import { useSelector, useDispatch } from 'react-redux'
// const { width, height } = Dimensions.get('window')

// export default function ShortVideoScreen({ navigation }) {
//     const user = useSelector(state => state.userReducer)
//     const [showImg, setShowImg] = useState(false)
//     const dispatch = useDispatch()

//     useEffect(() => {
//         // console.log('navigation')
//         return () => {
//             console.log('back navigation')
//         }
//     }, [navigator])
//     return (
//         <SafeAreaView style={{ flex: 1}}>
//             <KeyboardAvoidingView style={{ flex: 1 }}
//                 behavior="padding"
//                 enabled >
//                 <Text>ShortVideoScreen</Text>
//                 <Text>{user.name}</Text>
//                 <TextInput style={{ borderWidth: 0.5 }}
//                     placeholder='Nhập tên người dùng'
//                     onChangeText={(text) => {
//                         dispatch(setName(text))
//                     }}
//                 />
//                 <TouchableOpacity onPress={() => setShowImg(true)}><Text style={{ color: 'black' }}>ShowImage</Text></TouchableOpacity>
//                 <TouchableOpacity onPress={() => navigation.goBack()}><Text style={{ color: 'black' }}>BackHome</Text></TouchableOpacity>
//                 <View style={{ position: 'absolute', top: (height - 300) / 2, left:(width-300)/2}}>
//                     {showImg && <ViewImage callBack={() => setShowImg(false)} />}
//                 </View>
//             </KeyboardAvoidingView>
//         </SafeAreaView>
//     )
// }


import React from "react";
import { StyleSheet, View, Text } from "react-native";
import FastImage from "react-native-fast-image";
import { VictoryBar, VictoryChart, VictoryLine, VictoryTheme } from "victory-native";

const data = [
  { quarter: "T2", earnings: 194 },
  { quarter: "T3", earnings: 0 },
  { quarter: 'T4', earnings: 0 },
  { quarter: "T5", earnings: 0 },
  { quarter: "T6", earnings: 0 },
  { quarter: 'T7', earnings: 0 },
  { quarter: "CN", earnings: 0 }
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.chart_bg}>
          <VictoryChart width={350} theme={VictoryTheme.material} height={200}>
            <VictoryLine data={data} x="quarter" y="earnings" style={{
              data: {
                stroke: 'red',
                strokeWidth: 2,
              }
            }} />
          </VictoryChart>
        </View>
        <View style={{
          width: '90%',
          flexDirection: 'row',
          marginTop: 10,
          padding: 15,
          backgroundColor: 'white',
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          justifyContent: 'space-between',
          alignItems:'center'
        }}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <View style={{
              marginRight:10, 
              width:50,
              height:50,
              borderWidth:10,
              borderLeftColor:'#FDB561',
              borderBottomColor:'#FDB561',
              borderRightColor:'#e3e3e3',
              borderTopColor:'#e3e3e3',
              borderRadius:25,
              alignItems:'center',
              justifyContent:'center'
              }}>
              <FastImage source={require('../../assets/img/grammar.png')} style={{width:40,height:40}}/>
              <View
                style={{
                  width:25,
                  height:25,
                  borderRadius:18,
                  borderWidth:1,
                  borderColor:'white',
                  position:'absolute',
                  backgroundColor:'#FDB561',
                  bottom:-15,
                  right:-12,
                  alignItems:'center',
                  justifyContent:'center'
                }}
              >
                <Text style={{fontSize:10, fontWeight:'bold'}}>50%</Text>
              </View>
            </View>
            <Text>Vocabulary</Text>
          </View>
          <Text>300/300</Text>
        </View>
        <View style={{
          width: '90%',
          flexDirection: 'row',
          marginTop: 10,
          padding: 15,
          backgroundColor: 'white',
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          justifyContent: 'space-between',
          alignItems:'center'
        }}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <View style={{
              marginRight:10, 
              width:50,
              height:50,
              borderWidth:10,
              borderLeftColor:'#FDB561',
              borderBottomColor:'#FDB561',
              borderRightColor:'#e3e3e3',
              borderTopColor:'#e3e3e3',
              borderRadius:25,
              alignItems:'center',
              justifyContent:'center'
              }}>
              <FastImage source={require('../../assets/img/grammar.png')} style={{width:40,height:40}}/>
              <View
                style={{
                  width:25,
                  height:25,
                  borderRadius:18,
                  borderWidth:1,
                  borderColor:'white',
                  position:'absolute',
                  backgroundColor:'#FDB561',
                  bottom:-15,
                  right:-12,
                  alignItems:'center',
                  justifyContent:'center'
                }}
              >
                <Text style={{fontSize:10, fontWeight:'bold'}}>50%</Text>
              </View>
            </View>
            <Text>Vocabulary</Text>
          </View>
          <Text>300/300</Text>
        </View>
        <View style={{
          width: '90%',
          flexDirection: 'row',
          marginTop: 10,
          padding: 15,
          backgroundColor: 'white',
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          justifyContent: 'space-between',
          alignItems:'center'
        }}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <View style={{
              marginRight:10, 
              width:50,
              height:50,
              borderWidth:10,
              borderLeftColor:'#FDB561',
              borderBottomColor:'#FDB561',
              borderRightColor:'#e3e3e3',
              borderTopColor:'#e3e3e3',
              borderRadius:25,
              alignItems:'center',
              justifyContent:'center'
              }}>
              <FastImage source={require('../../assets/img/grammar.png')} style={{width:40,height:40}}/>
              <View
                style={{
                  width:25,
                  height:25,
                  borderRadius:18,
                  borderWidth:1,
                  borderColor:'white',
                  position:'absolute',
                  backgroundColor:'#FDB561',
                  bottom:-15,
                  right:-12,
                  alignItems:'center',
                  justifyContent:'center'
                }}
              >
                <Text style={{fontSize:10, fontWeight:'bold'}}>100%</Text>
              </View>
            </View>
            <Text>Vocabulary</Text>
          </View>
          <Text>300/300</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  },
  chart_bg: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});