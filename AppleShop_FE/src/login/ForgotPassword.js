import { View, Text, StyleSheet, ScrollView, Image, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { TouchableOpacity } from '@gorhom/bottom-sheet'
import styles from '../styles/StyleForgotPassword'
import axios from 'axios'
import getConstant  from '../../ultlis/Constanst';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  const goto1 = () => {
    navigation.navigate("CheckEmailVerfity");
  }
  const goBackToProduct = () => {
    navigation.goBack();
  }
  const onEmailChange = (value) => {
    setEmail(value);
  }

  const onPressSendOtp = () => {
    axios.post(`${getConstant().HOST}/users/api/forgot-password`, {
      email: email,
    })
    .then(response => {
      navigation.navigate("CheckEmailVerfity");
      console.log(response.data); // In ra dữ liệu trả về từ API
    })
    .catch(error => {
      console.error(error);
      // Handle error
    });
  };

  return (
    <View style={styles.container} >
      <View style={styles.back}>
        <TouchableOpacity onPress={goBackToProduct}>
          <Image style={{ width: 30, height: 30, tintColor: '#000' }}
            source={require('../../assets/chevron_big_left.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.scrollview}>
        <View style={{ marginBottom: 30 }}>
          <Text style={styles.text}>Khôi phục tài khoản</Text>
        </View>
        <View style={styles.input}> 
          <Image style={styles.image}
            source={require('../../assets/Mail.png')}></Image>
          <TextInput style={{ marginLeft: 50, bottom: 32 }}
            placeholder="Vui lòng nhập email của bạn"
            onChangeText={onEmailChange}
          />
        </View>
        <Text style={{ marginBottom: 18, marginTop: 9 }}>* Chúng tôi sẽ gửi đường link qua email để bạn có thể đổi mật khẩu</Text>
        <View style={styles.Otp}>
          <Text style={styles.TextOtp}>Đường link sẽ được gửi tới</Text>
          <Text style={styles.Textemail}>{email}</Text>
        </View>
        <View style={{top: 150}}>
          <TouchableOpacity onPress={onPressSendOtp}>
            <Text 
            style={{ fontSize: 18, color: "#fff", fontWeight: '400', textAlign: 'center',alignSelf: 'center', width: 100, height: 35,backgroundColor: '#0070F0', padding: 4, borderRadius: 18 }}>
              Gửi Email
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.next}>
      </View>
    </View>
  )
}

export default ForgotPassword

