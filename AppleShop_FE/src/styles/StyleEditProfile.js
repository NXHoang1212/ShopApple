import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputtext: {
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
  },
  textmail:{
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    color: '#000000',
    textAlignVertical: 'center',
  },
  inputtext1: {
    borderRadius: 10,
    borderWidth: 1,
    width: '47%',
    height: 50,
    paddingHorizontal: 10,
    color: '#000000',
  },
  viewpicker1: {
    borderRadius: 10,
    borderWidth: 1,
    width: '52%',
    height: 50,
    paddingHorizontal: 10,
  },
  UploadImage: {
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginVertical: 36,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logout: {
    backgroundColor: "#F8774A",
    borderRadius: 30,
    height: 49,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  textLogout: {
    fontSize: 22,
    fontWeight: "600",
    color: "#F6F6F9",
  },
  containerLogout: {
    bottom: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: "#F3F3F3",
    flex: 1,
    paddingHorizontal: 20,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#000000',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: '#000000',
  },
  image:{
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 7,
    borderColor: "#FFFFFF",
    alignSelf: "center",
  },
  uriavatar:{
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 7,
    borderColor: "#FFFFFF",
    alignSelf: "center",
  },
});

export default styles;