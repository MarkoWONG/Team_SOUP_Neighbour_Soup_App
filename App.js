import Ionicons from "@expo/vector-icons/Ionicons";
import { Fontisto } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Marketplace from "./pages/marketplace/Buy";
import Sell from "./pages/marketplace/Sell";
import Buy from "./pages/marketplace/Buy";

const RootStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export default function App() {
  const TabsNav = () => (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="Marketplace"
        component={Marketplace}
        options={{
          tabBarIcon: ({ size }) => <Fontisto name="shopping-store" size={size} color="black" />,
        }}
      />
      {/* <Tabs.Screen
        name="Profile"
        component={account}
        options={{
          tabBarIcon: ({ size }) => <Ionicons name="md-settings" size={size} />,
        }}
      /> */}
    </Tabs.Navigator>
  );

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="BottomTabs">
        <RootStack.Screen
          name="BottomTabs"
          component={TabsNav}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Sell"
          component={Sell}
          options={{animation: 'none', headerShown: false, }}
        />
        <RootStack.Screen
          name="Buy"
          component={Buy}
          options={{animation: 'none',  headerShown: false,}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
