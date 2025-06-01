import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export type recentRidesProps = {
  key: number;
  title: string;
  datentime: string;
  duration: string;
  distance: number;
  leanAngle: number;
};

const icons = {
  timeIcon: <MaterialIcons name="access-time-filled" size={11} color="white" />,
  angleIcon: (
    <MaterialCommunityIcons name="angle-acute" size={20} color="white" />
  ),
};

const RecentRidesCard: React.FC<recentRidesProps> = ({
  title,
  datentime,
  duration,
  distance,
  leanAngle,
}) => {
  return (
    <View style={[styles.container, styles.recentRidesContainer]}>
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <Text style={[styles.whiteText, { fontSize: 16 }]}>{title}</Text>
        <Text style={{ color: "#8a909c" }}>{datentime}</Text>
        <Text style={{ color: "white", marginTop: 5 }}>
          {icons.timeIcon} {duration}
        </Text>
      </View>
      <View style={{ gap: 10, alignItems: "flex-end", flex: 1 }}>
        <Text style={styles.recentRidesMileage}>{distance} mi</Text>
        <Text style={styles.whiteText}>{icons.angleIcon} Max {leanAngle}°</Text>
      </View>
    </View>
  );
};

export default RecentRidesCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101726",
    padding: 15,
    borderRadius: 15,
    alignItems: "flex-start",
  },
  recentRidesMileage: {
    color: "#de4041",
    backgroundColor: "#411927",
    padding: 3,
    paddingHorizontal: 8,
    borderRadius: 15,
  },
  recentRidesContainer: {
    flexDirection: "row",
  },
  whiteText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
});
