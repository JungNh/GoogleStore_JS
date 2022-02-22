import React, {useState, useRef} from 'react';
import { Animated, PanResponder, View, Image, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },  
  moviePoster_posterStyle: {
    resizeMode: "cover",
    width:100,
    height:130
  }
});

const ImageScreen = () => {

  const pan = useRef(new Animated.ValueXY()).current;

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
        ],
        {useNativeDriver: false}
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  ).current;

    return (
      <View style={style.mainView}
        onStartShouldSetResponderCapture={() => {return false}}>
        <Animated.View
          style={{
            transform: [{ translateX: pan.x }, { translateY: pan.y }]
          }}
          {...panResponder.panHandlers}
        >
          <Image
              style={style.moviePoster_posterStyle}
              source={require("../../assets/img/nu_sinh.png")}
          />
        </Animated.View>
      </View>
    )


};

export default ImageScreen;