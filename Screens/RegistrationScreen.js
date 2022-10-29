import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

export default function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/Photo-BG.jpg")}
        style={styles.background}
      >
        <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <View style={styles.form}>
            <View style={styles.addPhoto}></View>
            <Text style={styles.formText}>Регистрация</Text>
            <TextInput style={styles.input} placeholder="Логин"></TextInput>
            <TextInput
              placeholder="Адрес электронной почты"
              style={styles.input}
            ></TextInput>
            <TextInput
              placeholder="Пароль"
              secureTextEntry={true}
              style={styles.input}
            ></TextInput>
            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
              <Text style={styles.btnText}>Зарегистрироваться</Text>
            </TouchableOpacity>
            <Text style={styles.formBottomText}>Уже есть аккаунт? Войти</Text>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
  },
  form: {
    backgroundColor: "#FFFFFF",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    paddingBottom: 78,
    position: "relative"
  },
  addPhoto: {
position: 'absolute',
width: 120,
height: 120,
borderRadius: 16,
backgroundColor: '#F6F6F6',
alignSelf: 'center',
top: -60,
  },
  formText: {
    paddingTop: 92,
    textAlign: "center",
    // fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    color: "#212121",
    marginBottom: 32,
  },
  input: {
    backgroundColor: "#F6F6F6",
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 15,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
  },
  button: {
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
textAlign: 'center', 
color: '#1B4371'
  }
});
