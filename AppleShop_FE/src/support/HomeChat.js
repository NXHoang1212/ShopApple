import { Image, StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState, useCallback} from 'react'
import { GiftedChat, InputToolbar, Bubble, Composer, Send } from 'react-native-gifted-chat';
import SafeAreaView from 'react-native-safe-area-view';
import 'moment/locale/vi'; 
import { Badge } from "react-native-elements";
import { TouchableOpacity } from 'react-native-gesture-handler';


const chatbot = require('../../assets/chatbot.png');
const avatar = require('../../assets/phuoc.jpg');

const HomeChat  = ({props, navigation}) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Xin chào mình là Fitbot của AppleShop ',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'AppleShop Support',
                    avatar: chatbot,
                },
            },
        ]);
    }, []);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
        const value = messages[0].text;
        console.log('messages: ', value);
        callApi(value);
    }, []);

    const callApi = async (value) => {
        const res = await fetch('https://api.openai.com/v1/completions',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer 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',
            },
            body: JSON.stringify({
              model: "text-davinci-003",
              prompt: value,
              max_tokens: 1000,
              temperature: 0,
            }),
        });
        const data = await res.json();
        if (data){
            const value = data?.choices[0]?.text;
            addNewMessage(value);
            console.log('Data: ', value);
        }
    }

    const addNewMessage = data => {
        const value = {
            _id: Math.random(999999999999),
            text: data,
            createdAt: new Date(),
            user: {
                _id: 2,
                name: 'AppleShop Support',
                avatar: chatbot,
            },
        };
        setMessages(previousMessages => GiftedChat.append(previousMessages, value));
    };
  const nextScreen = () => {
    navigation.goBack();
  }
    
  return (
   <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}> 
        <View >
          <TouchableOpacity onPress={nextScreen}>
                <Image source={require('../../assets/backone.png')} style={styles.image}/>        
            </TouchableOpacity>
        </View>
        <View style={styles.home}>
            <Image source={require('../../assets/chatbot.png')} style={{width: 58, height: 58}}/>
          <View style={styles.fitbot}>
              <Text style={styles.bot}>Fitbot</Text>
            <View style={styles.icon}>
              <Badge status="success"/>
              <Text style={styles.onl}>Đang hoạt động</Text>
            </View>
          </View>
        </View>
      </View>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
            _id: 1,
            avatar: avatar,
        }}
      renderInputToolbar={props => <InputToolbar {...props} containerStyle={styles.giftedChatBackground} 
      renderComposer={props => <Composer {...props} placeholder="Nhập câu hỏi của bạn" placeholderTextColor="#c1bdbd" />}
      renderSend={props => ( <Send {...props} containerStyle={{ backgroundColor: 'white' }}>
        <Image
            source={require('../../assets/send.png')}
            style={{ width: 35, height: 35, marginRight: 5, bottom: 5}}
        />
      </Send>
      )}
      />}  
      renderBubble={props => (
          <Bubble {...props}
            wrapperStyle={{  left: {backgroundColor: '#F0F0F0', width: '90%', },
          }}/>
      )}/>
   </View>
  )
}

export default HomeChat

const styles = StyleSheet.create({
 
  header: {
   
  },
  viewImgae: {
    top: 10,
  },
  image: {
    width: 26,
    height: 26,
  },
  home: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 13,
    right: 45,
  },
  fitbot: {
    flexDirection: 'column',
    bottom: 2,
    right: 5,
  },
  icon:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    left: 6,
  },  
  bot: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    left: 10,
  },
  onl: {
    fontSize: 12,
    color: 'black',
  },
})