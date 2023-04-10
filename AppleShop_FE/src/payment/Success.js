import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Success = ({navigation}) => {
  const next = () => {
    navigation.navigate('HomePageScreen')
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <View style={styles.viewheader}> 
          <Image source={require('../../assets/IconSuccess.png')} />
          <Text style={{ fontSize: 20,  marginTop: 20, color: '#34A853' }}>Thanh toán thành công</Text>
        </View>  
        <View style={styles.viewtextpayment}>
           <Text style={styles.textpayment}>Cảm ơn quý khách đã thanh toán thành công. 
            AppleShop sẽ sớm liên hệ với quý khách để bàn giao sản phẩm và dịch vụ.</Text>
        </View>
        <View>
          <TouchableOpacity onPress={next}
          style={{ width: 300, height: 50, backgroundColor: '#242424', alignItems: 'center', justifyContent: 'center', marginTop: 40, borderRadius: 30 }}>
            <Text style={{ color: '#fff', fontSize: 15 }}>Tiếp tục mua hàng</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default Success

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
  },
  viewheader: {
    alignItems: 'center',
    marginTop: 100,
  },
  viewtextpayment: {
    marginTop: 20,
    width: 350,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textpayment: {
    fontSize: 15,
    color: '#474747',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: 0.5,
  },
})