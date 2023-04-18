import { createContext } from "react";
import { useState } from "react";



export const AxiosApi = createContext();

export const AxiosApiProvider = (props) => {
  const { children } = props;
  //data sử dụng chung
  const [islogin, setIslogin] = useState(false);
  const [infoUser, setInfoUser] = useState({});
  return (
    <AxiosApi.Provider value={{ islogin, setIslogin, infoUser, setInfoUser }}>
      {children}
    </AxiosApi.Provider>
  )
};