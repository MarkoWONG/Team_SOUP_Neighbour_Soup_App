import { Text, Alert, View, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';
import { SearchBar } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import StoreService from '../../services/StoreService';
import { color } from '@rneui/base';

export default function ExploreGroups({ route, navigation }) {
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

    //stores all listings
    const [listings, setlistings] = useState([]);

    // // Uncomment to clear all listings
     useEffect(() => {
        StoreService.clear();
      }, []);

    // // read listings from cache on first render
    useEffect(() => {
      StoreService.getlistings().then(
        (cachedlistings) => cachedlistings && setlistings(cachedlistings)
      );
    }, []);
  
    useEffect(() => {
      const { image, title, description } = route.params ?? {};
      if (title && description) {
            setlistings((prevlistings) => [...prevlistings, { image, title, description }]);
      }
    }, [route.params]);
    useEffect(() => {
        const { image_new, title_new, description_new } = route.params ?? {};
        if (title_new && description_new) {
            setlistings((prevlistings) => [...prevlistings,{
                image: image_new, 
                title: title_new,
                description: description_new,
            }]);
        }
    }, [route.params]);
  
    useEffect(() => {
      StoreService.savelistings(listings);
    }, [listings]);

    const deleteListings = (index) => {
        let listingCopy = [...listings];
        listingCopy.splice(index, 1);
        setlistings(listingCopy);
    }


  return (
    <View style={styles.main_container}>
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
        <View style={styles.create_container}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Create Group")}                
                style={styles.roundButton1}
            >
                <Text style={styles.buttontext}>+</Text>
            </TouchableOpacity>
            <Text style={styles.title} >Create a new group</Text>
        </View>
        
        {/*///////////////////////      Listings      ///////////////////////*/}
        <View style={styles.listing_container}>
            <ScrollView style={styles.scroll_container}>
                {listings.map(({ image, title, description }, idx) => (
                    <TouchableOpacity
                        style={styles.listing_style}
                        key={idx}
                        title={title}
                        onPress={() => {
                        //     // delete listing then recreate new listing via edit lising page
                            deleteListings(idx);
                            navigation.navigate("Edit Listing", {
                                idx, image, title, price, category, description
                            })
                            }
                        }
                    >
                        <Text style={styles.listing_text} >Costco apple group</Text>
                            {image ? (
                                <Image
                                    source={{ uri: image }}
                                    resizeMode="cover"
                                    style={{ height: '100%', width: '20%', borderRadius:10 }}
                                /> 
                            ) : ( <View ></View>)}
                        <FontAwesome name="edit" size={50} color="black" />
                    </TouchableOpacity>
                ))}
        </ScrollView>
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
        height: '8%',
        alignItems: "start",
        flexDirection: 'row',
    },
    listing_container: {
        height: '55%',
        alignItems: 'center',
        // borderWidth: 1
    },
    scroll_container: {
        width: '95%',
        // borderWidth: 1
    },
    create_container: {
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginRight: 20,
    },
    search_container: {
        marginLeft: 20,
        marginTop: 80,
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
        fontSize: 30,
        marginTop: 50,
        marginLeft: 5,
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
    listing_style: {
        borderRadius: 10,
        borderColor: '#6BB972',
        borderWidth: 2,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 10,
        padding:10,
    },
    listing_text: {
        color: "black",
        textAlign: 'left',
        fontSize: 20,
        fontWeight: "bold",
    },
    roundButton1: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 50,
        backgroundColor: 'green',
    },
    buttontext: {
        color: 'white',
        fontSize: 25,
    }
});