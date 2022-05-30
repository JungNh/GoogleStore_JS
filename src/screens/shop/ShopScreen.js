// import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
// import React from 'react'
// import LinearGradient from 'react-native-linear-gradient';
// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   ProgressChart,
//   ContributionGraph,
//   StackedBarChart
// } from "react-native-chart-kit";
// const screenWidth = Dimensions.get("window").width;
// export default function ShopScreen() {
//   const data = {
//     labels: ["T2", "T3", "T4", "T5", "T6", "T7","CN"],
//     datasets: [
//       {
//         data: [20, 45, 28, 80, 100, 43,200],
//         color: (opacity = 1) => `rgba(255, 0, 0)`, // optional
//         strokeWidth: 2 // optional
//       }
//     ],
//     // legend: ["Rainy Days"] // optional
//   };
//   const chartConfig = {
//     backgroundGradientFrom: "#FFF",
//     backgroundGradientFromOpacity: 0,
//     backgroundGradientTo: "#FFF",
//     backgroundGradientToOpacity: 0.5,
//     color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//     strokeWidth: 2, // optional, default 3
//     barPercentage: 0.5,
//     useShadowColorFromDataset: false // optional
//   };
  
//   return (
//     <View style={{ flex: 1 }}>
//       {/* <TouchableOpacity>
//         <LinearGradient colors={['#3CABE9', '#2E81FF']}
//           start={{ x: 0, y: 1 }}
//           end={{ x: 1, y: 1 }}
//           style={styles.linearGradient}>
//           <Text>Unit 9: Lớp 10</Text>
//         </LinearGradient>
//       </TouchableOpacity> */}
//       <View>
//         <Text>Bezier Line Chart</Text>
//         <LineChart
//           data={data}
//           width={screenWidth}
//           height={220}
//           chartConfig={chartConfig}
//         />
//       </View>
//     </View>
//   )
// }

// var styles = StyleSheet.create({
//   linearGradient: {
//     width: '90%',
//     paddingVertical: 10,
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderRadius: 5
//   },
//   buttonText: {
//     fontSize: 18,
//     fontFamily: 'Gill Sans',
//     textAlign: 'center',
//     margin: 10,
//     color: '#ffffff',
//     backgroundColor: 'transparent',
//   },
// });

// Scroll to a Specific Item in ScrollView List View
// https://aboutreact.com/scroll_to_a_specific_item_in_scrollview_list_view/
 
// import React in our code
import React, {useState, useEffect} from 'react';
 
// import all the components we are going to use
import {
  SafeAreaView,
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
 
const App = () => {
  const [dataSource, setDataSource] = useState([]);
  const [scrollToIndex, setScrollToIndex] = useState(0);
  const [dataSourceCords, setDataSourceCords] = useState([]);
  const [ref, setRef] = useState(null);
 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        setDataSource(responseJson);
        // _handleComplete()
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const _handleComplete = () => {
    setTimeout(() => {
      scrollHandler();
    }, 3000);
  };
 
  const scrollHandler = () => {
    console.log(dataSourceCords.length, scrollToIndex);
    if (dataSourceCords.length > scrollToIndex) {
      ref.scrollTo({
        x: 0,
        y: dataSourceCords[scrollToIndex - 1],
        animated: true,
      });
    } else {
      alert('Out of Max Index');
    }
  };
 
  const ItemView = (item, key) => {
    return (
      // Flat List Item
      <View
        key={key}
        style={styles.item}
        onLayout={(event) => {
          const layout = event.nativeEvent.layout;
          dataSourceCords[key] = layout.y;
          setDataSourceCords(dataSourceCords);
          console.log(dataSourceCords);
          console.log('height:', layout.height);
          console.log('width:', layout.width);
          console.log('x:', layout.x);
          console.log('y:', layout.y);
        }}>
        <Text
          style={styles.itemStyle}
          onPress={() => getItem(item)}>
          {item.id}. {item.title}
        </Text>
        <ItemSeparatorView />
      </View>
    );
  };
 
  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View style={styles.itemSeparatorStyle} />
    );
  };
 
  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };
 
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            value={
              String(
                scrollToIndex ?
                scrollToIndex : 0
              )
            }
            numericvalue
            keyboardType={'numeric'}
            onChangeText={(scrollToIndex) => {
              setScrollToIndex(
                parseInt(
                  scrollToIndex != '' ?
                  scrollToIndex : 0
                ),
              );
            }}
            placeholder={'Enter the index to scroll'}
            style={styles.searchInput}
          />
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={scrollHandler}
            style={styles.searchButton}>
            <Text style={styles.searchButtonText}>
              Go to Index
            </Text>
          </TouchableOpacity>
        </View>
        {/* List Item as a function */}
        <ScrollView
          ref={(ref) => {
            setRef(ref);
          }}>
          {dataSource.map(ItemView)}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  itemSeparatorStyle: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#C8C8C8',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#1e73be',
    padding: 5,
  },
  searchInput: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  searchButton: {
    padding: 15,
    backgroundColor: '#f4801e',
  },
  searchButtonText: {
    color: '#fff',
  },
});
 
export default App;