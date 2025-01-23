import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';

export default function LoginPage() {
  return (
    <View style={styles.container}>
      {/* Image de fond */}
      <Image
        source={require('@/assets/fonts/back.png')} // Image aléatoire
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {/* Contenu de la page */}
      <View style={styles.content}>
        
        {/* logo */}
        <Image
          source={require('@/assets/images/logo.png')} // Image aléatoire
          style={{ width: 150, height: 150, backgroundColor: 'rgba(255, 255, 255, 0.8)',borderRadius: 125 }}  
        />
        {/* Titre */}
        <Text style={styles.title}>Bienvenue à Pizza</Text>

        {/* Champ E-mail */}
        <TextInput
          placeholder="E-mail ou numéro"
          placeholderTextColor="#999"
          style={styles.input}
        />

        {/* Champ Mot de passe */}
        <TextInput
          placeholder="Mot de passe"
          placeholderTextColor="#999"
          secureTextEntry
          style={styles.input}
        />

        {/* Lien Mot de passe oublié */}
        <Text
          style={styles.forgotPassword}
          onPress={() => Linking.openURL('#')} // Lien à personnaliser
        >
          Mot de passe oublié ?
        </Text>

        {/* Bouton Continuer */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continuer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Remplit tout l'écran
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,

    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fonde semi-transparent
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  forgotPassword: {
    color: '#fff',
    marginBottom: 30,
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  button: {
    backgroundColor: 'red',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
