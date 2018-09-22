import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Map from './components/Map'
import Localizar from './components/Location'

export default class App extends Component {
  handleLocationChange = coordinates => {
    console.log(coordinates)
  }

  handlePictureTake = photoUrl => {
    console.log(photoUrl)
  }

  render() {
    return (
      <View style={styles.container}>
        <Map onLocationChange={this.handleLocationChange} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#888',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
