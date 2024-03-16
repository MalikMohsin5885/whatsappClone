import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, FlatList, StyleSheet, Image, Text } from 'react-native';
import Chat from './components/ChatBar';
import HomeHeader from './components/HomeHeader';




export default function App() {

  const data = [
    { id: '1', key: 'Chat 1' },
    { id: '2', key: 'Chat 2' },
    { id: '3', key: 'Chat 3' },
    { id: '4', key: 'Chat 4' },
    { id: '5', key: 'Chat 5' },
    { id: '6', key: 'Chat 6' },
    { id: '7', key: 'Chat 6' },
    { id: '8', key: 'Chat 6' },
    { id: '9', key: 'Chat 6' },
    { id: '10', key: 'Chat 6' },
    { id: '11', key: 'Chat 6' },
    { id: '12', key: 'Chat 6' },
    { id: '13', key: 'Chat 6' },
    { id: '14', key: 'Chat 6' },
    { id: '15', key: 'Chat 6' },
    { id: '16', key: 'Chat 6' },
  ];

  const renderItem = ({ item }) => (
    <Chat key={item.id} />
  );
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <HomeHeader />
        <View style={styles.listContainer}>
          <Image style={styles.image} source={require('./assets/community.png')} />
          <Text style={styles.name}>Chats</Text>
          <Text style={styles.name}>Status</Text>
          <Text style={styles.name}>Calls</Text>
        </View>
      </View>

      <View style={styles.flatListContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.flatListContent}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    backgroundColor: '#128c7e',
  },
  flatListContainer: {
    flex: 5.2,
    backgroundColor: 'darkgrey',
  },
  flatListContent: {
    flexGrow: 1,
    paddingBottom: 16, // Adjust as needed for bottom padding
  },
  listContainer: {
    flex: 1,
    backgroundColor: 'blue',
    flexDirection: 'row',
    gap: 50
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 11
  },
  name: {
    // backgroundColor: 'red',
    color: 'white',
    fontSize: 23,
    fontFamily: "HelveticaBold",
  },
});

