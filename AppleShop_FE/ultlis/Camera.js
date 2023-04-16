import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const pickPhoto = async (user, setUser) => {
  const options = {
    mediaType: 'photo',
    includeBase64: false,
    quality: 0.5,
  };
  try {
    const response = await new Promise((resolve, reject) => {
      const buttons = [
        { text: 'Chụp ảnh', onPress: () => launchCamera(options, resolve, reject) },
        { text: 'Chọn ảnh', onPress: () => launchImageLibrary(options, resolve, reject) },
        { text: 'Huỷ', onPress: () => reject({ error: 'Bạn đã thoát khỏi chụp ảnh' }) },
      ];
      // Hiển thị dialog cho phép người dùng lựa chọn chụp ảnh hoặc chọn ảnh từ thư viện
      Alert.alert(
        'Chọn ảnh',
        'Bạn muốn chụp ảnh mới hay chọn ảnh từ thư viện?',
        buttons,
        { cancelable: false },
      );
    });
    if (response.didCancel) {
      console.log('Bạn đã không chọn ảnh');
    } else if (response.error) {
      console.log('Ảnh của bạn bị lỗi: ', response.error);
    } else {
      // Lưu ảnh vào bộ nhớ đệm
      await AsyncStorage.setItem('avatar', response.assets[0].uri);
      setUser({ ...user, avatar: { uri: response.assets[0].uri } });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAvatar = async (setUser) => {
  try {
    const value = await AsyncStorage.getItem('avatar');
    if (value !== null) {
      setUser((prevUser) => ({ ...prevUser, avatar: { uri: value } }));
    }
  } catch (error) {
    console.log(error);
  }
};
