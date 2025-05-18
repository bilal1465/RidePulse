import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, {useState, useEffect} from "react";
import LeanAngle from "@/components/leanAngle";
import StopWatch from "@/components/stopWatch";

const trackingMap = () => {

  return(
    <ScrollView>
     <LeanAngle />
     <StopWatch />
    </ScrollView>

  )
};

export default trackingMap;

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
