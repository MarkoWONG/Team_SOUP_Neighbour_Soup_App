import { Text, Alert, View, StyleSheet, TouchableOpacity , Image} from 'react-native';
import { Input} from '@rneui/themed';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from '@expo/vector-icons';
export default function CreateGroup({ route, navigation }) {
    //For user inputs
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // For pucking an image
    useEffect(() => {
        const checkPermissions = async () => {
          const { granted } =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (!granted) {
            alert("Please grant photo library permissions in settings");
          }
        };
        checkPermissions();
      }, []);
    
      const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
        });
    
        if (!result.cancelled && result.uri) {
            setImage(result.uri);
        }
    };
    
    return (
        <View style={styles.main_container}>
            {/*////////////////        Inputs Fields       //////////////////*/}
            <View style={styles.input_main_container}>
                    {image ? (
                        <View style={styles.photo_container}>
                            <TouchableOpacity 
                                style={styles.re_add_photos}
                                onPress={pickImage}
                            >
                                <Image
                                source={{ uri: image }}
                                resizeMode="stretch"
                                style={{ height: '100%', width: '100%', alignSelf: "center", borderRadius:10 }}
                            /> 
                            </TouchableOpacity>
                            <View style={styles.add_photos_container_2}>
                                <TouchableOpacity 
                                    style={styles.add_photos}
                                    onPress={() => Alert.alert('Add more photo Option', 'This will allow user to add more photos')}
                                >
                                    <FontAwesome name="file-picture-o" size={60} color="#91918e" />
                                    <Text style={styles.add_photo_text}>Add photos</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : (
                        <View style={styles.add_photos_container}>
                            <TouchableOpacity 
                                style={styles.add_photos}
                                onPress={pickImage}
                            >
                                <FontAwesome name="file-picture-o" size={60} color="#91918e" />
                                <Text style={styles.add_photo_text}>Add photos</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                
                <Input
                    placeholder="Title"
                    onChangeText={setTitle}
                    containerStyle= {styles.outer_input_container}
                    inputContainerStyle= {{borderBottomWidth: 0}}
                    inputStyle= {{fontSize: 25}}
                />
                <Input
                    placeholder="Description"
                    onChangeText={setDescription}
                    containerStyle= {styles.outer_input_container}
                    inputContainerStyle= {{borderBottomWidth: 0}}
                    inputStyle= {{fontSize: 25}}
                />
            </View>
            {/*///////////////////        location       ////////////////////*/}
            <View style={styles.location_container}>
                <Text style ={{fontSize: 25, fontWeight: "bold", paddingTop: 5, paddingLeft: 10}}>Location</Text>
                <Text style ={{textAlign: 'center', fontSize: 20, paddingBottom: 10, paddingTop:5}}>Sydney, Australia 2151</Text>
            </View>
            {/*/////////////////////   Create Button    /////////////////////*/}
            <View style={styles.create_container}>
                <TouchableOpacity 
                    style={{borderRadius: 30, backgroundColor: "#6BB972", width: '50%'}}
                    onPress={() => {
                        if(title && description) {
                            navigation.navigate("MyGroups", { image, title, description })
                        } 
                        else{
                            Alert.alert("All input fields are required", "Please enter something in each input field")
                        }
                    }}
                >
                    <Text style={styles.create_button_text}>+ Create Group</Text>
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
    re_add_photos: {
        textAlign: 'center',
        borderColor: '#9e9e9d', 
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
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
    photo_container:{
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#9e9e9d', 
        height: '35%',
        width: '70%',
        marginBottom: 20,
    },
    add_photos_container_2:{
        alignItems: 'center',
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#9e9e9d', 
        height: '100%',
        width: '35%',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 15,
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