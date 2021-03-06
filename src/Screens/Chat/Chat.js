import { GiftedChat } from 'react-native-gifted-chat';
import React, {Component} from 'react'
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {messages: []};
    this.onSend = this.onSend.bind(this);
  }
  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',

          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
          user: {
              
            _id: 2,
            name: 'React Native',
            avatar: 'https://digitalrill.com/wp-content/uploads/2019/04/professional-girl-png-8.png',
          },
        },
      ],
    });
  }
  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        
        user={{
          _id: 1,
        }}
      />
    );
  }
}

export default Chat;