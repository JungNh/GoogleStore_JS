// import * as React from 'react';
// import { Button, View, Text, Image, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import HomeScreen from './src/screens/home/HomeScreen'
// import DetailsScreen from './src/screens/DetailsScreen';
// import SettingsScreen from './src/screens/shop/ShopScreen';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import UtilitiesScreen from './src/screens/utilities/UtilitiesScreen';
// import FilmsScreen from './src/screens/film/FilmsScreen';
// import BooksScreen from './src/screens/book/BooksScreen';
// import LoginScreen from './src/screens/auth/LoginSreen'
// import AppOther from './AppOther';
// import { Provider } from 'react-redux'
// import { Store } from './src/redux/store';
// import { SafeAreaView } from 'react-native-safe-area-context';
// const { width, height } = Dimensions.get('window')
// const PRIMARY_COLOR = '#00885c';
// const GRAY_COLOR = '#646567';

// const Stack = createNativeStackNavigator();

// function Root() {
//   return (
//     <Provider store={Store}>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Auth"
//           // screenOptions={{
//           //   headerStyle: {
//           //     backgroundColor: 'white',
//           //     height: 100
//           //   },
//           //   headerTintColor: PRIMARY_COLOR,
//           //   headerTitleStyle: {
//           //     fontWeight: 'bold',
//           //   },
//           // }}
//           screenOptions={{
//             headerShown: false
//           }}
//         >
//           {/* <Stack.Screen name="Auth" component={LoginScreen} /> */}
//           <Stack.Screen name="BottomBar" component={BottomBar}
//           // options={{
//           //   headerTitle: (props) => (
//           //     <View style={{ width: '90%', alignItems: 'center', marginLeft: -10, borderWidth:0.5, borderRadius:5,  }}>
//           //       <Text>hello</Text>
//           //     </View>
//           //   ),

//           // }}
//           />
//           <Stack.Screen name="AppOther" component={AppOther} />
//           <Stack.Screen name="Details" component={DetailsScreen}
//             options={({ route }) => ({
//               title: route.params?.post,
//               headerStyle: {
//                 backgroundColor: '#fff',
//               },
//               headerTintColor: '#000',
//               headerTitleStyle: {
//                 fontWeight: 'bold',
//               },
//             })} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// }

// const Tab = createBottomTabNavigator();

// function BottomBar() {
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
//       <StatusBar
//         backgroundColor="white"
//         barStyle={'dark-content'}
//       />
//       <View style={{
//         height: "6%",
//         width: '80%',
//         backgroundColor: 'white',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         shadowColor: "#000",
//         shadowOffset: {
//           width: 0,
//           height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//         borderRadius: 5,
//         alignSelf: 'center',
//         marginTop: 5,
//         flexDirection: 'row',
//         paddingHorizontal: 10
//       }}>
//         <Ionicons name={'search'} size={26} color={GRAY_COLOR} onPress={() => alert('hello')} />
//         <Text>Tìm kiếm ứng dụng và trò chơi</Text>
//         <Ionicons name={'ios-mic-outline'} size={26} color={GRAY_COLOR} />
//       </View>
//       <Tab.Navigator
//       // screenOptions={{
//       //   tabBarStyle: {
//       //     backgroundColor: '#000',
//       //     height: 60,
//       //     width: '80%',
//       //   }
//       // }}
//       >
//         <Tab.Screen name="Home" component={HomeScreen}
//           options={{
//             headerShown: false,
//             tabBarLabel: '',
//             tabBarShowLabel: false,
//             tabBarIcon: ({ focused, color }) => (
//               <>
//                 <Ionicons name={focused ? 'game-controller' : 'game-controller-outline'} size={26} color={focused ? PRIMARY_COLOR : GRAY_COLOR} />
//                 <Text style={{ fontSize: 10, color: focused ? PRIMARY_COLOR : GRAY_COLOR, fontWeight: '700' }}>Trang chủ</Text>
//               </>
//             )
//           }} />
//         <Tab.Screen name="Utilities" component={UtilitiesScreen}
//           options={{
//             headerShown: false,
//             tabBarLabel: '',
//             tabBarShowLabel: false,
//             tabBarIcon: ({ focused, color }) => (
//               <>
//                 <Ionicons name={focused ? 'ios-apps-sharp' : 'ios-apps-outline'} size={24} color={focused ? PRIMARY_COLOR : GRAY_COLOR} />
//                 <Text style={{ fontSize: 10, color: focused ? PRIMARY_COLOR : GRAY_COLOR, fontWeight: '700' }}>Ứng dụng</Text>
//               </>
//             )
//           }} />
//         <Tab.Screen name="Film" component={FilmsScreen}
//           options={{
//             headerShown: false,
//             tabBarLabel: '',
//             tabBarShowLabel: false,
//             tabBarIcon: ({ focused, color }) => (
//               <>
//                 <Ionicons name={focused ? 'md-film-sharp' : 'md-film-outline'} size={24} color={focused ? PRIMARY_COLOR : GRAY_COLOR} />
//                 <Text style={{ fontSize: 10, color: focused ? PRIMARY_COLOR : GRAY_COLOR, fontWeight: '700' }}>Phim</Text>
//               </>
//             )
//           }} />
//         <Tab.Screen name="Books" component={BooksScreen}
//           options={{
//             headerShown: false,
//             tabBarLabel: '',
//             tabBarShowLabel: false,
//             tabBarIcon: ({ focused, color }) => (
//               <>
//                 <MaterialCommunityIcons name={focused ? 'book' : 'book-outline'} size={24} color={focused ? PRIMARY_COLOR : GRAY_COLOR} />
//                 <Text style={{ fontSize: 10, color: focused ? PRIMARY_COLOR : GRAY_COLOR, fontWeight: '700' }}>Sách</Text>
//               </>
//             )
//           }} />
//       </Tab.Navigator>
//     </SafeAreaView>
//   );
// }

