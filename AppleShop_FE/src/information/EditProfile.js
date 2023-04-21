import { View, Text, Image, TouchableOpacity, TextInput, Pressable, ToastAndroid, Dimensions, ScrollView } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import moment from 'moment';
import styles from '../styles/StyleEditProfile';
import { Picker } from '@react-native-picker/picker';
import cities from '../ArrayCity/Cities';
import genders from '../ArrayCity/genders';
import DateTimePicker from '@react-native-community/datetimepicker';
import { getAvatar, pickPhoto } from '../../ultlis/Camera';
import { AxiosApi } from '../../ultlis/AxiosApi';
import AxiosInstance from '../axios/AxiosIntance';


const EditProfile = ({ navigation, route }) => {
  const windownWidth = Dimensions.get('window').width;
  const [user, setUser] = useState({ name: '', avatar: null });
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const { infoUser, setinfoUser } = useContext(AxiosApi);
  
  const nextScreen5 = () => {
    navigation.navigate("ProfileScreen");
  };
 
  //lấy ảnh từ máy 
  useEffect(() => {
    getAvatar(setUser);
  }, []);

  const handleTakePhoto = () => {
    pickPhoto(user, setUser);
  };

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(false);
    setDate(currentDate);
    const formattedDate = moment(currentDate).format("DD/MM/YYYY");
    setinfoUser({ ...infoUser, dateofbirth: formattedDate });
  };

  const updateProfile = async (id) => {
    console.log(id); // In ra giá trị của id
    try {
      const response = await AxiosInstance().post('/users/api/updateUser/643cef4b3ef76539bff8cdaf', {
        fullname: infoUser.fullname,
        age: infoUser.age,
        gender: infoUser.gender,
        dateofbirth: infoUser.dateofbirth,
        city: infoUser.city,
        address: infoUser.address,
      });
      if (response.data && response.data.error === false) {
        ToastAndroid.show('Cập nhật thành công', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Cập nhật thất bại', ToastAndroid.SHORT);
      }
    } catch (error) {
      ToastAndroid.show('Lỗi khi cập nhật thông tin', ToastAndroid.SHORT);
      console.error(error.response);
    }
  };
  
  

  
  
  
  
  // gọi hàm updateProfile và truyền vào tham số id

  
  

  return (
    <ScrollView>
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
            value={infoUser.fullname}
            onChangeText={(text) => setinfoUser({ ...infoUser, fullname: text })}
            placeholder="Nhập họ và tên"
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={styles.textmail}>
            {infoUser.email}
          </Text>
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={styles.textmail}>
            {infoUser.mobile}
          </Text>
        </View>
        <View style={{ marginVertical: 10 }}>
          <TextInput style={styles.inputtext}
            value={infoUser.age}
            onChangeText={(text) => setinfoUser({ ...infoUser, age: text })}
            placeholder="Nhập tuổi"
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <View style={styles.inputtext}>
            <Picker
              mode='dropdown'
              style={{ bottom: 3, right: 10 }}
              selectedValue={infoUser.gender}
              removeClippedSubviews={true}
              onValueChange={(itemValue) => setinfoUser({ ...infoUser, gender: itemValue })}
            >
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
                onChange={onChangeDate} // sửa thành onChangeDate
                locale="vi-VN"
              />
            )}
            {!showPicker && (
              <Pressable onPress={toggleDatePicker}>
                <TextInput style={styles.inputtext1}
                  value={infoUser.dateofbirth}
                  onChangeText={(text) => setinfoUser({ ...infoUser, dateofbirth: text })}
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
                selectedValue={infoUser.city}
                onValueChange={(itemValue) => setinfoUser({ ...infoUser, city: itemValue })
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
            value={infoUser.address}
            onChangeText={(text) => setinfoUser({ ...infoUser, address: text })}
            placeholder="Địa chỉ"
          />
        </View>
        <View style={styles.containerLogout}>
          <TouchableOpacity style={styles.logout} onPress={updateProfile}>
            <Text style={styles.textLogout}>Cập nhật</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default EditProfile