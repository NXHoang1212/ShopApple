import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity, ScrollView} from "react-native";
import React, { useEffect, useState, useRef, useCallback, useMemo   } from "react";
import axios from "axios";
import getConstant from "../../helper/Constanst";
import stylesDetail from "../styles/StylesDetail";

const DetailProduct = ({ navigation, route}) => {
  const [name, setName] = useState("");
  const [param, setparam] = useState("");
  const [year, setyear] = useState("");
  const [price, setPrice] = useState("");
  const [image, setimage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [productId, setProductId] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productToAdd, setProductToAdd] = useState({});
  const [product, setProduct] = useState([]);
  
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
    setPrice(price + productPrice);
  };

  const increaseQuantity = useCallback(() => {
    setQuantity(quantity + 1);
  }, [quantity]);

  const decreaseQuantity = useCallback(() => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }, [quantity]);


  const nextScreen1 = () => {
    navigation.navigate("HomePageScreen");
  }
  

  const handleAddToCart = () => {
    const newItem = { id: productId, name: name, price: price, quantity: 1, image: image, year: year };
    const cartItems = [...route.params?.cart || [], newItem];
    setProductToAdd({ ...product, quantity: 1 }); // thêm thuộc tính quantity vào sản phẩm
    navigation.navigate('CartOrder', { cart: cartItems });
  };
  const { id } = route.params;
  console.log("ID PRODUCT:", id);
  
  useEffect(() => {
    axios
      .get(`${getConstant().HOST}/san-pham/${id}/detail`)
      .then(function (response) {
        setName(response.data.product.name);
        setparam(response.data.product.param);
        setyear(response.data.product.year);
        setPrice(response.data.product.price);
        setimage(response.data.product.image);
        console.log("Name - Price -Year - Price - Image ",name, param, year, price, image);
      })
      .catch(function (error) {
        console.log("error: ", error);
      });
  }, []);

  return (
    <View style={stylesDetail.container}>
      
      <View style={stylesDetail.viewheader}>
      <TouchableOpacity style={stylesDetail.imgCircle1} onPress={nextScreen1}>
            <View style={stylesDetail.header1}>
                <Image source={require("../../assets/backone.png")} />
            </View>
      </TouchableOpacity>     
            <TouchableOpacity style={stylesDetail.imgCircle2}>
            <View style={stylesDetail.header2}> 
               <Image source={require("../../assets/heart.png")} />
            </View>
            </TouchableOpacity>
      </View>  
        <View style={stylesDetail.circle}>
          <Image
            style={stylesDetail.imgProduct}
            source={image ? { uri: image } : require("../../assets/1.jpg")}
            resizeMode={"cover"}
          />
        </View>
        <View style={stylesDetail.menuProduct}>
          <View style={stylesDetail.nameDateProduct}>
            <Text style={stylesDetail.nameProduct}>{name}</Text>
            <Text style={stylesDetail.nameProduct}>
              {param}
              <Text style={stylesDetail.dateProduct}> {year}</Text>
            </Text>
          </View>
          <Text style={stylesDetail.priceProduct}>
            {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VND
          </Text>
          <Text style={stylesDetail.colorName}>COLOR:</Text>
          <View style={stylesDetail.colorProduct}>
            <TouchableOpacity style={stylesDetail.SP}>
              <View style={stylesDetail.detailSP1}></View>
              <Text style={stylesDetail.nameSP}>Gold</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesDetail.SP}>
              <View style={stylesDetail.detailSP2}></View>
              <Text style={stylesDetail.nameSP}>Sliver</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesDetail.SP}>
              <View style={stylesDetail.detailSP3}></View>
              <Text style={stylesDetail.nameSP}>Grey</Text>
            </TouchableOpacity>
          </View>
          <Text style={stylesDetail.colorName}>Memory:</Text>
          <View style={stylesDetail.colorProduct}>
            <TouchableOpacity style={stylesDetail.SP}>
              <Text style={stylesDetail.nameSP}>215GB</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesDetail.SP}>
              <Text style={stylesDetail.nameSP}>512GB</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesDetail.SP}>
              <Text style={stylesDetail.nameSP}>1TB</Text>
            </TouchableOpacity>
          </View>
          <Text style={stylesDetail.colorName}>CartOrder:</Text>
          <View style={stylesDetail.buttonProduct}>
            <View style={stylesDetail.buttonSP}>
              <TouchableOpacity
                style={stylesDetail.buttonDown} activeOpacity={0.5} onPress={decreaseQuantity} >
                <Image
                  source={require("../../assets/Group86.png")}
                  style={stylesDetail.buttonDown}
                />
              </TouchableOpacity>
              <View style={stylesDetail.quantity}>
                  <Text style={stylesDetail.TextQuantity}>{quantity}</Text>
              </View>
              <TouchableOpacity style={stylesDetail.buttonUp} activeOpacity={0.5} onPress={increaseQuantity}>
                <Image
                  source={require("../../assets/Group87.png")}
                  steOpacity style={stylesDetail.buttonDown}
                />
              </TouchableOpacity>
            </View>     
            <TouchableOpacity style={stylesDetail.buttonBuy} activeOpacity={0.5} onPress={handleAddToCart}>
              
                <Text style={stylesDetail.textBuy}>Thêm giỏ hàng</Text>
            </TouchableOpacity>
            
          </View>
        </View>
    </View>

  );
};

export default DetailProduct;
