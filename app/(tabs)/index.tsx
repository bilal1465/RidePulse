import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const isDarkMode = useColorScheme() === "dark";

  const icons = {
    timeIcon: (
      <MaterialIcons name="access-time-filled" size={11} color="white" />
    ),
    angleIcon: (
      <MaterialCommunityIcons name="angle-acute" size={20} color="white" />
    ),
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.canvas}>
        <ScrollView style={{ width: "100%" }}>
          //Start Ride Button
          <View style={styles.startRide}>
            <MaterialCommunityIcons
              name="flag-checkered"
              size={48}
              color="white"
            />
            <Text style={{ color: "white", fontSize: 22, fontWeight: "800" }}>
              Start Ride
            </Text>
          </View>
          //Stats Preview
          <View style={styles.stats}>
            <View style={styles.container}>
              <Text style={{ color: "#34e61d", fontWeight: '600' }}>Max Lean Angle</Text>
              <Text style={{color: 'white', fontSize: 22, fontWeight: '800'}}>42°</Text>
            </View>
            <View style={styles.container}>
              <Text style={{ color: "#34e61d", fontWeight: '600' }}>Total Rides</Text>
              <Text style={{color: 'white', fontSize: 22, fontWeight: '800'}}>24</Text>
            </View>
          </View>
          //Recent Rides
          <View style={styles.recentRides}>
            //Recent Rides Header
            <View style={styles.recentRidesHeader}>
              <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}>Recent Rides</Text>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <Text style={{ color: "red", fontWeight: '500' }}>View All</Text>
              </View>
            </View>
            // Recent ride info box
            <View style={[styles.container, styles.recentRidesContainer]}>
              <View style={{ flex: 1, alignItems: "flex-start" }}>
                <Text style={[styles.whiteText, {fontSize: 16}]}>Mountain Loop</Text>
                <Text style={{ color: "#8a909c" }}>Apr 30, 2025</Text>
                <Text style={{ color: "white", marginTop: 5 }}>
                  {icons.timeIcon} 2h 15m
                </Text>
              </View>
              <View style={{ gap: 10, alignItems: "flex-end", flex: 1 }}>
                <Text style={styles.recentRidesMileage}>45.2 mi</Text>
                <Text style={styles.whiteText}>{icons.angleIcon} Max 48°</Text>
              </View>
            </View>
            <View style={[styles.container, styles.recentRidesContainer]}>
              <View style={{ flex: 1, alignItems: "flex-start" }}>
                <Text style={[styles.whiteText, {fontSize: 16}]}>Coastal Loop</Text>
                <Text style={{ color: "#8a909c" }}>Apr 28, 2025</Text>
                <Text style={{ color: "white", marginTop: 5 }}>
                  {icons.timeIcon} 1h 45m
                </Text>
              </View>
              <View style={{ gap: 10, alignItems: "flex-end", flex: 1 }}>
                <Text style={styles.recentRidesMileage}>32.8 mi</Text>
                <Text style={styles.whiteText}>{icons.angleIcon} Max 39°</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#101726",
    padding: 15,
    borderRadius: 15,
    alignItems: "flex-start",
  },
  whiteText: {
    color: "#FFFFFF",
    fontWeight: '600'
  },
  darkText: {
    color: "#FFFFFF",
  },
  startRide: {
    backgroundColor: "red",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 15,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 30,
    marginTop: 20,
  },
  recentRides: {
    flexDirection: "column",
    gap: 20,
  },
  recentRidesHeader: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
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
});
