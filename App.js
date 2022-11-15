import { StatusBar } from 'expo-status-bar';
import styles from './AppStyles.js';
import { Text, View } from 'react-native';
import Messaging from './pages/messaging/messaging.js';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.title} >OpeSSn up App.js to start working on your app! >:D</Text>
    //   <StatusBar style="auto" />
    // </View>
    <Messaging />
  );
}

