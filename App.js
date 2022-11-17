import { Fontisto, FontAwesome  } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './pages/home/home.js';
import Buy from "./pages/marketplace/Buy.js";
import Sell from "./pages/marketplace/Sell.js";
import CreateListing from "./pages/marketplace/CreateListing.js";
import ListingDetails from './pages/marketplace/ListingDetails.js';
import EditListing from './pages/marketplace/EditListing.js';
import Profile from './pages/profile/Profile.js';
import EditProfile from './pages/profile/Editprofile.js';
import Postcode from './pages/signin_signup/Postcode.js';
import Signin from './pages/signin_signup/Signin.js'
import Signup from './pages/signin_signup/Signup.js'
import Tutorial from './pages/signin_signup/Tutorial.js';


const RootStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export default function App() {
    const TabsNav = () => (
        <Tabs.Navigator screenOptions={{ headerShown: false }}>
        <Tabs.Screen
            name="Buy"
            component={Buy}
            options={{
            tabBarIcon: ({ size }) => <Fontisto name="shopping-store" size={size} color="black" />,
            }}
        />
        <Tabs.Screen
            name="Profile"
            component={Profile}
            options={{
            tabBarIcon: ({ size }) => <FontAwesome name="user-circle-o" size={size} color="black" />,
            }}
        />
        <Tabs.Screen
            name="Jacky Sucks"
            component={Signup}
            options={{
            tabBarIcon: ({ size }) => <FontAwesome name="user-circle-o" size={size} color="black" />,
            }}
        />
        <Tabs.Screen
            name="Home"
            component={Home}
            options={{
                tabBarIcon: ({ size }) => <FontAwesome name="user-circle-o" size={size} color="black" />,
            }}
        />
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
                <RootStack.Screen
                name="Add Listing"
                component={CreateListing}
                options={{ 
                    headerStyle: {height: 120},
                    headerTitleStyle: {fontSize: 20}, 
                    headerBackTitle: "", 
                    headerBackTitleStyle: {fontSize: 30},
                    headerTintColor: 'black'
                }}
                />
                <RootStack.Screen
                name="Edit Listing"
                component={EditListing}
                options={{ 
                    headerStyle: {height: 120},
                    headerTitleStyle: {fontSize: 20}, 
                    headerBackVisible: false
                }}
                />
                <RootStack.Screen
                    name="ListingDetails"
                    component={ListingDetails}
                    options={{ 
                        headerStyle: {height: 120},
                        headerTitleStyle: {fontSize: 20}, 
                        headerBackTitle: "", 
                        headerBackTitleStyle: {fontSize: 30},
                        headerTintColor: 'black'
                    }}
                />
                <RootStack.Screen
                    name="Edit Profile"
                    component={EditProfile}
                    options={{animation: 'none',  headerShown: false,}}
                />
                <RootStack.Screen 
                  name="Signup" 
                  component={Signup} 
                  options={{ headerShown: false }}
                />
                <RootStack.Screen 
                  name="Signin" 
                  component={Signin} 
                  options={{ headerShown: false }}
                />
                <RootStack.Screen
                  name="Postcode"
                  component={Postcode}
                  options={{ headerShown: false }}
                />
                <RootStack.Screen
                name="Tutorial"
                component={Tutorial}
                options={{ headerShown: false, }}
                />
                <RootStack.Screen
                name="Home"
                component={Home}
                options={{animation: 'none',  headerShown: false,}}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
