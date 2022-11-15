import { Text, Alert, View, StyleSheet, TouchableOpacity , Image} from 'react-native';
import { Input} from '@rneui/themed';
import { MaterialIcons, FontAwesome  } from '@expo/vector-icons';

export default function Profile({ route, navigation }) {
    return (
        <View style={styles.main_container}>
            {/*////////////////        Inputs Fields       //////////////////*/}
            <View style={styles.Profile_Top_container}>
                <Text style={{fontSize: 35, fontWeight:'bold'}}>Jacky</Text>
                <MaterialIcons name="supervised-user-circle" size={80} color="black" />
            </View>
            {/*///////////////////       input fields       ////////////////////*/}
            <View style={styles.outer_field_container}>
                <Input
                    placeholder="Jacky"
                    disabled= "true"
                    disabledInputStyle={{color: 'black', }}
                    containerStyle= {styles.input_fields_container}
                    inputContainerStyle= {{borderBottomWidth: 0}}
                    inputStyle= {{fontSize: 30, marginLeft: 20}}
                    leftIcon= {<FontAwesome name="user" size={30} color="black" />}
                />
                <Input
                    placeholder="01/01/2000"
                    disabled= "true"
                    disabledInputStyle={{color: 'black', }}
                    containerStyle= {styles.input_fields_container}
                    inputContainerStyle= {{borderBottomWidth: 0}}
                    inputStyle= {{fontSize: 30, marginLeft: 20}}
                    leftIcon= {<FontAwesome name="birthday-cake" size={24} color="black" />}
                />
                <Input
                    placeholder="+61 0412 033 011"
                    disabled= "true"
                    disabledInputStyle={{color: 'black', }}
                    containerStyle= {styles.input_fields_container}
                    inputContainerStyle= {{borderBottomWidth: 0}}
                    inputStyle= {{fontSize: 30, marginLeft: 20}}
                    leftIcon= {<FontAwesome name="mobile-phone" size={40} color="black" />}
                />
                <Input
                    placeholder="160million@gmail.com"
                    disabled= "true"
                    disabledInputStyle={{color: 'black', }}
                    containerStyle= {styles.input_fields_container}
                    inputContainerStyle= {{borderBottomWidth: 0}}
                    inputStyle= {{fontSize: 30, marginLeft: 20}}
                    leftIcon= {<MaterialIcons name="mail" size={30} color="black" />}
                />
            </View>
            {/*/////////////////////      Acessibility        /////////////////////*/}
            <View style={styles.accessibility_container}>
                <Text>Acessibility</Text>
            </View>

            {/*/////////////////////      edit button        /////////////////////*/}
            <View style={styles.edit_container}>
                <TouchableOpacity 
                    style={{borderRadius: 30, backgroundColor: "#6BB972", width: '50%'}}
                    onPress={() => {
                        if(title && price && image && category && description) {
                            navigation.navigate("Sell", { image, title, price, category, description })
                        } 
                        else{
                            Alert.alert("All input fields are required", "Please enter something in each input field")
                        }
                    }}
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
    Profile_Top_container: {
        backgroundColor: '#a3ffba',
        borderWidth: 1,     
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
        // alignItems: 'center',
        // justifyContent: 'space-around',
        // flexDirection: 'column',
        borderTopWidth: 1,
        height: '30%',
        width: '100%',
    },
    edit_container: {
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '10%',
        borderWidth: 1
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
    outer_input_container: {
        width:'100%',
        height: '10%',
    }
});