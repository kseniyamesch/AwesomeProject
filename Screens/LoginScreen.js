import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

export default function LoginScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  return (
    <View style={loginStyles.container}>
      <ImageBackground
        source={require("../assets/images/Photo-BG.jpg")}
        style={loginStyles.image}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={loginStyles.form}>
            <Text style={loginStyles.formText}>Войти</Text>
            <TextInput
              onFocus={() => setIsShowKeyboard(true)}
              placeholder="Адрес электронной почты"
              style={[loginStyles.input, { marginBottom: 16 }]}
            ></TextInput>
            <TextInput
              onFocus={() => setIsShowKeyboard(true)}
              placeholder="Пароль"
              style={loginStyles.input}
            ></TextInput>
            <TouchableOpacity style={loginStyles.btn} activeOpacity={0.8}>
              <Text style={loginStyles.btnText}>Войти</Text>
            </TouchableOpacity>
            <Text style={loginStyles.formBottomText}>
              Нет аккаунта? Зарегистрироваться
            </Text>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  form: {
    backgroundColor: "#FFFFFF",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    paddingTop: 32,
    paddingBottom: 144,
    paddingHorizontal: 16,
  },
  formText: {
    color: "#212121",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    marginBottom: 33,
  },
  input: {
    backgroundColor: "#F6F6F6",
    height: 50,
    paddingLeft: 16,
    placeholder: "#BDBDBD",
    border: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  btn: {
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginHorizontal: 16,
    paddingVertical: 16,
    marginTop: 27,
    marginBottom: 16,
  },
  btnText: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
  },
  formBottomText: {
    textAlign: "center",
    color: "#1B4371",
  },
});
