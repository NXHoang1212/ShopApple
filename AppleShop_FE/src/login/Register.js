import { View, Text , StyleSheet, TouchableOpacity, Image, ScrollView,TextInput} from 'react-native'
import React, {useState} from 'react'
import { Icon } from 'react-native-elements'
import axios from 'axios'
import getConstant from '../../helper/Constanst'
import { ToastAndroid } from 'react-native'

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_Password] = useState('');
  const [mobile, setMobile] = useState('');

  return (
    <ScrollView>
          <View style={styles.container}>
      <View style={{marginBottom:10,flexDirection:"row", justifyContent:'space-between', alignItems:"center"}}>
        <Text style={{fontSize:40, fontWeight:"bold", color:'#000000'}}>Register</Text>
        <View style={{ flexDirection:"row", justifyContent:'space-between', alignItems:"center"}}>
        <TouchableOpacity style={styles.Button}>
        <Image style={{ width: 22, height: 22 }}
          source={require('../../assets/fb3.jpg')}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button}>
        <Image style={{ width: 30, height: 30 }}
          source={require('../../assets/gg.webp')}></Image>
      </TouchableOpacity>
        </View>
      </View>
    <TextInput  style={{ backgroundColor: '#FFFFFF', height: 58,marginLeft:2,borderRadius:10,paddingLeft:10,marginBottom:15}}
      placeholder="Name"
      onChangeText={text => setName(text)}
      value={name}
    />
    <TextInput  style={{ backgroundColor: '#FFFFFF', height: 58,marginLeft:2,borderRadius:10,paddingLeft:10,marginBottom:15  }}
      placeholder="Email"
      onChangeText={text => setEmail(text)}
      value={email}
      leftIcon={<Icon name="email" />}
    />
     <TextInput  style={{ backgroundColor: '#FFFFFF', height: 58,marginLeft:2,borderRadius:10,paddingLeft:10,marginBottom:15  }}
      placeholder="Password"
      onChangeText={text => setPassword(text)}
      value={password}
      leftIcon={<Icon name="lock" />}
      secureTextEntry={true}
    />
     <TextInput  style={{ backgroundColor: '#FFFFFF', height: 58,marginLeft:2,borderRadius:10,paddingLeft:10 ,marginBottom:15 }}
      placeholder="Confirm_Password"
      onChangeText={text => setConfirm_Password(text)}
      value={confirm_password}
      leftIcon={<Icon name="lock" />}
      secureTextEntry
    />
    <TextInput  style={{ backgroundColor: '#FFFFFF', height: 58,marginLeft:2,borderRadius:10,paddingLeft:10,marginBottom:15  }}
      placeholder="Mobile "
      onChangeText={text => setMobile(text)}
      value={mobile}
      leftIcon={<Icon name="phone" />}
      secureTextEntry
    />
    <TouchableOpacity>
    </TouchableOpacity>
    <View style={{flexDirection:"row", justifyContent:'center', alignItems:"center",}}>
    <TouchableOpacity style={styles.ButtonRegister}  onPress={() => {
         axios.post(`${getConstant().HOST}/users/api/register`, {
          name: name,
          email: email,
          password: password,
          confirm_password: confirm_password,
          mobile: mobile,
        })
      .then(function (response) {
        console.log('response: ',response.data);
        ToastAndroid.show('Register Success', ToastAndroid.SHORT);
      })
      .catch(function (error) {
        console.log('error: ',error);
        ToastAndroid.show('Register Fail', ToastAndroid.SHORT);
      });
      }}>
      <Text style={{ color: "white", fontWeight: '700' }}>Sign-up</Text>
    </TouchableOpacity>
    
    <View>
    <Text>Already a </Text>
    <Text>Member? Login</Text>
    </View>
    </View>
      </View>
    </ScrollView>

  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  ButtonRegister: {
    width:"60%",
    padding: 15,
    backgroundColor: 'black',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    flexDirection: "row",
    marginRight:20
  },
  Button: {
    width:40,
    height:40,
    backgroundColor:"white",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    flexDirection: "row",
    marginRight:10
  },
});