import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    back: {
        gap: 15,
        left: 5,
        marginTop: 50,
        marginLeft: 20,
    },
    text: {
        fontSize: 30,
        fontWeight: "900",
        color: "#000000",
    },
    textpassword1:{
        fontWeight: '500',
        fontSize: 15,
        color: '#000000',
    },
    textpassword2:{
        fontWeight: '500',
        fontSize: 15,
        color: '#000000',
    },
    input:{
        width: 350,
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#000000',
    },
    input1:{
        left: 10,
    },
    ViewsInput:{
        gap: 25,
        top: 20,
    },
    textinput:{
        fontSize: 15,
        color: '#000000',
    },
    submit:{
        width: 180,
        height: 50,
        backgroundColor: '#000000',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        right: 8,
    },
});



export default styles;