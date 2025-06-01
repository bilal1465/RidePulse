import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector, UseSelector } from "react-redux";
import { RootState } from "@/app/state/store";
import { activate, deactivate } from "@/app/state/activeRide/ActiveRideSlice";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";

const StartRideButton = () => {
  const activeRide = useSelector((state: RootState) => state.activeRide.value);
  const dispatch = useDispatch();
  return (
    <View>
      <TouchableOpacity
        onPress={
          activeRide
            ? () => dispatch(deactivate())
            : () => {
                dispatch(activate());
                router.push("/(tabs)/TrackingMap");
              }
        }
      >
        <View style={styles.startRide}>
          <MaterialCommunityIcons
            name="flag-checkered"
            size={48}
            color="white"
          />
          <Text style={{ color: "white", fontSize: 22, fontWeight: "800" }}>
            {activeRide ? "Stop Ride" : "Start Ride"}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default StartRideButton;

const styles = StyleSheet.create({
  startRide: {
    backgroundColor: "red",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 15,
  },
});
