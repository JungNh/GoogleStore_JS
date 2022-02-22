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
import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";

const App = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: pan.x, dy: pan.y }
      ]),
      onPanResponderRelease: () => {
        Animated.spring(pan, { toValue: { x: 100, y: 100 }, useNativeDriver:true }).start();
      }
    })
  ).current;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Drag & Release this box!</Text>
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