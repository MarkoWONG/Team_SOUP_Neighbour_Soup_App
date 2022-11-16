import { TextInput } from '@react-native-material/core'
import { useState } from 'react'
import { Alert, View, Text, StyleSheet, SafeAreaView, StatusBar, Pressable } from 'react-native'

export default function Postcode() {
  const createAlert = () =>
    Alert.alert(
      "Terms and Conditions",
      "This is a screen to show Terms and Conditions",
      [
        { text: "OK" }
      ]
    );

  const [valid, setValid] = useState(false)

  function checkInput (event) {
    if (event.length == 4) {
      setValid(true)
    } else {
      setValid(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[styles.colour, styles.title]}>Welcome to</Text>
        <Text style={styles.title}>Neighboursoup</Text>
        <Text style={styles.titleCont}>A few more details to connect you to your neighbourhood</Text>
      </View>

      <View style={styles.inputContainer}>
      <TextInput
        placeholder="Postcode"
        style={styles.input}
        keyboardType='numeric'
        onChangeText={checkInput}
        returnKeyType='done' 
      />

        <Text style={styles.altText}>
          Review our 
          <Text style={{ color: '#4878D4' }} onPress={createAlert}>
            &nbsp; privacy policy &nbsp;
          </Text> 
           here
        </Text>

      </View>
      
      {valid
        ? <Pressable style={[styles.button, styles.validColour]}>
            <Text style={styles.buttonText}>Confirm</Text>
          </Pressable>
        : <Pressable style={[styles.button, styles.invalidColour]}>
            <Text style={styles.buttonText}>Confirm</Text>
          </Pressable>
      }
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    marginTop: StatusBar.currentHeight,
  },
  colour: {
    color: '#6BB972'
  },
  validColour: {
    backgroundColor: '#6BB972'
  },
  invalidColour: {
    backgroundColor: 'grey'
  },
  title: {
    fontSize: 40,
    fontWeight: '500'
  },
  titleCont: {
    marginTop: 20,
    fontSize: 17,
    maxWidth: '90%'
  },  
  titleContainer: {
    marginLeft: 25,
    marginTop: 58
  },  
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  input: {
    width: '90%',
    marginBottom: 30,
  },
  button: {
    width: '90%',
    height: 47,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    marginBottom: 15,
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center'
  },  
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  altText: {
    fontSize: 16, 
    color: '#777D84', 
    textDecorationLine: 'underline',
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: 20,
  }
})