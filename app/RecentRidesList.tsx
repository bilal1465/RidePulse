import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { recentRides } from "@/app/assets/recentRidesInfo";
import RecentRidesCard from "@/components/RecentRidesCard";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router } from "expo-router";

const RecentRidesList = () => {
  return (
    <ScrollView>
      <View style={{ flex: 1, flexDirection: "column", gap: 20 }}>
        {recentRides.map((ride, index) => {
          return (
            <TouchableOpacity
              key={ride.title}
              onPress={() => {
                router.push({
                  pathname: "/RideInfoScreen",
                  params: {
                    title: ride.title,
                    date: ride.datentime,
                    duration: ride.duration,
                    distance: ride.distance,
                    leanAngle: ride.leanAngle,
                  },
                });
              }}
            >
              <RecentRidesCard
                title={ride.title}
                datentime={ride.datentime}
                duration={ride.duration}
                distance={ride.distance}
                leanAngle={ride.leanAngle}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default RecentRidesList;

const styles = StyleSheet.create({});
