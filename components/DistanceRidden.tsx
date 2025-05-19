import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import getPathLength from "geolib/es/getPathLength";
import * as Location from "expo-location";
import type { LocationObject } from "expo-location";
import * as TaskManager from "expo-task-manager";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { updateLocationPins } from "./StoreLocation";

const DistanceRidden = () => {
  const [locations, updateLocations] = useState<LocationObject[]>([]);

  const locationPins = locations.map((location) => ({
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  }));
  
  updateLocationPins(locationPins);

  const LOCATION_TASK_NAME = "background-location-task";

  TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }) => {
    if (error) {
      console.error(error);
      return;
    }

    const locationData = data as {
      locations: Location.LocationObject[];
    };

    const locations = locationData.locations;
    if (locations && locations.length > 0) {
      console.log("📍 New location:", locations); // The most recent location
      updateLocations((prev) => [...prev, ...locations]);
    }
  });

  async function startLocationTracking() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission not granted");
      return;
    }

    const hasStarted = await Location.hasStartedLocationUpdatesAsync(
      LOCATION_TASK_NAME
    );
    if (hasStarted) {
      console.log("Already started");
      return;
    }

    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      accuracy: Location.Accuracy.High,
      timeInterval: 1000, // Update every 5 seconds
      distanceInterval: 5, // Or every 5 meters
      showsBackgroundLocationIndicator: true,
      foregroundService: {
        notificationTitle: "RidePulse",
        notificationBody: "Tracking your ride in the background",
      },
    });

    console.log("Background location tracking started");
  }

  // const stopTracking = () => {
  //   Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME)
  //   console.log("stopped tracking")
  // };

  const getDistance = () => {
    return getPathLength(locationPins);
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', alignItems: 'center', gap: 2}}>
        <MaterialCommunityIcons
          name="map-marker-distance"
          size={16}
          color="white"
        />
        <Text style={{ color: "white", fontSize: 16 }}>Distance</Text>
      </View>

      <Text style={{ color: "#da2525", fontSize: 24 }}>{getDistance()} km</Text>
    </View>
  );
};

export default DistanceRidden;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    backgroundColor: "#101726",
    borderRadius: 15,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
});
