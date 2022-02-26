import React, { useState, useRef, useEffect } from 'react';
import {
  Animated,
  PanResponder,
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { getMovies } from '../../../api_movies'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import FastImage from 'react-native-fast-image';
import Modal from 'react-native-modal';

const { width, height } = Dimensions.get('screen');
const iconSize = 70;
const spaceWidth = width / 2 - (iconSize / 2);
const spaceHeight = height / 2 - 120;
const post_margin = 10;
const RATING_DATA = [1, 2, 3, 4, 5];
const DARK = '#000';
const LIGHT = '#FFF';
const GRAY = '#2b2b2b';


const ImageScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isVisible, setisVisible] = useState(false);
  const [itemChoice, setitemChoice] = useState();

  const getData = async () => {
    try {
      const response = await getMovies();
      console.log('DATA', response)
      setData(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

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
    <View style={styles.mainView}
      onStartShouldSetResponderCapture={() => { return false }}>

      {isLoading ? <ActivityIndicator /> : (
        <>
          <Animated.View
            style={{
              zIndex: 1,
              position: 'absolute',
              transform: [{ translateX: pan.x }, { translateY: pan.y }]
            }}
            {...panResponder.panHandlers}
          >
            <TouchableOpacity style={{ alignItems: 'flex-end' }} onPress={() => alert('Show')}>
              <AntDesign name={'closecircle'} size={18} color={'gray'} onPress={() => alert('Close')} />
              <Image
                style={styles.moviePoster_posterStyle}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS00Y8kE4WRVvh5CRHoWCivX3q5XMMvSsfIfQ&usqp=CAU' }}
              />
            </TouchableOpacity>
          </Animated.View>
          <FlatList
            style={{ flex: 1 }}
            numColumns={2}
            data={data}
            keyExtractor={({ id }, index) => index.toString()}
            key={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.post_bg} onPress={() => {
                setisVisible(true)
                setitemChoice(item)
              }}>
                <FastImage source={{ uri: item.poster }} style={styles.post_img} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.post_title}>{item.title}</Text>
                </View>
                {/* <View style={{flexDirection:'row'}}>
                                {item.genres.map((item, index) => (<Text style={styles.post_genres}>{item}</Text>))}
                            </View> */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={styles.post_title}>{item.rating}</Text>
                  {RATING_DATA.map((child, index) => (<AntDesign name={'star'} size={12} color={(item.rating / 2 > child) ? 'tomato' : 'gray'} />))}
                </View>
              </TouchableOpacity>
            )}
          />
        </>
      )}
      <Modal
        isVisible={isVisible}
        useNativeDriver
        style={{ margin: 0 }}
        animationIn="fadeIn"
        // coverScreen={true}
        animationOut="fadeOut"
        onBackdropPress={() => setisVisible(!isVisible)}
        animationType='slide'
        style={{
          justifyContent: 'flex-end',
          marginBottom: 0,
          marginHorizontal: 0
        }}
      >
        <View
          style={styles.itemChoice_view_bg}>
          <View style={{ flexDirection: 'row', paddingHorizontal: 15 }}>
            <Image source={{ uri: (itemChoice?.backdrop) }} style={styles.itemChoice_img} resizeMode={'cover'} />
            <View style={{ flex: 1, paddingLeft: 15 }}>
              <Text style={{ fontSize: 24, fontWeight: 'bold', color: LIGHT }}>{itemChoice?.title} </Text>
              <Text style={styles.itemChoice_content}>{itemChoice?.releaseDate} </Text>
              <Text style={styles.itemChoice_content} numberOfLines={5}>{itemChoice?.description} </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <TouchableOpacity style={styles.itemChoice_play_btn}>
              <FontAwesome name={'play'} size={18} color={'black'} />
              <Text style={{ color: 'black', marginLeft: 10, fontSize: 18, fontWeight: 'bold' }}>Phát</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemChoice_download_btn}>
              <Feather name={'download'} size={18} color={LIGHT} />
              <Text style={{ fontWeight: 'bold', color: LIGHT }}>Tải xuống</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemChoice_download_btn}>
              <Feather name={'play'} size={18} color={LIGHT} />
              <Text style={{ fontWeight: 'bold', color: LIGHT }}>Xem trước</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.itemChoice_content_other}>
            <Feather name={'info'} size={18} color={LIGHT} />
            <Text style={[styles.itemChoice_content, { marginHorizontal: 5, lineHeight: 16 }]}>Chi tiết & nội dung khác</Text>
            <AntDesign name={'right'} size={18} color={LIGHT} />
          </View>
        </View>
      </Modal>
    </View>
  )


};

export default ImageScreen;


const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  moviePoster_posterStyle: {
    resizeMode: "cover",
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  post_bg: {
    width: (width - 3 * post_margin) / 2,
    height: width / 1.2,
    backgroundColor: LIGHT,
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: post_margin,
    marginTop: post_margin,
    padding: post_margin + 2
  },
  post_img: {
    width: '100%',
    height: '80%',
    borderRadius: 10
  },
  post_title: {
    color: DARK,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  post_genres: {
    fontSize: 12,
    backgroundColor: 'tomato',
    borderRadius: 10,
    marginLeft: 5,
    paddingHorizontal: 5,
    marginVertical: 8
  },
  itemChoice_view_bg: {
    backgroundColor: GRAY,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    width: '100%',
    paddingVertical: 15,
    alignSelf: 'center',
  },
  itemChoice_img: {
    width: 120,
    height: 180,
    borderRadius: 10
  },
  itemChoice_play_btn: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: LIGHT,
    padding: 10,
    justifyContent: 'center',
    margin: 10
  },
  itemChoice_download_btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemChoice_content: {
    color: LIGHT,
    fontSize: 16
  },
  itemChoice_content_other: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#666f76',
    paddingTop: 15,
    paddingHorizontal: 15,
  }
});


