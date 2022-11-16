import { View, Text, StyleSheet, SafeAreaView, StatusBar, Pressable, Alert, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { TextInput, IconButton } from '@react-native-material/core'
import ImagePicker from 'react-native-image-picker';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import database from './data.json'
import { useEffect, useState } from 'react';

export default function messaging({ name, group, directMessage, p_title, p_price }) {
  const createAlert = () => {
    Alert.alert(
      "Open gallery",
      "User can select image here",
      [
        { text: "OK" }
      ]
    );
  }

  useEffect(() => {
    if (directMessage) {
      const msg = {
                    id: message.length + 1,
                    message: directMessage,
                    sender: "self"
                  }    

      setMessage([...message, msg])
    }
  }, [])

  // console.log(database.channels)

  const [input, setInput] = useState('')
  const [message, setMessage] = useState([])

  // function fetchMessage() {

  // }

  function handleClick() {
    const msg = {
                  id: message.length + 1,
                  message: input,
                  sender: "self"
                }    
    setMessage([...message, msg])
    setInput('')
  }

  // useEffect(() => {
  //   setMessage(database.channels[52976].messages)
  // }, [])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          {group
            ? <></>
            : <Text style={styles.status}>Online 14hr ago</Text>
          }
          
        </View>

        {group
          ? <></>
          : <View style={styles.productContainer}>
              <Image
                style={styles.img}
                source={require('../../images_icons/apple.jpg')}
              />
              <View style={styles.details}>
                <Text style={{ fontSize: 24, marginBottom: 5 }}>{p_title}</Text>
                <Text style={{ fontSize: 24 }}>AUD ${p_price}</Text>
              </View>
            </View>
        }
      
        {message.map(({ id, message }) => (
          <MessageRight text={message} key={id}/>
        ))}

        {/* <MessageLeft text="Hello"/>
        <MessageRight text="akshd "/> */}

        <TextInput 
          style={styles.input}
          placeholder="Type here..."
          returnKeyType='done'
          onChangeText={text => setInput(text)}
          value={input}
        />

        <IconButton 
          onPress={handleClick}
          icon={props => <Icon name="send" {...props} />} 
          style={{ position: 'absolute', bottom: 35, right: 60 }}
        />

        <IconButton 
          onPress={createAlert}
          icon={props => <Icon name="view-gallery" {...props} />} 
          style={{ position: 'absolute', bottom: 35, right: 10 }}
        />

      </SafeAreaView>
    </KeyboardAvoidingView>
    
  )
}

const MessageLeft = ({ text }) => {
  return (
    <View style={styles.messageLeftContainer}>
      <Image
        style={styles.icon}
        source={require('../../images_icons/user.jpg')}
      />

      <View style={{ marginTop: 3 }}>
        <Text style={styles.message}>{text}</Text>
      </View>
    </View>
  )
}

const MessageRight = ({ text }) => {
  return (
    <View style={styles.messageRightContainer}>
      <Text style={styles.message}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  status: {
    marginTop: 5,
    color: '#1FA82C'
  },
  productContainer: {
    flexDirection: 'row',
    marginLeft: 17,
    marginTop: 20,
    marginBottom: 30
  },
  img: {
    width: 88,
    height: 70,
    borderRadius: 10
  },
  details: {
    marginLeft: 20
  },
  messageLeftContainer: {
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 5,
    marginBottom: 5
  },
  messageRightContainer: {
    alignItems: 'flex-end',
    marginRight: 20,
    marginTop: 5,
    marginBottom: 5
  },
  icon: {
    borderRadius: 50,
    height: 50,
    width: 50,
    marginRight: 5
  },
  message: {
    backgroundColor: '#F0EEEE',
    padding: 10,
    borderRadius: 5
  },
  input: {
    width: '80%',
    marginLeft: 20,
    position: 'absolute',
    bottom: 30,
  }
})