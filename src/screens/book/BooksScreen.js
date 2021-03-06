import { View, Text, Animated, StyleSheet, Dimensions, Easing, Image } from 'react-native'
import React from 'react'
import { useEffect } from 'react'

const { width } = Dimensions.get('window')

export default function BooksScreen() {
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
          delay: 1500,
          useNativeDriver: false
        }),
        Animated.timing(size, {
          toValue: 1,
          duration: 500,
          delay: 1000,
          easing: Easing.ease,
          useNativeDriver: false
        })
      ]).start()
    })
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Animated.Image style={[{ height: 100, width: 100, borderRadius: 50 }, ball.getLayout(), {
        transform: [
          {
            scale: size
          }
        ]
      }]}
        source={require('../../assets/img/nu_sinh.png')}
        resizeMode={'cover'}
      >
      </Animated.Image>
    </View>

  )
}
