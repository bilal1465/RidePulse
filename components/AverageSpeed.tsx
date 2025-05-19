import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { locationPins } from "./StoreLocation";
import getPathLength from "geolib/es/getPathLength";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const AverageSpeed = () => {
  const distance = getPathLength(locationPins);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    setStartTime(new Date());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (startTime) {
        setElapsedTime((new Date().getTime() - startTime.getTime()) / 1000); // seconds
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  const speedInMps = distance / elapsedTime;
  const speedInKmph = (speedInMps * 3600) / 1000;

  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', gap: 2}}>
        <MaterialCommunityIcons name="road-variant" size={16} color="white" />
        <Text style={{color:'white', fontSize: 16}}>Avg Spd</Text>
      </View>

      <Text style={{fontSize:24, color:'#da2525'}}>{speedInKmph}</Text>
    </View>
  );
};

export default AverageSpeed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 2,
    backgroundColor: "#101726",
    borderRadius: 15,
    gap: 2,
  },
});
