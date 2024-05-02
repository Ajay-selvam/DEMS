import {
  Alert,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  BackHandler,
  Keyboard,
} from "react-native";
import React from "react";
import {
  Box,
  Center,
  VStack,
  FormControl,
  Input,
  Stack,
  Heading,
  Button,
  useToast,
  HStack,
  Pressable,
  Modal,
  WarningOutlineIcon,
  KeyboardAvoidingView,
  Select,
} from "native-base";
import { useLogin } from "../Context/LoginProvider";
// import { Icon } from "react-native-eva-icons";
import axios from "axios";
import IP_CONFIG from "./IP_Config.json";
// import Icon from 'react-native-vector-icons/dist/AntDesign'
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [usernameError, setusernameError] = React.useState(false);
  const [passwordError, setpasswordError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const toast = useToast();
  const { setIsLoggedIn } = useLogin();

  const storeLoginData = async (value) => {
    try {
      await AsyncStorage.setItem("@loginDetails", value);
    } catch (e) {
      console.log("error accuired saving logindetails", e);
    }
  };

  // const login = () => {
  //   //setIsLoggedIn(true);
  //   console.log("Username", username);
  //   console.log("Password", password);
  //   if (username == "" && password == "") {
  //     setusernameError(true);
  //     setpasswordError(true);
  //   } else if (username == "") {
  //     setusernameError(true);
  //   } else if (password == "") {
  //     setpasswordError(true);
  //   } else {
  //     setLoading(true);
  //                   setIsLoggedIn(true);
  //           setLoading(false);
  //     // axios
  //     //   .post(`${IP_CONFIG.local}/api/userLogin`, {
  //     //     username: username,
  //     //     password: password,
  //     //   })
  //     //   .then((res) => {
  //     //     console.log("Response in user login", res.data.not_a_user);
  //     //     if (res.data.not_a_user == true) {
  //     //       setIsLoggedIn(false);
  //     //       Alert.alert(
  //     //         "Unauthorized User",
  //     //         "Please Provide Proper Credentials"
  //     //       );
  //     //       setLoading(false);
  //     //     } else {
  //     //       const x = JSON.stringify(res.data);
  //     //       storeLoginData(x);
  //     //       setIsLoggedIn(true);
  //     //       setLoading(false);
  //     //     }
  //     //    // res.status == "500" || 500 ? Alert.alert("Error", "Database connection timed out. Please try again later.") : console.log("-")
  //     //   })
  //     //   .catch((err) => {
  //     //     console.log("Error in user login", err);
  //     //     setLoading(false);
  //     //     Alert.alert("Error", "Network Error Please Contact Admin");
  //     //   });
  //   }
  // };

  const login = async () => {
    console.log("Username", username);
    console.log("Password", password);

    if (username === "" && password === "") {
      setusernameError(true);
      setpasswordError(true);
      return;
    } else if (username === "") {
      setusernameError(true);
      return;
    } else if (password === "") {
      setpasswordError(true);
      return;
    }

    setLoading(true);
    const payload = {
      usernameOrEmail: username,
      password: password,
    };

    try {
      const response = await axios.post(
        `${IP_CONFIG.local}/api/auth/signin`,
        payload
      );
      console.log("Response from server:", response.data);

      if (response.data && response.status === 200) {
        const userData = JSON.stringify(response.data);
        await storeLoginData(userData);
        setIsLoggedIn(true);
      } else {
        Alert.alert(
          "Login Failed",
          "Please check your credentials and try again."
        );
      }
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Login Error", "Unable to login. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Center height="40%" width="80%" borderRadius={24}>
          <Stack space={7} w="100%" alignItems="center">
            <Heading>LOGIN</Heading>
            <FormControl w="100%" isInvalid={usernameError}>
              <Input
                width="100%"
                variant="outline"
                style={{
                  left: 5,
                }}
                InputLeftElement={
                  <FontAwesome6
                    name="user"
                    size={24}
                    color="black"
                    style={{
                      left: 10,
                    }}
                  />
                }
                value={username}
                onChangeText={(e) => setUsername(e)}
                placeholder="Username"
              />
              <FormControl.ErrorMessage>
                Please enter username
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl width="100%" isInvalid={passwordError}>
              <Input
                width="100%"
                paddingRight={4}
                variant="outline"
                type={show ? "text" : "password"}
                onChangeText={(e) => setPassword(e)}
                value={password}
                InputRightElement={
                  <Pressable marginRight={2} onPress={() => setShow(!show)}>
                    {show ? (
                      <Ionicons name="eye-off" size={24} color="#000" />
                    ) : (
                      <Ionicons name="eye" size={24} color="#000" />
                    )}
                  </Pressable>
                }
                placeholder="Password"
              />
              <FormControl.ErrorMessage>
                Please enter password
              </FormControl.ErrorMessage>
            </FormControl>
            <HStack space={8} width="100%">
              <Button
                backgroundColor="blue.700"
                borderRadius={8}
                onPress={login}
                w="45%"
              >
                <Text
                  style={{
                    fontWeight: "800",
                    color: "#fff",
                    fontSize: 18,
                  }}
                >
                  Login
                </Text>
              </Button>
              <Button
                backgroundColor="black"
                borderRadius={8}
                // onPress={login}
                onPress={() => BackHandler.exitApp()}
                w="45%"
              >
                <Text
                  style={{
                    fontWeight: "800",
                    color: "#fff",
                    fontSize: 18,
                  }}
                >
                  Exit App
                </Text>
              </Button>
            </HStack>
          </Stack>
        </Center>
        <Modal isOpen={loading}>
          <Modal.Content width="100%">
            <Modal.Body>
              <Center>
                <Text
                  style={{
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  Loading.......Please Wait....
                </Text>
              </Center>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
