import { ImageBackground, StyleSheet, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "native-base";
import { useLogin } from "../Context/LoginProvider";
import MenuScreen from "../Screens/MenuScreen";
import Dashboard from "../Screens/Dashboard";
import LeadSummary from "../Screens/LeadSummary";


const DrawerNavigator = () => {
  const Stack = createStackNavigator();
  const { setIsLoggedIn } = useLogin();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        options={{
          headerTitle: "Menu",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTitleStyle: { alignSelf: "center" },
          headerRight: () => (
            <Button
              onPress={() => setIsLoggedIn(false)}
              style={{
                marginRight: "2%",
              }}
              backgroundColor="red.600"
            >
              Logout
            </Button>
          ),
        }}
        component={MenuScreen}
      />
      <Stack.Screen
        name="Dashboard"
        options={{
          headerTitle: "Dashboard",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTitleStyle: { alignSelf: "center" },
          headerRight: () => (
            <Button
              onPress={() => setIsLoggedIn(false)}
              style={{
                marginRight: "2%",
              }}
              backgroundColor="red.600"
            >
              Logout
            </Button>
          ),
        }}
        component={Dashboard}
      />
      <Stack.Screen
        name="Lead"
        options={{
          headerTitle: "Lead",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTitleStyle: { alignSelf: "center" },
          headerRight: () => (
            <Button
              onPress={() => setIsLoggedIn(false)}
              style={{
                marginRight: "2%",
              }}
              backgroundColor="red.600"
            >
              Logout
            </Button>
          ),
        }}
        component={LeadSummary}
      />
    </Stack.Navigator>
  );
};

export default DrawerNavigator;
const styles = StyleSheet.create({});
