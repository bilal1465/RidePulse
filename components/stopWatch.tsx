import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";

const StopWatch = () => {
  const [seconds, setSeconds] = useState(58);
  const [minutes, setMinutes] = useState(59);
  const [hours, setHours] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  const toggleWatch = () => {
    setIsRunning(!isRunning);
  };

  const resetWatach = () => {
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
    <View style={{ backgroundColor: "white" }}>
      <Text>
        {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </Text>
      <TouchableOpacity
        onPress={toggleWatch}
        style={{ backgroundColor: "green" }}
      >
        <Text>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={toggleWatch}
        style={{ backgroundColor: "red" }}
      >
        <Text>Stop</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={resetWatach}
        style={{ backgroundColor: "yellow" }}
      >
        <Text>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StopWatch;

const styles = StyleSheet.create({});
