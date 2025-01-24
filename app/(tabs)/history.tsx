import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function PurchaseHistoryScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/back.svg")}
          style={styles.BackButton}
        />
        <Text style={styles.headerTitle}>Historiques d'achats</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Image
          source={require("@/assets/images/calendar.svg")}
          style={styles.historyIcon}
        />
        <Text style={styles.noHistoryText}>Pas d'historique</Text>
        <Text style={styles.description}>
          Cliquez sur le bouton ci-dessous pour commencer à commander des pizzas
        </Text>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>Commencer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "space-between",
  },
  BackButton: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginRight: 12, // Ajout d'espacement entre le bouton et le titre
  },
  header: {
    // marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    justifyContent: "space-between", // Ensures proper spacing
  },
  headerTitle: {
    flex: 1, // Allows the title to take up available space
    fontSize: 18,
    fontWeight: "600",
    color: "#333333",
    textAlign: "center", // Centers the text within its allocated space
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  historyIcon: {
    width: 80,
    height: 80,
    marginBottom: 16,
    tintColor: "#CCCCCC", // Adjust for a gray tone
  },
  noHistoryText: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333333",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    color: "#666666",
  },
  startButton: {
    backgroundColor: "#FF0000",
    paddingVertical: 12,
    marginHorizontal: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  startButtonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});
