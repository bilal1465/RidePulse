import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useDispatch, useSelector, UseSelector } from "react-redux";
import { RootState } from "@/app/state/store";

const StopWatch = () => {
  const activeRide = useSelector((state: RootState) => state.activeRide.value);

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (activeRide) {
      setIsRunning(true);
    } else {
      setIsRunning(false);
    }
  });

  const resetWatch = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  useEffect(() => {
    if (isRunning == false) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  if (seconds == 60) {
    setMinutes((prev) => prev + 1);
    setSeconds(0);
  } else if (minutes == 60) {
    setHours((prev) => prev + 1);
    setMinutes(0);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={resetWatch}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons name="access-time" size={16} color="white" />
          <Text style={{ color: "white", fontSize: 16, paddingLeft: 2 }}>
            Ride Timer
          </Text>
        </View>
        <Text style={{ color: "#da2525", fontSize: 24, paddingTop: 3 }}>
          {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default StopWatch;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101726",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
});
