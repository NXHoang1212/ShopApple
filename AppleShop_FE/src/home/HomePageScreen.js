import { View, Text} from "react-native";
import React, { useState, useEffect } from "react";
import { Image, ScrollView, TouchableOpacity, FlatList } from "react-native";
import axios from "axios";
import getConstant from "../../ultlis/Constanst";
import stylesHome from "../styles/StylesHome";
import { getAvatar } from "../../ultlis/Camera";
import { Badge, Header } from "react-native-elements";

const HomePageScreen = ({ navigation, route }) => {
  const [activeTab, setActiveTab] = useState("Tab 1");
  const [activeTab2, setActiveTab2] = useState("Tab 1.1");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [user, setUser] = useState({ name: "", avatar: null });
  const handlePress = (id) => {
    navigation.navigate("DetailProduct", { id: id });
  };

  const goto = () => {
    navigation.navigate("ProfileScreen");
  };

  const goto1 = () => {
    navigation.navigate("Notificaiton");
  };
  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };
  const handleTabPress1 = (tabName) => {
    setActiveTab2(tabName);
  };
  const tab1 = (tabName) => {
    handleTabPress(tabName);
    handleTabPress1("Tab 1.1");
  };
  //lấy sản phẩm theo từng danh mục
  useEffect(() => {
    axios.get(`${getConstant().HOST}/san-pham?category=Mac`)
      .then(function (response) {
        setProducts(response.data);
        setFilteredProducts(response.data);
        console.log('Products: ', response.data);
      })
      .catch(function (error) {
        console.log("error: ", error);
      });
  }, []);
  useEffect(() => {
    axios.get(`${getConstant().HOST}/san-pham?category=Iphone`)
      .then(function (response) {
        setProducts(response.data);
        setFilteredProducts(response.data);
        console.log('Products: ', response.data);
      })
      .catch(function (error) {
        console.log("error: ", error);
      });
  }, []);
  useEffect(() => {
    axios.get(`${getConstant().HOST}/san-pham?category=Ipad`)
      .then(function (response) {
        setProducts(response.data);
        setFilteredProducts(response.data);
        console.log('Products: ', response.data);
      })
      .catch(function (error) {
        console.log("error: ", error);
      });
  }, []);
  useEffect(() => {
    axios.get(`${getConstant().HOST}/san-pham?category=Watch`)
      .then(function (response) {
        setProducts(response.data);
        setFilteredProducts(response.data);
        console.log('Products: ', response.data);
      })
      .catch(function (error) {
        console.log("error: ", error);
      });
  }, []);
  useEffect(() => {
    axios.get(`${getConstant().HOST}/san-pham?category=Airpods`)
      .then(function (response) {
        setProducts(response.data);
        setFilteredProducts(response.data);
        console.log('Products: ', response.data);
      })
      .catch(function (error) {
        console.log("error: ", error);
      });
  }, []);
  const renderItem = ({ item }) => {
    const { name, year, image } = item;
    return (
      <View style={stylesHome.item}>
        <Image
          style={stylesHome.image}
          source={{ uri: image }}
          resizeMode={"cover"}
        />
        <View style={stylesHome.table}>
          <View style={stylesHome.year1}>
            <Text style={stylesHome.year}>{year}</Text>
          </View>
          <Text style={stylesHome.name}>{name}</Text>
          <TouchableOpacity onPress={() => handlePress(item._id)}>
            <View style={stylesHome.Detail1}>
              <Text style={stylesHome.Detail}>Detail</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  //lấy ảnh từ máy lưu 
  useEffect(() => {
    getAvatar(setUser);
  }, []);
  return (
    <View style={stylesHome.container}>
      <View style={stylesHome.ViewHeader}>
        <View style={stylesHome.ViewImage1}>
          <Image
            style={stylesHome.tinyLogo}
            source={require("../../assets/LogoApple.png")}
          />
          <Text style={stylesHome.TextiStore}>iStore</Text>
        </View>

        <View style={stylesHome.ViewImage2}>
          <TouchableOpacity onPress={goto1}>
            <Image
              style={stylesHome.tinyLogo2}
              source={require("../../assets/chuong.png")}
            />
            <Badge status="error" value="12" containerStyle={{ position: 'absolute', width: 25 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={goto}>
            {user.avatar ? (
              <Image source={{ uri: user.avatar.uri }} style={stylesHome.tinyLogo3} />
            ) : (
              <Image source={require('../../assets/phuoc.jpg')} style={stylesHome.tinyLogo3} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={stylesHome.backgourdlogo}>
        <Image
          style={stylesHome.Logo}
          source={require("../../assets/logo2.png")}
        />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0.1 }}
      >
        <View style={stylesHome.tabs}>
          <TouchableOpacity
            style={[
              stylesHome.tab1,
            ]}
            onPress={() => tab1("Tab 1")}
          >
            {activeTab === "Tab 1" ?
              <Image
                style={stylesHome.tinyLogo5}
                source={require("../../assets/MacDen.jpg")}
              /> :
              <Image
                style={stylesHome.tinyLogo5}
                source={require("../../assets/Mac.png")}
              />
            }

          </TouchableOpacity>
          <TouchableOpacity
            style={[
              stylesHome.tab1,
            ]}
            onPress={() => tab1("Tab 2")}
          >
            {activeTab === "Tab 2" ?
              <Image
                style={stylesHome.tinyLogo5}
                source={require("../../assets/iphoneDen.png")}
              /> :
              <Image
                style={stylesHome.tinyLogo5}
                source={require("../../assets/iphone.png")}
              />
            }

          </TouchableOpacity>
          <TouchableOpacity
            style={[
              stylesHome.tab1,
            ]}
            onPress={() => tab1("Tab 3")}
          >
            {activeTab === "Tab 3" ?
              <Image
                style={stylesHome.tinyLogo5}
                source={require("../../assets/ipadDen.jpg")}
              /> :
              <Image
                style={stylesHome.tinyLogo5}
                source={require("../../assets/ipad.png")}
              />
            }

          </TouchableOpacity>
          <TouchableOpacity
            style={[
              stylesHome.tab1,
            ]}
            onPress={() => tab1("Tab 4")}
          >
            {activeTab === "Tab 4" ?
              <Image
                style={stylesHome.tinyLogo5}
                source={require("../../assets/watchDen.jpg")}
              /> :
              <Image
                style={stylesHome.tinyLogo5}
                source={require("../../assets/watch.png")}
              />
            }

          </TouchableOpacity>

          <TouchableOpacity
            style={[
              stylesHome.tab1,
            ]}
            onPress={() => tab1("Tab 5")}
          >
            {activeTab === "Tab 5" ?
              <Image
                style={stylesHome.tinyLogo5}
                source={require("../../assets/airpodDen.jpg")}
              /> :
              <Image
                style={stylesHome.tinyLogo5}
                source={require("../../assets/airpods.png")}
              />
            }

          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* // tab 1 */}
      {activeTab === "Tab 1" && (

        <View style={stylesHome.tabText1}>
          <View style={stylesHome.tabs1}>
            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 1.1" &&
                stylesHome.activeTab
              ]}
              onPress={() => handleTabPress1("Tab 1.1")}
            >
              {activeTab2 === "Tab 1.1" ?
                <View style={[stylesHome.viewmacmini, { backgroundColor: 'black' }]}>
                  <Text style={[stylesHome.textmacmini, { color: 'white' }]}>MacBook</Text>
                </View> :
                <View style={stylesHome.viewmacmini}>
                  <Text style={stylesHome.textmacmini}>MacBook</Text>
                </View>
              }
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 1.2" &&
                stylesHome.activeTab
              ]}
              onPress={() => handleTabPress1("Tab 1.2")}
            >
              {activeTab2 === "Tab 1.2" ?
                <View style={[stylesHome.viewimac, { backgroundColor: 'black' }]}>
                  <Text style={[stylesHome.textimac, { color: 'white' }]}>iMac</Text>
                </View> :
                <View style={stylesHome.viewimac}>
                  <Text style={stylesHome.textimac}>iMac</Text>
                </View>
              }
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 1.3" &&
                stylesHome.activeTab
              ]}
              onPress={() => handleTabPress1("Tab 1.3")}
            >
              {activeTab2 === "Tab 1.3" ?
                <View style={[stylesHome.viewmacmini, { backgroundColor: 'black' }]}>
                  <Text style={[stylesHome.textmacmini, { color: 'white' }]}>Mac Mini</Text>
                </View> :
                <View style={stylesHome.viewmacmini}>
                  <Text style={stylesHome.textmacmini}>Mac Mini</Text>
                </View>
              }
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 1.4" &&
                stylesHome.activeTab
              ]}
              onPress={() => handleTabPress1("Tab 1.4")}
            >
              {activeTab2 === "Tab 1.4" ?
                <View style={[stylesHome.viewmacdisplays, { backgroundColor: 'black' }]}>
                  <Text style={[stylesHome.textmacdisplays, { color: 'white' }]}>Mac Displays</Text>
                </View> :
                <View style={stylesHome.viewmacdisplays}>
                  <Text style={stylesHome.textmacdisplays}>Mac Displays</Text>
                </View>
              }
            </TouchableOpacity>
          </View>
        </View>

      )}
      {/* //tab2 */}
      {activeTab === "Tab 2" && (
        <View style={stylesHome.tabText1}>
          <View style={stylesHome.tabs1}>
            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 2.1" &&
                stylesHome.activeTab
              ]}
              onPress={() => handleTabPress1("Tab 2.1")}
            >
              {activeTab2 === "Tab 2.1" ?
                <View style={[stylesHome.viewmacmini, { backgroundColor: 'black' }]}>
                  <Text style={[stylesHome.textmacmini, { color: 'white' }]}>Semua</Text>
                </View> :
                <View style={stylesHome.viewmacmini}>
                  <Text style={stylesHome.textmacmini}>Semua</Text>
                </View>
              }
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 2.2" &&
                stylesHome.activeTab
              ]}
              onPress={() => handleTabPress1("Tab 2.2")}
            >
              {activeTab2 === "Tab 2.2" ?
                <View style={[stylesHome.viewmacmini, { backgroundColor: 'black' }]}>
                  <Text style={[stylesHome.textmacmini, { color: 'white' }]}>Semua</Text>
                </View> :
                <View style={stylesHome.viewmacmini}>
                  <Text style={stylesHome.textmacmini}>Semua</Text>
                </View>
              }
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 2.3" &&
                stylesHome.activeTab
              ]}
              onPress={() => handleTabPress1("Tab 2.3")}
            >
              {activeTab2 === "Tab 2.3" ?
                <View style={[stylesHome.viewmacmini, { backgroundColor: 'black' }]}>
                  <Text style={[stylesHome.textmacmini, { color: 'white' }]}>Iphone 12</Text>
                </View> :
                <View style={stylesHome.viewmacmini}>
                  <Text style={stylesHome.textmacmini}>iphone 12</Text>
                </View>
              }
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 2.4" &&
                stylesHome.activeTab
              ]}
              onPress={() => handleTabPress1("Tab 2.4")}
            >
              {activeTab2 === "Tab 2.4" ?
                <View style={[stylesHome.viewmacdisplays, { backgroundColor: 'black' }]}>
                  <Text style={[stylesHome.textmacdisplays, { color: 'white' }]}>Iphone 13</Text>
                </View> :
                <View style={stylesHome.viewmacdisplays}>
                  <Text style={stylesHome.textmacdisplays}>iphone 13</Text>
                </View>
              }
            </TouchableOpacity>
          </View>
        </View>
      )}
      {/* //tab3 */}

      {activeTab === "Tab 3" && (
        <View style={stylesHome.tabText1}>
          <View style={stylesHome.tabs1}>
            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 3.1" &&
                stylesHome.activeTab
              ]}
              onPress={() => handleTabPress1("Tab 3.1")}
            >
              {activeTab2 === "Tab 3.1" ?
                <View style={[stylesHome.viewmacmini, { backgroundColor: 'black' }]}>
                  <Text style={[stylesHome.textmacmini, { color: 'white' }]}>Semua</Text>
                </View> :
                <View style={stylesHome.viewmacmini}>
                  <Text style={stylesHome.textmacmini}>Semua</Text>
                </View>
              }
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 3.2" &&
                stylesHome.activeTab
              ]}
              onPress={() => handleTabPress1("Tab 3.2")}
            >
              {activeTab2 === "Tab 3.2" ?
                <View style={[stylesHome.viewimac, { backgroundColor: 'black' }]}>
                  <Text style={[stylesHome.textimac, { color: 'white' }]}>Ipad Pro</Text>
                </View> :
                <View style={stylesHome.viewimac}>
                  <Text style={stylesHome.textimac}>Ipad Pro</Text>
                </View>
              }
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 3.3" &&
                stylesHome.activeTab
              ]}
              onPress={() => handleTabPress1("Tab 3.3")}
            >
              {activeTab2 === "Tab 3.3" ?
                <View style={[stylesHome.viewimac, { backgroundColor: 'black' }]}>
                  <Text style={[stylesHome.textimac, { color: 'white' }]}>Ipad Air</Text>
                </View> :
                <View style={stylesHome.viewimac}>
                  <Text style={stylesHome.textimac}>Ipad Air</Text>
                </View>
              }
            </TouchableOpacity>


            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 3.4" &&
                stylesHome.activeTab
              ]}
              onPress={() => handleTabPress1("Tab 3.4")}
            >
              {activeTab2 === "Tab 3.4" ?
                <View style={[stylesHome.viewmacmini, { backgroundColor: 'black' }]}>
                  <Text style={[stylesHome.textmacmini, { color: 'white' }]}>Ipad Mini</Text>
                </View> :
                <View style={stylesHome.viewmacmini}>
                  <Text style={stylesHome.textmacmini}>Ipad Mini</Text>
                </View>
              }
            </TouchableOpacity>

          </View>
        </View>
      )}

      {/* tab4 */}
      {activeTab === "Tab 4" && (
        <View style={stylesHome.tabText1}>
          <View style={stylesHome.tabs1}>
            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 4.1" &&
                stylesHome.activeTab
              ]}
              onPress={() => handleTabPress1("Tab 4.1")}
            >
              {activeTab2 === "Tab 4.1" ?
                <View style={[stylesHome.viewimac, { backgroundColor: 'black' }]}>
                  <Text style={[stylesHome.textimac, { color: 'white' }]}>Semua</Text>
                </View> :
                <View style={stylesHome.viewimac}>
                  <Text style={stylesHome.textimac}>Semua</Text>
                </View>
              }
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 4.2" &&
                stylesHome.activeTab
              ]}
              onPress={() => handleTabPress1("Tab 4.2")}
            >
              {activeTab2 === "Tab 4.2" ?
                <View style={[stylesHome.viewimac, { backgroundColor: 'black' }]}>
                  <Text style={[stylesHome.textimac, { color: 'white' }]}>Series 5</Text>
                </View> :
                <View style={stylesHome.viewimac}>
                  <Text style={stylesHome.textimac}>Series 5</Text>
                </View>
              }
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 4.3" &&
                stylesHome.activeTab
              ]}
              onPress={() => handleTabPress1("Tab 4.3")}
            >
              {activeTab2 === "Tab 4.3" ?
                <View style={[stylesHome.viewimac, { backgroundColor: 'black' }]}>
                  <Text style={[stylesHome.textimac, { color: 'white' }]}>Series 6</Text>
                </View> :
                <View style={stylesHome.viewimac}>
                  <Text style={stylesHome.textimac}>Series 6</Text>
                </View>
              }
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 4.4" &&
                stylesHome.activeTab
              ]}
              onPress={() => handleTabPress1("Tab 4.4")}
            >
              {activeTab2 === "Tab 4.4" ?
                <View style={[stylesHome.viewimac, { backgroundColor: 'black' }]}>
                  <Text style={[stylesHome.textimac, { color: 'white' }]}>Series 7</Text>
                </View> :
                <View style={stylesHome.viewimac}>
                  <Text style={stylesHome.textimac}>Series 7</Text>
                </View>
              }
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* tab5 */}
      {activeTab === "Tab 5" && (
        <View style={stylesHome.tabText1}>
          <View style={stylesHome.tabs1}>
            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 5.1" &&
                stylesHome.activeTab
              ]}
              onPress={() => handleTabPress1("Tab 5.1")}
            >
              {activeTab2 === "Tab 5.1" ?
                <View style={[stylesHome.viewimac, { backgroundColor: 'black' }]}>
                  <Text style={[stylesHome.textimac, { color: 'white' }]}>Semua</Text>
                </View> :
                <View style={stylesHome.viewimac}>
                  <Text style={stylesHome.textimac}>Semua</Text>
                </View>
              }
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 5.2" &&
                stylesHome.activeTab
              ]}
              onPress={() => handleTabPress1("Tab 5.2")}
            >
              {activeTab2 === "Tab 5.2" ?
                <View style={[stylesHome.viewAirpods, { backgroundColor: 'black' }]}>
                  <Text style={[stylesHome.textAirpods, { color: 'white' }]}>AirPods Max</Text>
                </View> :
                <View style={stylesHome.viewAirpods}>
                  <Text style={stylesHome.textAirpods}>AirPods Max</Text>
                </View>
              }
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 5.3" &&
                stylesHome.activeTab
              ]}
              onPress={() => handleTabPress1("Tab 5.3")}
            >
              {activeTab2 === "Tab 5.3" ?
                <View style={[stylesHome.viewAirpods, { backgroundColor: 'black' }]}>
                  <Text style={[stylesHome.textAirpods, { color: 'white' }]}>AirPods Pro </Text>
                </View> :
                <View style={stylesHome.viewAirpods}>
                  <Text style={stylesHome.textAirpods}>AirPods Pro </Text>
                </View>
              }
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                stylesHome.tab1,
                activeTab === "Tab 5.4" &&
                stylesHome.activeTab
              ]}
              onPress={() => handleTabPress1("Tab 5.4")}
            >
              {activeTab2 === "Tab 5.4" ?
                <View style={[stylesHome.viewmacdisplays, { backgroundColor: 'black' }]}>
                  <Text style={[stylesHome.textmacdisplays
                    , { color: 'white' }]}>AirPods </Text>
                </View> :
                <View style={stylesHome.viewmacdisplays}>
                  <Text style={stylesHome.textmacdisplays}>AirPods</Text>
                </View>
              }
            </TouchableOpacity>
          </View>
        </View>
      )}
      {/* tab1 nho chuyen api */}
      {activeTab2 === "Tab 1.1" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={filteredProducts.filter(p => p.categoryId.name === 'Mac')}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
      {activeTab2 === "Tab 1.2" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={filteredProducts.filter(p => p.categoryId.name === 'Mac')}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
      {activeTab2 === "Tab 1.3" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={filteredProducts.filter(p => p.categoryId.name === 'Mac')}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
      {activeTab2 === "Tab 1.4" && (
        <View style={{ flex: 2 }}>
          <View style={{}}>
            <FlatList
              numColumns={2}
              data={filteredProducts.filter(p => p.categoryId.name === 'Mac')}
              renderItem={renderItem}
              keyExtractor={(item) => item._id}
            />
          </View>
        </View>
      )}

      {/* tab2 nho chuyen api */}
      {activeTab2 === "Tab 2.1" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={filteredProducts.filter(p => p.categoryId.name === 'Iphone')}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
      {activeTab2 === "Tab 2.2" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={filteredProducts.filter(p => p.categoryId.name === 'Iphone')}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
      {activeTab2 === "Tab 2.3" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={filteredProducts.filter(p => p.categoryId.name === 'Iphone')}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
      {activeTab2 === "Tab 2.4" && (
        <View style={{ flex: 2 }}>
          <View style={{}}>
            <FlatList
              numColumns={2}
              data={filteredProducts.filter(p => p.categoryId.name === 'Iphone')}
              renderItem={renderItem}
              keyExtractor={(item) => item._id}
            />
          </View>
        </View>
      )}

      {/* tab3 nho chuyen api */}
      {activeTab2 === "Tab 3.1" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={filteredProducts.filter(p => p.categoryId.name === 'Ipad')}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
      {activeTab2 === "Tab 3.2" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={filteredProducts.filter(p => p.categoryId.name === 'Ipad')}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
      {activeTab2 === "Tab 3.3" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={filteredProducts.filter(p => p.categoryId.name === 'Ipad')}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
      {activeTab2 === "Tab 3.4" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={filteredProducts.filter(p => p.categoryId.name === 'Ipad')}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}

      {/* tab4 nho chuyen api */}
      {activeTab2 === "Tab 4.1" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={filteredProducts.filter(p => p.categoryId.name === 'Watch')}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
      {activeTab2 === "Tab 4.2" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={filteredProducts.filter(p => p.categoryId.name === 'Watch')}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
      {activeTab2 === "Tab 4.3" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={filteredProducts.filter(p => p.categoryId.name === 'Watch')}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
      {activeTab2 === "Tab 4.4" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={filteredProducts.filter(p => p.categoryId.name === 'Watch')}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}

      {/* tab5 nho chuyen api */}
      {activeTab2 === "Tab 5.1" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={filteredProducts.filter(p => p.categoryId.name === 'Airpods')}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
      {activeTab2 === "Tab 5.2" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={filteredProducts.filter(p => p.categoryId.name === 'Airpods')}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
      {activeTab2 === "Tab 5.3" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={filteredProducts.filter(p => p.categoryId.name === 'Airpods')}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
      {activeTab2 === "Tab 5.4" && (
        <View style={{ flex: 2 }}>
          <FlatList
            numColumns={2}
            data={filteredProducts.filter(p => p.categoryId.name === 'Airpods')}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
    </View>
  );
};
export default HomePageScreen;
