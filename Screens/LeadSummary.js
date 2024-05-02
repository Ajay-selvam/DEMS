import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  Input,
  Select,
  VStack,
  IconButton,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

const LeadSummary = () => {
  const [openForm, setOpenForm] = React.useState(false);
  const [ScreenHeight, setScreenHeight] = React.useState("");
  React.useEffect(() => {
    const ScreenH = Dimensions.get("window").height;
    setScreenHeight(ScreenH);
  }, []);

  const [commands, setCommands] = useState([{ id: Math.random(), value: "" }]);

  const handleAddCommand = () => {
    setCommands([...commands, { id: Math.random(), value: "" }]);
  };

  const handleChangeText = (text, id) => {
    const newCommands = commands.map((item) => {
      if (item.id === id) {
        return { ...item, value: text };
      }
      return item;
    });
    setCommands(newCommands);
  };

  const handleDeleteCommand = (id) => {
    const filteredCommands = commands.filter((item) => item.id !== id);
    setCommands(filteredCommands);
  };

  const arr = ["Col1", "Col2", "Col3", "Col4", "Actions"];
  return (
    <View
      style={{
        width: Dimensions.get("window").width,
      }}
    >
      {openForm == true ? null : (
        <View
          style={{
            width: "100%",
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
            marginTop: 30,
            marginBottom: 12,
          }}
        >
          <Center>
            <Button
              variant="solid"
              backgroundColor="blue.500"
              onPress={() => setOpenForm(true)}
            >
              Create New Entry
            </Button>
            <ScrollView
              horizontal={true}
              vertical={true}
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <VStack height="100%">
                <HStack
                  width="100%"
                  style={{
                    backgroundColor: "#fce4",
                  }}
                >
                  {arr.map((x, i) => {
                    return (
                      <Text
                        style={{
                          width: (Dimensions.get("window").width * 2) / 8,
                          padding: 8,
                          borderWidth: 1,
                          borderColor: "#000",
                          textAlign: "center",
                          fontWeight: "bold",
                          backgroundColor: "#fce510",
                          marginTop: 12,
                        }}
                        key={i}
                      >
                        {x}
                      </Text>
                    );
                  })}
                </HStack>

                {/* {dataNewArray &&
                  dataNewArray.map((x, i) => {
                    return (
                      <HStack
                        width="100%"
                        key={i}
                        alignItems="center"
                        textAlign="center"
                      >
                        <Text
                          style={{
                            width: (Dimensions.get("window").width * 2) / 4,
                            padding: 2,
                            borderWidth: 1,
                            borderTopWidth: 0,
                            textAlign: "center",
                            fontSize: Dimensions.get("window").width / 40,
                            height:
                              Dimensions.get("window").width >= 400
                                ? ScreenHeight / 24
                                : ScreenHeight / 12,
                            paddingTop: 8,
                          }}
                        >
                          {String(x.PO_DATE).slice(0, 10)}
                        </Text>
                        <Text
                          style={{
                            width: (Dimensions.get("window").width * 2) / 4,
                            padding: 2,
                            borderWidth: 1,
                            borderTopWidth: 0,
                            textAlign: "center",
                            fontSize: Dimensions.get("window").width / 40,
                            height:
                              Dimensions.get("window").width >= 400
                                ? ScreenHeight / 24
                                : ScreenHeight / 12,
                            paddingTop: 8,
                          }}
                        >
                          {x.PO_NUMBER}
                        </Text>
                        <Text
                          style={{
                            width: (Dimensions.get("window").width * 2) / 4,
                            padding: 2,
                            borderWidth: 1,
                            borderTopWidth: 0,
                            textAlign: "center",
                            fontSize: Dimensions.get("window").width / 40,
                            height:
                              Dimensions.get("window").width >= 400
                                ? ScreenHeight / 24
                                : ScreenHeight / 12,
                            paddingTop: 8,
                          }}
                        >
                          {x.ITEM}
                        </Text>
                        <Text
                          style={{
                            width: (Dimensions.get("window").width * 2) / 4,
                            padding: 2,
                            borderWidth: 1,
                            borderTopWidth: 0,
                            textAlign: "center",
                            fontSize: Dimensions.get("window").width / 40,
                            height:
                              Dimensions.get("window").width >= 400
                                ? ScreenHeight / 24
                                : ScreenHeight / 12,
                            paddingTop: 8,
                          }}
                        >
                          {x.DESCRIPTION}
                        </Text>
                        <Text
                          style={{
                            width: (Dimensions.get("window").width * 2) / 4,
                            padding: 2,
                            borderWidth: 1,
                            borderTopWidth: 0,
                            textAlign: "center",
                            fontSize: Dimensions.get("window").width / 40,
                            height:
                              Dimensions.get("window").width >= 400
                                ? ScreenHeight / 24
                                : ScreenHeight / 12,
                            paddingTop: 8,
                          }}
                        >
                          {String(x.MRN_QUANTITY)}
                        </Text>
                        <FormControl
                          style={{
                            width: (Dimensions.get("window").width * 2) / 4,
                            padding: 2,
                            borderWidth: 1,
                            borderTopWidth: 0,
                            textAlign: "center",
                            fontSize: Dimensions.get("window").width / 40,
                            height:
                              Dimensions.get("window").width >= 400
                                ? ScreenHeight / 24
                                : ScreenHeight / 12,
                            paddingTop:
                              Dimensions.get("window").width >= 400 ? 0 : 8,
                          }}
                        >
                          <Input
                            value={String(x.ACTUAL_QUANTITY)}
                            padding={2}
                            keyboardType="number-pad"
                            variant="unstyled"
                            // onChangeText={(text) =>
                            //   handleInputChange(text, i, "ACTUAL_QUANTITY")
                            // }
                            style={{
                              fontSize: Dimensions.get("window").width / 40,
                              textAlign: "center",
                            }}
                          />
                        </FormControl>
                        <Text
                          style={{
                            width: (Dimensions.get("window").width * 2) / 4,
                            borderWidth: 1,
                            borderTopWidth: 0,
                            textAlign: "center",
                            fontSize: Dimensions.get("window").width / 40,
                            height:
                              Dimensions.get("window").width >= 400
                                ? ScreenHeight / 24
                                : ScreenHeight / 12,
                            paddingTop: 12,
                          }}
                        >
                          {x.MRN_QUANTITY - x.ACTUAL_QUANTITY}
                        </Text>
                        <FormControl
                          style={{
                            width: (Dimensions.get("window").width * 2) / 4,
                            padding: 2,
                            borderWidth: 1,
                            borderTopWidth: 0,
                            textAlign: "center",
                            fontSize: Dimensions.get("window").width / 40,
                            height:
                              Dimensions.get("window").width >= 400
                                ? ScreenHeight / 24
                                : ScreenHeight / 12,
                            paddingTop:
                              Dimensions.get("window").width >= 400 ? 0 : 8,
                          }}
                        >
                          <Input
                            value={String(x.NO_OF_BOXES)}
                            padding={2}
                            variant="unstyled"
                            // onChangeText={(text) =>
                            //   handleInputChange(text, i, "NO_OF_BOXES")
                            // }
                            style={{
                              fontSize: Dimensions.get("window").width / 40,
                              textAlign: "center",
                            }}
                          />
                        </FormControl>
                        <FormControl
                          style={{
                            width: (Dimensions.get("window").width * 2) / 4,
                            padding: 2,
                            borderWidth: 1,
                            borderTopWidth: 0,
                            textAlign: "center",
                            fontSize: Dimensions.get("window").width / 40,
                            height:
                              Dimensions.get("window").width >= 400
                                ? ScreenHeight / 24
                                : ScreenHeight / 12,
                            paddingTop:
                              Dimensions.get("window").width >= 400 ? 0 : 8,
                          }}
                        >
                          <Input
                            value={x.REMARKS}
                            padding={0}
                            variant="unstyled"
                            // onChangeText={(text) =>
                            //   handleInputChange(text, i, "REMARKS")
                            // }
                            style={{
                              fontSize: Dimensions.get("window").width / 40,
                            }}
                          />
                        </FormControl>
                      </HStack>
                    );
                  })} */}
                <Center>
                  <Button
                    style={{
                      width: "auto",
                      paddingTop: ScreenHeight / 36,
                      paddingBottom: ScreenHeight / 36,
                      marginTop: ScreenHeight / 36,
                    }}
                    // isDisabled={savebtn}
                    //onPress={handleAddNewData}
                    backgroundColor="blue.900"
                  >
                    <Text
                      style={{
                        fontSize: 24,
                        color: "#fff",
                        fontWeight: "bold",
                        width: "auto",
                      }}
                    >
                      Save Data
                    </Text>
                  </Button>
                </Center>
              </VStack>
            </ScrollView>
          </Center>
        </View>
      )}
      {openForm == true ? (
        <ScrollView
          style={{
            width: Dimensions.get("window").width,
          }}
        >
          <HStack
            style={{
              width: Dimensions.get("window").width,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <FormControl w="45%">
              <FormControl.Label>Dealer Name</FormControl.Label>
              <Select
                width="100%"
                placeholder="Choose Dealer"
                placeholderTextColor="#000"
                backgroundColor="#fff"
                borderRadius={8}
                //   selectedValue={server}
                //   onValueChange={(itemValue, itemIndex) => {
                //     setServer(itemValue);
                //   }}
              >
                <Select.Item value="Dummy1" label="Dummy1" />
                <Select.Item value="Dummy2" label="Dummy2" />
                <Select.Item value="Dummy3" label="Dummy3" />
              </Select>
            </FormControl>
            <FormControl w="45%">
              <FormControl.Label>Customer Name</FormControl.Label>
              <Input
                width="100%"
                variant="outline"
                style={{
                  left: 5,
                }}
                placeholderTextColor="#000"
                backgroundColor="#fff"
                placeholder="Customer Name"
              />
            </FormControl>
          </HStack>

          <HStack
            style={{
              width: Dimensions.get("window").width,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <FormControl w="45%">
              <FormControl.Label>Regional</FormControl.Label>
              <Select
                width="100%"
                placeholder="Choose Regional"
                placeholderTextColor="#000"
                backgroundColor="#fff"
                borderRadius={8}
                //   selectedValue={server}
                //   onValueChange={(itemValue, itemIndex) => {
                //     setServer(itemValue);
                //   }}
              >
                <Select.Item value="Dummy1" label="Dummy1" />
                <Select.Item value="Dummy2" label="Dummy2" />
                <Select.Item value="Dummy3" label="Dummy3" />
              </Select>
            </FormControl>
            <FormControl w="45%">
              <FormControl.Label>Pin Code</FormControl.Label>
              <Input
                width="100%"
                variant="outline"
                style={{
                  left: 5,
                }}
                placeholderTextColor="#000"
                backgroundColor="#fff"
                placeholder="Pin Code"
              />
            </FormControl>
          </HStack>

          <HStack
            style={{
              width: Dimensions.get("window").width,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <FormControl w="45%">
              <FormControl.Label>Customer No</FormControl.Label>
              <Input
                width="100%"
                variant="outline"
                style={{
                  left: 5,
                }}
                placeholderTextColor="#000"
                backgroundColor="#fff"
                placeholder="Customer No"
              />
            </FormControl>
            <FormControl w="45%">
              <FormControl.Label>Email ID:</FormControl.Label>
              <Input
                width="100%"
                variant="outline"
                style={{
                  left: 5,
                }}
                placeholderTextColor="#000"
                backgroundColor="#fff"
                placeholder="Email ID"
              />
            </FormControl>
          </HStack>
          <HStack
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FormControl w="97%">
              <FormControl.Label>Address:</FormControl.Label>
              <Input
                width="100%"
                variant="outline"
                style={{
                  left: 5,
                  height: Dimensions.get("window").height / 12,
                }}
                placeholderTextColor="#000"
                backgroundColor="#fff"
                placeholder="Address"
              />
            </FormControl>
          </HStack>
          <HStack
            style={{
              width: Dimensions.get("window").width,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <FormControl w="45%">
              <FormControl.Label>Holding</FormControl.Label>
              <Input
                width="100%"
                variant="outline"
                style={{
                  left: 5,
                }}
                placeholderTextColor="#000"
                backgroundColor="#fff"
                placeholder="Holding"
              />
            </FormControl>
            <FormControl w="45%">
              <FormControl.Label>Product</FormControl.Label>
              <Select
                width="100%"
                placeholder="Product"
                placeholderTextColor="#000"
                backgroundColor="#fff"
                borderRadius={8}
                //   selectedValue={server}
                //   onValueChange={(itemValue, itemIndex) => {
                //     setServer(itemValue);
                //   }}
              >
                <Select.Item value="Dummy1" label="Dummy1" />
                <Select.Item value="Dummy2" label="Dummy2" />
                <Select.Item value="Dummy3" label="Dummy3" />
              </Select>
            </FormControl>
          </HStack>

          <HStack
            style={{
              width: Dimensions.get("window").width,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <FormControl w="45%">
              <FormControl.Label>Quality</FormControl.Label>
              <Input
                width="100%"
                variant="outline"
                style={{
                  left: 5,
                }}
                placeholderTextColor="#000"
                backgroundColor="#fff"
                placeholder="Quality"
              />
            </FormControl>
            <FormControl w="45%">
              <FormControl.Label>Req Shippment Date</FormControl.Label>
              <Input
                width="100%"
                variant="outline"
                style={{
                  left: 5,
                }}
                placeholderTextColor="#000"
                backgroundColor="#fff"
                placeholder="Req Shippment Date"
              />
            </FormControl>
          </HStack>

          <HStack
            style={{
              width: Dimensions.get("window").width,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <FormControl w="45%">
              <FormControl.Label>Vertical</FormControl.Label>
              <Input
                width="100%"
                variant="outline"
                style={{
                  left: 5,
                }}
                placeholderTextColor="#000"
                backgroundColor="#fff"
                placeholder="Vertical"
              />
            </FormControl>
            <FormControl w="45%">
              <FormControl.Label>Category</FormControl.Label>
              <Select
                width="100%"
                placeholder="Category"
                placeholderTextColor="#000"
                backgroundColor="#fff"
                borderRadius={8}
                //   selectedValue={server}
                //   onValueChange={(itemValue, itemIndex) => {
                //     setServer(itemValue);
                //   }}
              >
                <Select.Item value="Dummy1" label="Dummy1" />
                <Select.Item value="Dummy2" label="Dummy2" />
                <Select.Item value="Dummy3" label="Dummy3" />
              </Select>
            </FormControl>
          </HStack>

          <HStack
            style={{
              width: Dimensions.get("window").width,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <FormControl w="45%">
              <FormControl.Label>Customer / FTU</FormControl.Label>
              <Input
                width="100%"
                variant="outline"
                style={{
                  left: 5,
                }}
                placeholderTextColor="#000"
                backgroundColor="#fff"
                placeholder="Customer / FTU"
              />
            </FormControl>
            <FormControl w="45%">
              <FormControl.Label>Customer Type</FormControl.Label>
              <Input
                width="100%"
                variant="outline"
                style={{
                  left: 5,
                }}
                placeholderTextColor="#000"
                backgroundColor="#fff"
                placeholder="Customer Type"
              />
            </FormControl>
          </HStack>

          <HStack
            style={{
              width: Dimensions.get("window").width,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <FormControl w="45%">
              <FormControl.Label>Exchange</FormControl.Label>
              <Input
                width="100%"
                variant="outline"
                style={{
                  left: 5,
                }}
                placeholderTextColor="#000"
                backgroundColor="#fff"
                placeholder="Exchange"
              />
            </FormControl>
            <FormControl w="45%">
              <FormControl.Label>Financier</FormControl.Label>
              <Input
                width="100%"
                variant="outline"
                style={{
                  left: 5,
                }}
                placeholderTextColor="#000"
                backgroundColor="#fff"
                placeholder="Financier"
              />
            </FormControl>
          </HStack>

          <HStack
            style={{
              width: Dimensions.get("window").width,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <FormControl w="45%">
              <FormControl.Label>Loan Amount</FormControl.Label>
              <Input
                width="100%"
                variant="outline"
                style={{
                  left: 5,
                }}
                placeholderTextColor="#000"
                backgroundColor="#fff"
                placeholder="Loan Amount"
              />
            </FormControl>
            <FormControl w="45%">
              <FormControl.Label>FI</FormControl.Label>
              <Input
                width="100%"
                variant="outline"
                style={{
                  left: 5,
                }}
                placeholderTextColor="#000"
                backgroundColor="#fff"
                placeholder="FI"
              />
            </FormControl>
          </HStack>

          <HStack
            style={{
              width: Dimensions.get("window").width,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <FormControl w="45%">
              <FormControl.Label>Credit</FormControl.Label>
              <Input
                width="100%"
                variant="outline"
                style={{
                  left: 5,
                }}
                placeholderTextColor="#000"
                backgroundColor="#fff"
                placeholder="Credit"
              />
            </FormControl>
            <FormControl w="45%">
              <FormControl.Label>Subsidy / Cash</FormControl.Label>
              <Input
                width="100%"
                variant="outline"
                style={{
                  left: 5,
                }}
                placeholderTextColor="#000"
                backgroundColor="#fff"
                placeholder="Subsidy / Cash"
              />
            </FormControl>
          </HStack>

          <HStack
            style={{
              width: Dimensions.get("window").width,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <FormControl w="45%">
              <FormControl.Label>Expected Amount</FormControl.Label>
              <Input
                width="100%"
                variant="outline"
                style={{
                  left: 5,
                }}
                placeholderTextColor="#000"
                backgroundColor="#fff"
                placeholder="Expected Amount"
              />
            </FormControl>
            <FormControl w="45%">
              <FormControl.Label>Next Followup</FormControl.Label>
              <Input
                width="100%"
                variant="outline"
                style={{
                  left: 5,
                }}
                placeholderTextColor="#000"
                backgroundColor="#fff"
                placeholder="Next Followup"
              />
            </FormControl>
          </HStack>

          <HStack
            style={{
              width: Dimensions.get("window").width,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <FormControl w="97%">
              <FormControl.Label>Next Followup Date</FormControl.Label>
              <Input
                width="100%"
                variant="outline"
                style={{
                  left: 5,
                }}
                placeholderTextColor="#000"
                backgroundColor="#fff"
                placeholder="Expected Amount"
              />
            </FormControl>
          </HStack>

          <Box
            style={{
              borderWidth: 2,
              borderColor: "#000",
              marginTop: 12,
              marginBottom: 12,
            }}
          >
            {commands.map((command) => (
              <HStack
                key={command.id}
                style={{
                  width: Dimensions.get("window").width,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <FormControl w="85%">
                  <FormControl.Label>Command</FormControl.Label>
                  <Input
                    width="105%"
                    variant="outline"
                    style={{
                      left: 5,
                    }}
                    placeholderTextColor="#524C42"
                    backgroundColor="#fff"
                    placeholder="Command"
                    value={command.value}
                    onChangeText={(text) => handleChangeText(text, command.id)}
                  />
                </FormControl>
                <IconButton
                  icon={<Ionicons name="close-circle" size={24} color="red" />}
                  onPress={() => handleDeleteCommand(command.id)}
                />
              </HStack>
            ))}

            <HStack
              style={{
                width: Dimensions.get("window").width,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              <FormControl w="45%">
                <Button backgroundColor="blue.600" onPress={handleAddCommand}>
                  Add New Command +
                </Button>
              </FormControl>
            </HStack>
          </Box>

          {/* <Box
            style={{
              borderWidth: 2,
              borderColor: "#000",
              marginTop: 12,
              marginBottom: 12,
            }}
          >
            <HStack
              style={{
                width: Dimensions.get("window").width,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <FormControl w="97%">
                <FormControl.Label>Command</FormControl.Label>
                <Input
                  width="100%"
                  variant="outline"
                  style={{
                    left: 5,
                  }}
                  placeholderTextColor="#524C42"
                  backgroundColor="#fff"
                  placeholder="Command"
                />
              </FormControl>
            </HStack>

            <HStack
              style={{
                width: Dimensions.get("window").width,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              <FormControl w="45%">
                <Button backgroundColor="blue.600">Add New Comment +</Button>
              </FormControl>
            </HStack>
          </Box> */}
          <HStack
            style={{
              width: Dimensions.get("window").width,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <FormControl w="45%">
              <FormControl.Label>Customer Reason</FormControl.Label>
              <Select
                width="100%"
                placeholder="Category"
                placeholderTextColor="#000"
                backgroundColor="#fff"
                borderRadius={8}
                //   selectedValue={server}
                //   onValueChange={(itemValue, itemIndex) => {
                //     setServer(itemValue);
                //   }}
              >
                <Select.Item value="Dummy1" label="Dummy1" />
                <Select.Item value="Dummy2" label="Dummy2" />
                <Select.Item value="Dummy3" label="Dummy3" />
              </Select>
            </FormControl>
            <FormControl w="45%">
              <FormControl.Label>Category</FormControl.Label>
              <Select
                width="100%"
                placeholder="Status"
                placeholderTextColor="#000"
                backgroundColor="#fff"
                borderRadius={8}
                //   selectedValue={server}
                //   onValueChange={(itemValue, itemIndex) => {
                //     setServer(itemValue);
                //   }}
              >
                <Select.Item value="Dummy1" label="Dummy1" />
                <Select.Item value="Dummy2" label="Dummy2" />
                <Select.Item value="Dummy3" label="Dummy3" />
              </Select>
            </FormControl>
          </HStack>

          <HStack
            style={{
              width: Dimensions.get("window").width,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 12,
              marginBottom: 12,
            }}
          >
            <Button
              backgroundColor="red.600"
              onPress={() => setOpenForm(false)}
            >
              Cancel
            </Button>
            <Button backgroundColor="blue.600">Save</Button>
            <Button backgroundColor="green.600">Submit</Button>
          </HStack>
        </ScrollView>
      ) : null}
    </View>
  );
};

export default LeadSummary;

const styles = StyleSheet.create({});
