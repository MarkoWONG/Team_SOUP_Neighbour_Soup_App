import { TextInput } from '@react-native-material/core'
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native'

export default function Signup() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={[styles.colour, styles.title]}>Hello!</Text>
        <Text style={styles.title}>Signup to</Text>
        <Text style={styles.title}>get started</Text>
      </View>

      <Input placeholder="Name" />
      <Input placeholder="Email address" />
      <Input placeholder="Password" />
      <Input placeholder="Confirm your password" />

      <Text style={styles.altText}>Already have an accounts?</Text>
      <Text style={styles.altText}>Sign in</Text>
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
    fontSize: 40
  },
  altText: {
    fontSize: 12, 
    color: '#777D84'
  },
  input: {
    width: '80%'
  }
})