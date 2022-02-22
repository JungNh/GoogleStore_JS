import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    Text,
    View,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { getMovies } from '../../../api_movies'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import FastImage from 'react-native-fast-image';
import Modal from 'react-native-modal';

const DARK = '#000';
const LIGHT = '#FFF';
const GRAY = '#2b2b2b';

const { width, height } = Dimensions.get('window')
const post_margin = 10
const RATING_DATA = [1, 2, 3, 4, 5]

const ShopScreen = () => {
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

    return (
        <View style={{ flex: 1 }}>
            {isLoading ? <ActivityIndicator /> : (
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
                    <View style={{ flexDirection: 'row', paddingHorizontal:15 }}>
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
                        <Text style={styles.itemChoice_content}>Chi tiết & nội dung khác</Text>
                        <AntDesign name={'right'} size={18} color={LIGHT} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default ShopScreen;

const styles = StyleSheet.create({
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
        paddingHorizontal: 15
    }
})