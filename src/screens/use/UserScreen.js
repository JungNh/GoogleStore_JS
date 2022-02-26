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


import React, { useRef } from "react";
import { Animated, View, StyleSheet, PanResponder, Text, Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen')

const App = () => {
  const pan = useRef(new Animated.ValueXY({ x: width / 2 - 75, y: -height / 2 + 100 })).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y }
        ]
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  ).current;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Drag this box!</Text>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold"
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 5
  }
});

export default App;