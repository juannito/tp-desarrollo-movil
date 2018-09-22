import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Map from "./components/Map";
import Camera from "./components/Camera";

export default class App extends React.Component {
  handleLocationChange = coordinates => {
    console.log(coordinates);
  };

  handlePictureTake = photoUrl => {
    console.log(photoUrl);
  };

  render() {
    return (
      <View style={styles.container}>
        <Map onLocationChange={this.handleLocationChange} />
        <Camera onPictureTake={this.handlePictureTake} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
