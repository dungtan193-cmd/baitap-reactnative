import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {

  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const checkPhone = () => {

    const regex = /^0[0-9]{9}$/;

    if (regex.test(phone)) {

      setError("");

      router.push("/home");

    } else {

      setError("Số điện thoại không hợp lệ");

    }

  };

  return (
    <View style={styles.container}>

      <Text>Nhập số điện thoại</Text>

      <TextInput
        style={styles.input}
        value={phone}
        keyboardType="numeric"
        onChangeText={setPhone}
        placeholder="0123456789"
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <Button title="Đăng nhập" onPress={checkPhone} />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },

  input: {
    borderWidth: 1,
    marginVertical: 10,
    padding: 10
  },

  error: {
    color: "red"
  }

});