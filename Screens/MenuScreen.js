import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box, HStack, VStack } from "native-base";
import { useFonts } from "expo-font";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const MenuScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../assets/Fonts/Product-Sans-Regular.ttf"),
    "Inter-Bold": require("../assets/Fonts/Product-Sans-Bold.ttf"),
  });
  return (
    <View
      style={{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      }}
    >
      <HStack
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height / 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Pressable
          onPress={() => navigation.navigate("Dashboard")}
          style={{
            backgroundColor: "#7AA2E3",
            height: "auto",
            paddingHorizontal: Dimensions.get("window").width / 10,
            paddingVertical: Dimensions.get("window").height / 28,
            borderRadius: 8,
          }}
        >
          <MaterialCommunityIcons
            name="view-dashboard-variant"
            size={48}
            color="#fff"
            style={{
              alignSelf: "center",
            }}
          />
          <Text
            style={{
              fontFamily: "Inter-Black",
              fontSize: 18,
              color:"#fff"
            }}
          >
            Dashboard
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Lead")}
          style={{
            backgroundColor: "#7AA2E3",
            height: "auto",
            paddingHorizontal: Dimensions.get("window").width / 10,
            paddingVertical: Dimensions.get("window").height / 28,
            borderRadius: 8,
          }}
        >
          <MaterialIcons
            name="summarize"
            size={48}
            color="#fff"
            style={{
              alignSelf: "center",
            }}
          />
          <Text
            style={{
              fontFamily: "Inter-Black",
              fontSize: 18,
              color:'#fff'
            }}
          >
            Lead Summary
          </Text>
        </Pressable>
      </HStack>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({});
