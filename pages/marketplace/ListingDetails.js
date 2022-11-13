import React, { useEffect } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign, Ionicons  } from '@expo/vector-icons';

export default function ListingDetails({ route, navigation }) {
    const {  image, title, price, category, description  } = route.params ?? {};
    useEffect(() => navigation.setOptions({ title }), []);
    return (
        <View style={{alignItems: "center"}}>
            {/*////////////////            image           //////////////////*/}
            <View style={{height:'30%', width: '100%', marginBottom: 10}}>
                {image && (
                <Image
                    accessibilityIgnoresInvertColors={true}
                    source={{ uri: image }}
                    resizeMode='stretch'
                    style={{ height: '100%', width: '100%', alignSelf: "center" }}
                />
                )}
            </View>
                <View style={{width:'90%'}}>
                {/*////////////////         title & price      //////////////////*/}
                <View style={{height:'10%', width: '100%',}}>
                    {/* {title && <Text style= {{fontSize: 30, fontWeight: 'bold'}}>{title}</Text>} */}
                    {price && <Text style= {{fontSize: 20, fontWeight: 'bold', color: 'grey'}}>${price}</Text>}
                </View>
                {/*////////////////        Description         //////////////////*/}
                <View style={{ width: '100%', marginBottom: 10}}>
                    <Text style= {{fontSize: 20, fontWeight: 'bold'}}>Description</Text>
                    {description && <Text>{description}</Text>}
                </View>
                {/*////////////////          Seller info       //////////////////*/}
                <View style={{height:'30%', width: '100%', }}>
                    <Text style= {{fontSize: 30, fontWeight: 'bold'}}>Seller Information</Text>
                    <Text>Seller Profile</Text>
                    <Text>Seller name</Text>
                </View>
                {/*////////////////           Message          //////////////////*/}
                <View style={{height:'30%', width: '100%', }}>
                    <Text style= {{fontSize: 20, fontWeight: 'bold'}}>Message Seller</Text>
                    <AntDesign name="message1" size={24} color="black" />
                    <TouchableOpacity 
                        style={{borderRadius: 30, borderWidth: 1, width: '80%', height: '20%'}}
                        onPress={() => navigation.navigate("Add Listing")}
                    >
                        <Text style={{}}>Is this still available?</Text>
                        <Ionicons name="send-outline" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
