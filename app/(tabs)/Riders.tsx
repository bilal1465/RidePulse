import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { ridersInfo } from "@/assets/ridersInfo";
import RiderCard from "@/components/RiderCard";
import { friendRiders } from "@/assets/friendRiders";

const Riders = () => {
  const [selected, setSelected] = useState<"friends" | "search" | null>("search");
  return (
    <ScrollView style={styles.container}>
      <View style={{ gap: 15, paddingHorizontal: 10 }}>
        <View style={{ flexDirection: "row", gap: 20 }}>
          <TouchableOpacity
            style={[
              styles.button,
              selected === "friends" && styles.selectedButton,
            ]}
            onPress={() => setSelected("friends")}
          >
            <Text
              style={[
                styles.text,
                selected === "friends" && styles.selectedText,
              ]}
            >
              Friends
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              selected === "search" && styles.selectedButton,
            ]}
            onPress={() => setSelected("search")}
          >
            <Text
              style={[
                styles.text,
                selected === "search" && styles.selectedText,
              ]}
            >
              Search Riders
            </Text>
          </TouchableOpacity>
        </View>

        {selected === "search"
          ? ridersInfo.map((rider) => {
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
            })
          : friendRiders.map((rider) => {
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
  button: {
    outlineColor: "#101726",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    outlineWidth: 5
  },
  selectedButton: {
    backgroundColor: "#dc2626",
  },
  text: {
    color: "#ef4444",
    fontWeight: "600",
  },
  selectedText: {
    color: "white",
  },
});
