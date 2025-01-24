import { StyleSheet, View } from "react-native";
import { useState } from "react";
import CategoryBut from "@/components/home/CategoryBut";
import SearchBar from "@/components/home/SearchBar";
import PizzaSection from "@/components/home/PizzaSection";
import { ScrollView } from "react-native-gesture-handler";

const Index = () => {
  const [search, setSearch] = useState("");
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <SearchBar />
        <CategoryBut />
        <PizzaSection />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F8",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 50,
    paddingLeft: 8,
    margin: 10,
  },
  searchIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginRight: 10,
    marginHorizontal: 7,
  },
  searchInput: {
    flex: 1,
    height: "100%",
    fontSize: 16,
  },
});

export default Index;
