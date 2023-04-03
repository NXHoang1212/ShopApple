import { StyleSheet } from 'react-native';

const stylesNotification = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAEAEA',
    },
    header: {
        height: 80,
        justifyContent: 'center',
        backgroundColor: '#EAEAEA',
    },
    header1: {
        flexDirection: 'row',
        gap: 85,
        left: 10,
    },
    image: {
        width: 32,
        height: 32,
    },
    textHeader: {
        fontSize: 25,
        fontWeight: '500',
        color: '#292A2E',
    },
    item: {
        padding: 10,
        left: 10,
        marginVertical: 8,
        marginHorizontal: 24,
    },
    name:{
        fontSize: 18,
        fontWeight: '700',
        color: '#292A2E',
        left: 26,
    },
    content:{
        fontSize: 16,
        flexDirection: 'row',
    },
    image1:{
        width: 48,
        height: 48,
        right: 32,
        bottom: 8,
    },
    content1:{
        fontSize: 15,
        color: '#000000',
        fontWeight: '400',
        right: 20,
        width: 317,
    },
    time0:{  
    },
    time1:{
        fontSize: 15,
        color: '#292A2E',
        fontWeight: '400',
        top: 5,
        left: 55,
    },
});

export default stylesNotification;