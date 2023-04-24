import React, { useEffect, useState } from 'react';
import { ListItem } from '@react-native-material/core';
import { Alert, View, Text, ToastAndroid, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from 'react-native-elements';
import styles from '../styles/StyleProfileScreen';
import axios from 'axios';
import getConstant from '../../ultlis/Constanst';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getAvatar } from '../../ultlis/Camera';
import SignOut from '../../ultlis/SignOut';

const ProfileScreen = ({ navigation}) => {
  const [productId, setProductId] = useState(null);
  const [user, setUser] = useState({ name: '', avatar: null });
  const [fulllname, setFulllname] = useState('');
  const [email, setEmail] = useState('');
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const nextScreen = () => {
    navigation.navigate('EditProfile');
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
      .get(`${getConstant().HOST}/users/api/user/643cef4b3ef76539bff8cdaf`)
      .then(function (response) {
        setFulllname(response.data.user.fullname);
        setEmail(response.data.user.email);
      })
      .catch(function (error) {
        console.log("error: ", error);
      });
  }, []);
  const onCancelPress = () => {
    setIsDialogVisible(false);
  };

  const onOKPress = () => {
    setIsDialogVisible(false);
    navigation.navigate('MyTabs');
    ToastAndroid.show('Đăng xuất thành công', ToastAndroid.SHORT);
    // do something when OK is pressed
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.image}>
          <TouchableOpacity onPress={nextScreen3}>
            <Image
              source={require('../../assets/arrow-Left.png')}
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
                title="Tìm Kiếm"
                leading={<Icon name="magnify" size={24} color="#000000" />}
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
              <TouchableOpacity onPress={() => setIsDialogVisible(true)}>
                <Text style={styles.textSignOut}>Đăng Xuất</Text>
              </TouchableOpacity>
              <SignOut
                visible={isDialogVisible}
                title='Xác nhận'
                message='Bạn có muốn đăng xuất không ?'
                onCancelPress={onCancelPress}
                onOKPress={onOKPress}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default ProfileScreen;
