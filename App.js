/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,

  StyleSheet,
  
} from 'react-native';


import Login from './screens/autrh/Login';
import Register from './screens/autrh/Register';
import DetailScreen from './screens/DetailScreen';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from "@react-native-firebase/auth"

const App = () => {
 
  return (
    <SafeAreaView style={{ flex: 1 }} >
      

    <AppNavigationContainer/>

    </SafeAreaView>
  );
};

const Stack = createNativeStackNavigator();

export function HomeStackScreen() {

  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >

      <Stack.Screen name="HomeStack" component={HomeScreen} />
      <Stack.Screen options={{animation:"slide_from_right"}} name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export function AuthStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

export function AppNavigationContainer() {
  const [signedin, setsignedin] = useState(false)
  let isloggedin = false;
  useEffect(() => {
  auth().onAuthStateChanged(user =>{
    if(user){
      setsignedin (true)
    }else{
      setsignedin (false)
    }
    console.log(isloggedin)
  })
  }, [])
  
  
  return (
    <NavigationContainer >
    {signedin ?
      <HomeStackScreen />
      :
      <AuthStackScreen />

    }
  </NavigationContainer>
  );
}



export default App;
