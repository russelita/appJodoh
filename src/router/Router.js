import React, { Component } from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import Home from '../page/Home';
import Registrasi from '../page/Registrasi';
import Login from '../page/Login';
import Main  from '../page/Main';
import Calon from '../page/Calon';
import Pilih from '../page/Pilih';
// import MapPage from '../page/MapPage';

const Stack = createStackNavigator();
export class Router extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="home" component={Home}/>
                <Stack.Screen name="registrasi" component={Registrasi}/>
                <Stack.Screen name="login" component={Login}/>
                <Stack.Screen name="main" component={Main}/>
                <Stack.Screen name="calon" component={Calon}/>
                <Stack.Screen name="pilih" component={Pilih}/>
                {/* <Stack.Screen name="MapPage" component={MapPage}/> */}
            </Stack.Navigator>
        )
    }
}

export default Router
