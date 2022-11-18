import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Button, View, Dimensions } from 'react-native';


export default function Home ( {route, navigation }) {
	// Listings
	let listings = [
		{ title: "apples", price: "30", category: "fruits", description:"Hi" },
		{ title: "Witbix", price: "23.2", category: "cereal", description:"Yeah Nah" },
	];

	const listCoords = [
		{ latitude : -33.9173 , longitude : 151.231 }, //unsw
		{ latitude : -33.9195 , longitude : 151.227 }, //maccas
		{ latitude : -33.9226 , longitude : 151.227 }, //commbank
	]
	
	return (
    <View style={styles.container}>
      <MapView 
      initialRegion={{
        latitude: -33.9173,
        longitude: 151.231,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
      style={styles.map}
      >
        {listings.map(({ title, price, cat, description }, i) => 
					<Marker coordinate={listCoords[i]}
						pinColor={"green"}
						title={title}
						description={description}
						image={require('./../../assets/green_tag.png')}
						onPress={()=>{navigation.navigate("ListingDetails", listings[i])} }
						key={i}
					/>
				)}		

				<Marker coordinate={listCoords[2]}
						pinColor={"green"}
						title={"Jane"}
						description={"Looking for Scraps!"}
						image={require('./../../assets/green_compost.png')}
						onPress={alert("Link to composter's page's details")}
						key={i}
					/>					
        </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});