import { StyleSheet, View, TextInput, Image } from "react-native";
import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <View style={styles.searchBar}>
      <Image
        source={require("../../assets/images/Search.svg")}
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Recherchez votre pizza préferé..."
        placeholderTextColor="#A9A9A9"
        value={search}
        onChangeText={setSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default SearchBar;
