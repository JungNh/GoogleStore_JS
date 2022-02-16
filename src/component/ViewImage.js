import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import FastImage from 'react-native-fast-image';

export default function ViewImage({callBack}) {
    const [time, setTime] = useState(3)
    useEffect(() => {
        const tr = setTimeout(() => {
            setTime(time - 1)
        }, 1000)
        if (time == 0) {
            callBack();
            return clearTimeout(tr)
        }
        return () => {
            return clearTimeout(tr)
        }
    }, [time])

    return (
        <View>
            <FastImage
                // source={{ uri: 'https://info-imgs.vgcloud.vn/2020/08/23/11/nu-sinh-bach-khoa-mac-dong-phuc-the-duc-van-du-gay-thuong-nho-3.jpg' }}
                source={require('../assets/img/nu_sinh.png')}
                style={{ width: 300, height: 300, resizeMode: 'cover', borderRadius:5 }} />
        </View>
    );
}
