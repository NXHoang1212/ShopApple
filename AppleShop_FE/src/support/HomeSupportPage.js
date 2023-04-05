import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'

import styles from '../styles/StyleHomeSupportPage'
import HomePageScreen from '../home/HomePageScreen'
import EditProfile from '../information/EditProfile'
import React, { useState } from 'react'


const HomeSupportPage = ({ navigation }) => {
  const goback = () => {
    navigation.navigate("ProfileScreen");
  };
  const nextScreen = () => {
    navigation.navigate("HomeChat");
  }
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Tại sao tài khoản của tôi bị lỗi ?', message: '⚠️ Lưu ý: Trường hợp bạn nhận thấy đơn giao không thành công không phải do lỗi của bạn, vui lòng liên hệ Nhân viên CSKH AppleShop để được hỗ trợ', visible: false },
    { id: 2, title: 'Cách theo dõi tình trạng vận chuyển\ncủa đơn hàng?', message: 'Message 2', visible: false },
    { id: 3, title: 'Làm sao để mua hàng / đặt hàng trên\nứng dụng AppleShop?', message: '⚠️ Lưu ý: Trường hợp bạn nhận thấy đơn giao không thành công không phải do lỗi của bạn, vui lòng liên hệ Nhân viên CSKH AppleShop để được hỗ trợ', visible: false },
    { id: 4, title: 'Tại sao tài khoản của tôi bị lỗi ?', message: '⚠️ Lưu ý: Trường hợp bạn nhận thấy đơn giao không thành công không phải do lỗi của bạn, vui lòng liên hệ Nhân viên CSKH AppleShop để được hỗ trợ', visible: false },
    { id: 5, title: 'Cách theo dõi tình trạng vận chuyển\ncủa đơn hàng?', message: 'Message 2', visible: false },
    { id: 6, title: 'Làm sao để mua hàng / đặt hàng trên\nứng dụng AppleShop?', message: '⚠️ Lưu ý: Trường hợp bạn nhận thấy đơn giao không thành công không phải do lỗi của bạn, vui lòng liên hệ Nhân viên CSKH AppleShop để được hỗ trợ', visible: false },
  ]);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleToggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.notification}>
        <Text>{item.message}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.mainHeader}>
          <View style={styles.leftHeader}>
            <TouchableOpacity onPress={goback}>
              <Image
                style={styles.imageReturn}
                source={require('../../assets/backone.png')}
                name="arrow-back"
                color='white'
                size={20}
              />
            </TouchableOpacity>
            <View style={styles.viewText}>
              <Text style={styles.textTitle}>FAQ</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.textTitle}>Chúng tôi có thể giúp gì cho bạn?</Text>
        <View style={styles.viewSearch}>
          <TextInput style={styles.TextViewSearch}
            placeholder="Search"
          >
          </TextInput>
        </View>
        <View style={styles.tab}>
          <TouchableOpacity onPress={nextScreen}>
            <View style={styles.viewTabRight}>
              <View style={styles.viewTabChat}>
                <Image
                  style={styles.imageChat}
                  source={require('../../assets/iconChat.png')}
                  size={20}
                />
                <View style={styles.viewTextChat}>
                  <Text style={styles.TextChat1}>Câu hỏi về</Text>
                  <Text style={styles.TextChat2}>Chat</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.viewTabLeft}>
              <View style={styles.viewTabSupport}>
                <Image
                  style={styles.imageSupport}
                  source={require('../../assets/IconSupport.png')}
                  size={20}
                />
                <View style={styles.viewTextSupport}>
                  <Text style={styles.TextSupport1}>Câu hỏi về</Text>
                  <Text style={styles.TextSupport2}>Trả Hàng &{'\n'}Hoàn Tiền</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.viewFooter1}>
          <View style={styles.ViewTextFooter1}>
            <Text style={styles.TextFooter1}>Top Questions</Text>
          </View>
          <View style={styles.ViewTextFooter2}>
            <Text style={styles.TextFooter2}>View all</Text>
          </View>
        </View>

        <View style={styles.viewFooter2}>
          <FlatList
            data={notifications}
            renderItem={({ item }) => (

              <TouchableOpacity
                onPress={() => {
                  const updatedNotifications = notifications.map(notification => {
                    if (notification.id === item.id) {
                      return { ...notification, visible: !notification.visible };
                    }
                    return notification;
                  });
                  setNotifications(updatedNotifications);
                }}
              >
                <View style={styles.notificationHeader}>
                  <View style={styles.viewFlast}>
                    <Text style={styles.notificationTitle}>{item.title}</Text>
                    {item.visible && <Text style={styles.notificatio2}>{item.message}</Text>}
                  </View>
                  <View style={styles.viewImageFlast}>
                    <Image
                      source={item.visible ? require('../../assets/iconMinus.jpg') : require('../../assets/iconPlus.jpg')}
                      style={styles.toggleIcon}
                    />

                  </View>

                </View>

              </TouchableOpacity>

            )}
            keyExtractor={item => item.id.toString()}
          />

        </View>
      </View>
    </View>
  )
}

export default HomeSupportPage
{/* <Image source={require('../../assets/Icon.png')} style={{ width: 20, height: 20 }} /> */ }