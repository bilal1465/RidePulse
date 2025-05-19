import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Accelerometer } from "expo-sensors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Acceleration() {
  const [acceleration, setAcceleration] = useState(0);

  useEffect(() => {
    Accelerometer.setUpdateInterval(100);

    const subscription = Accelerometer.addListener(({ x, y, z }) => {
      const acc = Math.sqrt(x * x + y * y + z * z);
      const gForce = acc * 9.81;
      setAcceleration(gForce);
    });

    return () => subscription.remove();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
        <MaterialCommunityIcons name="speedometer" size={16} color="white" />
        <Text style={{ fontSize: 16, color: "white" }}>Accel</Text>
      </View>
      <Text style={{ color: "#da2525", fontSize: 24 }}>
        {acceleration.toFixed(2)} m/s²
      </Text>
    </View>
  );
}

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
