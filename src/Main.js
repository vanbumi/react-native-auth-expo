import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm'; 

export default class Main extends React.Component {
  componetWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCAVkA-9hgCCORK-9P88uhnAtfuJ436y-Y',
      authDomain: 'auth-bdcdc.firebaseapp.com',
      databaseURL: 'https://auth-bdcdc.firebaseio.com',
      projectId: 'auth-bdcdc',
      storageBucket: 'auth-bdcdc.appspot.com',
      messagingSenderId: '351710240008'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}