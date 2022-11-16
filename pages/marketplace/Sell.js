import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';

export default function Sell({ route, navigation }) {
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

        {/*///////////////////////      Listings      ///////////////////////*/}
        <View style={styles.listing_container}>
            <Text style={styles.title} >Listing1</Text>
            <Text style={styles.title} >Listing2</Text>
        </View>
        {/*///////////////////////   Create Button    ///////////////////////*/}
        <View style={styles.create_container}>
            <TouchableOpacity 
                style={{borderRadius: 30, backgroundColor: "#6BB972", width: '45%'}}
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
});