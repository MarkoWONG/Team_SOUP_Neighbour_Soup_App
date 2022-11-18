import { Fontisto, FontAwesome, MaterialIcons  } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './pages/home/Home.js';
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
import messaging from './pages/messaging/Messaging.js';
import CreateGroup from './pages/groups/CreateGroup.js';
import ExploreGroups from './pages/groups/ExploreGroup.js';
import GroupDetails from './pages/groups/GroupDetails.js'
import MyGroups from './pages/groups/MyGroups'
import Tutorial1 from './pages/signin_signup/Tutorial1.js';
import Tutorial2 from './pages/signin_signup/Tutorial2.js';
import Tutorial3 from './pages/signin_signup/Tutorial3.js';
import Tutorial4 from './pages/signin_signup/Tutorial4.js';


const MarketplaceStack = createNativeStackNavigator();
function MarketplaceStackScreen() {
    return (
      <MarketplaceStack.Navigator>
        <MarketplaceStack.Screen
            name="Buy"
            component={Buy}
            options={{animation: 'none',  headerShown: false,}}
        />
        <MarketplaceStack.Screen 
            name="Sell"
            component={Sell}
            options={{animation: 'none', headerShown: false, }}
        />
        <MarketplaceStack.Screen
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
        <MarketplaceStack.Screen 
            name="Edit Listing"
            component={EditListing}
            options={{ 
                headerStyle: {height: 120},
                headerTitleStyle: {fontSize: 20}, 
                headerBackVisible: false
            }}
        />
        <MarketplaceStack.Screen 
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
        <MarketplaceStack.Screen 
            name="Messaging"
            component={messaging}
            options={{animation: 'none',  }}
        />
        </MarketplaceStack.Navigator>
    );
  }

const ProfileStack = createNativeStackNavigator();
function ProfileStackScreen() {
    return (
      <ProfileStack.Navigator>
        <ProfileStack.Screen 
            name="Profile"
            component={Profile}
            options={{animation: 'none',  headerShown: false,}}
        />
        <ProfileStack.Screen
            name="Edit Profile"
            component={EditProfile}
            options={{animation: 'none',  headerShown: false,}}
        />
      </ProfileStack.Navigator>
    );
  }

const ExploreGroupStack = createNativeStackNavigator();
function ExploreGroupScreen() {
    return (
      <ExploreGroupStack.Navigator>
        <ProfileStack.Screen 
            name="ExploreGroups" 
            component={ExploreGroups} 
            options={{ headerShown: false }}
        />
        <ExploreGroupStack.Screen
            name="MyGroups" 
            component={MyGroups} 
            options={{ headerShown: false }}
        />
         <ExploreGroupStack.Screen
            name="GroupDetails" 
            component={GroupDetails} 
        />
         <ExploreGroupStack.Screen
            name="CreateGroup" 
            component={CreateGroup} 
            options={{ headerShown: false }}
        />
        <ExploreGroupStack.Screen 
            name="Messaging"
            component={messaging}
            options={{animation: 'none', }}
        />
      </ExploreGroupStack.Navigator>
    );
  }

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
    return (
    <HomeStack.Navigator>
        <HomeStack.Screen 
            name="Home"
            component={Home}
            options={{animation: 'none',  headerShown: false,}}
        />
    </HomeStack.Navigator>
    );
}

const RootStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export default function App() {
    const TabsNav = () => (
        <Tabs.Navigator screenOptions={{ headerShown: false }}>
            <Tabs.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarIcon: ({ size }) => <FontAwesome name="user-circle-o" size={size} color="black" />,
                }}
            />
        <Tabs.Screen
            name="Marketplace"
            component={MarketplaceStackScreen}
            options={{
            tabBarIcon: ({ size }) => <Fontisto name="shopping-store" size={size} color="black" />,
            }}
        />
        <Tabs.Screen
            name="Groups"
            component={ExploreGroupScreen}
            options={{
            tabBarIcon: ({ size }) => <MaterialIcons name="groups" size={size} color="black" />,
            }}
        />
        <Tabs.Screen
            name="Profile"
            component={ProfileStackScreen}
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
                name="Tutorial1"
                component={Tutorial1}
                options={{ headerShown: false, }}
                />
                <RootStack.Screen
                name="Tutorial2"
                component={Tutorial2}
                options={{ headerShown: false, }}
                />
                <RootStack.Screen
                name="Tutorial3"
                component={Tutorial3}
                options={{ headerShown: false, }}
                />
                <RootStack.Screen
                name="Tutorial4"
                component={Tutorial4}
                options={{ headerShown: false, }}
                />
                {/* <RootStack.Screen
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
                name="Home"
                component={Home}
                options={{animation: 'none',  headerShown: false,}}
                />
                <RootStack.Screen
                name="Messaging"
                component={messaging}
                options={{animation: 'none',  headerShown: false,}}
                />
                <RootStack.Screen 
                  name="CreateGroup" 
                  component={CreateGroup} 
                  options={{ headerShown: false }}
                />
                <RootStack.Screen 
                  name="ExploreGroups" 
                  component={ExploreGroups} 
                  options={{ headerShown: false }}
                />
                <RootStack.Screen 
                  name="GroupDetails" 
                  component={GroupDetails} 
                  options={{ headerShown: false }}
                />
                <RootStack.Screen 
                  name="MyGroups" 
                  component={MyGroups} 
                  options={{ headerShown: false }}
                /> */}
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
