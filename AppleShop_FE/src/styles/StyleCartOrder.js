import { StyleSheet } from "react-native";

const StyleCartOrder = StyleSheet.create({
    container:{
        flex: 2,
        backgroundColor:'#F0F0F0',
        gap: 15,
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop: 25,
    },
    textOrder:{
        fontSize:20,
        color:'#000000',
        fontWeight: '500',
        marginRight: 25,
    },
    Line:{
        marginTop: 30,
        width: 350,
        height: 25,
        backgroundColor: '#EAEAEA',
        marginLeft: 20,
    },
    body:{
        flex: 1,
        marginBottom: 20,
    },
    viewOrder:{
        flexDirection:'row',
        top: 20,
    },
    viewtext:{
        flexDirection:'column',
        gap: 5,
        marginLeft: 7,
        top: 17,
    },
    buttonClickSetup:{
        gap: 5,
        top: 10,
        left: 15,
    },
    number:{
        fontSize: 18,
        color: '#242424',
        fontWeight: '500',
        left: 5,
    },
    buttondelete:{
        top: 35,
        left: 34,
    },
    image1:{
        width: 25,
        height: 25,
    },
    textname:{
        fontSize: 13,
        color: '#242424',
        fontWeight: '500',
    },
    viewimage:{
        width: 20,
        height: 20,
    },
    image:{
        width: 32,
        height: 32,
    },
    linehight:{
        height: 1,
        width: 350,
        backgroundColor: '#d6cfcf',
        marginTop: 20,
        top: 25,
        alignSelf: 'center',
    },
    viewtotalprice:{
        alignSelf: 'center',
     
        justifyContent: 'space-between',
    },
    viewtotal:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 59,
        bottom: 15,
    },
    totalPrice:{
        fontSize: 20,
        color: '#242424',
        fontWeight: '500',
        alignSelf: 'center',
        top: 10,
    },
    totalPrice1:{
        fontSize: 20,
        color: 'red',
        fontWeight: '500',
        alignSelf: 'center',
        top: 10,
    },
    button:{   
        width:369,
        height: 140,
        backgroundColor: 'white',
        borderRadius: 15,
        alignSelf: 'center',
        justifyContent: 'center',
        gap: 15,
        alignItems: 'center',
    },
    payment:{
        alignSelf: 'center',     
    },
    textbutton1:{
        width: 290,
        height: 30,
        backgroundColor: 'red',
        fontSize: 17,
        color: 'white',
        fontWeight: '500',
        borderRadius: 10,
        textAlign: 'center',    
        paddingTop: 2,
    },
    textbutton2:{
        width: 290,
        height: 30,
        borderWidth: 1,
        fontSize: 17,
        color: 'red',
        borderColor: 'red',
        fontWeight: '500',
        borderRadius: 10,
       textAlign: 'center',
        paddingTop: 2,
    },
    otherpayment:{
        alignSelf: 'center',
    },
});


export default StyleCartOrder;