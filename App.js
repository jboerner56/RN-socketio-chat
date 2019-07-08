import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import io from 'socket.io-client';

class App extends React.Component() {
  // socket.io connection in componentDidMount so it connects on first page load
  componentDidMount() {
    const socket = io('http://127.0.0.1:3000');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;