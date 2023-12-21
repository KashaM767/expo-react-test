import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SigninScreen from './src/screens/SigninScreen/SigninScreen';
import SignUpScreen from './src/screens/SignupScreen/SignUpScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Signin">
        <Tab.Screen name="signin" component={SigninScreen} />
        <Tab.Screen name="signup" component={SignUpScreen} />
        <Tab.Screen name="reset password" component={ForgotPasswordScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
});
