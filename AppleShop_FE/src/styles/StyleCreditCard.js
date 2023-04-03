import { StyleSheet } from "react-native";

const stylesCreditCard = StyleSheet.create({
  conatiner: {
    backgroundColor: '#202020',
  },
  title: {
    fontSize: 35,
    color: '#fff',
    fontWeight: '800',
    fontStyle: 'italic',
    textAlign: 'center',
    marginVertical: 15,
    top: 10
  },
  card: {
    width: 390,
    height: 220,
    borderRadius: 14,
    padding: 10,
    paddingTop: 1,
    marginHorizontal: 5,
  },
  textLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    fontStyle: 'italic',
  },
  textView: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
    bottom: 10
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#202020',
  },
  namebanks: {
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#fff',
    paddingLeft: 10,
    top: 10,
  },
  images1: {
    height: 35,
    width: 30,
    paddingLeft: 100,
    resizeMode: 'contain',
    top: 30
  },
  cards: {
    fontSize: 30,
    fontStyle: 'italic',
    color: '#fff',
    marginVertical: 20,
    paddingLeft: 20,
    top: 17
  },
  text1: {
    fontSize: 8,
    fontWeight: '400',
    color: '#FFFF33',
    paddingLeft: 20
  },
  dates: {
    fontSize: 17,
    fontWeight: '400',
    color: '#fff',
    paddingLeft: 5
  },
  names: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 3,
    paddingLeft: 20
  },
  numbers: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#fff',
    letterSpacing: 3,
    paddingLeft: 20
  },
  images: {
    height: 60,
    width: 100,
    resizeMode: 'contain',
    top: 25
  },
  notes: {
    flexDirection: 'column',
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 120,
    paddingRight: 8
  },
  infinits: {
    fontSize: 15,
    fontWeight: 'bold',
    fontWeight: '200',
    top: 8,
    right: 7,
    color: '#fff',
    alignSelf: 'flex-end'
  },
});


export default stylesCreditCard;