import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import io from 'socket.io-client';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: '',
      chatMessages: [],
    };
  }
  // socket.io connection in componentDidMount so it connects on first page load
  componentDidMount() {
    this.socket = io('http://127.0.0.1:3000');
    this.socket.on('chat message', msg => {
      this.setState({ chatMessages: [...this.state.chatMessages, msg]
      })
    })
  };
  submitChatMessage() {
    this.socket.emit('chat message', this.state.chatMessage)
    this.setState({ chatMessage: '' });
  };
  render() {
    const chatMessages = this.state.chatMessages.map(chatMessage => <Text key={chatMessage}>{chatMessage}</Text>)
    return (
      <View style={styles.container}>
        <TextInput 
        // inline styling, can also do separatly. better to do separately if doing much more styling
        style={
          {
            height: 40,
            borderWidth: 2,
            marginTop: 10,
          }
        }
        value={this.state.chatMessage}
        autoCorrect={false}
        // function that will submit the message to the backend
        onSubmit={() => this.submitChatMessage}
        onChangeText={chatMessage => {
                          // es6 syntax. actually means chatMessage: chatMessage
                          // since the names are the same the second can be ommitted
          this.setState({ chatMessage });
        }}/>
        {chatMessages}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});