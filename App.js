import { StatusBar } from 'expo-status-bar';
import styles from './App.styles.js';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >Welcome to NeighbourSoup!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

