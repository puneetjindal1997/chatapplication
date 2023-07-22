import Header from './components/Header';
import ChatInput from './components/ChatInput';
import './App.css';
import React, { Component } from 'react';
import { connect,sendMsg } from './api';

import ChatHistory from './components/ChatHistory';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      chatHistory:[],
    }
  }

  componentDidMount(){
    connect((msg)=>{
      console.log("New Messages from user");
      this.setState(prevState =>({
        chatHistory:[...prevState.chatHistory, msg]
      }))
      console.log(this.state);
    });
  }

  send(event){

    // event.charCode == on key press
    // on key down === event.keyCode
    if (event.keyCode === 13){
      sendMsg(event.target.value)
      event.target.value = ''
    }
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <ChatHistory chatHistory={this.state.chatHistory} />
        <ChatInput send={this.send}/>
      </div>
    );
  }
}

export default App;
