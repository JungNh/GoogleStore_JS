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
const { width, height } = Dimensions.get('window')
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
            height: 100
          },
          headerTintColor: PRIMARY_COLOR,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="BottomBar" component={BottomBar}
        // options={{
        //   headerTitle: (props) => (
        //     <View style={{ width: '90%', alignItems: 'center', marginLeft: -10, borderWidth:0.5, borderRadius:5,  }}>
        //       <Text>hello</Text>
        //     </View>
        //   ),

        // }}
        />
        <Stack.Screen name="AppOther" component={AppOther} />
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
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{
        height: "6%",
        width: '80%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 5,
        flexDirection: 'row',
        paddingHorizontal: 10
      }}>
        <Ionicons name={'search'} size={26} color={GRAY_COLOR} onPress={() => alert('hello')} />
        <Text>Tìm kiếm ứng dụng và trò chơi</Text>
        <Ionicons name={'ios-mic-outline'} size={26} color={GRAY_COLOR} />
      </View>
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
    </View>
  );
}


export default Root;
