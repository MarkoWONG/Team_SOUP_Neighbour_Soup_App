import { Text, Alert, View, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';
import { SearchBar } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';


export default function ExploreGroups({ route, navigation }) {
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

    // stores all listings
    const [listings, setlistings] = useState([
        { title: "apples", price: "30", category: "fruits", description:"Hi" },
        { title: "Witbix", price: "23.2", category: "cereal", description:"Yeah Nah" },

    ]);

    return (
        <View style={styles.main_container}>
            {/*/////////////////////        Title       /////////////////////*/}
            <View style={styles.title_container}>
                <Text style={styles.title} >I Want to ...</Text>
            </View>

            {/*/////////////////////        Tabs        /////////////////////*/}
            <View style={styles.tabs_container}>
                <View style={styles.first_tab} >
                    <Text style={styles.first_tab_text}>Explore</Text>
                </View>
                <View style={styles.second_tab} >
                    <TouchableOpacity 
                        style={{height: '100%', width: '100%', backgroundColor: "#ebebeb",}}
                        onPress={() => navigation.navigate("MyGroups")}
                    >
                        <Text style={styles.second_tab_text}>My Groups</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/*//////////////////////       Search       ////////////////////*/}
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
            {/*/////////////////////      Listings      /////////////////////*/}
            <View style={styles.listing_container}>
                <ScrollView style={styles.scroll_container}>
                    {listings.map(({ title, price, category, description }, idx) => (
                        <TouchableOpacity
                            style={styles.listing_style}
                            key={idx}
                            title={title}
                            onPress={() =>
                                navigation.navigate("ListingDetails", {
                                    title, price, category, description
                                })
                            }
                        >
                            <Text style={styles.listing_text} >{title}{"\n"}${price}</Text>
                            {title === "apples" 
                            ?<Image
                                source={require('../../images_icons/apple.jpg')}
                                resizeMode="cover"
                                style={{ height: '100%', width: '20%', borderRadius:10 }}
                            /> : 
                            <Image
                                source={require('../../images_icons/WeetBix.png')}
                                resizeMode="cover"
                                style={{ height: '100%', width: '20%', borderRadius:10 }}
                            /> }
        
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
        backgroundColor: '#ffffff',
        height: '8%',
        alignItems: "start",
        flexDirection: 'row',
    },
    search_container: {
        alignItems: "start",
        flexDirection: 'row',
    },
    listing_container: {
        backgroundColor: '#ffffff',
        height: '80%',
        alignItems: "center",
    },
    scroll_container: {
        width: '95%',
        // borderWidth: 1
    },
    first_tab: {
        height: '100%', 
        width: '50%', 
        backgroundColor: '#6BB972', 
        borderColor: 'black', 
        borderTopWidth: 1, 
        borderRightWidth: 1,
    },
    second_tab: {
        height: '100%', 
        width: '50%', 
        borderColor: 'black', 
        borderBottomWidth: 1, 
        borderRightWidth: 1,
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
      color: 'grey'
    },
    second_tab_text: {
        textAlign: 'center',
        fontSize: 50,
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
});