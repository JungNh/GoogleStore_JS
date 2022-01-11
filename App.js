import * as React from 'react';
import { Button, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './src/screens/home/HomeScreen'
import DetailsScreen from './src/screens/DetailsScreen';
import SettingsScreen from './src/screens/shop/ShopScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UtilitiesScreen from './src/screens/utilities/UtilitiesScreen';
import FilmsScreen from './src/screens/film/FilmsScreen';
import BooksScreen from './src/screens/book/BooksScreen';
import AppOther from './AppOther';

const PRIMARY_COLOR = '#00885c';
const GRAY_COLOR = '#646567';

const Stack = createNativeStackNavigator();

function Root() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
          height:100
        },
        // headerTintColor: PRIMARY_COLOR,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      // screenOptions={{
      //   headerShown: false
      // }}
      >
        <Stack.Screen name="BottomBar" component={BottomBar}
          // options={{
          //   headerTitle: (props) => (
          //     <View style={{backgroundColor:'red'}}>
          //       <Text>hello</Text>
          //     </View>
          //   ),
          // }}
        />
         <Stack.Screen name="AppOther" component={AppOther}/>
        <Stack.Screen name="Details" component={DetailsScreen}
          options={({ route }) => ({
            title: route.params?.post,
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

function BottomBar() {
  return (
    <>
      <Tab.Navigator
      // screenOptions={{
      //   tabBarStyle: {
      //     backgroundColor: '#000',
      //     height: 60,
      //     width: '80%',
      //   }
      // }}
      >
        <Tab.Screen name="Home" component={HomeScreen}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color }) => (
              <>
                <Ionicons name={focused ? 'game-controller' : 'game-controller-outline'} size={26} color={focused ? PRIMARY_COLOR : GRAY_COLOR} />
                <Text style={{ fontSize: 10, color: focused ? PRIMARY_COLOR : GRAY_COLOR, fontWeight: '700' }}>Trang chủ</Text>
              </>
            )
          }} />
        <Tab.Screen name="Utilities" component={UtilitiesScreen}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color }) => (
              <>
                <Ionicons name={focused ? 'ios-apps-sharp' : 'ios-apps-outline'} size={24} color={focused ? PRIMARY_COLOR : GRAY_COLOR} />
                <Text style={{ fontSize: 10, color: focused ? PRIMARY_COLOR : GRAY_COLOR, fontWeight: '700' }}>Ứng dụng</Text>
              </>
            )
          }} />
        <Tab.Screen name="Film" component={FilmsScreen}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color }) => (
              <>
                <Ionicons name={focused ? 'md-film-sharp' : 'md-film-outline'} size={24} color={focused ? PRIMARY_COLOR : GRAY_COLOR} />
                <Text style={{ fontSize: 10, color: focused ? PRIMARY_COLOR : GRAY_COLOR, fontWeight: '700' }}>Phim</Text>
              </>
            )
          }} />
        <Tab.Screen name="Books" component={BooksScreen}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color }) => (
              <>
                <MaterialCommunityIcons name={focused ? 'book' : 'book-outline'} size={24} color={focused ? PRIMARY_COLOR : GRAY_COLOR} />
                <Text style={{ fontSize: 10, color: focused ? PRIMARY_COLOR : GRAY_COLOR, fontWeight: '700' }}>Sách</Text>
              </>
            )
          }} />
      </Tab.Navigator>
    </>
  );
}


export default Root;
