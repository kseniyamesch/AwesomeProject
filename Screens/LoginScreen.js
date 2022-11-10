import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  Button
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen({onLayoutRootView, navigation}) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [dimensions, setDimentions] = useState(Dimensions.get('window').width)

  console.log("navigation", navigation);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get('window').width - 20 * 2;
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

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={loginStyles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          source={require("../assets/images/Photo-BG.jpg")}
          style={loginStyles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...loginStyles.form,
                paddingBottom: isShowKeyboard ? 32 : 144,
                paddingHorizontal: dimensions > 500 ? 100 : 16,
                width: dimensions,
              }}
            >
              <Text style={loginStyles.formText}>Войти</Text>
              <TextInput
                value={state.email}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
                placeholder="Адрес электронной почты"
                style={[loginStyles.input, { marginBottom: 16 }]}
              ></TextInput>
              <TextInput
                value={state.password}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
                placeholder="Пароль"
                secureTextEntry={true}
                style={loginStyles.input}
              ></TextInput>
              <TouchableOpacity
                style={loginStyles.btn}
                activeOpacity={0.8}
                onPress={keyboardHide}
              >
                <Text style={loginStyles.btnText}>Войти</Text>
              </TouchableOpacity>
              <Text style={loginStyles.formBottomText}>
                Нет аккаунта? Зарегистрироваться
              </Text>
              <Button title="Go to register"></Button>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
    paddingHorizontal: 16,
  },
  formText: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto-medium",
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
    fontFamily: 'Roboto-regular',
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
    fontFamily: 'Roboto-regular',
  },
  formBottomText: {
    textAlign: "center",
    color: "#1B4371",
    fontFamily: 'Roboto-regular',
  },
});
