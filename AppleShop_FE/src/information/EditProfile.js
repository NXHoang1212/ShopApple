import { View, Text, Image, TouchableOpacity, TextInput, Pressable, ToastAndroid, Dimensions, Platform, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import getConstant from '../../ultlis/Constanst';
import styles from '../styles/StyleEditProfile';
import { Picker } from '@react-native-picker/picker';
import cities from '../ArrayCity/Cities';
import genders from '../ArrayCity/genders';
import DateTimePicker from '@react-native-community/datetimepicker';
import { getAvatar, pickPhoto } from '../../ultlis/Camera';


const EditProfile = ({ navigation }) => {
  const windownWidth = Dimensions.get('window').width;
  const [fullname, setfullName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [age, setAge] = useState();
  const [dateofbirth, setDateofbirth] = useState('');
  const [city, setCity] = useState();
  const [gender, setGender] = useState();
  const [address, setAddress] = useState();
  const [user, setUser] = useState({ name: '', avatar: null});
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const nextScreen5 = () => {
    navigation.navigate("ProfileScreen");
  };
 //hiện thông tin người dùng
  useEffect(() => {
    // Gọi API lấy thông tin người dùng
    axios.get(`${getConstant().HOST}/users/api/user/643405fb825bf73be7540a7b`)
      .then(function (response) {
        // Lưu thông tin người dùng vào state
        setfullName(response.data.user.fullname);
        setEmail(response.data.user.email);
        setMobile(response.data.user.mobile);
        setAge(response.data.user.age);
        setDateofbirth(response.data.user.dateofbirth);
        setCity(response.data.user.city);
        setGender(response.data.user.gender);
        setAddress(response.data.user.address);
        console.log('fullname - email - mobile - age - dateofbirth - city - gender - addrees ', fullname, mobile, age, dateofbirth, city, gender, address)
      })
      .catch(function (error) {
        console.log('error: ', error);
      });
  }, []);
 //lấy ảnh từ máy 
  useEffect(() => {
    getAvatar(setUser);
  }, []);

  const handleTakePhoto = () => {
    pickPhoto(user, setUser);
  };
  
  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  };

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onchange = ({ type }, selectedDate) => {
    if (type === 'set') {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === "android") {
        toggleDatePicker();
        setDateofbirth(formatDate(currentDate));
      }

    } else {
      toggleDatePicker();
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Pressable onPress={nextScreen5} style={{ left: 10, position: "absolute" }}>
          <Image source={require("../../assets/arrow-Left.png")}></Image>
        </Pressable>
        <Text style={{ fontSize: 20, fontWeight: "600", color: "#000000" }}>Chỉnh sửa thông tin</Text>
      </View>
      <TouchableOpacity onPress={handleTakePhoto}>
      {user.avatar ? (
          <Image source={{ uri: user.avatar.uri }} style={styles.uriavatar} />
        ) : (
          <Image source={require('../../assets/phuoc.jpg')} style={styles.image} />
        )}
      </TouchableOpacity>


      <View style={{ marginVertical: 10 }}>
        <TextInput style={styles.inputtext}
          value={fullname}
          onChangeText={setfullName}
          placeholder="Nhập họ và tên"
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <TextInput style={styles.inputtext}
          value={email}
          placeholder="Nhập email"
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <TextInput style={styles.inputtext}
          value={mobile}
          onChangeText={setMobile}
          placeholder="Nhập số điện thoại"
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <TextInput style={styles.inputtext}
          value={age}
          onChangeText={setAge}
          placeholder="Nhập tuổi"
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <View style={styles.inputtext}>
          <Picker
            mode='dropdown'
            style={{ bottom: 3, right: 10 }}
            selectedValue={gender}
            removeClippedSubviews={true}
            onValueChange={(itemValue) => setGender(itemValue)
            }>
            {genders.map((item, index) => {
              return (
                <Picker.Item key={index} label={item} value={item} />
              );
            })}
          </Picker>
        </View>
      </View>
      <View style={{ marginVertical: 10, alignItems: "stretch", }}>
        <View>
          {showPicker && (
            <DateTimePicker
              mode="date"
              display="calendar"
              value={date}
              onChange={onchange}
              locale="vi-VN"
            />
          )}
          {!showPicker && (
            <Pressable onPress={toggleDatePicker}>
              <TextInput style={styles.inputtext1}
                value={dateofbirth}
                onChangeText={setDateofbirth}
                placeholder="Ngày sinh"
                editable={false}
                onPressIn={toggleDatePicker}
              />
            </Pressable>
          )}
        </View>
        <View style={{ right: -155, top: -50, paddingLeft: 30 }}>
          <View style={styles.viewpicker1}>
            <Picker
              mode='dropdown'
              style={{ bottom: 3, right: 10, width: 177 }}
              selectedValue={city}
              onValueChange={(itemValue) => setCity(itemValue)
              }>
              <Picker.Item label="Nơi sinh sống" value="" />
              {cities.map((item, index) => {
                return (
                  <Picker.Item key={index} label={item} value={item} />
                );
              })}
            </Picker>
          </View>
        </View>
      </View>
      <View style={{ marginVertical: 40, bottom: 80 }}>
        <TextInput style={styles.inputtext}
          value={address}
          onChangeText={setAddress}
          placeholder="Địa chỉ"
        />
      </View>
      <View style={styles.containerLogout}>
        <TouchableOpacity style={styles.logout} onPress={() => {
          axios.post(`${getConstant().HOST}/users/api/updateUser/643405fb825bf73be7540a7b`, {
            name: fullname,
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
          <Text style={styles.textLogout}>Cập nhật</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

export default EditProfile