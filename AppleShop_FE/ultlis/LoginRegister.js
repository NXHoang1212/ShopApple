import getConstant from './Constanst';
import axios from 'axios';
import { ToastAndroid } from 'react-native';
import { Alert } from 'react-native';

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

export const handleRegister = (fullname, email, password, confirm_password, mobile, navigation,
  setfullNameError, setEmailError, setMobileError, setPasswordError, setConfirmPasswordError) => {
  let valid = true;
  // Check for empty fields
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email) {
    setEmailError('Mời bạn nhập email');
    valid = false;
  } else if (!emailRegex.test(email)) {
    setEmailError('Email không hợp lệ');
    valid = false;
  } else {
    setEmailError('');
  }
  const passwordRegex = /^[a-zA-Z0-9]{5,}$/;
  if (!password) {
    setPasswordError('Mời bạn nhập mật khẩu');
    valid = false;
  } else if (!passwordRegex.test(password)) {
    setPasswordError('Mật khẩu phải chỉ bao gồm chữ cái hoặc số');
    valid = false;
  } else {
    setPasswordError('');
  }
  if (!confirm_password) {
    setConfirmPasswordError('Mời bạn nhập lại mật khẩu');
    valid = false;
  } else if (confirm_password !== password) {
    setConfirmPasswordError('Mật khẩu xác nhận không đúng');
    valid = false;
  } else {
    setConfirmPasswordError('');
  }
  const fullnameRegex = /^[a-zA-Z ]+$/;
  if (!fullname) {
    setfullNameError('Mời bạn nhập họ và tên');
    valid = false;
  } else if (!fullnameRegex.test(fullname)) {
    setfullNameError('Họ và tên chỉ bao gồm chữ cái và khoảng trắng');
    valid = false;
  } else {
    setfullNameError('');
  }
  const mobileRegex = /^(84|0[3|5|7|8|9])+([0-9]{8})$/;
  if (!mobile) {
    setMobileError('Mời bạn nhập số điện thoại');
    valid = false;
  } else if (!mobileRegex.test(mobile)) {
    setMobileError('Số điện thoại của bạn không hợp lệ');
    valid = false;
  } else {
    setMobileError('');
  }
  if (valid) {
    axios.post(`${getConstant().HOST}/users/api/register`, {
      fullname: fullname,
      email: email,
      password: password,
      confirm_password: confirm_password,
      mobile: mobile,
    })
      .then(function (response) {
        console.log('response: ', response.data);
        ToastAndroid.show('Đăng kí thành công', ToastAndroid.SHORT);
        navigation.reset({ routes: [{ name: 'MyTabs' }], });
      })
      .catch(function (error) {
        console.log('error: ', error);
        ToastAndroid.show('Đăng kí thất bại', ToastAndroid.SHORT);
      });
  }
};

