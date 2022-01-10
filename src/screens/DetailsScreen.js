import * as React from 'react';
import { Button, View, Text } from 'react-native';

function Details({ route, navigation }) {
    const [post, setPost] = React.useState("")
    React.useEffect(() => {
        if (route.params?.post) {
            setPost(route.params?.post)
        }
    }, [route.params?.post])
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Detail Screen {post}</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.push('Details')}
            />
            {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
            <Button title="Go to Setting" onPress={() => navigation.navigate('Settings')} />
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}

export default Details