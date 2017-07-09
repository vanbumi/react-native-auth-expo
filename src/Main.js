import React from 'react';
import { Text, View } from 'react-native';
import { Header } from './components/common'; 

export default class Main extends React.Component {
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>De App!</Text>
      </View>
    );
  }
}