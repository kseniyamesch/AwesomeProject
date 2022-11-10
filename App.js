import { useState, useEffect, useCallback } from "react";
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

SplashScreen.preventAutoHideAsync();

const AuthStack = createNativeStackNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
          "Roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
          "Roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (

    <NavigationContainer>
      <AuthStack.Navigator>        
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          onLayoutRootView={onLayoutRootView}
          
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="Registration"
          component={RegistrationScreen}
          onLayoutRootView={onLayoutRootView}
          options={{headerShown: false}}
        />
      </AuthStack.Navigator>
    </NavigationContainer>


    // <RegistrationScreen onLayoutRootView={onLayoutRootView}></RegistrationScreen>
    // <LoginScreen onLayoutRootView={onLayoutRootView}></LoginScreen>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
