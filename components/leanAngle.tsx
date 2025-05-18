import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Accelerometer } from "expo-sensors";

const LeanAngle = () => {
  const [accelormeterCoordinates, setAccelormeterCoordinates] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const [straightUp, setStraightUp] = useState(0);
  const [currentLean, setCurrentLean] = useState(0);

  useEffect(() => {
    let angle = Math.round(
      Math.atan2(accelormeterCoordinates.x, accelormeterCoordinates.z) *
        (180 / Math.PI)
    );
    if (angle > 0) {
      setCurrentLean(180 - angle);
    } else if (angle == 180) {
      setCurrentLean(0);
    } else {
      setCurrentLean(angle + 180);
    }
  });

  const calculateStraight = () => {
    let angle = Math.round(
      Math.atan2(accelormeterCoordinates.x, accelormeterCoordinates.z) *
        (180 / Math.PI)
    );
    if (angle === -180 || angle === 180) {
      angle = 0;
    }
    setStraightUp(Math.round(angle));
  };

  Accelerometer.setUpdateInterval(500);

  Accelerometer.addListener(setAccelormeterCoordinates);

  return (
    <View style={{ gap: 20, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={calculateStraight}
        style={{ backgroundColor: "#dc2626", padding: 15 }}
      >
        <Text style={{ fontWeight: "600" }}>Calibrate</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{straightUp}</Text>
      <View
        style={{
          alignItems: "center",
          gap: 5,
          backgroundColor: "#dc2626",
          padding: 15,
        }}
      >
        <Text style={{ color: "black", fontSize: 36, fontWeight: "400" }}>
          Lean Angle
        </Text>
        <Text style={{ color: "white", fontSize: 72, fontWeight: "600" }}>
          {currentLean}
        </Text>
      </View>
    </View>
  );
};

export default LeanAngle;

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
