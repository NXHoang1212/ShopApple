import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { WebView } from 'react-native-webview';
import  getConstant  from '../../ultlis/Constanst';


const CardForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState("Pending");

  const handleResponse = (data) => {
    if (data.title === "success") {
      setShowModal(false);
      setStatus("Complete");
    } else if (data.title === "cancel") {
      setShowModal(false);
      setStatus("Cancelled");
    } else {
      return;
    }
  };

  return (
    <View style={{ marginTop: 100 }}>
      <Modal visible={showModal} onRequestClose={() => setShowModal(false)}>
        <WebView
          source={{ uri: `${getConstant().HOST}/san-pham/paypal` }}
          onNavigationStateChange={handleResponse}
          injectedJavaScript={`document.f1.submit()`}
        />
      </Modal>
      <TouchableOpacity
        style={{ width: 300, height: 100 }}
        onPress={() => setShowModal(true)}
      >
        <Text>Pay with Paypal</Text>
      </TouchableOpacity>
      <Text>Payment Status: {status}</Text>
    </View>
  );
};

export default CardForm;