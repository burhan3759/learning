  /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import Landing from './applicaton/components/landing';
import Login from './applicaton/components/accounts/Login';
import Register from './applicaton/components/accounts/Register';
import { globals } from './applicaton/styles';

class learning extends Component {
  constructor(){
    super();
    this.updateUser = this.updateUser.bind(this);
    this.state = {
      user: null
    };
  }
  updateUser(user){
    this.setState({ user: user });
  }
  render() {
    return (
      <Navigator
        style={globals.flex}
        initialRoute={{ name: 'Landing' }}
        renderScene={(route, navigator) => {
          switch(route.name){
            case 'Landing':
              return (
                <Landing navigator={navigator}/>
            );
            case 'Register':
              return (
                <Register navigator={navigator} />
            );
            case 'Login':
              return (
                <Login navigator={navigator} />
            );
          }
        }}
      />
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('learning', () => learning);
