import * as React from 'react';
import { Button, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './src/screens/home/HomeScreen'
import DetailsScreen from './src/screens/DetailsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopScreen from './src/screens/shop/ShopScreen';
import ShortVideoScreen from './src/screens/short/ShortVideoScreen';
import UserScreen from './src/screens//use/UserScreen';

const PRIMARY_COLOR = '#000';
const GRAY_COLOR = '#646567';

const Tab = createBottomTabNavigator();

function AppOther() {
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: 'white',
                        height: 60,
                        width: '80%',
                        position: 'absolute',
                        bottom: 10,
                        left: '10%',
                        borderRadius: 10
                    }
                }}
            >
                <Tab.Screen name="ShortVideo" component={ShortVideoScreen}
                    options={{
                        headerShown: false,
                        tabBarLabel: '',
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused, color }) => (
                            <>
                                <MaterialIcons name={focused ? 'ondemand-video' : 'personal-video'} size={26} color={focused ? PRIMARY_COLOR : GRAY_COLOR} />
                            </>
                        )
                    }} />
                <Tab.Screen name="Shop" component={ShopScreen}
                    options={{
                        headerShown: false,
                        tabBarLabel: '',
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused, color }) => (
                            <>
                                <MaterialCommunityIcons name={focused ? 'shopping' : 'shopping-outline'} size={24} color={focused ? PRIMARY_COLOR : GRAY_COLOR} />
                            </>
                        )
                    }} />
                <Tab.Screen name="User" component={UserScreen}
                    options={{
                        headerShown: false,
                        tabBarLabel: '',
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused, color }) => (
                            <>
                                <MaterialCommunityIcons name={focused ? 'shield-account' : 'shield-account-outline'} size={24} color={focused ? PRIMARY_COLOR : GRAY_COLOR} />
                            </>
                        )
                    }} />
            </Tab.Navigator>
        </>
    );
}


export default AppOther;
