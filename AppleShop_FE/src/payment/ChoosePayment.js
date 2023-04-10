import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native'
import React, {useState} from 'react'
import { WebView } from 'react-native-webview';
import  getConstant  from '../../ultlis/Constanst';

const ChoosePayment = ({navigation}) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (card) => {
    setSelectedCard(card);
  }
  const goBackToProduct = () => {
    navigation.goBack();
  }

  const handleNavigationStateChange = (newState) => {
    const url = newState.url;
    if (url.includes('/success')) {
      setShowModal(false);
      navigation.navigate('Success');
    } else if (url.includes('/cancel')) {
      setShowModal(false);
    }
  };

  const renderCard = (cardImage, cardNumber) => {
    const isSelected = selectedCard === cardNumber;

    return (
      <TouchableOpacity onPress={() => handleCardSelect(cardNumber)}>
        <View style={styles.viewcredit1}>
          <Image style={{width: 40, height: 40, left: 15}} source={cardImage} />
          <Text style={{color: '#000000', fontSize: 16, left: 10}}>{cardNumber}</Text>
          {isSelected && <Image style={{width: 25, height: 25, marginLeft: 'auto', right: 8,tintColor: '#4CE5B1'}} source={require('../../assets/check.png')} />}
        </View>
      </TouchableOpacity>
    );
  }
   
  return (
    <View style={styles.container}>
    <Modal visible={showModal} onRequestClose={() => setShowModal(false)}>
      <WebView
        source={{ uri: `${getConstant().HOST}/san-pham/paypal` }}
        onNavigationStateChange={handleNavigationStateChange}
      />
    </Modal>
      <View style={styles.header}>
        <View style={styles.viewheader}>
            <TouchableOpacity onPress={goBackToProduct }>
                <Image style={{tintColor: '#ffffff', width: 28, height: 28}} source={require('../../assets/backone.png')} />
            </TouchableOpacity>
            <Text style={styles.textpayment}>Payment Method</Text>
        </View>
        <View style={styles.viewcredit}>
            <Text style={{fontSize: 18, fontWeight: 'bold', top: 20, left: 20}}>Credit Card</Text>
            <View style={{gap: 35}}> 
              {renderCard(require('../../assets/visaicon.png'), '**** **** **** 5967')}
              {renderCard(require('../../assets/paypalicon.png'), 'xuanhoangn1@gmail.com')}
              {renderCard(require('../../assets/momoicon.png'), '**** **** **** 3461')}
              {renderCard(require('../../assets/viettelpayicon.png'), '**** **** **** 5555')}
            </View>    
        </View>
        <TouchableOpacity onPress={() => setShowModal(true)}>
            <View style={styles.viewpay}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff', textAlign: 'center'}}>Pay</Text>
            </View>
        </TouchableOpacity>
      </View>   
    </View>
  );
}

export default ChoosePayment

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    header: {
        height: 100,
        width: 400,
    },
    viewheader: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#1877F2',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    textpayment: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    viewcredit: {
        height: 500,
        width: 350,
        top: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2,},
        elevation: 6,
    },
    viewcredit1: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        borderRadius: 5,
        alignSelf: 'center',
        width: 310,
        height: 60,
        top: 40,      
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    viewpay: {
        height: 51,
        width: 200,
        top: 120,
        backgroundColor: '#1877F2',
        borderRadius: 30,  
        alignSelf: 'center',
        justifyContent: 'center',
    },
})