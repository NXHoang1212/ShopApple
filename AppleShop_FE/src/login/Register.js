import { View, Text , StyleSheet, TouchableOpacity, Image, ScrollView,TextInput} from 'react-native'
import React, {useState} from 'react'
import { Icon } from 'react-native-elements'
import axios from 'axios'
import getConstant from '../../helper/Constanst'
import { ToastAndroid } from 'react-native'

const Register = ({navigation}) => {
  /*Biến khai báo trong tên để sử dụng axios*/
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_Password] = useState('');
  const [mobile, setMobile] = useState('');
  /*Biến bắt lỗi khai báo cho từng input */
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [mobileError, setMobileError] = useState('');


  const validateEmail = email => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };
  const handleRegister = () => {
      axios.post(`${getConstant().HOST}/users/api/register`, {
        name: name,
        email: email,
        password: password,
        confirm_password: confirm_password,
        mobile: mobile,
      })
      .then(function (response) {
        console.log('response: ',response.data);
        ToastAndroid.show('Đăng kí thành công', ToastAndroid.SHORT);
        navigation.reset({routes: [{ name: 'MyTabs' }], });
      })
      .catch(function (error) {
        console.log('error: ',error);
        ToastAndroid.show('Đăng kí thất bại', ToastAndroid.SHORT);
        navigation.reset({routes: [{ name: 'MyTabs' }], });
      });
  };



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
        <TextInput style={{ backgroundColor: '#FFFFFF', height: 58,marginLeft:2,borderRadius:10,paddingLeft:10,marginBottom:15}}
          placeholder="Full Name"
          onChangeText={text => setName(text)}
          value={name}
          onBlur={() => {
            const nameArray = name.split(' ');
            if (nameArray.length < 2) {
              setNameError('Mời bạn nhập đầy đủ họ tên');
            } else {
              setNameError('');
            }
          }}
        />
        {nameError !== '' && <Text style={styles.errorMessage}>{nameError}</Text>}
        <TextInput  style={{ backgroundColor: '#FFFFFF', height: 58,marginLeft:2,borderRadius:10,paddingLeft:10,marginBottom:15  }}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
          keyboardType="email-address"
          onBlur={() => {
            if (!email) {
              setEmailError('Mời bạn nhập email');
            } else if (!validateEmail(email)) {
              setEmailError('Email không hợp lệ mời bạn nhập lại');
            } else {
              setEmailError('');
            }
          }}
        />
       {emailError !== '' && <Text style={styles.errorMessage}>{emailError}</Text>}
        <TextInput  style={{ backgroundColor: '#FFFFFF', height: 58,marginLeft:2,borderRadius:10,paddingLeft:10,marginBottom:15  }}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
          onBlur={() => {
            if (!password) {
              setPasswordError('Mời bạn nhập mật khẩu');
            } else if (password.length < 5) {
              setPasswordError('Mật khẩu phải có ít nhất 5 ký tự');
            } else {
              setPasswordError('');
            }
          }}
        />
      {passwordError !== '' && <Text style={styles.errorMessage}>{passwordError}</Text>}
        <TextInput  style={{ backgroundColor: '#FFFFFF', height: 58,marginLeft:2,borderRadius:10,paddingLeft:10 ,marginBottom:15 }}
          placeholder="Confirm_Password"
          onChangeText={text => setConfirm_Password(text)}
          value={confirm_password}
          secureTextEntry={true}
          onBlur={() => {
            if (!confirm_password) {
              setConfirmPasswordError('Mời bạn nhập lại mật khẩu');
            } else if (confirm_password !== password) {
              setConfirmPasswordError('Mật khẩu không khớp vui lòng nhập lại');
            } else {
              setConfirmPasswordError('');
            }
          }}         
        />
      {confirmPasswordError !== '' && <Text style={styles.errorMessage}>{confirmPasswordError}</Text>}
        <TextInput  style={{ backgroundColor: '#FFFFFF', height: 58,marginLeft:2,borderRadius:10,paddingLeft:10,marginBottom:15  }}
          placeholder="Mobile "
          onChangeText={text => setMobile(text)}
          value={mobile}
          keyboardType="numeric"
          onBlur={() => {
            const mobileRegex = /^[0-9]{10}$/; // Biểu thức chính quy để kiểm tra định dạng số điện thoại
            if (!mobile) {
              setMobileError('Số điện thoại không hợp lệ mời bạn nhập lại');
            } else if (!mobileRegex.test(mobile)) {
              setMobileError('Số điện thoại này không đúng định dạng mời bạn nhập lại');
            } else {
              setMobileError('');
            }
          }}
        />
         {mobileError !== '' && <Text style={styles.errorMessage}>{mobileError}</Text>}
        <TouchableOpacity>
        </TouchableOpacity>
        <View style={{flexDirection:"row", justifyContent:'center', alignItems:"center",}}>
            <TouchableOpacity style={styles.ButtonRegister} onPress={handleRegister}>
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
  errorMessage: {
    color: 'red',
    fontSize: 12,
    marginLeft: 8,
    bottom: 11,
    fontWeight: '400',
  },
});