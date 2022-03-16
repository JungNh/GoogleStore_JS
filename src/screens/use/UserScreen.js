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
import { StyleSheet, View } from "react-native";
import { VictoryBar, VictoryChart, VictoryLine, VictoryTheme } from "victory-native";

const data = [
  { quarter: "T2", earnings: 1 },
  { quarter: "T3", earnings: 5 },
  { quarter: 'T4', earnings: 3 },
  { quarter: "T5", earnings: 3 },
  { quarter: "T6", earnings: 2 },
  { quarter: 'T7', earnings: 3 },
  { quarter: "CN", earnings: 1 }
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <VictoryChart width={350} theme={VictoryTheme.material} height={200}>
          <VictoryLine data={data} x="quarter" y="earnings" style={{
            data: {
              stroke: 'red',
              strokeWidth: 2,
            }
          }} />
        </VictoryChart>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
});