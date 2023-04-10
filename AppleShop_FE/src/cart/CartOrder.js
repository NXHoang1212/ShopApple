import { View, Text, FlatList, Button, Image, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import StyleCartOrder from '../styles/StyleCartOrder';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WebView } from 'react-native-webview';
import  getConstant  from '../../ultlis/Constanst';

const CartOrder = ({ navigation, route }) => {
  const { cart: cartToAdd } = route.params;
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);


  const nextScreen3 = () => {
    navigation.navigate("ChoosePayment");
  };

  const goBackToProduct = () => {
    navigation.goBack();
  }
  useEffect(() => {
    const fetchCartItems = async () => {
      const cartItemsJson = await AsyncStorage.getItem('cartItems');
      if (cartItemsJson) {
        const cartItems = JSON.parse(cartItemsJson);
        setCartItems([...cartItems, ...cartToAdd]);
      }
    };

    fetchCartItems();
  }, []);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    setTotalPrice(newTotalPrice);
    AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleRemoveFromCart = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem.id !== itemId)
    );
  };

  const handleIncreaseQuantity = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((cartItem) =>
        cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      )
    );
  };

  const handleDecreaseQuantity = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((cartItem) =>
        cartItem.id === itemId && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  };

  return (
    <View style={StyleCartOrder.container}> 
        <View style={StyleCartOrder.header}>
          <TouchableOpacity style={{width: 55}} onPress={goBackToProduct}>
               <Image style={{left: 25, width: 30, height: 30}} source={require('../../assets/backone.png')} />
          </TouchableOpacity>
          <Text style={StyleCartOrder.textOrder}>Shopping Cart</Text>
          <Image style={{right: 35, width: 28, height: 28}} source={require('../../assets/cart.png')} />
        </View>
       <View style={StyleCartOrder.Line}></View> 
      <FlatList
        data={cartItems}
        renderItem={({ item, index }) => (
            <View key={item.id} style={StyleCartOrder.body}>
              <View style={StyleCartOrder.viewOrder}>
                <Image style={{ width: 119, height: 88, top: 10 }}
                    source={ item.image ? { uri: item.image } : require('../../assets/1.jpg')}
                    resizeMode={'cover'}
                  />
                <View style={StyleCartOrder.viewtext}>
                    <Text style={StyleCartOrder.textname}>{item.name}</Text>
                    <Text style={StyleCartOrder.textname}>{item.year}</Text>
                    <Text style={StyleCartOrder.textname}>{(item.price * item.quantity).toLocaleString('vi-VN' )}VND</Text>
                </View>
                <View style={StyleCartOrder.buttonClickSetup}>
                    <TouchableOpacity onPress={() => handleDecreaseQuantity(item.id)}>
                      <Image style={StyleCartOrder.image1} source={require('../../assets/Group86.png')} />
                    </TouchableOpacity>
                    <Text style={StyleCartOrder.number}>{item.quantity}</Text>
                    <TouchableOpacity onPress={() => handleIncreaseQuantity(item.id)}>
                      <Image style={StyleCartOrder.image1} source={require('../../assets/Group87.png')} />
                    </TouchableOpacity>
              </View>
              <View style={StyleCartOrder.buttondelete}> 
                  <TouchableOpacity onPress={() => handleRemoveFromCart(item.id)}>
                      <Image style={StyleCartOrder.image} source={require('../../assets/delete.png')} />          
                  </TouchableOpacity>
              </View>
            </View>
              <View style={StyleCartOrder.linehight}></View>
            </View> 
        )}
        keyExtractor={item => item.id.toString()}
      />
      <View style={StyleCartOrder.viewtotalprice}>
        <View style={StyleCartOrder.button}>
          <View style={StyleCartOrder.viewtotal}>
              <Text style={StyleCartOrder.totalPrice}>Tổng tiền :</Text>
              <Text style={StyleCartOrder.totalPrice1}>{totalPrice.toLocaleString('vi-VN' ,{style: 'currency', currency: 'VND' })}</Text>
          </View>
          <View style={StyleCartOrder.payment} >
            <TouchableOpacity onPress={nextScreen3}>
                  <Text style={StyleCartOrder.textbutton1}>Thanh toán</Text>
            </TouchableOpacity>
          </View>
            <View style={StyleCartOrder.otherpayment}>
              <TouchableOpacity onPress={goBackToProduct}>
                  <Text style={StyleCartOrder.textbutton2}>Chọn thêm sản phẩm khác</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  );
};

export default CartOrder;
