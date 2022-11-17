import React, { useEffect, useState } from "react";
import { Text, Alert, View, StyleSheet, TouchableOpacity , Image} from 'react-native';
import { Input} from '@rneui/themed';
import { AntDesign, Ionicons, MaterialIcons, FontAwesome, MaterialCommunityIcons  } from '@expo/vector-icons';

export default function Profile({ route, navigation }) {
    const [msg, setMsg] = useState("");

    return (
        <View style={styles.main_container}>

            <View style={styles.Profile_Top_container}>
                <Text style={{fontSize: 35, fontWeight:'400'}}>Composter</Text>
                <Text style={{fontSize: 35, fontWeight:'bold'}}>Vinny</Text>
                <MaterialIcons name="supervised-user-circle" size={80} color="black" />
            </View>

            <View style={{height:'10%', width: '100%', marginBottom: 20, alignContent: 'left'}}>
                    {/* {title && <Text style= {{fontSize: 30, fontWeight: 'bold'}}>{title}</Text>} */}
                    <Text style= {{fontSize: 30, fontWeight: 'bold'}}>Accepts</Text>
            </View>

            <View style={{height:'10%', width: '100%', marginBottom: 20, alignContent: 'left'}}>
                    {/* {title && <Text style= {{fontSize: 30, fontWeight: 'bold'}}>{title}</Text>} */}
                    <Text style= {{fontSize: 30, fontWeight: 'bold'}}>Declines</Text>
            </View>

            {/*////////////////           Message          //////////////////*/}
            <View style={{height:'30%', width: '100%', marginBottom: 10}}>
                    <Text style= {{fontSize: 20, fontWeight: 'bold'}}>Message Vinny</Text>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <AntDesign name="message1" size={30} color="black" style={{marginTop:5 ,marginRight:10}} />
                        <Input
                            containerStyle={{height:'60%' ,width:'88%', borderWidth: 1,borderRadius:10}}
                            inputContainerStyle={{borderBottomWidth: 0}}
                            placeholder='Is your compost still available?'
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
    Profile_Top_container: {
        backgroundColor: '#a3ffba',
        alignItems: 'center',
        justifyContent:'center',
        height: '25%', 
        width: '100%',
    },
    outer_field_container:{
        paddingTop: 10,
        borderWidth: 0, 
        borderColor: 'black', 
        alignItems: 'center',
        // flexDirection: 'row',
        height: '35%',
        width: '95%',
    },
    input_fields_container:{
        borderWidth: 1, 
        borderRadius: 10,
        borderColor: 'grey', 
        alignItems: 'center',
        flexDirection: 'row',
        height: '20%',
        width: '100%',
        marginBottom:10
    },
    accessibility_container:{
        borderTopWidth: 1,
        paddingTop: 10,
        height: '25%',
        width: '100%',
    },
    edit_container: {
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '10%',
    },
    create_button_text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
    },

});