import { StyleSheet, View } from "react-native";
import PizzaCard from "./PizzaCard";
import { ScrollView } from "react-native-gesture-handler";

const PizzaSection = () => {
  const pizzas = [
    {
      id: 0,
      name: "Pizza margherita",
      ingredients: ["Tomate", "Mozzarella", "Basilic"],
      sizes: ["PM", "GM"],
      price: 200000,
      image: require("../../assets/images/Rectangle 3.png"),
      available: 4,
      location: "Gastronomie Pizza",
      liked: false,
    },
    {
      id: 1,
      name: "Pizza pepperoni",
      ingredients: ["Tomate", "Mozzarella", "Pepperoni"],
      sizes: ["PM", "GM"],
      price: 250000,
      image: require("../../assets/images/Rectangle 3.png"),
      available: 3,
      location: "Pepperoni Palace",
      liked: false,
    },
    {
      id: 3,
      name: "Pizza hawaiian",
      ingredients: ["Tomate", "Mozzarella", "Ham", "Pineapple"],
      sizes: ["PM", "GM"],
      price: 280000,
      image: require("../../assets/images/Rectangle 3.png"),
      available: 2,
      location: "Tropical Pizza",
      liked: false,
    },
  ];
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {pizzas.map((pizza) => (
          <PizzaCard key={pizza.name} pizza={pizza} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PizzaSection;
