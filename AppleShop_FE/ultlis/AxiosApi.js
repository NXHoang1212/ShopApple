import { createContext } from "react";
import { useState } from "react";

export const AxiosApi = createContext();

export const AxiosApiProvider = (props) => {
  const { children } = props;
  //data sử dụng chung
  const [islogin, setislogin] = useState(false);
  const [infoUser, setinfoUser] = useState({});
  return (
    <AxiosApi.Provider value={{ islogin, setislogin, infoUser, setinfoUser }}>
      {children}
    </AxiosApi.Provider>
  )
}