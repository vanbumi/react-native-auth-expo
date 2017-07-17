import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm'; 

export default class Main extends React.Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCAVkA-9hgCCORK-9P88uhnAtfuJ436y-Y",
      authDomain: "auth-bdcdc.firebaseapp.com",
      databaseURL: "https://auth-bdcdc.firebaseio.com",
      projectId: "auth-bdcdc",
      storageBucket: "auth-bdcdc.appspot.com",
      messagingSenderId: "351710240008"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false })
      }
    });
  }

  renderContent() {

    switch(this.state.loggedIn) {
      case true:
        return <Button>Log Out</Button>
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 160 }}>
            <Spinner size='large' />
          </View>
        );
    }    
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}