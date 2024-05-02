import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import LoginProvider from "./Context/LoginProvider";
import DummyNavigator from "./Navigators/MainNavigator";

export default function App() {
  return (
    <LoginProvider>
      <NavigationContainer>
        <NativeBaseProvider>
          <DummyNavigator />
        </NativeBaseProvider>
      </NavigationContainer>
    </LoginProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
