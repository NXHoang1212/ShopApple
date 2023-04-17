import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      margin: 20,
    },
    back: {
      bottom: 15,
      width: 30,
      height: 30,
      alignSelf: "flex-start",
    },
    scrollview: {
      width: "100%",
      flex: 0.7,
      top: 28,
    },
    input: {
      height: 50,
      borderRadius: 10,
      marginBottom: 20,
      backgroundColor: "#FFFFFF",
    },
    image: {
      top: 9,
      left: 10,
      width: 30,
      height: 35,
    },
    next: {
      width: "100%",
      flex: 0.2,
      alignItems: "flex-end",
    },
    text: {
      fontSize: 38,
      fontWeight: "400",
      color: "#000000",
    },
    itemBorder: {
      top: 20,
      flexDirection: 'row',
      width: '100%',
      fontSize: 20,
      height: 72,
      justifyContent: 'space-around',
    },
    itemBorder1: {
      width: 63,
      height: 63,
      fontSize: 20,
      borderRadius: 10,
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderColor: '#CCCCCC',
    },
    itemcircle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000000',
      textAlign: 'center',
      top: 15,
    },
    Otp: {
      top: 40,
      flexDirection: 'row',
      alignSelf: 'center',
      gap: 2,
    },
    TextOtp: {
      fontWeight: '500',
      color: '#4E4D4D',
      fontSize: 16,
    },
    Textemail: {
      fontWeight: '900',
      color: '#000000',
      fontSize: 16,
    },
  }
);

export default styles;