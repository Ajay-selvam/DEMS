import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useLogin } from "../Context/LoginProvider";
import Drawer from "./DrawerNavigator";
import LoginScreen from "../Screens/LoginScreen";



const StackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{
          headerTitle: "",     
          headerShown: false
        }}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};

const DummyNavigator = () => {
  const { isLoggedIn } = useLogin();
  return isLoggedIn ? <Drawer /> : <StackNavigator />;
};

export default DummyNavigator;
const styles = StyleSheet.create({});
