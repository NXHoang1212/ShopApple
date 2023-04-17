// facebookLogin.js
import { LoginButton, AccessToken, GraphRequest, GraphRequestManager, LoginManager } from 'react-native-fbsdk-next';
const LoginFaceBook = (navigation) => {
  LoginManager.logInWithPermissions(['public_profile', 'email']).then(
    (result) => {
      if (result.isCancelled) {
        console.log('Đăng nhập bị hủy bỏ');
      } else {
        AccessToken.getCurrentAccessToken().then(
          (data) => {
            let accessToken = data.accessToken;
            const responseInfoCallback = (error, result) => {
              if (error) {
                console.log(error);
                alert('Không thể đăng nhập được với tài khoản này' + error);
              } else {
                console.log(result);
                alert('Đăng nhập thành công' + result.name);
                navigation.navigate('HomePageScreen');
              }
            };
            const infoRequest = new GraphRequest(
              '/me',
              {
                accessToken: accessToken,
                parameters: {
                  fields: {
                    string: 'email,name,first_name,middle_name,last_name',
                  },
                },
              },
              responseInfoCallback
            );
            console.log(infoRequest, 'infoRequest');
            // Start the graph request.
            new GraphRequestManager().addRequest(infoRequest).start();
          });
      }
    },
    (error) => {
      console.log(error);
      alert('Đăng nhập bị lỗi');
    });
};

export default LoginFaceBook;

  