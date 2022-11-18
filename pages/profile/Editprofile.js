import { Text, Alert, View, StyleSheet, TouchableOpacity , Image} from 'react-native';
import { Input} from '@rneui/themed';
import { Feather , Ionicons, MaterialIcons, FontAwesome, MaterialCommunityIcons  } from '@expo/vector-icons';
import { useState, useEffect} from 'react';

export default function EditProfile({ route, navigation }) {
    const [name, setName] = useState("Jacky");
    const [dob, setDob] = useState("01/01/2000");
    const [phone, setPhone] = useState("+61 0412 033 011");
    const [email, setEmail] = useState("160million@gmail.com");
    return (
        <View style={styles.main_container}>
            {/*////////////////        Inputs Fields       //////////////////*/}
            <View style={styles.Profile_Top_container}>
                <Text style={{fontSize: 35, fontWeight:'bold'}}>{name}</Text>
                <MaterialIcons name="supervised-user-circle" size={80} color="black" />
            </View>
            {/*///////////////////       input fields       ////////////////////*/}
            <View style={styles.outer_field_container}>
                <Input
                    placeholder="Jacky"
                    onChangeText={setName}
                    containerStyle= {styles.input_fields_container}
                    inputContainerStyle= {{borderBottomWidth: 0}}
                    inputStyle= {{fontSize: 30, marginLeft: 20}}
                    leftIcon= {<FontAwesome name="user" size={30} color="black" />}
                    rightIcon= {<Feather name="edit-3" size={30} color="black" />}
                />
                <Input
                    placeholder="01/01/2000"
                    onChangeText={setDob}
                    containerStyle= {styles.input_fields_container}
                    inputContainerStyle= {{borderBottomWidth: 0}}
                    inputStyle= {{fontSize: 30, marginLeft: 20}}
                    leftIcon= {<FontAwesome name="birthday-cake" size={24} color="black" />}
                    rightIcon= {<Feather name="edit-3" size={30} color="black" />}
                    keyboardType='number-pad'
                />
                <Input
                    placeholder="+61 0412 033 011"
                    onChangeText={setPhone}
                    containerStyle= {styles.input_fields_container}
                    inputContainerStyle= {{borderBottomWidth: 0}}
                    inputStyle= {{fontSize: 30, marginLeft: 20}}
                    leftIcon= {<FontAwesome name="mobile-phone" size={40} color="black" />}
                    rightIcon= {<Feather name="edit-3" size={30} color="black" />}
                    keyboardType= 'phone-pad'
                />
                <Input
                    placeholder="160million@gmail.com"
                    onChangeText={setEmail}
                    containerStyle= {styles.input_fields_container}
                    inputContainerStyle= {{borderBottomWidth: 0}}
                    inputStyle= {{fontSize: 30, marginLeft: 20}}
                    leftIcon= {<MaterialIcons name="mail" size={30} color="black" />}
                    rightIcon= {<Feather name="edit-3" size={30} color="black" />}
                    keyboardType='email-address'
                />
            </View>
            {/*/////////////////////      Acessibility        /////////////////////*/}
            <View style={styles.accessibility_container}>
                <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 10, marginBottom: 10}}>Acessibility</Text>
                <View style ={{justifyContent: 'space-between', flexDirection:'row', marginBottom: 10}}>
                    <View style ={{flexDirection:'row', marginLeft:10}}>
                        <MaterialCommunityIcons name="text-to-speech" size={30} color="black" />
                        <Text style={{fontSize:24, marginLeft:10}}>Speech-To-Text</Text>
                    </View>
                    <TouchableOpacity
                        style={{marginRight: 10}}
                        onPress={() => Alert.alert('Speech to Text option', 'The user can toggle speech to text')}
                    >
                        <FontAwesome name="toggle-off" size={30} color="black" />
                    </TouchableOpacity>
                </View>

                <View style ={{justifyContent: 'space-between', flexDirection:'row',  marginBottom: 10}}>
                    <View style ={{flexDirection:'row', marginLeft:10}}>
                        <Ionicons name="moon" size={30} color="black" />
                        <Text style={{fontSize:24, marginLeft:10}}>Dark Mode</Text>
                    </View>
                    <TouchableOpacity
                        style={{marginRight: 10}}
                        onPress={() => Alert.alert('Dark mode option', 'The user can toggle dark mode')}
                    >
                        <FontAwesome name="toggle-off" size={30} color="black" />
                    </TouchableOpacity>
                </View>

                <View style ={{justifyContent: 'space-between', flexDirection:'row'}}>
                    <View style ={{flexDirection:'row', marginLeft:10}}>
                        <MaterialIcons name="text-fields" size={30} color="black" />
                        <Text style={{fontSize:24, marginLeft:10}}>Large Text</Text>
                    </View>
                    <TouchableOpacity
                        style={{marginRight: 10}}
                        onPress={() => Alert.alert('Large Text option', 'The user can toggle large text')}
                    >
                        <FontAwesome name="toggle-off" size={30} color="black" />
                    </TouchableOpacity>
                </View>

            </View>

            {/*/////////////////////      edit button        /////////////////////*/}
            <View style={styles.edit_container}>
                <TouchableOpacity 
                    style={{borderRadius: 10, borderWidth: 1, width: '75%', height: '80%', alignItems: 'center', justifyContent: 'center'}}
                    onPress={() => {
                        navigation.navigate("Profile",{name, email, phone, dob})
                    }}
                >
                    <Text style={styles.create_button_text}>Save</Text>
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