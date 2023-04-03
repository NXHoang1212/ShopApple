import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import Lottie from 'lottie-react-native';


const SlashScreen = ({navigation}) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('MyTabs');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
    

  return (
    <View style={Slash.container}>
      <View style={Slash.viewImage}>
          <Lottie style={{bottom: 100}} 
          source={require('../../assets/animation/AppleAnimation.json')} autoPlay loop />
        <Text style={Slash.ViewText1}>Apple Store</Text>
          <Lottie style={{top: 40, width: 60, height: 60}}
          source={require('../../assets/animation/WelcomeAnimation.json')} autoPlay loop />
      </View>
    </View>
  );
};

export default SlashScreen;

const Slash = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "white",
  },
  viewImage: {
    flex: 1,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
    ViewText1: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",  
    top: 50,
    },
});
