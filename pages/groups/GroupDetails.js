import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { AntDesign, Ionicons , MaterialIcons  } from '@expo/vector-icons';
import { Input, Icon} from '@rneui/themed';

export default function ListingDetails({ route, navigation }) {
    const {  image, title, price, category, description  } = useState("");
    const [msg, setMsg] = useState("");
    const [show, setShow] = useState(false);

    return (
        <View style={{alignItems: "center", marginLeft: 30, marginRight: 30}}>
            {/*////////////////            image           //////////////////*/}
            <View style={{height:'40%', width: '100%', marginBottom: 10}}>
                {image && (
                <Image
                    accessibilityIgnoresInvertColors={true}
                    source={{ uri: image }}
                    resizeMode='stretch'
                    style={{ height: '100%', width: '100%', alignSelf: "center" }}
                />
                )}
            </View>
                <ScrollView style={{width:'90%',}}>
                {/*////////////////         title      //////////////////*/}
                <View style={{height:'10%', width: '100%', marginBottom: 20}}>
                    {/* {title && <Text style= {{fontSize: 30, fontWeight: 'bold'}}>{title}</Text>} */}
                    <Text style= {{fontSize: 30, fontWeight: 'bold'}}>Costco Apple Group</Text>
                    {title && <Text>{title}</Text>}
                </View>
                {/*////////////////         subtext      //////////////////*/}                
                <View style={{height:'10%', width: '100%',}}>
                    {/* {title && <Text style= {{fontSize: 30, fontWeight: 'bold'}}>{title}</Text>} */}
                    <Text style= {styles.grey_subtext_1}>5 participants</Text>
                    {title && <Text>{title}</Text>}
                </View>
                {/*////////////////        Description         //////////////////*/}
                <View style={{ width: '100%', marginBottom: 10}}>
                    <Text style= {{fontSize: 20, fontWeight: 'bold'}}>Let's bulk buy together every saturday</Text>
                    {description && <Text>{description}</Text>}
                </View>
                
                { show ?
                    (
                        <View style={{height:'30%', width: '100%', marginBottom: 10}}>
                        <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 20}}>
                            <AntDesign name="message1" size={30} color="black" style={{marginTop:5 ,marginRight:10}} onPress={() => navigation.navigate("Messaging", { name: "Costco Apple Group"})} />
                            <Text style={{fontSize:25}}>Go to chat</Text>
                        </View>
                    </View>
                    ) :
                    (<View></View>)
                }
                
                <View style={styles.create_container}>
                <TouchableOpacity 
                    style={{borderRadius: 30, backgroundColor: "#FFFFFF", width: '50%'}}
                    onPress={() => (setShow(!show)) }
                >
                    <Text style={styles.create_button_text}> { show ?
                    (
                        <TouchableOpacity 
                        style={{borderRadius: 30, backgroundColor: "#FFFFFF", width: '50%'}}
                        onPress={() => (setShow(!show)) }
                        >
                        <Text style={styles.create_button_text2}> Leave group </Text>
                        </TouchableOpacity>
                    ) 
                    :
                    (
                        <TouchableOpacity 
                            style={{borderRadius: 30, backgroundColor: "#FFFFFF", width: '50%'}}
                            onPress={() => (setShow(!show)) }
                        >
                            <Text style={styles.create_button_text}> Join group </Text>
                        </TouchableOpacity>
                    )
                    } </Text>
                </TouchableOpacity>
                </View>
                

                {/*////////////////         timecreated      //////////////////*/}                
                <View style={{height:'10%', width: '100%', marginBottom:20}}>
                    {/* {title && <Text style= {{fontSize: 30, fontWeight: 'bold'}}>{title}</Text>} */}
                    <Text style= {styles.grey_subtext_2}>Created 21 Sep 2022</Text>
                    {title && <Text>{title}</Text>}
                </View>
            </ScrollView>
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
        marginTop: 100,
        marginBottom:50,
    },
    create_button_text: {
        textAlign: 'center',
        fontSize: 25,
        color: 'green',
    },
    create_button_text2: {
        textAlign: 'center',
        fontSize: 25,
        color: 'red',
    },
    grey_subtext_1: {
        textAlign: 'center',
        fontSize: 15,
        color: 'grey',
    },
    grey_subtext_2: {
        textAlign: 'left',
        fontSize: 15,
        color: 'grey',
    },
});