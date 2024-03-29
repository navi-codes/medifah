// react-bot/src/Medifah.js

    import React, { Component } from 'react';
    import Pusher from 'pusher-js';
    import './variables.env';
    import './medifah.css';

    class Medifah extends Component {
      constructor(props) {
        super(props);
        this.state = {
          userMessage: '',
          conversation: []
        };
      }

      componentDidMount() {
        const pusher = new Pusher('c05db7fc46a13fbe899d', {
          cluster:  'ap2',
          encrypted: true
        });

        const channel = pusher.subscribe('bot');
        channel.bind('bot-response', data => {
          const msg = {
            text: data.message,
            user: 'ai'
          };
          this.setState({
            conversation: [...this.state.conversation, msg]
          });
        });
      }

      handleChange = event => {
        this.setState({ userMessage: event.target.value });
      };

      handleSubmit = event => {
        event.preventDefault();
        if (!this.state.userMessage.trim()) return;

        const msg = {
          text: this.state.userMessage,
          user: 'human'
        };

        this.setState({
          conversation: [...this.state.conversation, msg]
        });

        fetch('http://localhost:5000/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'Application/json' },
          body: JSON.stringify({
            message: this.state.userMessage
          })
        });

        this.setState({ userMessage: '' });
      };

      render() {
        const ChatBubble = (text, i, className) => {
          return (
            <div key={`${className}-${i}`} className={`${className} chat-bubble`}>
              <span className="chat-content">{text}</span>
            </div>
          );
        };

        const chat = this.state.conversation.map((e, index) =>
          ChatBubble(e.text, index, e.user)
        );

        return (
          <div>
            <div className="chat-window">
              <div className="conversation-view">{chat}</div>
              <div className="message-box">
                <form onSubmit={this.handleSubmit}>
                  <input
                    value={this.state.userMessage}
                    onInput={this.handleChange}
                    className="text-input"
                    type="text"
                    autoFocus
                    placeholder="Type your message and hit Enter to send"
                  />
                </form>
              </div>
            </div>
          </div>
        );
      }
    }

    export default Medifah;
