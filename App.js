import { StatusBar } from 'expo-status-bar';
import styles from './Styles.js';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! >:D</Text>
      <StatusBar style="auto" />
    </View>
  );
}