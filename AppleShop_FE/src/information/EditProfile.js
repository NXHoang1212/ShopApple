import { View, Text, StyleSheet, Image, TouchableOpacity, Button, TextInput, Pressable, ToastAndroid, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import getConstant from '../../helper/Constanst';
import styles from '../styles/StyleEditProfile';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

const EditProfile = ({ navigation }) => {

  const windownWidth = Dimensions.get('window').width;
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [age, setAge] = useState();
  const [dateofbirth, setDateofbirth] = useState();
  const [city, setCity] = useState();
  const [gender, setGender] = useState();
  const [address, setAddress] = useState();
  const [avatar, setAvatar] = useState(null);
  const [user, setUser] = useState({avatar: null,});
  const nextScreen5 = () => {
    navigation.navigate("ProfileScreen");
  };

  useEffect(() => {
    // Gọi API lấy thông tin người dùng
    axios.get(`${getConstant().HOST}/users/api/user/64285748d2184995bce6be00`)
      .then(function (response) {
        // Lưu thông tin người dùng vào state
        setName(response.data.user.name);
        setEmail(response.data.user.email);
        setMobile(response.data.user.mobile);
        setAge(response.data.user.age);
        setDateofbirth(response.data.user.dateofbirth);
        setCity(response.data.user.city);
        setGender(response.data.user.gender);
        setAddress(response.data.user.address);
        console.log( 'name - email - mobile - age - dateofbirth - city - gender - addrees ', name, mobile, age, dateofbirth, city, gender, address)
      })
      .catch(function (error) {
        console.log('error: ', error);
      });
  }, []);

  const chooseImage = () => {
    const options = {
      mediaType: 'photo',
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        setAvatar(source);
      }
    });
  };

  const takePhoto = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      quality: 0.5,
    };
    launchCamera(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('Bạn đã không chụp lại hình ảnh của mình');
      } else if (response.error) {
        console.log('Hình ảnh của bạn bị lỗi: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setUser({...user, avatar: { uri: response.uri }});
      }
    });
  };


  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Pressable onPress={nextScreen5} style={{ left: 10, position: "absolute" }}>
          <Image source={require("../../assets/arrow-Left.png")}></Image>
        </Pressable>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>Edit Profile</Text>
      </View>
      <TouchableOpacity onPress={takePhoto}>
        <Image
          source={avatar ? { uri: avatar } : require('../../assets/phuoc.jpg')}
          style={{ width: 100, height: 100, borderRadius: 50, alignSelf: "center", bottom: 10, borderWidth: 6, borderColor: 'white' }}
        />
      </TouchableOpacity>

      <View style={{ marginVertical: 10 }}>
        <TextInput style={styles.inputtext}
          value={name}
          onChangeText={setName}
          placeholder="Name"
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <TextInput style={styles.inputtext}
          value={email}
          placeholder="Email"
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <TextInput style={styles.inputtext}
          value={mobile}
          onChangeText={setMobile}
          placeholder="Mobile"
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <TextInput style={styles.inputtext}
          value={age}
          onChangeText={setAge}
          placeholder="Age"
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <TextInput style={styles.inputtext}
          value={gender}
          onChangeText={setGender}
          placeholder="Gender"
        />
      </View>
      <View style={{ marginVertical: 10, alignItems: "stretch", }}>
        <View>
          <TextInput style={styles.inputtext1}
            value={dateofbirth}
            onChangeText={setDateofbirth}
            placeholder="Date of birth"
          />
        </View>
        <View style={{ right: -165, top: -50, paddingLeft: 30 }}>
          <TextInput style={styles.inputtext1}
            value={city}
            onChangeText={setCity}
            placeholder="city" />
        </View>
      </View>
      <View style={{ marginVertical: 40, bottom: 80 }}>
        <TextInput style={styles.inputtext}
          value={address}
          onChangeText={setAddress}
          placeholder="Address"
        />
      </View>
      <View style={styles.containerLogout}>
        <TouchableOpacity style={styles.logout} onPress={() => {
          axios.post(`${getConstant().HOST}/users/api/updateUser/64285748d2184995bce6be00`, {
            name: name,
            mobile: mobile,
            age: age,
            gender: gender,
            dateofbirth: dateofbirth,
            city: city,
            address: address,
          })
            .then(function (response) {
              console.log('response: ', response);
              ToastAndroid.show('Cập nhật thành công', ToastAndroid.SHORT);
            })
            .catch(function (error) {
              ToastAndroid.show('Cập nhật thất bại', ToastAndroid.SHORT);
              console.log('error: ', error);
            });
        }}>
          <Text style={styles.textLogout}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

export default EditProfile