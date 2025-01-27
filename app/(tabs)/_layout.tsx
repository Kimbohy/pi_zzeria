import React, { useEffect, useState } from "react";
import { Tabs } from "expo-router";
import { Image, View, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dimensions } from "react-native";

const STORAGE_KEY = "lastActiveTab";

const HomeHeader = () => (
  <View style={styles.header}>
    <Image
      source={require("../../assets/icons/pizza_logo.png")}
      style={styles.icon}
    />
    <Image
      source={require("../../assets/icons/menu.png")}
      style={styles.icon}
    />
  </View>
);

export default () => {
  const [initialTab, setInitialTab] = useState("home");

  useEffect(() => {
    (async () => {
      const savedTab = await AsyncStorage.getItem(STORAGE_KEY);
      if (savedTab) {
        setInitialTab(savedTab);
      }
    })();
  }, []);

  const handleTabChange = async (tabName: string): Promise<void> => {
    await AsyncStorage.setItem(STORAGE_KEY, tabName);
  };

  return (
    <Tabs
      initialRouteName={initialTab}
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: "#FF0000",
        tabBarInactiveTintColor: "#000",
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          header: HomeHeader,
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/icons/homeR.png")
                  : require("../../assets/icons/homeB.png")
              }
              style={[styles.tabIcon, focused && styles.tabIconActive]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="panier"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/icons/panierR.png")
                  : require("../../assets/icons/panierB.png")
              }
              style={[styles.tabIcon, focused && styles.tabIconActive]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/icons/historyR.png")
                  : require("../../assets/icons/historyB.png")
              }
              style={[styles.tabIcon, focused && styles.tabIconActive]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/icons/userB.png")
                  : require("../../assets/icons/userB.png")
              }
              style={[styles.tabIcon, focused && styles.tabIconActive]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='Livraison'
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
      }}>
        
      </Tabs.Screen>
    </Tabs>
  );
};

const { width } = Dimensions.get("window");
const isTablet = width >= 768;

const styles = StyleSheet.create({
  header: {
    height: isTablet ? 80 : 60,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    flexDirection: "row",
    paddingHorizontal: isTablet ? 20 : 10,
  },
  tabBar: {
    backgroundColor: "#fff",
    height: isTablet ? 60 : 45, // Adjusted height
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  tabIcon: {
    width: isTablet ? 30 : 24,
    height: isTablet ? 30 : 24,
  },
  tabIconActive: {
    tintColor: "#FF0000",
  },
  icon: {
    width: isTablet ? 40 : 30,
    height: isTablet ? 40 : 30, // Adjusted height
    paddingTop: 5,
  },
});
