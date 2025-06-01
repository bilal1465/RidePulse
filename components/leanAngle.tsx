import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Accelerometer } from "expo-sensors";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { RootState } from "@/app/state/store";
import { useSelector } from "react-redux";

const LeanAngle = () => {
  const [accelormeterCoordinates, setAccelormeterCoordinates] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  // const [straightUp, setStraightUp] = useState(0);
  const [currentLean, setCurrentLean] = useState(0);
  const activeRide = useSelector((state: RootState) => state.activeRide.value);

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

  // const calculateStraight = () => {
  //   let angle = Math.round(
  //     Math.atan2(accelormeterCoordinates.x, accelormeterCoordinates.z) *
  //       (180 / Math.PI)
  //   );
  //   if (angle === -180 || angle === 180) {
  //     angle = 0;
  //   }
  //   setStraightUp(Math.round(angle));
  // };

  Accelerometer.setUpdateInterval(500);

  useEffect(() => {
    if (activeRide) {
      Accelerometer.addListener(setAccelormeterCoordinates);
    } else {
      Accelerometer.addListener(setAccelormeterCoordinates).remove();
    }
  });

  const fill = (currentLean / 180) * 100;

  return (
    <View style={{ gap: 20, justifyContent: "center", alignItems: "center" }}>
      {/* <TouchableOpacity
        onPress={calculateStraight}
        style={{ backgroundColor: "#dc2626", padding: 15 }}
      >
        <Text style={{ fontWeight: "600" }}>Calibrate</Text>
      </TouchableOpacity> */}
      {/* <Text style={styles.text}>{straightUp}</Text> */}
      <Text style={{ color: "white", fontSize: 18 }}>Lean Angle</Text>
      <AnimatedCircularProgress
        size={150}
        width={15}
        fill={fill}
        tintColor="#dc2626"
        backgroundColor="#101726"
        rotation={-90} // start from top (default is 0)
        arcSweepAngle={180}
      >
        {() => (
          <Text style={{ fontSize: 24, color: "#dc2626" }}>
            {currentLean.toFixed(1)}°
          </Text>
        )}
      </AnimatedCircularProgress>
    </View>
  );
};

export default LeanAngle;

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
