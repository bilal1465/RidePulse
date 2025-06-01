import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#dc2626",
        tabBarLabelStyle: { fontSize: 14 },
        tabBarStyle: {
          backgroundColor: "#101726",
        },
        headerStyle: {
          backgroundColor: "#000000",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name={"home"} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="TrackingMap"
        options={{
          title: "Tracking",
          tabBarIcon: ({ color }) => (
            <Ionicons name={"map"} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="Riders"
        options={{
          title: "Find Riders",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="groups" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
