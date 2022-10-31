import React, { useState, useSyncExternalStore, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions
} from "react-native";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const loadApplication = async () => {
  await Font.loadAsync({
    "Roboto-regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-medium": require("../assets/fonts/Roboto-Medium.ttf"),
  });
};
export default function RegistrationScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isReady, setIsReady] = useState(false);
  const [dimensions, setDimentions] = useState(Dimensions.get('window').width)

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get('window').width;
      setDimentions(width)
    }
    const subscription = Dimensions.addEventListener('change', onChange);
    return () => {
      subscription?.remove()
    }
  }, [])

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setState(initialState);
    console.log(state);
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/Photo-BG.jpg")}
          style={styles.background}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                paddingBottom: isShowKeyboard ? 32 : 78,
                paddingHorizontal: dimensions > 500 ? 100 : 16,
                width: dimensions
              }}
            >
              <View style={styles.addPhoto}></View>
              <Text style={styles.formText}>Регистрация</Text>
              <TextInput
                style={styles.input}
                value={state.login}
                placeholder="Логин"
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, login: value }))
                }
              ></TextInput>
              <TextInput
                value={state.email}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
                placeholder="Адрес электронной почты"
                style={styles.input}
              ></TextInput>
              <TextInput
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
                placeholder="Пароль"
                secureTextEntry={true}
                style={styles.input}
                value={state.password}
              ></TextInput>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={keyboardHide}
              >
                <Text style={styles.btnText}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <Text style={styles.formBottomText}>Уже есть аккаунт? Войти</Text>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'center'
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
    position: "relative",
    paddingHorizontal: 16,
  },
  addPhoto: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    alignSelf: "center",
    top: -60,
  },
  formText: {
    paddingTop: 92,
    textAlign: "center",
    fontFamily: "Roboto-medium",
    fontSize: 30,
    lineHeight: 35,
    color: "#212121",
    marginBottom: 32,
  },
  input: {
    fontFamily: 'Roboto-regular',
    backgroundColor: "#F6F6F6",
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 15,
    marginBottom: 16,
    border: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
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
    fontFamily: 'Roboto-regular',
  },
  formBottomText: {
    textAlign: "center",
    color: "#1B4371",
    fontFamily: 'Roboto-regular',
  },
});
