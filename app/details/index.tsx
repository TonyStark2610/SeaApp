import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";


const shows = [
  {
    title: "Alligator Gar",
    description: "With its wide, alligator-like snout and razor-sharp teeth, it’s easy to see how this fish acquired its name.",
    image: require("../../assets/icons/Alligator.png"), 
  },
  {
    title: "Say Cheese Shark",
    description: "Meet the friendliest shark around and say cheese for the perfect underwater memory.",
    image: require("../../assets/icons/Shark.png"), 
  },
];

export default function DetailsScreen() {
  const { showId } = useLocalSearchParams();

  const show = shows[parseInt(showId as string, 10)] || shows[0]; 

  return (
    <ScrollView style={styles.container}>
      <Image source={show.image} style={styles.image} />
      <Text style={styles.title}>{show.title}</Text>
      <Text style={styles.description}>{show.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  image: { width: "100%", height: 300, borderRadius: 10 },
  title: { fontSize: 24, fontWeight: "bold", marginVertical: 20 },
  description: { fontSize: 16, color: "#555" },
});
