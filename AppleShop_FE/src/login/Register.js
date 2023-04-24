import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { handleRegister } from '../../ultlis/LoginRegister';
import LoginFaceBook from '../../ultlis/LoginFacebook';
import AxiosInstance from '../axios/AxiosIntance';

const Register = ({ navigation }) => {
  /*Biến khai báo trong tên để sử dụng axios*/
  const [fullname, setfullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_Password] = useState('');
  const [mobile, setMobile] = useState('');
  /*Lưu hàm bắt lỗi để hiện gọi qua từ handleRegister */
  const [fullnameError, setfullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const nextcreen = () => {
    navigation.reset({ routes: [{ name: 'MyTabs' }], });
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ marginBottom: 10, flexDirection: "row", justifyContent: 'space-between', alignItems: "center" }}>
          <Text style={{ fontSize: 33, fontWeight: "bold", color: '#000000' }}>Tài khoản</Text>
          <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: "center" }}>
            <TouchableOpacity style={styles.Button} onPress={() => LoginFaceBook(navigation)}>
              <Image style={{ width: 22, height: 22 }}
                source={require('../../assets/fb3.jpg')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button}>
              <Image style={{ width: 30, height: 30 }}
                source={require('../../assets/gg.webp')}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <TextInput style={{ backgroundColor: '#FFFFFF', height: 58, marginLeft: 2, borderRadius: 10, paddingLeft: 10, marginBottom: 15 }}
          placeholder="Nhập họ tên đầy đủ "
          onChangeText={text => setfullName(text)}
          value={fullname}
        />
        {fullnameError !== '' && <Text style={styles.errorMessage}>{fullnameError}</Text>}
        <TextInput style={{ backgroundColor: '#FFFFFF', height: 58, marginLeft: 2, borderRadius: 10, paddingLeft: 10, marginBottom: 15 }}
          placeholder="Nhập email của bạn"
          onChangeText={text => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />
        {emailError !== '' && <Text style={styles.errorMessage}>{emailError}</Text>}
        <TextInput style={{ backgroundColor: '#FFFFFF', height: 58, marginLeft: 2, borderRadius: 10, paddingLeft: 10, marginBottom: 15 }}
          placeholder="Nhập mật khẩu"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        {passwordError !== '' && <Text style={styles.errorMessage}>{passwordError}</Text>}
        <TextInput style={{ backgroundColor: '#FFFFFF', height: 58, marginLeft: 2, borderRadius: 10, paddingLeft: 10, marginBottom: 15 }}
          placeholder="Nhập lại mật khẩu"
          onChangeText={text => setConfirm_Password(text)}
          value={confirm_password}
          secureTextEntry={true}
        />
        {confirmPasswordError !== '' && <Text style={styles.errorMessage}>{confirmPasswordError}</Text>}
        <TextInput style={{ backgroundColor: '#FFFFFF', height: 58, marginLeft: 2, borderRadius: 10, paddingLeft: 10, marginBottom: 15 }}
          placeholder="Số điện thoại của bạn "
          onChangeText={text => setMobile(text)}
          value={mobile}
          keyboardType="numeric"
        />
        {mobileError !== '' && <Text style={styles.errorMessage}>{mobileError}</Text>}
        <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: "center", }}>
          <TouchableOpacity style={styles.ButtonRegister}
            onPress={() => {
              handleRegister(fullname, email, password, confirm_password, mobile, navigation,
                setfullNameError, setEmailError, setMobileError, setPasswordError, setConfirmPasswordError)
            }}>
            <Text style={{ color: "white", fontWeight: '700' }}>Đăng kí</Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity onPress={nextcreen}>
              <Text style={{ color: '#000000', fontWeight: "700" }}>Bạn đã có tài khoản </Text>
              <Text style={{ color: '#000000', fontWeight: "700" }}>Đăng nhập ?</Text>
            </TouchableOpacity>
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
    width: "60%",
    padding: 15,
    backgroundColor: 'black',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    flexDirection: "row",
    marginRight: 20
  },
  Button: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    flexDirection: "row",
    marginRight: 10
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
    marginLeft: 8,
    bottom: 11,
    fontWeight: '400',
  },
});