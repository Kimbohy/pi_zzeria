import { StyleSheet, View } from "react-native";
import { Text } from "react-native";
import { act, useState } from "react";

const CategoryBut = () => {
  const categories = ["Suggestions", "Meilleurs ventes", "Tous les pizzas"];
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  return (
    <View style={styles.container}>
      <View style={styles.horizontalScroll}>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    overflow: "scroll",
  },
  horizontalScroll: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 15,
    gap: 30,
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
  },
  active: {
    backgroundColor: "#E52E2E",
    color: "#fff",
  },
});

export default CategoryBut;
