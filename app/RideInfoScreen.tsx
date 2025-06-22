import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as Progress from "react-native-progress";

const RideInfoScreen = () => {
  const { title, date, duration, distance, leanAngle } = useLocalSearchParams();

  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "#101726",
          padding: 5,
          paddingLeft: 10,
          gap: 4,
        }}
      >
        <Text style={{ color: "white", fontSize: 26, fontWeight: "600" }}>
          {title}
        </Text>
        <Text style={{ color: "gray", fontSize: 16, marginBottom: 5 }}>
          {date}
        </Text>
      </View>
      <View
        style={{ backgroundColor: "gray", height: 250, width: "100%" }}
      ></View>
      <View style={{ flex: 1, flexDirection: "row", gap: 5, marginTop: 5 }}>
        <View style={styles.container}>
          <Text style={{ color: "gray" }}>Duration</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
              marginTop: 5,
            }}
          >
            <MaterialIcons name="access-time" size={20} color="#ca2527" />
            <Text style={{ color: "white", fontSize: 18, fontWeight: "800" }}>
              {duration}
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={{ color: "gray" }}>Avg Speed</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
              marginTop: 5,
            }}
          >
            <MaterialIcons name="speed" size={20} color="#ca2527" />
            <Text style={{ color: "white", fontSize: 18, fontWeight: "800" }}>
              78 km/h
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={{ color: "gray" }}>Max Lean</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
              marginTop: 5,
            }}
          >
            <MaterialCommunityIcons
              name="angle-acute"
              size={20}
              color="#ca2527"
            />
            <Text style={{ color: "white", fontSize: 18, fontWeight: "800" }}>
              {leanAngle}°
            </Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          color: "white",
          fontSize: 24,
          fontWeight: "600",
          marginTop: 20,
        }}
      >
        Ride Statistics
      </Text>
      <View>
        <View style={styles.container}>
          <Text style={{ color: "gray" }}>Top Speed</Text>
          <View style={{ flexDirection: "row", paddingTop: 5, gap: "70%" }}>
            <Text style={{ color: "white", fontSize: 22, fontWeight: "600" }}>
              124 km/h
            </Text>
            <MaterialCommunityIcons
              name="speedometer"
              size={28}
              color="#dc2626"
            />
              <Progress.Bar color="#dc2626" progress={0.8} width={200} borderColor="black"/>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RideInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101726",
    padding: 15,
    borderRadius: 5,
    alignItems: "flex-start",
  },
});
