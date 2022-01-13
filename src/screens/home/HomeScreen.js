import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header, Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-paper';

const { width, height } = Dimensions.get('window')
const PRIMARY_COLOR = '#00885c';
const GRAY_COLOR = '#7c7c7c';

function HomeScreen({ navigation }) {
    return (
        <View style={{flex:1}}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details', { post: 'Product' })}
                />
                <Button
                    title="Go to AppOrther"
                    onPress={() => navigation.navigate('AppOther')}
                />
            </View>
        </View>
    );
}

export default HomeScreen