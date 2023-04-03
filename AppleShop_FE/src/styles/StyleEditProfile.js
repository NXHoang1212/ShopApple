import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
inputtext: {
    borderRadius: 10,
    borderWidth: 1,
    width: '100%',
    height: 50,
    paddingHorizontal: 10
},
inputtext1: {
    borderRadius: 10,
    borderWidth: 1,
    width: '47%',
    height: 50,
    paddingHorizontal: 10
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
}
});

export default styles;