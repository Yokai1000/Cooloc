import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import   Home   from './components/Home'
import LoginForm from './components/LoginForm'

  
export default function App() {
  return (
    <View style={styles.container}>
      <LoginForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
