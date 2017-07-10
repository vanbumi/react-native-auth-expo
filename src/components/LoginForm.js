import React, { Component } from 'react';
//import { TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';


class LoginForm extends Component {
  state = { email: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={ this.state.email } 
            onChangeText={ email => this.setState({ email }) }
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