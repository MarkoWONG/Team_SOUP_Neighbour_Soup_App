import { TextInput } from '@react-native-material/core'
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Pressable } from 'react-native'

export default function Signup({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[styles.colour, styles.title]}>Hello!</Text>
        <Text style={styles.title}>Signup to</Text>
        <Text style={styles.title}>get started</Text>
      </View>

      <View style={styles.inputContainer}>
        <Input placeholder="Name" />
        <Input placeholder="Email address" />
        <Input placeholder="Password" />
        <Input placeholder="Confirm your password" />

        <Pressable 
          style={styles.button} 
          onPress={() =>
            navigation.navigate('Postcode')
          }
          >
          <Text style={styles.buttonText}>Sign up</Text>
        </Pressable>
      </View>
      
      <View style={styles.bottomContainer}>
        <Text style={styles.altText}>Already have an accounts?</Text>
        <Pressable
          onPress={() =>
            navigation.navigate('Signin')
          }
        >
          <Text style={[styles.altText, styles.underline]}>Sign in</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
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
    marginBottom: 5
  },
  underline: {
    textDecorationLine: 'underline'
  }
})