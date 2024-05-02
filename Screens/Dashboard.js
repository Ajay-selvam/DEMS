import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  BarChart,
  LineChart,
  PieChart,
  PopulationPyramid,
} from "react-native-gifted-charts";
import { Center, VStack } from "native-base";

const Dashboard = () => {
  const data = [
    { value: 50, text: "Data1" },
    { value: 80, text: "Data2" },
    { value: 90, text: "Data3" },
    { value: 70, text: "Data4" },
  ];
  const data2 = [
    { value: 10, text: "Data5" },
    { value: 60, text: "Data6" },
    { value: 90, text: "Data7" },
    { value: 30, text: "Data8" },
  ];
  return (
    <View>
      {/* <Text>Dashboard</Text> */}

      {/* <BarChart data={data} />
      <LineChart data = {data} />  */}
      <Center marginTop={10}>
        <PieChart data={data} />
        <VStack marginTop="5" marginBottom='6'>
          {data.map((x, i) => {
            return (
              <Text
                key={i}
                style={{
                  fontWeight: "bold",
                }}
              >
                {x.text} -
                <Text
                  style={{
                    fontWeight: "normal",
                  }}
                >
                  {x.value}
                </Text>
              </Text>
            );
          })}
        </VStack>
        <PieChart data={data2} />
        <VStack marginTop="5">
          {data2.map((x, i) => {
            return (
              <Text
                key={i}
                style={{
                  fontWeight: "bold",
                }}
              >
                {x.text} -
                <Text
                  style={{
                    fontWeight: "normal",
                  }}
                >
                  {x.value}
                </Text>
              </Text>
            );
          })}
        </VStack>
      </Center>
    </View>
  );
};

export default Dashboard;
const styles = StyleSheet.create({});
