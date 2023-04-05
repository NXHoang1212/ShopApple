import { StyleSheet } from "react-native";

const StyleSheckEmailVerfity = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: "#FFFFFF",
    },
    viewImage: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        padding: 40,
    },
    image:{
        width: 220,
        height: 220,
    },
    viewcheck: {
        padding: 20,
    },
    textemail: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        color: "#000000",
    },
    viewsendmail: {
        flexDirection: "column",
        gap: 8,
    },
    sendmail: {
        fontSize: 16,
        textAlign: "center",
        color: "#000000",
        fontWeight: "400",
    },
    buttonemail: {
        alignItems: "center",
        alignSelf: "center",
        marginTop: 50,
        width: 200,
        height: 40,
        borderRadius: 10,
        shadowColor: 'black',
        elevation: 5.5,
        backgroundColor: "#0070F0",
        top: 90,
    },
    checkmail: {
        fontSize: 20,
        color: "white",
        fontWeight: "800",
        padding: 6,
        fontFamily: "Roboto",
    },
});


export default StyleSheckEmailVerfity;