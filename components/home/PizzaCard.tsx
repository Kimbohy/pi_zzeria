import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

interface PizzaProps {
  id: number;
  name: string;
  ingredients: string[];
  sizes: string[];
  price: number;
  image: any;
  available: number;
  location: string;
  liked: boolean;
}

const PizzaCard: React.FC<{ pizza: PizzaProps }> = ({ pizza }) => {
  const [selectedSize, setSelectedSize] = useState(pizza.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  return (
    <View style={styles.container}>
      <Image source={pizza.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.pizzaName}>{pizza.name}</Text>
        <Text style={styles.ingredient}>{pizza.ingredients.join(", ")}</Text>
        <Text style={styles.tailleLabel}>Taille</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedSize}
            onValueChange={(itemValue: string) => setSelectedSize(itemValue)}
            style={styles.picker}
          >
            {pizza.sizes.map((size: string) => (
              <Picker.Item key={size} label={size} value={size} />
            ))}
          </Picker>
        </View>
        <View style={styles.priceQuantityContainer}>
          <Text style={styles.priceText}>{pizza.price} Ar</Text>
          <View style={styles.quantityControl}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                }
              }}
            >
              <Feather name="minus" size={24} color="#E52E2E" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => setQuantity(quantity + 1)}
            >
              <Feather name="plus" size={24} color="#E52E2E" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.locationContainer}>
          <MaterialIcons name="location-on" size={16} color="#B7B7B7" />
          <Text style={styles.locationText}>{pizza.location}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.addButton} onPress={() => {}}>
            <Text style={styles.addButtonText}>Ajouter au panier</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 550,
    backgroundColor: "#fff",
    borderRadius: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor: "#000",
    margin: 20,
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 15,
  },
  detailsContainer: {
    padding: 15,
  },
  pizzaName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#282828",
  },
  ingredient: {
    color: "#777",
    marginBottom: 10,
  },
  tailleLabel: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
    color: "#282828",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 15,
    marginVertical: 10,
    paddingHorizontal: 10,
    overflow: "hidden",
  },
  picker: {
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 0,
    backgroundColor: "transparent",
    outlineColor: "transparent",
  },
  priceQuantityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  priceText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#282828",
  },
  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    padding: 5,
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  addButton: {
    backgroundColor: "#E52E2E",
    paddingVertical: 12,
    borderRadius: 8,
  },
  addButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  locationText: {
    color: "#B7B7B7",
    fontSize: 12,
    marginLeft: 5,
  },
});

export default PizzaCard;
