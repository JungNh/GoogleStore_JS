import React, { useState, useRef } from 'react';
import { Animated, PanResponder, View, Image, StyleSheet, Text, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen')
const spaceWidth = width / 2 - 50
const spaceHeight = height / 2 - 150

const ImageScreen = () => {

  const pan = useRef(new Animated.ValueXY({ x: spaceWidth, y: -spaceHeight })).current;

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
        //moving
        [
          null, //raw event arg ignored
          { dx: pan.x, dy: pan.y } // dx, dy id gestureState
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        // call when stop moving = 'release your finger'
        console.log(pan.x._value, spaceHeight)
        pan.flattenOffset();
        Animated.timing(pan,
          {
            toValue: {
              x: pan.x._value > 0 ? spaceWidth : -spaceWidth,
              y: Math.abs(pan.y._value) < spaceHeight ? pan.y._value : pan.y._value > 0 ? spaceHeight : -spaceHeight
            },
            useNativeDriver: false,
            duration: 500,
            delay: 200
          }).start();
      }
    })
  ).current;

  return (
    <View style={style.mainView}
      onStartShouldSetResponderCapture={() => { return false }}>
      <Animated.View
        style={{
          zIndex: 1,
          transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder.panHandlers}
      >
        <Image
          style={style.moviePoster_posterStyle}
          source={require("../../assets/img/nu_sinh.png")}
        />
      </Animated.View>
      <Text>hello</Text>
    </View>
  )


};

export default ImageScreen;


const style = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  moviePoster_posterStyle: {
    resizeMode: "cover",
    width: 100,
    height: 130
  }
});


