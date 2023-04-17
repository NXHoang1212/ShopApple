import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F0F0',
      justifyContent: 'space-between',
      paddingVertical: 10,
      height: '100%',
    },
    header: {
      
    },
    UploadImage: {
      alignItems: 'center',
      bottom: 17,
    },
    image:{
      marginStart: 18,
      marginTop: 15,
      width: 30,
      height: 30,
    },
    nameimage:{
      width: 120,
      height: 120,
      borderRadius: 80,
      marginVertical: 5,
      borderWidth: 7,
      borderColor: 'white',
    },
    image1:{
      width: 30,
      height: 30,
    },
    viewlist:{
      backgroundColor: 'white',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      height: '70%', 
      paddingTop: 15,
   },
    list: {
      backgroundColor: '#F0F0F0', 
      justifyContent: 'space-between',
      height: '100%',
      top: 2,
    },
    acc:{
      fontSize: 18,
      fontWeight: '700',
      color: 'black', 
      left: 15,
      marginHorizontal: 5,
      marginVertical: 10,
    },
    signout: {
      width: 200,
      height: 50,
      backgroundColor: 'black',
      padding: 10,
      marginVertical: 13,
      borderRadius: 50,
      alignSelf: 'center',
      alignItems: 'center',
      
    },
    textSignOut: {
      fontSize: 17,
      fontWeight: '500',
      color: 'white',
      padding: 4,
    },
  });

export default styles;