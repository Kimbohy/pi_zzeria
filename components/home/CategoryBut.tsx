import { StyleSheet, View, ScrollView } from "react-native";
import { Text } from "react-native";
import { useState } from "react";

const CategoryBut = () => {
  const categories = ["Suggestions", "Meilleurs ventes", "Tous les pizzas"];
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        {categories.map((category) => (
          <View key={category}>
            <Text
              style={
                activeCategory === category
                  ? [styles.button, styles.active]
                  : styles.button
              }
              onPress={() => setActiveCategory(category)}
            >
              {category}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  horizontalScroll: {
    marginTop: 15,
    flexWrap: "nowrap",
  },
  button: {
    fontSize: 22,
    borderColor: "#E52E2E",
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 50,
    borderWidth: 2,
    color: "#E52E2E",
    marginHorizontal: 15,
  },
  active: {
    backgroundColor: "#E52E2E",
    color: "#fff",
  },
});

export default CategoryBut;
