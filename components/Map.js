import React, { Component } from "react";
import { Platform } from "react-native";
import { Constants, Location, Permissions, MapView } from "expo";

import { StyleSheet } from "react-native";

const GEOLOCATION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 20000,
  maximumAge: 1000
};

export default class Map extends Component {
  state = {
    location: null,
    errorMessage: null,
    region: null
  };

  componentWillMount() {
    Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
  }

  componentDidMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    let location = await Location.getCurrentPositionAsync({});
  };

  locationChanged = location => {
    let region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.005
    };
    this.setState({ location, region });
  };

  render() {
    const { offOn } = this.props;

    return (
      <MapView
        style={StyleSheet.absoluteFill}
        region={this.state.region}
        showsUserLocation={offOn}
        followUserLocation={offOn}
      />
    );
  }
}
