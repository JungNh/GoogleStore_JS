import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Dimensions, StatusBar, Modal } from 'react-native';
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

// import React, { useState } from 'react';
// import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

// const STYLES = ['default', 'dark-content', 'light-content'];
// const TRANSITIONS = ['fade', 'slide', 'none'];

// const App = () => {
//   const [hidden, setHidden] = useState(false);
//   const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
//   const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[0]);

//   const changeStatusBarVisibility = () => setHidden(!hidden);

//   const changeStatusBarStyle = () => {
//     const styleId = STYLES.indexOf(statusBarStyle) + 1;
//     if (styleId === STYLES.length) {
//       setStatusBarStyle(STYLES[0]);
//     } else {
//       setStatusBarStyle(STYLES[styleId]);
//     }
//   };

//   const changeStatusBarTransition = () => {
//     const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
//     if (transition === TRANSITIONS.length) {
//       setStatusBarTransition(TRANSITIONS[0]);
//     } else {
//       setStatusBarTransition(TRANSITIONS[transition]);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar
//         animated={true}
//         backgroundColor="#61dafb"
//         barStyle={statusBarStyle}
//         height={10}
//         showHideTransition={statusBarTransition}
//         hidden={hidden} />
//       <Text style={styles.textStyle}>
//         StatusBar Visibility:{'\n'}
//         {hidden ? 'Hidden' : 'Visible'}
//       </Text>
//       <Text style={styles.textStyle}>
//         StatusBar Style:{'\n'}
//         {statusBarStyle}
//       </Text>
//       {Platform.OS === 'ios' ? (
//         <Text style={styles.textStyle}>
//           StatusBar Transition:{'\n'}
//           {statusBarTransition}
//         </Text>
//       ) : null}
//       <View style={styles.buttonsContainer}>
//         <Button
//           title="Toggle StatusBar"
//           onPress={changeStatusBarVisibility} />
//         <Button
//           title="Change StatusBar Style"
//           onPress={changeStatusBarStyle} />
//         {Platform.OS === 'ios' ? (
//           <Button
//             title="Change StatusBar Transition"
//             onPress={changeStatusBarTransition} />
//         ) : null}
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ECF0F1'
//   },
//   buttonsContainer: {
//     padding: 10
//   },
//   textStyle: {
//     textAlign: 'center',
//     marginBottom: 8
//   }
// });

// export default App;