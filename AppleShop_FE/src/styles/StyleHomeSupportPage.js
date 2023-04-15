import { StyleSheet } from "react-native";
const stylesHomeSuport = StyleSheet.create({
  container: {
    flex: 1,
  },
  /* Header */
  header: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  imageLogo: {
    width: 40,
    height: 40,
  },
  leftHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: constants.COLOR.WHITE,
    // marginLeft: ,
  },
  rightHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',

    marginRight: 20,
  },

  textTitle: {
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 28,
    color: 'black',
    right: 20,
  },
  textTitle1: {
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 28,
    color: 'black',
  },
  viewText: {
    flex: 1,
  },
  imageReturn: {
    marginLeft: 25,
    marginRight: 15,
  },
  mainHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  /* Header */
  body: {
    flex: 4,
    top: 15,
  },
  viewSearch: {
    paddingTop: 10,
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: 'row',
  },
  TextViewSearch: {
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    width: '100%',
    paddingLeft: 20,
    fontSize: 16,
    top: 5,
  },
  tab: {
    paddingLeft: 24,
    paddingRight: 24,
    flex: 1,
    marginTop: 10,
    gap: 10,
    flexDirection: 'row',
    top: 10,
  },
  viewTabRight: {
    flex: 1,
    width: 150,
    backgroundColor: '#DFF1FF',
    borderRadius: 8,
  },
  viewTabChat: {
    padding: 10
  },
  viewTextChat: {
    paddingTop: 10
  },
  TextChat1: {
    fontSize: 18,
    fontWeight: '400',

    color: '#616161',
    letterSpacing: 0.25
  },
  TextChat2: {
    marginTop: 15,
    fontSize: 22,
    fontWeight: '900',
    color: 'black',
    letterSpacing: 0.25
  },
  viewTabLeft: {
    flex: 1,
    width: 190,
    backgroundColor: '#E8FFEB',
    borderRadius: 8,
  },
  viewTabSupport: {
    padding: 10
  },
  viewTextSupport: {
    paddingTop: 10
  },
  TextSupport1: {
    fontSize: 20,
    fontWeight: '400',
    color: '#616161',
    letterSpacing: 0.25
  },
  TextSupport2: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: '900',
    color: 'black',
    letterSpacing: 0.5,
  },
  footer: {
    flex: 8,
    paddingLeft: 24,
    paddingRight: 24,
    top: 35,
  },
  viewFooter1: {
    flex: 1,

    flexDirection: 'row',
    marginTop: 10,
  },
  ViewTextFooter1: {
    flex: 1,

  },
  TextFooter1: {

    fontWeight: '600',
    fontSize: 16,
    color: 'black'
  },


  ViewTextFooter2: {
    flex: 1,
  },
  TextFooter2: {
    textAlign: 'right',
    color: '#DF1525',
    fontWeight: '700',
    fontSize: 14,
  },
  viewFooter2: {
    flex: 8,
    bottom: 15,
  },
  notificationHeader: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    paddingLeft:20,
  },
  toggleIcon: {
    alignSelf: 'flex-end',
  },
  notificationTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: 'black',
    paddingTop:12,
    paddingBottom:11,
    letterSpacing:0.25,
  },
  notificatio2: {
    fontSize: 16,
    fontWeight: '400',
    letterSpacing:0.25,
    color: '#757575',
    paddingTop: 10,
    paddingBottom:10

  },
  viewImageFlast: {
    flex: 1,
    paddingTop: 10,
  },
  viewFlast: {
  },
  notification:{
    backgroundColor: 'red',
  }
});
export default stylesHomeSuport;