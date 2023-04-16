import React, { useEffect, useState } from 'react';
import { ListItem } from '@react-native-material/core';
import { SafeAreaView, View, StyleSheet, Text, Button, ToastAndroid } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from 'react-native-elements';
import styles from '../styles/StyleProfileScreen';
import axios from 'axios';
import getConstant from '../../ultlis/Constanst';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getAvatar } from '../../ultlis/Camera';

const ProfileScreen = ({ navigation }) => {
  const [productId, setProductId] = useState(null);
  const [user, setUser] = useState({ name: '', avatar: null });
  const [fulllname, setFulllname] = useState('');
  const [email, setEmail] = useState('');

  const nextScreen = () => {
    navigation.navigate('EditProfile');
  };

  const nextScreen1 = () => {
    navigation.navigate('MyTabs');
    ToastAndroid.show('Bạn đã đăng xuất thành công', ToastAndroid.SHORT);
  };

  const nextScreen2 = () => {
    navigation.navigate('HomeSupportPage');
  };

  const nextScreen3 = () => {
    navigation.navigate('HomePageScreen');
  };

  const nextScreen4 = () => {
    navigation.navigate('CartOrder', { productId: productId });
  };

  const nextScreen5 = () => {
    navigation.navigate('ForgotPassword');
  };

  const nextScreen6 = () => {
    navigation.navigate('ChoosePayment');
  }
 //lấy ảnh từ camera
  useEffect(() => {
    getAvatar(setUser);
  }, []);
  //lấy thông tin user
  useEffect(() => {
    axios
      .get(`${getConstant().HOST}/users/api/user/643405fb825bf73be7540a7b`)
      .then(function (response) {
        setFulllname(response.data.user.fullname);
        setEmail(response.data.user.email);  
      })
      .catch(function (error) {
        console.log("error: ", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <TouchableOpacity onPress={nextScreen3}>
          <Image
            source={require('../../assets/backone.png')}
            style={styles.image1}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.UploadImage}>
        <TouchableOpacity>
        {user.avatar ? (
          <Image source={{ uri: user.avatar.uri }} style={styles.nameimage} />
        ) : (
          <Image source={require('../../assets/phuoc.jpg')} style={styles.nameimage} />
        )}
        </TouchableOpacity>
        <Text style={{ fontSize: 18, color: '#000000', fontWeight: '500', marginBottom: 10 }}>
          Chào mừng, {fulllname}
        </Text>
        <Text style={{ fontSize: 16, color: '#242424', paddingBottom: 5, borderRadius: 15, backgroundColor: '#AEAEAE', padding: 5 }}>
          {email}
        </Text>
      </View>
      <View style={styles.list}>
        <View style={styles.viewlist}>
          <Text style={styles.acc}>Tài Khoản</Text>
          <View styles={styles.viewitem}>
            <ListItem
              title="Thông Tin"
              onPress={nextScreen}
              leading={<Icon name="account-edit" size={24} color="#000000" />}
            />
            <ListItem onPress={nextScreen5}
              title="Đổi mật khẩu"
              leading={<Icon name="lock-reset" size={24} color="#000000" />}
            />
            <Text style={styles.acc}>Mua Sắm</Text>
            <ListItem onPress={nextScreen6}
              title="Thanh Toán"
              leading={<Icon name="credit-card-settings-outline" size={24} color="#000000" />}
            />
            <ListItem onPress={nextScreen4}
              title="Đơn hàng"
              leading={<Icon name="cart-arrow-right" size={24} color="#000000" />}
            />
            <ListItem
              onPress={nextScreen2}
              title="Hỗ Trợ"
              leading={<Icon name="charity" size={24} color="#000000" />}
            />
            <ListItem
              title="Mã giảm giá"
              leading={<Icon name="sale" size={24} color="#000000" />}
            />
          </View>
          <View style={styles.signout}>
            <TouchableOpacity onPress={nextScreen1} >
              <Text style={styles.textSignOut}>
                Đăng xuất
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default ProfileScreen;
