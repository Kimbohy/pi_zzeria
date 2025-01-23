import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Interface pour les éléments du panier
interface CartItemProps {
  imageUrl: any;
  name: string;
  size: 'CM' | 'PM' | 'GM';
  price: number;
  id: string; // Unique ID for each item
}

// interface for CartItem
interface CartItemComponentProps extends CartItemProps {
    updateQuantity: (itemId: string, newQuantity: number) => void;
}

const CartItem: React.FC<CartItemComponentProps> = ({ imageUrl, name, size, price, id, updateQuantity }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    updateQuantity(id, quantity + 1); // Update parent component
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      updateQuantity(id, quantity - 1); // Update parent component
    }
  };

  return (
    <View style={styles.cartItemContainer}>
      <View style={styles.cartItemImageContainer}>
        <Image source={imageUrl} style={styles.pizzaImage} />
        <View style={styles.quantityControls}>
          <TouchableOpacity onPress={decreaseQuantity}>
            <Text style={styles.sign}>-</Text>
          </TouchableOpacity>
          <Text>{quantity}</Text>
          <TouchableOpacity onPress={increaseQuantity}>
            <Text style={styles.sign}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.cartItemDetails}>
        <Text style={styles.pizzaName}>{name}</Text>
        <Text>{size}</Text>
        <Text style={styles.pizzaName}>{price} Ar</Text>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Acheter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ShoppingCartScreen = () => {
  const navigation = useNavigation();
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  // Unique ID for cart Items
  const generateUniqueId = () => {
    return Math.random().toString(36).substring(2, 15);
  };
  //Cart Items, generate a Unique ID for each one
  const [cartItems, setCartItems] = useState<CartItemProps[]>([
    { imageUrl: require('../../assets/external-assets/image_pizza.png'), name: 'Margherita', size: 'CM', price: 20000, id: generateUniqueId() },
    { imageUrl: require('../../assets/external-assets/image_pizza.png'), name: 'Pepperoni', size: 'PM', price: 15000, id: generateUniqueId() },
    { imageUrl: require('../../assets/external-assets/image_pizza.png'), name: 'Hawaiian', size: 'GM', price: 20000, id: generateUniqueId() },
    // Add more pizzas here
  ]);

  //Quantity array to keep track of all pizza quantities
  const [quantities, setQuantities] = useState<{[key: string]: number}>(cartItems.reduce((acc: {[key: string]: number}, item) => {
        acc[item.id] = 1;
        return acc;
    }, {}));

    //Handle changes in the quantity
  const updateQuantity = (itemId: string, newQuantity: number) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [itemId]: newQuantity
        }));
    };
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * quantities[item.id], 0);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.iconContainer}>
            <Image source={require('../../assets/external-assets/Vector 1.svg')} style={styles.headerIcon} />
          </View>
        </TouchableOpacity>
        <Text style={styles.title}>Panier</Text>
        <TouchableOpacity onPress={() => setSearchVisible(!searchVisible)}>
          <View style={styles.iconContainer}>
            <Image source={require('../../assets/external-assets/akar-icons_search.svg')} style={styles.headerIcon} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      {searchVisible && (
        <TextInput
          style={styles.searchBar}
          placeholder="Rechercher une pizza..."
          value={searchText}
          onChangeText={setSearchText}
        />
      )}

      {/* Body */}
      <ScrollView style={styles.body}>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            updateQuantity={updateQuantity}
          />
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <View>
            <Text style={styles.totalLabel}>Total</Text>
          </View>
          <Text style={styles.totalPrice}>
            {calculateTotalPrice()} AR
          </Text>
        </View>
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Commander</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcon: {
    width: 15,
    height: 15,
  },
  iconContainer: {
    backgroundColor: '#F9FBE7',
    borderRadius: 50, 
    padding: 8, 
    borderWidth: 1,  
    borderColor: 'lightgrey', 
  },
  searchBar: {
    padding: 8,
    margin: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  body: {
    flex: 1,
    padding: 16,
  },
  cartItemContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    borderRadius: 16,
    padding: 20,
  },
  cartItemImageContainer: {
    marginRight: 16,
    alignItems: 'center',
  },
  pizzaImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  sign: {
    fontSize: 20,
    fontWeight: '900',
    color: '#e52e2e',
  },
  cartItemDetails: {
    flex: 1,
  },
  pizzaName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: '#e52e2e',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 8,
  },
  buyButtonText: {
    color: '#fff',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalContainer: {
    flexDirection: 'column', // Change to column to stack the text
    justifyContent: 'space-between',
    alignItems: 'flex-start', // Align items to the start (left)
    marginBottom: 8,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  orderButton: {
    backgroundColor: '#e52e2e',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 18,
    // fontWeight: 'bold',
  },

});

export default ShoppingCartScreen;