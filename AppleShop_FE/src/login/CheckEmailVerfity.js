import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import StyleSheckEmailVerfity from '../styles/StyelCheckEmailVerity'
import { Image } from 'react-native-elements'


const CheckEmailVerfity = ({navigation}) => {
    const sendback = () => {
        navigation.navigate("MyTabs")
    }
  return (
    <View style={StyleSheckEmailVerfity.container}>
        <View style={StyleSheckEmailVerfity.viewImage}>
             <Image style={StyleSheckEmailVerfity.image} source={require('../../assets/checkemail.png')} />
        </View>
        <View style={StyleSheckEmailVerfity.viewcheck}>
            <Text style={StyleSheckEmailVerfity.textemail}>Email đã được gửi tới</Text>
        </View>
        <View style={StyleSheckEmailVerfity.viewsendmail}>
            <Text style={StyleSheckEmailVerfity.sendmail}>Chúng tôi đã gửi link mật khẩu email tới cho bạn{'\n'}vui lòng kiểm tra hòm thư của bạn</Text>
            <Text style={StyleSheckEmailVerfity.sendmail}>Bạn vui lòng kiểm tra email để {'\n'}xác thực tạo mật khẩu mới</Text>
        </View>    
        <View style={StyleSheckEmailVerfity.buttonemail}>
            <TouchableOpacity onPress={sendback}>
                <Text style={StyleSheckEmailVerfity.checkmail}>CheckEmail</Text> 
            </TouchableOpacity> 
        </View>
    </View>
  )
}

export default CheckEmailVerfity
