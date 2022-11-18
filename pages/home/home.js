import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import StoreService from '../../services/StoreService';


export default function Home ( navigation ) {
	const [listings, setlistings] = React.useState([]);

		// read listings from cache on first render
	React.useEffect(() => {
		StoreService.getlistings().then(
			(cachedlistings) => cachedlistings && setlistings(cachedlistings)
		);
	}, []);

	React.useEffect(() => {
		StoreService.savelistings(listings);
	}, [listings]);

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
			// reigon={region}
      style={styles.map}
      >
        {listings.map(({ image, title, price, category, description }, i) => 
					<Marker coordinate={listCoords[i]}
						pinColor={"green"}
						title={title}
						description={description}
						image={require('./../../assests/green_tag.png')}
						onPress={() =>
							navigation.navigate("ListingDetails", {
									image, title, price, category, description
							})
						}
					/>
				)}							
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
  },
});