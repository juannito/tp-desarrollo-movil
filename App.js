import React, {Component} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import Map from './components/Map'
import Localizar from './components/Location'

export default class App extends Component {
  state = {
    buttonState: false,
    //soloNombre: false,
  }

  handleLocationChange = coordinates => {
    
  }
  
  handlePress = () => {
    this.setState({ buttonState: !this.state.buttonState })
  }

  render() {
    //const { nombre, apellido, style } = this.props
    // aca estoy recibiendo los datos que pasa el padre.
    const { buttonState } = this.state

    //const texto = soloNombre ? nombre : `${nombre} ${apellido}`

    return (
      <View style={styles.container}>
        <Map onLocationChange={this.handleLocationChange} />
        <Button title={buttonState ? 'LOCALIZAR' : 'DESAPARECER'} onPress={this.handlePress}  style={styles.button}/>
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
