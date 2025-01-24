import React, { useRef, useState } from "react";
import { View, FlatList, StyleSheet, Animated, Dimensions } from "react-native";
import OnboardingItem from "./OnboardingItem";
import Paginator from "./Paginator";
import { ScrollView } from "react-native-gesture-handler";

const Onboarding = () => {
  const carouselData = [
    {
      id: "1",
      image: require("../assets/images/mixed-pizza-with-various-ingridients.svg"),
      title: "Bienvenue à Pizza",
      subtitle: "Les meilleures pizzas au monde sont à votre disposition.",
    },
    {
      id: "2",
      image: require("../assets/images/mixed-pizza-with-various-ingridients.svg"),
      title: "Des saveurs uniques",
      subtitle: "Essayez nos pizzas avec des ingrédients frais.",
    },
    {
      id: "3",
      image: require("../assets/images/mixed-pizza-with-various-ingridients.svg"),
      title: "Livraison rapide",
      subtitle: "Savourez nos pizzas en un rien de temps.",
    },
    {
      id: "4",
      image: require("../assets/images/mixed-pizza-with-various-ingridients.svg"),
      title: "Livraison rapide",
      subtitle: "Savourez nos pizzas en un rien de temps.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const { width } = Dimensions.get("window");

  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: Array<{ index: number }> }) => {
      setCurrentIndex(viewableItems[0].index);
    }
  ).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flat}
        data={carouselData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={handleScroll}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      {/* Pagination Indicator */}
      <Paginator data={carouselData} scrollX={scrollX} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "flex-end", // Aligne la pagination en bas
  },
  flat: {
    flex: 1,
    gap: 20,
    marginTop: 20,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 40,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#ddd",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#ff0000",
  },
});

export default Onboarding;