// export default Root;

import * as React from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useNavigation} from '@react-navigation/native';

function FeedScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed!</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications!</Text>
    </View>
  );
}

// const des ={"Feed-bx5RCXAvgmNVN_1u271dB":
// {"navigation": {"addListener": [Function addListener], "canGoBack": [Function canGoBack], "dispatch": [Function dispatch], "getParent": [Function getParent], "getState": [Function anonymous], "goBack": [Function anonymous], "isFocused": [Function isFocused], "jumpTo": [Function anonymous], "navigate": [Function anonymous], "removeListener": [Function removeListener], "reset": [Function anonymous], "setOptions": [Function setOptions], "setParams": [Function anonymous]}
// , "options": {"tabBarActiveTintColor": "white", "tabBarContentContainerStyle": [Object], "tabBarItemStyle": [Object], "tabBarLabel": "Home", "tabBarLabelStyle": [Object], "tabBarStyle": [Object]}
// , "render": [Function render]
// , "route": {"key": "Feed-bx5RCXAvgmNVN_1u271dB", "name": "Feed", "params": undefined}
// }, "Notifications-ZNIWFKxSTyrXABX3TLbL0":
// {"navigation": {"addListener": [Function addListener], "canGoBack": [Function canGoBack], "dispatch": [Function dispatch], "getParent": [Function getParent], "getState": [Function anonymous], "goBack": [Function anonymous], "isFocused": [Function isFocused], "jumpTo": [Function anonymous], "navigate": [Function anonymous], "removeListener": [Function removeListener], "reset": [Function anonymous], "setOptions": [Function setOptions], "setParams": [Function anonymous]}
// , "options": {"tabBarActiveTintColor": "white", "tabBarContentContainerStyle": [Object], "tabBarItemStyle": [Object], "tabBarLabel": "Updates", "tabBarLabelStyle": [Object], "tabBarStyle": [Object]}
// , "render": [Function render],
// "route": {"key": "Notifications-ZNIWFKxSTyrXABX3TLbL0", "name": "Notifications", "params": undefined}}}

const MyTabBar = ({state, descriptors, navigation, position}) => {
  console.log('STATE', state);
  // console.log('DES', descriptors);
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        // console.log('OPtion', options);
        const label = options.tabBarLabel;
        const isForcused = state.index;
        console.log('isForcused', isForcused);
        const onPress = () => {
          // console.log('onPress');
          // const event = navigation.emit({
          //   type: 'tabPress',
          //   target: route.key,
          //   canPreventDefault: true,
          // });
          // if (!isForcused && !event.defaultPrevented) {
          navigation.navigate(route.name);
          // }
        };

        const onLongPress = () => {
          console.log('onLongPress');
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              backgroundColor: isForcused == index ? 'blue' : 'white',
            }}>
            <Text style={{color: isForcused == index ? 'red' : 'black'}}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  const navigation = useNavigation();
  const [index, setIndex] = React.useState(1);
  return (
    <View style={{backgroundColor: 'white', marginTop: 20, flex: 1}}>
      <StatusBar hidden />
      <Tab.Navigator
        initialRouteName="Feed"
        tabBar={props => <MyTabBar {...props} />}
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
          tabBarStyle: {backgroundColor: 'white', justifyContent: 'center'},
          tabBarItemStyle: {
            width: 150,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            // backgroundColor: 'transparent',
            // alignItems: 'center',
            backgroundColor: '#0066FF',
            marginLeft: 1,
            // marginLeft: 100,
            // justifyContent: 'center',
          },
          tabBarContentContainerStyle: {
            // backgroundColor: 'green',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            // height: 0,
            // padding: 100,
          },
        }}>
        <Tab.Screen
          name="Feed"
          component={FeedScreen}
          options={{tabBarLabel: 'Home'}}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{tabBarLabel: 'Updates'}}
        />
        {/* <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{tabBarLabel: 'Profile'}}
      /> */}
      </Tab.Navigator>
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
