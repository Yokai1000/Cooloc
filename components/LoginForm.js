import React from 'react'
import {Button, View, TextInput, StyleSheet } from 'react-native'

export default class LoginForm extends React.Component {

  render() {
    return (
      <View style={styles.formContainer}>
        <TextInput
        style={styles.inputText}
        placeholder={"Nom d'utilisateur"}
        editable
        autoCompleteType={'username'}
        textContentType={'username'} />
        <TextInput
        style={styles.inputText}
        editable
        placeholder={'Mot de passe'}
        autoCompleteType={'password'}
        textContentType={'password'} />
        <View>
          <Button
          title="Se Connecter"
          onPress={() => console.log('Connexion')}
          />
          <Button
          title="S'enregistrer"
          onPress={() => console.log('Enregistrement')}
          />
        </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  formContainer: {
    width: '80%',
    marginTop: 50,
    marginBottom: 50,
  },
  inputText: {
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    paddingLeft: 5,
    marginTop: 20,
    marginBottom:20,

  }
})