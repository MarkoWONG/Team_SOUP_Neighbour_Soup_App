import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Input} from '@rneui/themed';
import React, { useState, useEffect } from 'react';
import StoreService from '../../services/StoreService';
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from '@expo/vector-icons';
export default function CreateListing({ route, navigation }) {
    const [title, setTitle] = useState("");

    const updatetitle = (title) => {
        setTitle(title);
    };
    return (
        <View style={styles.main_container}>
            <View style={styles.input_main_container}>
                <View style={styles.add_photos_container}>
                    <TouchableOpacity 
                        style={styles.add_photos}
                    >
                        <FontAwesome name="file-picture-o" size={60} color="#91918e" />
                        <Text style={styles.add_photo_text}>Add photos</Text>

                    </TouchableOpacity>
                </View>
                <Input
                    placeholder="Title"
                    onChangeText={updatetitle}
                    containerStyle= {styles.outer_input_container}
                    inputContainerStyle= {{borderBottomWidth: 0}}
                    inputStyle= {{fontSize: 25}}
                />
                <Input
                    placeholder="Price"
                    onChangeText={updatetitle}
                    containerStyle= {styles.outer_input_container}
                    inputContainerStyle= {{borderBottomWidth: 0}}
                    inputStyle= {{fontSize: 25}}
                />
                <Input
                    placeholder="Category"
                    onChangeText={updatetitle}
                    containerStyle= {styles.outer_input_container}
                    inputContainerStyle= {{borderBottomWidth: 0}}
                    inputStyle= {{fontSize: 25}}
                />
                <Input
                    placeholder="Description"
                    onChangeText={updatetitle}
                    containerStyle= {styles.outer_input_container}
                    inputContainerStyle= {{borderBottomWidth: 0}}
                    inputStyle= {{fontSize: 25}}
                />
            </View>
            <View style={styles.location_container}>
                <Text style ={{fontSize: 25, fontWeight: "bold", paddingTop: 5, paddingLeft: 10}}>Location</Text>
                <Text style ={{textAlign: 'center', fontSize: 20, paddingBottom: 10, paddingTop:5}}>Sydney, Australia 2151</Text>
            </View>
            {/*///////////////////////   Create Button    ///////////////////////*/}
            <View style={styles.create_container}>
                <TouchableOpacity 
                    style={{borderRadius: 30, backgroundColor: "#6BB972", width: '50%'}}
                    onPress={() => navigation.navigate("Sell")}
                >
                    <Text style={styles.create_button_text}>+ Create Listing</Text>
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
        alignItems: 'center',
    },
    input_main_container: {
        backgroundColor: '#ffffff',
        // borderWidth: 1,
        height: '63%', 
        width: '90%',
        marginTop: 10,
    },
    outer_input_container:{
        borderWidth: 1, 
        borderRadius: 10,
        borderColor: '#9e9e9d', 
        alignItems: 'center',
        flexDirection: 'row',
        height: '10%',
        marginBottom: 20,
    },
    add_photos_container:{
        alignItems: 'center',
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#9e9e9d', 
        height: '35%',
        width: '100%',
        marginBottom: 20,
    },
    add_photos: {
        textAlign: 'center',
        borderColor: '#9e9e9d', 
        alignItems: 'center',
        flexDirection: 'column',
        top: '25%',
        width: '100%',
        height: '100%',
    },
    add_photo_text: {
        color: '#91918e', 
        fontSize: 20,
    },
    location_container:{
        borderTopWidth:1,
        borderBottomWidth:1,
        width: '100%',
    },
    create_container: {
        // borderWidth: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 25,
    },
    create_button_text: {
        textAlign: 'center',
        fontSize: 25,
        color: 'white',
    },
});