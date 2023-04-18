import React, { useContext, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SlashSreen from "../loading/SlashScreen";
import HomePageScreen from "../home/HomePageScreen";
import DetailProduct from "../home/DetailProduct";
import ProfileScreen from "../information/ProfileScreen";
import EditProfile from "../information/EditProfile";
import CartOrder from "../cart/CartOrder";
import Notificaiton from "../notification/Notification";
import MyTabs from "../login/MyTabs";
import ForgotPassword from "../login/ForgotPassword";
import HomeChat from "../support/HomeChat";
import HomeSupportPage from "../support/HomeSupportPage";
import CheckEmailVerfity from "../login/CheckEmailVerfity";
import Success from "../payment/Success";
import ChoosePayment from "../payment/ChoosePayment";
import SearchProduct from "../home/SearchProduct";
import { AxiosApi } from "../../ultlis/AxiosApi";



const Stack = createStackNavigator();

const Users = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SlashSreen" component={SlashSreen} options={{ headerShown: false }} />
      <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
      <Stack.Screen name="HomePageScreen" component={HomePageScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Notificaiton" component={Notificaiton} options={{ headerShown: false }} />
      <Stack.Screen name="DetailProduct" component={DetailProduct} options={{ headerShown: false }} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
      <Stack.Screen name="HomeChat" component={HomeChat} options={{ headerShown: false }} />
      <Stack.Screen name="CartOrder" component={CartOrder} options={{ headerShown: false }} />
      <Stack.Screen name="HomeSupportPage" component={HomeSupportPage} options={{ headerShown: false }} />
      <Stack.Screen name="CheckEmailVerfity" component={CheckEmailVerfity} options={{ headerShown: false }} />
      <Stack.Screen name="Success" component={Success} options={{ headerShown: false }} />
      <Stack.Screen name="ChoosePayment" component={ChoosePayment} options={{ headerShown: false }} />
      <Stack.Screen name="SearchProduct" component={SearchProduct} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};


const StackNavigator = () => {
  const { islogin } = useContext(AxiosApi);
  return (
    <>
      {
        islogin == false ? <Users /> : <HomePageScreen />
      }
    </>
  );
};
export default StackNavigator;

