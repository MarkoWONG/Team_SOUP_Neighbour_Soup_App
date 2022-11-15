import { Text, Alert, View, StyleSheet, TouchableOpacity , Image} from 'react-native';
import { Input} from '@rneui/themed';
import { MaterialIcons } from '@expo/vector-icons';

export default function Profile({ route, navigation }) {
    return (
        <View style={styles.main_container}>
            {/*////////////////        Inputs Fields       //////////////////*/}
            <View style={styles.Profile_Top_container}>
                <Text style={{fontSize: 35, fontWeight:'bold'}}>Jacky</Text>
                <MaterialIcons name="supervised-user-circle" size={80} color="black" />
            </View>
            {/*///////////////////       input fields       ////////////////////*/}
            <View style={styles.input_fields_container}>
                <Input
                    placeholder="Jacky"
                    // placeholderTextColor={"black"}
                    disabled= "true"
                    disabledInputStyle={{color: 'black'}}
                    containerStyle= {styles.outer_input_container}
                    inputContainerStyle= {{borderBottomWidth: 0}}
                    inputStyle= {{fontSize: 25}}
                />
            </View>
            {/*/////////////////////      Acessibility        /////////////////////*/}
            <View style={styles.accessibility_container}>
                
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
    input_fields_container:{
        borderWidth: 1, 
        borderColor: '#9e9e9d', 
        alignItems: 'center',
        flexDirection: 'row',
        height: '35%',
        width: '95%',
    },
    accessibility_container:{
        alignItems: 'center',
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 10,
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
});