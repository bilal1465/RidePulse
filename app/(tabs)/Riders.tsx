import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ridersInfo } from "@/assets/ridersInfo";
import RiderCard from "@/components/RiderCard";
import { riderProps } from "@/components/RiderCard";

const Riders = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{gap: 5, paddingHorizontal: 10}}>
        {ridersInfo.map((rider) => {
          return (
            <RiderCard
              key={rider.name}
              name={rider.name}
              age={rider.age}
              tags={rider.tags}
              bike={rider.bike}
              bio={rider.bio}
              avatar={rider.avatar}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Riders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    borderRadius: 15,
  },
});
