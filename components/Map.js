import React, {Component} from 'react';
import { MapView } from 'expo';

import { StyleSheet} from "react-native"

export default class Map extends Component {

  render() {
    return (
      <MapView
        style={StyleSheet.absoluteFill}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
}