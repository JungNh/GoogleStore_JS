// import * as React from 'react';
// import { Button, View, Text } from 'react-native';

// function Details({ route, navigation }) {
//     const [post, setPost] = React.useState("")
//     React.useEffect(() => {
//         if (route.params?.post) {
//             setPost(route.params?.post)
//         }
//     }, [route.params?.post])
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Detail Screen {post}</Text>
//             <Button
//                 title="Go to Details... again"
//                 onPress={() => navigation.push('Details')}
//             />
//             <Button title="Go back" onPress={() => navigation.goBack()} />
//             <Button
//                 title="Go back to first screen in stack"
//                 onPress={() => navigation.popToTop()}
//             />
//         </View>
//     );
// }

// export default Details

import { View, Text, Animated, StyleSheet, Dimensions, Easing, Image, Button } from 'react-native'
import React from 'react'
import { useEffect } from 'react'

const { width } = Dimensions.get('window')

export default function BooksScreen({ navigation }) {
  let drop = new Animated.Value(1)
  let moveLeft = new Animated.Value(20)
  useEffect(() => {
    Animated.spring(drop, {
      toValue: 2,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }, [])

  let ball = new Animated.ValueXY({ x: width / 2 - 50, y: 120 })
  let size = new Animated.Value(1)

  useEffect(() => {
    Animated.spring(size, {
      toValue: 3.5,
      useNativeDriver: false
    }).start(() => {
      Animated.parallel([
        Animated.timing(ball, {
          toValue: { x: 20, y: 40 },
          duration: 500,
          delay: 500,
          useNativeDriver: false
        }),
        Animated.timing(size, {
          toValue: 1,
          duration: 500,
          delay: 500,
          easing: Easing.ease,
          useNativeDriver: false
        })
      ]).start()
    })
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center' }}>
      <Animated.Image style={[{ height: 100, width: 100, borderRadius: 50 }, ball.getLayout(), {
        transform: [
          {
            scale: size
          }
        ]
      }]}
        source={require('../assets/img/nu_sinh.png')}
        resizeMode={'cover'}
      >
      </Animated.Image>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          title="Go to Detail"
          onPress={() => navigation.push('Details')}
          style={{}}
        />
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
      </View>
    </View>

  )
}
