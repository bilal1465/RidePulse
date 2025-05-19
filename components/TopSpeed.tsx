import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { getDistance } from "geolib";
import { locationPins } from "./StoreLocation";

const TopSpeed = () => {
  const validSpeeds = locationPins
    .map((pin) => pin.speed)
    .filter((speed): speed is number => speed !== null);

  const maxSpeed = validSpeeds.length > 0 ? Math.max(...validSpeeds) : 0;
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <MaterialCommunityIcons name="lightning-bolt" size={16} color="white" />
        <Text style={{ color: "white", fontSize: 16 }}>Top Spd</Text>
      </View>
      <Text style={{ color: "#da2525", fontSize: 24 }}>{maxSpeed}</Text>
    </View>
  );
};

export default TopSpeed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    backgroundColor: "#101726",
    borderRadius: 15,
    gap: 2,
  },
});
