import { NavigationContainer } from '@react-navigation/native'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Router from './src/router/Router'
import Store from './src/redux/Store'
export class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationContainer>
          <Router/>
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App
// yarn add @react-navigation/native
// expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view