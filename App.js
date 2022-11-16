import { StatusBar } from 'expo-status-bar';
import styles from './App.styles.js';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (<NavigationContainer>
    <View style={styles.container}>
      <Text style={styles.title} >Welcome to NeighbourSoup!</Text>
      <StatusBar style="auto" />
    </View>
  </NavigationContainer>
  );
}

