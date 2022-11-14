import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign, Ionicons , MaterialIcons  } from '@expo/vector-icons';
import { Input, Icon} from '@rneui/themed';

export default function ListingDetails({ route, navigation }) {
    const {  image, title, price, category, description  } = route.params ?? {};
    // useEffect(() => navigation.setOptions({ title }), []);
    const [msg, setMsg] = useState("");

    return (
        <View style={{alignItems: "center"}}>
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
                
                {/*////////////////           Message          //////////////////*/}
                <View style={{height:'30%', width: '100%', marginBottom: 10}}>
                    <Text style= {{fontSize: 20, fontWeight: 'bold'}}>Message Seller</Text>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <AntDesign name="message1" size={30} color="black" style={{marginTop:5 ,marginRight:10}} />
                        <Input
                            containerStyle={{height:'60%' ,width:'88%', borderWidth: 1,borderRadius:10}}
                            inputContainerStyle={{borderBottomWidth: 0}}
                            placeholder='Is this still available?'
                            onChangeText={setMsg}
                            rightIcon={
                                <TouchableOpacity
                                    // Change to message page later
                                    onPress={() => navigation.navigate("Buy", msg)}
                                >
                                    <Ionicons name="send-outline" size={24} color="black" />
                                </TouchableOpacity>
                            }
                        />
                    </View>
                </View>
                {/*////////////////          Seller info       //////////////////*/}
                <View style={{height:'25%', width: '100%', borderWidth:0 ,}}>
                    <Text style= {{fontSize: 30, fontWeight: 'bold', marginBottom: 10}}>Seller Information</Text>
                    <View style={{flexDirection: 'row'}}>
                        <MaterialIcons name="supervised-user-circle" size={80
                        } color="black" />
                        <Text style={{fontSize: 40, marginTop:10, marginLeft: 20}}>Jacky</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
