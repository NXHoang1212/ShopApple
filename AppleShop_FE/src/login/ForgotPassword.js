import { View, Text, StyleSheet, ScrollView, Image, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { TouchableOpacity } from '@gorhom/bottom-sheet'
import styles from '../styles/StyleForgotPassword'
import axios from 'axios'
import getConstant  from '../../ultlis/Constanst';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  let textInput = useRef(null);
  const lengthInput = 4;
  const [internalVal, setInternalVal] = useState('');
  const onChangText = val => {
    setInternalVal(val);
  };
  useEffect(() => {
    textInput.focus();
  }, []);

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
      email: email
    })
    .then(response => {
      // Handle success response
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
          <Image style={{ width: 20, height: 20 }}
            source={require('../../assets/chevron_big_left.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.scrollview}>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.text}>Forgot</Text>
          <Text style={styles.text}>Password?</Text>
        </View>
        <View style={styles.input}>
          <Image style={styles.image}
            source={require('../../assets/Mail.png')}></Image>
          <TextInput style={{ marginLeft: 50, bottom: 32 }}
            placeholder="Enter your email address"
            onChangeText={onEmailChange}
          />
        </View>
        <Text style={{ marginBottom: 18, marginTop: 9 }}>* We will send you a message to set or reset your new password</Text>
        <TouchableOpacity onPress={onPressSendOtp}>
          <Text style={{ fontSize: 20, color: "#000000", fontWeight: '500', left: 250 }}>Send Otp</Text>
        </TouchableOpacity>
        <View style={styles.Otp}>
          <Text style={styles.TextOtp}>Enter the OTP sent to</Text>
          <Text style={styles.Textemail}>{email}</Text>
        </View>
        <View style={styles.itemBorder}>
          <KeyboardAvoidingView behavior={'padding'}>
            <View>
              <TextInput
                ref={input => (textInput = input)}
                onChangeText={onChangText}
                value={internalVal}
                style={{ height: 0, width: 0 }}
                maxLength={lengthInput}
                returnKeyType="done"
              />
            </View>
            <View style={styles.itemBorder}>
              {Array(lengthInput).fill().map((data, index) => (
                <View style={styles.itemBorder1} key={index}>
                  <Text style={styles.itemcircle}
                    onPress={() => textInput.focus()}>
                    {internalVal && internalVal.length > 0 ? internalVal[index] : ''}
                  </Text>
                </View>
              ))}
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
      <View style={styles.next}>
        <TouchableOpacity onPress={goto1}>
          <Image style={{ width: 55, height: 55, marginRight: 12 }}
            source={require('../../assets/Nextbutton.png')}/>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default ForgotPassword

