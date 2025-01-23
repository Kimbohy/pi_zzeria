import { StyleSheet, View } from "react-native";
import PizzaCard from "./PizzaCard";

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
  ];
  return (
    <View>
      {pizzas.map((pizza) => (
        <PizzaCard key={pizza.name} pizza={pizza} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default PizzaSection;
