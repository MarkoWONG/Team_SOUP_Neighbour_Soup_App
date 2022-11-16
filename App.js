import { StatusBar } from 'expo-status-bar';
import styles from './App.styles.js';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const RootStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export default function App() {
  const TabsNav = () => (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="Todo"
        component={Todo}
        options={{
          tabBarIcon: ({ size }) => <Ionicons name="md-list" size={size} />,
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ size }) => <Ionicons name="md-settings" size={size} />,
        }}
      />
    </Tabs.Navigator>
  );


  return (<NavigationContainer>
    <View style={styles.container}>
      <Text style={styles.title} >Welcome to NeighbourSoup!</Text>
      <StatusBar style="auto" />
    </View>
  </NavigationContainer>
  );
}

