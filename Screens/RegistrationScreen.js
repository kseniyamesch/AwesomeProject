import React from "react";
import { StyleSheet, Text, View, ImageBackground, TextInput } from "react-native";

export default function RegistrationScreen() {

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/Photo-BG.jpg")}
        style={styles.background}
      >
<View style={styles.form}>
    <Text style={styles.formText}>Регистрация</Text>
    <TextInput></TextInput>
</View>
      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30
  },
  form: {
    flex: 1,
marginTop: 263,
backgroundColor: '#FFFFFF',
borderTopStartRadius: 25,
borderTopEndRadius: 25,
// height: '100%',
// height: 375,
  },
  formText: {
    paddingTop: 92,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 30,
    lineHeight: 35,
    color: '#212121',
  }
});
