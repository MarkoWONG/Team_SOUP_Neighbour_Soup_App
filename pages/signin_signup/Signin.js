import { TextInput } from '@react-native-material/core'
import { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Pressable, Alert } from 'react-native'

export default function Signin({ navigation }) {
  const createAlert = () =>
    Alert.alert(
      "Reset your password",
      "This is a screen for user to reset their password",
      [
        { text: "OK" }
      ]
    );

  const loginFailAlert = () => {
    Alert.alert(
      "Incorrect password",
      "Please try again",
      [
        { text: "Ok" }
      ]
    );
  }

  function checkLogin () {
    if (email === 'Jacky@gmail.com' && password === 'password') {
      navigation.navigate('BottomTabs')
    } else {
      loginFailAlert()
    }
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[styles.colour, styles.title]}>Hello Again!</Text>
        <Text style={styles.title}>Welcome back</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput 
          style={{ height: 70 }}
          placeholder="Email address" 
          onChangeText={text => setEmail(text)}
        />
        <TextInput 
          style={{ height: 70 }}
          placeholder="Password" 
          secureTextEntry={true} 
          onChangeText={text => setPassword(text)}
        />

        <Pressable 
          style={styles.button} 
          onPress={checkLogin}
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </Pressable>
      </View>
      
      <View style={styles.bottomContainer}>
        <Pressable
          onPress={createAlert}
        >
          <Text style={styles.altText}>Forget Your Password?</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate('Signup')
          }
        >
          <Text style={styles.altText}>Sign up</Text>
        </Pressable>
      </View>
      
    </SafeAreaView>
  )
}

const Input = ({ placeholder }) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    marginTop: StatusBar.currentHeight
  },
  colour: {
    color: '#6BB972'
  },
  title: {
    fontSize: 40,
    fontWeight: '500'
  },
  titleContainer: {
    marginLeft: 25,
    marginTop: 58
  },  
  inputContainer: {
    width: '90%',
    marginLeft: 18,
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    width: '90%',
    marginBottom: 15,
  },
  button: {
    width: '90%',
    height: 47,
    backgroundColor: '#6BB972',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    marginBottom: 15,
    marginTop: 15
  },  
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  bottomContainer: {
    marginLeft: 25
  },
  altText: {
    fontSize: 15, 
    color: '#777D84', 
    textDecorationLine: 'underline',
    marginBottom: 10
  }
})