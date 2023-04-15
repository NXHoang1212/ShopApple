import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, Image } from 'react-native';
import Tabscreen2 from './Register';
import NormalLogin from './NormalLogin';

const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
    return (
        <View style={{ flex: 1, borderRadius:30, }}>
            <View style={{flex:0.4, alignItems:"center", justifyContent:"center", backgroundColor:"white"}}>
            <Image style={{ width: "35%", height: "60%"}}
                source={require('../../assets/1.jpg')}></Image>
            </View>
            <Tab.Navigator>
                <Tab.Screen name="Đăng nhập" 
                component={NormalLogin} options={{ tabBarLabelStyle: { fontWeight: 'bold', fontSize: 15 }}}/>
                <Tab.Screen name="Đăng kí" 
                component={Tabscreen2} options={{ tabBarLabelStyle: { fontWeight: 'bold', fontSize: 15 }}}/>
            </Tab.Navigator>
        </View>
        

    );
}

export default MyTabs;