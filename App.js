import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SigninScreen from './src/screens/SigninScreen/SigninScreen';
import SignUpScreen from './src/screens/SignupScreen/SignUpScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';



export default function App() {
  return (
    <View style={styles.container}>
      <SignUpScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
});
