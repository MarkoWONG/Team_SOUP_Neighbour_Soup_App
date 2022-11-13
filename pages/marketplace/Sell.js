import { Text, Alert, Button, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SearchBar } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import StoreService from '../../services/StoreService';

export default function Sell({ route, navigation }) {
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

    const [listings, setlistings] = useState([]);
    // read listings from cache on first render
    useEffect(() => {
      StoreService.getlistings().then(
        (cachedlistings) => cachedlistings && setlistings(cachedlistings)
      );
    }, []);
  
    useEffect(() => {
      const { image, title, price, category, description } = route.params ?? {};
      if (title) {
        setlistings((prevlistings) => [...prevlistings, { image, title, price, category, description }]);
      }
    }, [route.params]);
  
    useEffect(() => {
      StoreService.savelistings(listings);
    }, [listings]);

  return (
    <View style={styles.main_container}>
        {/*///////////////////////        Title       ///////////////////////*/}
        <View style={styles.title_container}>
            <Text style={styles.title} >I Want to ...</Text>
        </View>

        {/*///////////////////////        Tabs        ///////////////////////*/}
        <View style={styles.tabs_container}>
            <View style={styles.first_tab} >
                <TouchableOpacity 
                    style={{height: '100%', width: '100%', backgroundColor: "#ebebeb",}}
                    onPress={() => navigation.navigate("Buy")}
                >
                    <Text style={styles.first_tab_text}>Buy</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.second_tab} >
                <Text style={styles.second_tab_text}>Sell</Text>
            </View>
        </View>
        {/*///////////////////////       Search       ///////////////////////*/}
        <View style={styles.search_container}>    
            <SearchBar
                placeholder="Type Here..."
                onChangeText={updateSearch}
                value={search}
                lightTheme={true}
                round={true}
                containerStyle={styles.search_style}
                onClear={() => Alert.alert('Search Option', 'When user finishes entering search keywords it will filter the results according to the keywords') }
            />
            <TouchableOpacity 
                style={styles.filter_style}
                onPress={() => Alert.alert('Filter Option', 'When tapped a Popup will appear with filter options') }
            >
                <FontAwesome name="filter" size={45} color="black" />
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.sort_style}
                onPress={() => Alert.alert('Sort Option', 'When tapped a Popup will appear with sort options') }
            >
                <FontAwesome name="sort-amount-desc" size={40} color="black" />
            </TouchableOpacity>
        </View>
        {/*///////////////////////      Listings      ///////////////////////*/}
        <View style={styles.listing_container}>
            <Text style={styles.title} >Listing1</Text>
            {listings.map(({ image, title, price, category, description }, idx) => (
                <Button
                key={idx}
                title={title}
                onPress={() =>
                    navigation.navigate("ListingDetails", {
                        image, title, price, category, description
                    })
                }
                />
            ))}
        </View>
        {/*///////////////////////   Create Button    ///////////////////////*/}
        <View style={styles.create_container}>
            <TouchableOpacity 
                style={{borderRadius: 30, backgroundColor: "#6BB972", width: '45%'}}
                onPress={() => navigation.navigate("Add Listing")}
            >
                <Text style={styles.create_button_text}>+ Add Listing</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles= StyleSheet.create({
    main_container: {
        backgroundColor: '#ffffff',
        height: '100%', 
        width: '100%',
    },
    title_container: {
        backgroundColor: '#ebebeb',
        height: '10%',
        alignItems: "start",
    },
    tabs_container: {
        backgroundColor: '#ffffff',
        height: '8%',
        alignItems: "start",
        flexDirection: 'row',
    },
    listing_container: {
        backgroundColor: '#ffffff',
        height: '55%',
        alignItems: "center",
    },
    create_container: {
        backgroundColor: '#ffffff',
        alignItems: 'flex-end',
        marginRight: 20,
    },
    search_container: {
        alignItems: "start",
        flexDirection: 'row',
    },
    first_tab: {
        height: '100%', 
        width: '50%', 
        color: '#ebebeb',
        borderColor: 'black', 
        borderBottomWidth: 1, 
    },
    second_tab: {
        height: '100%', 
        width: '50%', 
        backgroundColor:'#6BB972',
        borderColor: 'black', 
        borderTopWidth: 1, 
        borderLeftWidth: 1,
    },
    title: {
        color: "black",
        textAlign: 'left',
        fontSize: 20,
        marginTop: 50,
        marginLeft: 30,
        fontWeight: "bold",
    },
    first_tab_text: {
        textAlign: 'center',
        fontSize: 50,
    },
    second_tab_text: {
        textAlign: 'center',
        fontSize: 50,
        color: 'grey'
    },
    create_button_text: {
        textAlign: 'center',
        fontSize: 25,
        color: 'white'
    },
    search_style: {
        width: '80%',
        height: '101%',
        backgroundColor: 'white',
        borderBottomColor: 'white',
        borderTopColor: 'white',
    },
    filter_style: {
        textAlign: 'center',
        flexDirection: 'row',
        paddingTop: 10,
    },
    sort_style: {
        textAlign: 'center',
        flexDirection: 'row',
        paddingTop: 15,
    },
});