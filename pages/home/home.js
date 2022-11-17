import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  const [region, setRegion] = React.useState({
    latitude: -33.9173,
    longitude: 151.231,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });
	
	return (
    <View style={styles.container}>
      <MapView 
      initialRegion={{
        latitude: -33.9173,
        longitude: 151.231,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
			reigon={region}
      style={styles.map}
      >
        <Marker coordinate={{ latitude : -33.9173 , longitude : 151.231 }}
            pinColor={"green"}
            title="UNSW"
            description="where we are"
            // image={{uri: 'custom_pin'}}
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
  },
});