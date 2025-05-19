import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import LeanAngle from "@/components/LeanAngle";
import StopWatch from "@/components/StopWatch";
import DistanceRidden from "@/components/DistanceRidden";
import Acceleration from "@/components/Acceleration";
import AverageSpeed from "@/components/AverageSpeed";
import TopSpeed from "@/components/TopSpeed";

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
  }
});
