import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {

  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  // format số điện thoại
  const formatPhone = (text) => {

    const cleaned = text.replace(/\D/g, "");

    if (cleaned.length <= 3) return cleaned;

    if (cleaned.length <= 6) {
      return cleaned.slice(0,3) + " " + cleaned.slice(3);
    }

    return cleaned.slice(0,3) + " " + cleaned.slice(3,6) + " " + cleaned.slice(6,10);
  };

  // xử lý khi nhập
  const handleChange = (text) => {

    const formatted = formatPhone(text);
    setPhone(formatted);

    const raw = text.replace(/\D/g, "");

    const regex = /^0\d{9}$/;

    if (raw.length > 0 && !regex.test(raw)) {
      setError("Số điện thoại không hợp lệ,vui lòng nhập lại");
    } else {
      setError("");
    }
  };

  // kiểm tra khi bấm nút
  const handleSubmit = () => {

    const raw = phone.replace(/\D/g, "");
    const regex = /^0\d{9}$/;

    if (!regex.test(raw)) {
      setError("Số điện thoại không đúng định dạng,vui lòng nhập lại");
    } else {
      setError("");
      alert("Số điện thoại hợp lệ");
    }
  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>Nhập số điện thoại</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại"
        value={phone}
        onChangeText={handleChange}
        keyboardType="numeric"
      />

      {error !== "" && (
        <Text style={styles.error}>{error}</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white"
  },

  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold"
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 6,
    fontSize: 16
  },

  error: {
    color: "red",
    marginTop: 5
  },

  button: {
    marginTop: 20,
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 6,
    alignItems: "center"
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }

});