/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Welcome from "./app/components/welcome"

class alphabet extends Component {
  render() {
    return (
      <Welcome />
    );
  }
}

AppRegistry.registerComponent('alphabet', () => alphabet);
