import { StyleSheet, TouchableOpacity, View, Text, Image, ScrollView, Alert, TextInput, ToastAndroid } from 'react-native';
import React, { useEffect, useState, useRef, useContext } from 'react';
import LoginFaceBook from '../../ultlis/LoginFacebook';
import {LoginRegister} from '../../ultlis/LoginRegister';
import AxiosInstance from '../axios/AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosApi } from '../../ultlis/AxiosApi';

const NormalLogin = (props) => {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const { setislogin, setinfoUser } = useContext(AxiosApi);

  const goto1 = () => {
    navigation.navigate("ForgotPassword");
  }

  const dangnhap = async () => {
    try {
      const response = await AxiosInstance().post('/users/api/login', {
        email: email,
        password: password,
      });
  
      if (response.error == false){

        console.log(response.data.token);
        await AsyncStorage.setItem('token', response.data.token);
        ToastAndroid.show('Đăng kí thành công', ToastAndroid.SHORT);
        setinfoUser(response.data.user);
        setislogin(true);
      } else {
        ToastAndroid.show('Đăng kí thất bại', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInput
          style={{ backgroundColor: '#FFFFFF', height: 58, marginLeft: 2, borderRadius: 10, paddingLeft: 10, marginBottom: 15 }}
          placeholder="Nhập Email" onChangeText={setEmail} value={email}
          onBlur={() => {  
          if (!email) {
              setEmailError('Mời bạn nhập email');
            } else {
              setEmailError('');
            }
          }}
        />
        {emailError !== '' && <Text style={styles.errorMessage}>{emailError}</Text>}
        <TextInput
          style={{ backgroundColor: '#FFFFFF', height: 58, marginLeft: 2, borderRadius: 10, paddingLeft: 10, marginBottom: 10 }}
          placeholder="Nhập mật khẩu" onChangeText={setPassword} value={password} secureTextEntry={true}
          onBlur={() => {
            if (!password) {
              setPasswordError('Mời bạn nhập password');
            } else {
              setPasswordError('');
            }
          }}
        />
        {passwordError !== '' && <Text style={styles.errorMessage}>{passwordError}</Text>}
        <TouchableOpacity onPress={goto1}>
          <Text style={{ fontWeight: 'bold', marginBottom: 20, fontSize: 14, lineHeight: 21, color: '#000000' }} >Quên mật khẩu ?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonLogin} onPress={dangnhap}>
          <Text style={{ color: "white", fontSize: 17, width: 88, fontWeight: '700', lineHeight: 25 }}>Đăng nhập</Text>
        </TouchableOpacity>
        <View style={{ width: "100%", alignItems: "center", marginTop: 20, marginBottom: 10 }}>
          <Text style={{ fontWeight: '600', fontStyle: 'normal', fontSize: 18, lineHeight: 27, color: '#000000' }}>Or</Text>
        </View>
        <TouchableOpacity style={styles.ButtonFB} onPress={() => LoginFaceBook(navigation)}>
          <Image style={{ width: 25, height: 25 }}
            source={require('../../assets/FacebookLogo.png')}></Image>
          <Text style={{ color: "white", marginLeft: 10, fontSize: 20, fontWeight: '600', lineHeight: 26 }}>Đăng nhập bằng Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonGG}>
          <Image style={{ width: 38, height: 38 }}
            source={require('../../assets/gg.webp')}></Image>
          <Text style={{ color: "black", marginLeft: 10, fontSize: 20, fontWeight: '500', lineHeight: 23 }}>Đăng nhập bằng Google</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

  );

}

export default NormalLogin
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    top: 14,
    backgroundColor: '#F2F2F2',
  },
  ButtonLogin: {
    padding: 15,
    backgroundColor: 'black',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
    height: 59
  },
  ButtonFB: {
    marginTop: 8,
    backgroundColor: '#1877F2',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
    height: 58,
    gap: 0
  },
  ButtonGG: {
    marginTop: 18,
    backgroundColor: '#ffffff',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
    height: 58,
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
    marginLeft: 8,
    bottom: 11,
    fontWeight: '400',
  },
});