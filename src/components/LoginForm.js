import React, { Component } from 'react';
//import { TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';


class LoginForm extends Component {
  state = { text: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={ this.state.text } 
            onChangeText={ text => this.setState({ text }) }
            //style={{ height: 20, width: 100 }}   
          />
        </CardSection>
        
        <CardSection />

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;