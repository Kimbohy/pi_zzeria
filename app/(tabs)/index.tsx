import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginPage() {
  return (
    <View style={styles.container}>
      {/* Image de fond */}
      <Image
        source={require('@/assets/fonts/back.png')} // Remplace par ton image de fond
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {/* Contenu de la page */}
      <View style={styles.content}>
        {/* Conteneur du logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/logo.png')} // Remplace par ton logo
            style={styles.logo}
          />
        </View>

        {/* Titre */}
        <Text style={styles.title}>Créer votre compte</Text>

        {/* Champs de formulaire */}
        <TextInput
          placeholder="Nom d'utilisateur"
          placeholderTextColor="#999"
          style={styles.input}
        />
        <TextInput
          placeholder="E-mail ou numéro"
          placeholderTextColor="#999"
          style={styles.input}
        />
        <TextInput
          placeholder="Adresse"
          placeholderTextColor="#999"
          style={styles.input}
        />
        <TextInput
          placeholder="Mot de passe"
          placeholderTextColor="#999"
          secureTextEntry
          style={styles.input}
        />

        {/* Bouton Enregistrer */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enregistrer</Text>
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
    paddingVertical: 50, // Ajuste l'espacement vertical
    backgroundColor: 'rgba(184, 74, 74, 0.5)', // Fond semi-transparent
    width: '90%',
    marginHorizontal: '5%', // Centre le contenu
    height: '80%',
    borderRadius: 20, // Coins arrond
  },
  logoContainer: {
    width: 150, // Largeur du cercle
    height: 150, // Hauteur du cercle
    borderRadius: 75, // Rend le conteneur circulaire
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fond blanc transparent
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15, // Espacement avec le titre
  },
  logo: {
    flex: 1, // Remplit le conteneur
    justifyContent: 'center',
    alignItems: 'center',
    width: 230, // Taille du logo
    height: 230, // Taille du logo
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
    borderBottomWidth: 1, // Ligne fine en bas
    borderBottomColor: '#fff',
    marginBottom: 20,
    fontSize: 16,
    color: '#fff',
  },
  button: {
    backgroundColor: 'red',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
