import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import stylesCreditCard from '../styles/StyleCreditCard';
import { TextInput } from 'react-native-gesture-handler';
import { BackgroundImage } from 'react-native-elements/dist/config';


const DATA = [
  {
    id: '1',
    bankName: 'Sacombank',
    cardNo: '5535 6535 2345 3786',
    name: 'NGUYEN VAN A',
    cvv: '123',
    expireDate: '00/00',
    soTK: 'SO TK: 1234 888 999',
    image: require('../../assets/visa.png'),
    image1: require('../../assets/cardiconchip1.png'),
    infinit: 'infinite',
    bg_color: '#38A3A5',
  },
  {
    id: '2',
    bankName: 'Sacombank',
    cardNo: '5535 6535 2345 3786',
    name: 'NGUYEN VAN A',
    cvv: '123',
    expireDate: '00/00',
    soTK: 'SO TK: 1234 888 999',
    image: require('../../assets/visa.png'),
    image1: require('../../assets/cardiconchip1.png'),
    infinit: 'infinite',
    bg_color: '#96BAFF',
  },
  {
    id: '3',
    bankName: 'Sacombank',
    cardNo: '5535 6535 2345 3786',
    name: 'NGUYEN VAN A',
    cvv: '123',
    expireDate: '00/00',
    soTK: 'SO TK: 1234 888 999',
    image: require('../../assets/visa.png'),
    image1: require('../../assets/cardiconchip1.png'),
    infinit: 'infinite',
    bg_color: 'black',
  }
];

const CardForm = () => {
  const [details, setDetails] = useState([]);
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => setDetails(DATA[index])}>
        <View style={[stylesCreditCard.card, { backgroundColor: item.bg_color }]}>
          <Text style={stylesCreditCard.namebanks}>{item.bankName}</Text>
          <Image source={item.image1} style={stylesCreditCard.images1} />
          <Text style={stylesCreditCard.cards}>{item.cardNo}</Text>
          <View style={{ flexDirection: 'row', gap: 5 }}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={stylesCreditCard.text1}>MEMBER</Text>
              <Text style={stylesCreditCard.text1}>SINCE</Text>
            </View>
            <Text style={stylesCreditCard.dates}>{item.expireDate}</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={stylesCreditCard.text1}>GOOD</Text>
                <Text style={stylesCreditCard.text1}>THRU</Text>
              </View>
              <Text style={stylesCreditCard.dates}>{item.expireDate}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
            <Text style={stylesCreditCard.names}>{item.name}</Text>
          </View>
          <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
            <Text style={stylesCreditCard.numbers}>{item.soTK}</Text>
          </View>
          <View style={stylesCreditCard.notes}>
            <Image source={item.image} style={stylesCreditCard.images} />
            <Text style={stylesCreditCard.infinits}>{item.infinit}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={stylesCreditCard.conatiner}>
      <Text style={stylesCreditCard.title}>Payment Card</Text>
      <View style={{ marginVertical: 40, bottom: 20 }}>
        <FlatList
          horizontal
          data={DATA}
          renderItem={renderItem}
        />
      </View>
      <View style={{ paddingHorizontal: 20, bottom: 40 }}>
        <Text style={stylesCreditCard.textLabel}>Card Number</Text>
        <View style={stylesCreditCard.textView}>
          <TextInput style={stylesCreditCard.text}>{details.cardNo}</TextInput>
        </View>
        <View style={{ bottom: 10 }}>
          <Text style={stylesCreditCard.textLabel}>Name</Text>
          <View style={stylesCreditCard.textView}>
            <TextInput style={stylesCreditCard.text}>{details.name}</TextInput>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', bottom: 17 }}>
          <View style={{ width: '40%' }}>
            <TextInput style={stylesCreditCard.textLabel}>Expiry date</TextInput>
            <View style={[stylesCreditCard.textView]}>
              <TextInput style={stylesCreditCard.text}>{details.expireDate}</TextInput>
            </View>
          </View>
          <View style={{ width: '45%' }}>
            <TextInput style={stylesCreditCard.textLabel}>CVV</TextInput>
            <View style={[stylesCreditCard.textView]}>
              <Text style={stylesCreditCard.text}>{details.cvv}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={[stylesCreditCard.textView, { backgroundColor: '#96BAFF', alignItems: 'center', marginVertical: 30, bottom: 35 }]}>
          <Text style={[stylesCreditCard.text, { color: '#000000' }]}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardForm;