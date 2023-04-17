import getConstant from './Constanst';
import axios from 'axios';
import { ToastAndroid } from 'react-native';

export const LoginRegister = (email, password, navigation) => {
  axios
    .post(`${getConstant().HOST}/users/api/login`, {
      email: email,
      password: password,
    })
    .then(function (response) {
      console.log('response: ', response);
      ToastAndroid.show('Đăng nhập thành công', ToastAndroid.SHORT);
      navigation.navigate('HomePageScreen');
    })
    .catch(function (error) {
      ToastAndroid.show('Đăng nhập thất bại', ToastAndroid.SHORT);
      console.log('error: ', error);
    });
};

export const handleRegister = (fullname, email, password, confirm_password, mobile, navigation) => {
  axios.post(`${getConstant().HOST}/users/api/register`, {
    fullname: fullname,
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
  });
};
