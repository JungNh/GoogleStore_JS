import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    Text,
    View,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { getMovies } from '../../../api_movies'
import AntDesign from 'react-native-vector-icons/AntDesign';

const { width, height } = Dimensions.get('window')
const post_margin = 10
const RATING_DATA = [1, 2, 3, 4, 5]

const ShopScreen = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

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
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.post_bg}>
                            <Image source={{ uri: item.poster }} style={styles.post_img} />
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
        </View>
    );
};

export default ShopScreen;

const styles = StyleSheet.create({
    post_bg: {
        width: (width - 3 * post_margin) / 2,
        height: width / 1.2,
        backgroundColor: 'white',
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
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    post_genres: {
        fontSize: 8
    }
})