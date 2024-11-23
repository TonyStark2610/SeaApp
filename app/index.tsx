import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";


const navigationIcons = [
  { icon: require("../assets/icons/map.png"), label: "Map" },
  { icon: require("../assets/icons/fish.png"), label: "Inhabitants" },
  { icon: require("../assets/icons/shopping.png"), label: "Shopping" },
  { icon: require("../assets/icons/dining.png"), label: "Dining" },
  { icon: require("../assets/icons/letter_a.png"), label: "Attractions" },
  { icon: require("../assets/icons/greetings.png"), label: "Meet & Greet" },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <Image
          source={require("../assets/icons/logo.png")}
          style={styles.logo}
          onError={() => console.warn("Logo not found")}
        />
        <TouchableOpacity>
          <Image
            source={require("../assets/icons/notification.png")}
            style={styles.notificationIcon}
            onError={() => console.warn("Notification icon not found")}
          />
        </TouchableOpacity>
      </View>

      
      <View style={styles.banner}>
        <Image
          source={require("../assets/icons/banner.png")}
          style={styles.bannerImage}
          onError={() => console.warn("Banner image not found")}
        />
      </View>

      
      <View style={styles.shortcuts}>
        {navigationIcons.map((item, index) => (
          <View key={index} style={styles.shortcut}>
            <Image
              source={item.icon}
              style={styles.shortcutIcon}
              onError={() => console.warn(`${item.label} icon not found`)}
            />
            <Text style={styles.shortcutLabel}>{item.label}</Text>
          </View>
        ))}
      </View>

     
      <View style={styles.shows}>
        <Text style={styles.sectionTitle}>Upcoming Shows</Text>
        {[
          { time: "2:30 PM", label: "Dive Feeding @ Shipwreck" },
          { time: "2:40 PM", label: "Say Cheese Shark" },
        ].map((show, index) => (
          <TouchableOpacity
            key={index}
            style={styles.showCard}
            onPress={() =>
              router.push({
                pathname: "/details",
                params: { showId: index.toString() },
              })
            }
          >
            <Text style={styles.showTime}>{show.time}</Text>
            <Text style={styles.showLabel}>{show.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  logo: { width: 100, height: 50, resizeMode: "contain" },
  notificationIcon: { width: 25, height: 25 },
  banner: { position: "relative", marginBottom: 20 },
  bannerImage: { width: "100%", height: 200, resizeMode: "cover", borderRadius: 10 },
  shortcuts: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 20,
  },
  shortcut: { alignItems: "center", margin: 10 },
  shortcutIcon: { width: 50, height: 50 },
  shortcutLabel: { marginTop: 5, fontSize: 14 },
  shows: { padding: 20 },
  sectionTitle: { fontSize: 18, fontWeight: "bold" },
  showCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  showTime: { fontWeight: "bold" },
  showLabel: { color: "#555" },
});
