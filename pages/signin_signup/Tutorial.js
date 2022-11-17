import { TextInput } from '@react-native-material/core'
import { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Pressable, Alert, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import {Image} from 'react-native' ; 

export default function Tutorial({ navigation }) {
  const createAlert = () =>
    Alert.alert(
      "Tutorials",
      "it will jump to the next pagination and introduce features app's features to users",
      [
        { text: "OK", onPress: () => navigation.navigate('Home') }
      ]
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[styles.colour, styles.title]}>Welcome to</Text>
        <Text style={styles.title}>Neighboursoup</Text>
      </View>

      <Image
        style={styles.frame}
        source={require('./frame.png')}
      />

      <Image
        style={styles.dot}
        source={require('./dot.png')}
      />

      <Pressable 
        style={styles.button}
        onPress={createAlert}
      >
        <Text style={styles.buttonText}>Next</Text>
      </Pressable>
      
    </SafeAreaView >
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
  title: {
    fontSize: 40,
    fontWeight: '500'
  },
  titleContainer: {
    marginLeft: 25,
    marginTop: 58
  },  
  button: {
    width: '90%',
    height: 47,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    position: 'absolute',
    bottom: 70,
    alignSelf: 'center',
    backgroundColor: '#6BB972'
  },  
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  frame: {
    marginLeft: 50,
    marginTop: 20
  },
  dot: {
    marginLeft: 115,
    marginTop: 40 
  }
})