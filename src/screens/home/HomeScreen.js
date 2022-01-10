import * as React from 'react';
import { Button, View, Text } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details', { post: 'Product' })}
            />
            <Button
                title="Go to AppOrther"
                onPress={() => navigation.navigate('AppOrther')}
            />
        </View>
    );
}

export default HomeScreen