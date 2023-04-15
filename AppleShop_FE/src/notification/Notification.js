import { Button, StyleSheet, Text, TouchableOpacity, View, FlatList, Image } from 'react-native'
import React from 'react'
import Toast from 'react-native-toast-message';
import stylesNotification from '../styles/StyleNotification';

const Notification = ({navigation}) => {
  data = [
    {
      id: '1',
      title: 'AppleShop',
      content: 'Chào mừng bạn đã đến với app thế giới của điện tử công nghệ chúng tôi',
      image: require('../../assets/appleNotification.png'),
    },
    {
      id: '2',
      title: 'AppleShop',
      content: 'Chương trình khuyến mãi đang có tại AppleShop từ ngày 10/10/2023 đến 10/11/2023',
      image: require('../../assets/appleNotification.png'),
    },
    {
      id: '3',
      title: 'AppleShop',
      content: 'Hiện tại đang có 1 sản phẩm mới mời bạn vào app để xem sản phẩm mới nhất',
      image: require('../../assets/appleNotification.png'),
    },
    {
      id: '4',
      title: 'AppleShop',
      content: 'Chương trình đang có sự kiện vòng quay mới bạn vào để trúng thưởng',
      image: require('../../assets/appleNotification.png'),
    },
    {
      id: '5',
      title: 'AppleShop',
      content: 'Bạn vừa đặt hàng thành công sản phẩm xin mời vào giỏi hàng của bạn đề xem vận chuyển',
      image: require('../../assets/appleNotification.png'),
    },
    {
      id: '6',
      title: 'AppleShop',
      content: 'Dễ dàng thanh toán với các phương thức còn không mau vào đặt hàng để có thể giảm giá',
      image: require('../../assets/appleNotification.png'),
    },
  ]
  const renderItem = ({ item }) => {
    const { title, content, image } = item;
    return (
      <View style={stylesNotification.item} key={item.id}>
          <View style={stylesNotification.title1}>
            <Text style={stylesNotification.name}>{title}</Text>
          </View>
          <View style={stylesNotification.content}> 
            <Image style={stylesNotification.image1} source={image} />          
            <Text style={stylesNotification.content1}>{content}</Text>
          </View>
      </View>
    );
  };
  const goback = () => {
    navigation.navigate("HomePageScreen");
  }

  return (
    <View style={stylesNotification.container}>
      <View style={stylesNotification.header}>
        <View style={stylesNotification.header1}>
          <TouchableOpacity onPress={goback}>
            <Image style={stylesNotification.image}
            source={require('../../assets/backone.png')} />
          </TouchableOpacity>
          <Text style={stylesNotification.textHeader}>Thông Báo</Text>
        </View>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}

      />
    </View >
  )
}

export default Notification