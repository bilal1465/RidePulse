import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export type riderProps = {
  name: string;
  age: string;
  tags: string[];
  bike: string;
  bio: string;
  avatar: ImageSourcePropType | string;
};



const RiderCard: React.FC<riderProps> = ({
  name,
  age,
  tags,
  bike,
  bio,
  avatar,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.pfp}
          source={typeof avatar === "string" ? { uri: avatar } : avatar}
        />
      </View>
      <View style={{ flexDirection: "column", gap: 10 }}>
        <View>
          <Text style={styles.nameTag}>{name}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.tags}>{tags}</Text>
          <Text style={styles.bikeTags}>{bike}</Text>
        </View>
        <View>
          <Text style={{ color: "#9ba2ad", fontSize: 16 }}>{bio}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text
            style={{
              color: "white",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#ef4444",
              padding: 5,
              borderRadius: 15,
              flex: 3,
            }}
          >
            Invite to Ride
          </Text>
          <MaterialIcons
            style={{ flex: 1 }}
            name="chat-bubble-outline"
            size={24}
            color="white"
          />
        </View>
      </View>
    </View>
  );
};

export default RiderCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#101726",
    padding: 10,
    paddingRight: 150,
    gap: 10,
    borderRadius: 15,
  },
  pfp: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nameTag: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
  },
  tags: {
    backgroundColor: "#44202d",
    color: "#e04042",
    padding: 5,
    borderRadius: 15,
    marginRight: 8,
  },
  bikeTags: {
    backgroundColor: "#202937",
    color: "#e7e7e8",
    padding: 5,
    borderRadius: 15,
  },
  bio: { color: "#99a0ac", fontSize: 22 },
});
