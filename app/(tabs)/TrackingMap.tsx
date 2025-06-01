import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useState, useEffect } from "react";
import {
  StopWatch,
  DistanceRidden,
  LeanAngle,
  Acceleration,
  AverageSpeed,
  TopSpeed,
  StartRideButton
} from "@/components/export";
import { useDispatch, useSelector, UseSelector } from "react-redux";
import { RootState } from "../state/store";
import { activate, deactivate } from "../state/activeRide/ActiveRideSlice";

const TrackingMap = () => {


  return (
    <ScrollView style={{ paddingTop: 5 }}>
      <View style={styles.topStats}>
        <StopWatch />
        <DistanceRidden />
      </View>
      <LeanAngle />
      <View style={styles.spdStats}>
        <Acceleration />
        <AverageSpeed />
        <TopSpeed />
      </View>
      <StartRideButton />
    </ScrollView>
  );
};

export default TrackingMap;

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  topStats: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 5,
    flex: 1,
    gap: 10,
    paddingBottom: 100,
  },
  spdStats: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 1,
    gap: 10,
    marginTop: 20,
    paddingBottom: 100,
  },
  startRide: {
    backgroundColor: "red",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 15,
  },
});
